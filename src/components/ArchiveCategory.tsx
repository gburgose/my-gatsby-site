import * as React from "react";
import CardCategory from "./CardCategory";

type ArchiveCategoryProps = {
  categories: {
    title: string;
    description: { raw: string };
    image: { file: { url: string }; localFile: { childImageSharp: any } };
    slug: string;
  }[];
};

const ArchiveCategory: React.FC<ArchiveCategoryProps> = ({ categories }) => {
  return (
    <section className="archive archive--category">
      <div className="archive--category__container">
        <div className="archive--category__cards">
          {categories.map((category) => (
            <CardCategory key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchiveCategory;