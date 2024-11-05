import * as React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import DefaultLayout from "../layouts/default";
import HeroArchive from "../components/HeroArchive";
import ArchiveDefault from "../components/ArchiveDefault";

const CategoryPage: React.FC = ({ data, pageContext }) => {
  console.log(data); // Verifica los datos de la categoría y los artículos

  if (!data.allContentfulCategories || !data.allContentfulCategories.nodes.length) {
    return <DefaultLayout>Error: No category data found</DefaultLayout>;
  }

  const category = data.allContentfulCategories.nodes[0];
  const articles = data.allContentfulArticle.nodes;
  const description = documentToReactComponents(JSON.parse(category.description.raw));
  const { currentPage, numPages } = pageContext;

  return (
    <DefaultLayout>
      <HeroArchive title={category.title} text={description} color={category.color} />
      <ArchiveDefault articles={articles} currentPage={currentPage} numPages={numPages} />
    </DefaultLayout>
  );
};

export default CategoryPage;

export const query = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    allContentfulCategories(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
        color
        description {
          raw
        }
      }
    }

    allContentfulArticle(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        slug
        content {
          raw
        }
        categories {
          title
          color
          slug
          description {
            raw
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 100, height: 100)
              }
            }
          }
        }
      }
    }
  }
`;