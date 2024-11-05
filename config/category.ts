import { GatsbyNode } from "gatsby";
import * as path from "path";

export const createCategory: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve(`src/templates/category.tsx`);

  const result = await graphql(`
    {
      allContentfulCategories {
        nodes {
          slug
          article {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const categories = result.data.allContentfulCategories.nodes;

  // Crear páginas individuales para cada categoría
  categories.forEach((category) => {
    const articlesPerPage = 10;
    const numPages = Math.ceil(category.article.length / articlesPerPage);

    console.log(`Creating ${numPages} pages for category ${category.slug}`);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/categories/${category.slug}/` : `/categories/${category.slug}/page/${i + 1}`,
        component: categoryTemplate,
        context: {
          slug: category.slug,
          limit: articlesPerPage,
          skip: i * articlesPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};