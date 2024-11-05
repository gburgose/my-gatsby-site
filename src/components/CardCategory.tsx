import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type CardCategoryProps = {
  category: {
    title: string;
    description: { raw: string };
    image: { file: { url: string }; localFile: { childImageSharp: any } };
    slug: string;
  };
};

const truncateText = (text: string, maxWords: number = 40) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "…";
  }
  return text;
};

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  const parsedDescription = JSON.parse(category.description.raw);
  const descriptionText = parsedDescription.content[0]?.content[0]?.value || "";
  const truncatedDescription = truncateText(descriptionText);

  return (
    <article className="card card--category" key={category.slug}>
      <div className="card--category__image">
        {category.image && category.image.localFile && category.image.localFile.childImageSharp && (
          <GatsbyImage
            image={getImage(category.image.localFile.childImageSharp.gatsbyImageData)}
            alt={category.title}
            className="card--category__image"
          />
        )}
      </div>
      <h3 className="card--category__title title title--h3">
        <Link to={`/categories/${category.slug}`} className="card--category__link">
          {category.title}
        </Link>
      </h3>
      <div className="card--category__description paragraph">
        {truncatedDescription}
      </div>
    </article>
  );
};

export default CardCategory;