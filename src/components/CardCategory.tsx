import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type CardCategoryProps = {
  category: {
    title: string;
    description: { raw: string };
    image: { file: { url: string }; localFile: { childImageSharp: any } };
  };
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "…";
  }
  return text;
};

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  const parsedDescription = JSON.parse(category.description.raw);
  const descriptionText = parsedDescription.content[0]?.content[0]?.value || "";
  const truncatedDescription = truncateText(descriptionText, 100);

  return (
    <article className="card card--category" key={category.title}>
      <div className="card--category__image">
        {category.image && category.image.localFile && category.image.localFile.childImageSharp && (
          <GatsbyImage
            image={getImage(category.image.localFile.childImageSharp.gatsbyImageData)}
            alt={category.title}
            className="card--category__image"
          />
        )}
      </div>
      <h3 className="card--category__title title title--h3">{category.title}</h3>
      <div className="card--category__description paragraph">
        {truncatedDescription}
      </div>
    </article>
  );
};

export default CardCategory;