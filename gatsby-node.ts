import { graphql } from "gatsby";
import * as path from "path";

export const createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`src/templates/article.tsx`);
  const articlesTemplate = path.resolve(`src/templates/articles.tsx`);

  const result = await graphql(`
    {
      allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `);

  const articles = result.data.allContentfulArticle.nodes;

  // Crear páginas individuales para cada artículo
  articles.forEach((node: { slug: string }) => {
    createPage({
      path: `/articles/${node.slug}/`,
      component: articleTemplate,
      context: {
        slug: node.slug,
      },
    });
  });

  // Lógica de paginación para las páginas de artículos
  const articlesPerPage = 10;
  const numPages = Math.ceil(articles.length / articlesPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/page/${i + 1}`,
      component: articlesTemplate,
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};