import * as React from "react";
import CardDefault from "./CardDefault";
import PaginationDefault from "./PaginationDefault";

type ArchiveDefaultProps = {
  articles: { title: string; slug: string; content: { raw: string }; categories: { title: string }[]; color: string }[];
  currentPage: number;
  numPages: number;
};

const ArchiveDefault: React.FC<ArchiveDefaultProps> = ({ articles, currentPage, numPages }) => {
  return (
    <section className="archive archive--default">
      <div className="archive--default__container">
        <div className="archive--default__cards">
          {articles.map((article) => (
            <CardDefault key={article.slug} article={article} />
          ))}
        </div>
        {numPages > 1 && (
          <div className="archive--default__pagination">
            <PaginationDefault currentPage={currentPage} numPages={numPages} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ArchiveDefault;