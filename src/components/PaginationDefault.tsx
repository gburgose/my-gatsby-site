import * as React from "react";
import { Link } from "gatsby";

type PaginationDefaultProps = {
  currentPage: number;
  numPages: number;
};

const PaginationDefault: React.FC<PaginationDefaultProps> = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <div>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Página Anterior
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={i === 0 ? `/` : `/page/${i + 1}`}
          style={{
            padding: "0.5rem",
            textDecoration: currentPage === i + 1 ? "underline" : "none",
          }}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Página Siguiente →
        </Link>
      )}
    </div>
  );
};

export default PaginationDefault;