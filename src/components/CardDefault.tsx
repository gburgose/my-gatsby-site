import * as React from "react";
import { Link } from "gatsby";

type CardDefaultProps = {
  article: {
    title: string;
    slug: string;
    content?: { raw: string };
    categories: { title: string; color: string; slug: string }[];
  };
};

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
          <Link
            key={category.slug}
            to={`/categories/${category.slug}`}
            className="card--default__category card--default__category-link"
            style={{ backgroundColor: hexToRgba(category.color, 0.2) }}
          >
            {category.title}
          </Link>
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