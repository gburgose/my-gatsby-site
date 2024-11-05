import * as React from "react";

type HeroArticleProps = {
  title: string;
  text: string;
  color?: string;
};

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const HeroArticle: React.FC<HeroArticleProps> = ({ title, text, color = "transparent" }) => {
  const backgroundColor = hexToRgba(color, 0.05);

  return (
    <section className="hero hero--archive" style={{ backgroundColor }}>
      <div className="hero--archive__container">
        <div className="hero--archive__content">
          <h1 className="hero--archive__title title title--h1">{title}</h1>
          <div className="hero--archive__text paragraph">{text}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroArticle;