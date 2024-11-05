import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CardCategory from "./CardCategory";

type ArticleDefaultProps = {
  title: string;
  content: { raw: string };
  categories: {
    title: string;
    description: { raw: string };
    image: { file: { url: string }; localFile: { childImageSharp: any } };
  }[];
};

const ArticleDefault: React.FC<ArticleDefaultProps> = ({ title, content, categories }) => {
  return (
    <section className="article article--default">
      <div className="article--default__container">
        <div className="article--default__content">
          <div className="article--default__text paragraph">{documentToReactComponents(JSON.parse(content.raw))}</div>
          {categories && categories.length > 0 && (
            <div className="article--default__categories">
              {categories.map((category) => (
                <CardCategory key={category.title} category={category} />
              ))}
            </div>
          )}
        </div>
        <div className="article--default__sidebar">

        </div>
      </div>
    </section>
  );
};

export default ArticleDefault;