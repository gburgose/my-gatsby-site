import { GatsbyNode } from "gatsby";
import * as path from "path";

export const createArticle: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`src/templates/article.tsx`);

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
};