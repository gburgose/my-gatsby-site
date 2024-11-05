import { GatsbyNode } from "gatsby";
import * as path from "path";

export const createCategories: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoriesTemplate = path.resolve(`src/templates/categories.tsx`);

  const result = await graphql(`
    {
      allContentfulCategories {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const categories = result.data.allContentfulCategories.nodes;

  // Lógica de paginación para las páginas de categorías
  const categoriesPerPage = 10;
  const numPages = Math.ceil(categories.length / categoriesPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/categories` : `/categories/page/${i + 1}`,
      component: categoriesTemplate,
      context: {
        limit: categoriesPerPage,
        skip: i * categoriesPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};