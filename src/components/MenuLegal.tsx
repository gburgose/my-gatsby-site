import * as React from "react";
import { Link } from "gatsby";

const MenuLegal: React.FC = () => {
  return (
    <>
      <Link to="/about">Acerca de</Link>
      <Link to="/articles">Artículos</Link>
      <Link to="/contact">Contacto</Link>
    </>
  );
};

export default MenuLegal;