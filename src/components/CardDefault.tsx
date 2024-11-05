import * as React from "react";
import { Link } from "gatsby";

type CardDefaultProps = {
  article: {
    title: string;
    slug: string;
    content?: { raw: string };
    categories: { title: string; color: string }[];
  };
};

const CardDefault: React.FC<CardDefaultProps> = ({ article }) => {
  let excerpt = "No content available";

  if (article.content && article.content.raw) {
    try {
      const parsedContent = JSON.parse(article.content.raw);
      if (parsedContent.content && parsedContent.content[0] && parsedContent.content[0].content && parsedContent.content[0].content[0]) {
        excerpt = parsedContent.content[0].content[0].value.substring(0, 100) + "...";
      }
    } catch (error) {
      console.error("Error parsing content:", error);
    }
  }

  return (
    <article className="card card--default" key={article.slug}>
      <div className="card--default__categories">
        {article.categories.map((category) => (
          <span
            key={category.title}
            className="card--default__category"
            style={{ backgroundColor: category.color }}
          >
            {category.title}
          </span>
        ))}
      </div>
      <h3 className="card--default__title">
        <Link to={`/articles/${article.slug}`} className="card--default__title-link">
          {article.title}
        </Link>
      </h3>
      <div className="card--default__content paragraph">{excerpt}</div>
      <Link to={`/articles/${article.slug}`} className="card--default__link">
        Leer más
      </Link>
    </article>
  );
};

export default CardDefault;