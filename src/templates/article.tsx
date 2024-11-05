import * as React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import DefaultLayout from "../layouts/default";
import ArticleDefault from "../components/ArticleDefault";
import HeroArticle from "../components/HeroArticle";

type ArticleData = {
  contentfulArticle: {
    title: string;
    createdAt: string;
    content: { raw: string };
    categories: {
      title: string;
      description: { raw: string };
      image: { file: { url: string }; localFile: { childImageSharp: any } };
    }[];
  };
};

const ArticlePage: React.FC<PageProps<ArticleData>> = ({ data }) => {
  const { title, createdAt, content, categories } = data.contentfulArticle;

  return (
    <DefaultLayout>
      <HeroArticle
        title={title}
        date={createdAt}
        categories={categories.map(category => category.title)}
      />
      <ArticleDefault title={title} content={content} categories={categories} />
    </DefaultLayout>
  );
};

export default ArticlePage;

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      createdAt
      content {
        raw
      }
      categories {
        title
        slug
        color
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
`;