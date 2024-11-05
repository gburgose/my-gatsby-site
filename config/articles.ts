import { GatsbyNode } from "gatsby";
import * as path from "path";

export const createArticles: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
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

  if (result.errors) {
    throw result.errors;
  }

  const articles = result.data.allContentfulArticle.nodes;

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