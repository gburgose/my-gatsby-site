import * as React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import DefaultLayout from "../layouts/default";
import ArchiveDefault from "../components/ArchiveDefault";
import NewsletterDefault from "../components/NewsletterDefault";

const HomePage: React.FC<PageProps<{ allContentfulArticle: { nodes: { title: string; slug: string; createdAt: string; content: { raw: string }; categories: { title: string; description: { raw: string }; image: { file: { url: string }; localFile: { childImageSharp: any } } }[] }[] } }>> = ({ data }) => {
  const articles = data.allContentfulArticle.nodes;
  const categories = articles.flatMap(article => article.categories);

  return (
    <DefaultLayout>
      <ArchiveDefault articles={articles} categories={categories} currentPage={1} numPages={1} />
      <NewsletterDefault />
    </DefaultLayout>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allContentfulArticle {
      nodes {
        title
        slug
        createdAt
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
            file {
              url
            }
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