import * as React from "react";
import CardDefault from "./CardDefault";

type FeaturedDefaultProps = {
  articles: { title: string; slug: string; content: { raw: string }; categories: { title: string; color: string }[]; color: string }[];
};

const FeaturedDefault: React.FC<FeaturedDefaultProps> = ({ articles }) => {
  return (
    <section className="featured featured--default">
      <div className="featured--default__container">
        <div className="featured--default__cards">
          {articles.map((article) => (
            <CardDefault key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDefault;