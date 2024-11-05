import * as React from "react";

type CardContentProps = {
  title: string;
  text: string;
};

const CardContent: React.FC<CardContentProps> = ({ title, text }) => {
  return (
    <div className="card card--content">
      <h3 className="card--content__title title title--h3">{title}</h3>
      <p className="card--content__text paragraph">{text}</p>
    </div>
  );
};

export default CardContent;