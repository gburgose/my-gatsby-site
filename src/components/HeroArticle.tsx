import * as React from "react";

type HeroArticleProps = {
  title: string;
  date: string;
  color?: string; // Hacemos que el color sea opcional
  categories: string[];
};

const HeroArticle: React.FC<HeroArticleProps> = ({ title, date, color = "#c6f6d5", categories }) => {
  return (
    <section className="hero hero--article" style={{ backgroundColor: color }}>
      <div className="hero--article__container">
        <h1 className="hero--article__title title title--h1">{title}</h1>
        <p className="hero--article__date">{date}</p>
        <div className="hero--article__categories">
          {categories.map((category, index) => (
            <span key={index} className="hero--article__category">
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroArticle;