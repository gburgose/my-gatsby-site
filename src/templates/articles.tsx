import * as React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import DefaultLayout from "../layouts/default";
import ArchiveDefault from "../components/ArchiveDefault";
import NewsletterDefault from "../components/NewsletterDefault";

const HomeTemplate: React.FC<PageProps<{ allContentfulArticle: { nodes: { title: string; slug: string; createdAt: string; content: { raw: string }; categories: { title: string; description: { raw: string }; image: { file: { url: string }; localFile: { childImageSharp: any } } }[] }[] } }>> = ({ data, pageContext }) => {
  const articles = data.allContentfulArticle.nodes;
  const categories = articles.flatMap(article => article.categories);
  const { currentPage, numPages } = pageContext;

  return (
    <DefaultLayout>
      <ArchiveDefault articles={articles} categories={categories} currentPage={currentPage} numPages={numPages} />
      <NewsletterDefault />
    </DefaultLayout>
  );
};

export default HomeTemplate;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulArticle(skip: $skip, limit: $limit) {
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