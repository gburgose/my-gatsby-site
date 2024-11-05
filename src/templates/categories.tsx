import * as React from "react";
import { graphql } from "gatsby";
import DefaultLayout from "../layouts/default";
import ArchiveCategory from "../components/ArchiveCategory";
import HeroArchive from "../components/HeroArchive";

const CategoriesPage: React.FC = ({ data }) => {
  const categories = data.allContentfulCategories.nodes;

  return (
    <DefaultLayout>
      <HeroArchive title="Categorías" text="Explora nuestras categorías para encontrar artículos interesantes y relevantes." />
      <ArchiveCategory categories={categories} />
    </DefaultLayout>
  );
};

export default CategoriesPage;

export const query = graphql`
  query {
    allContentfulCategories {
      nodes {
        title
        slug
        description {
          raw
        }
        image {
          file {
            url
          }
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;