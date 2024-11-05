import * as React from "react";
import { Link } from "gatsby";

type MenuDefaultProps = {
  showHome?: boolean; // Hacemos que el prop sea opcional
};

const MenuDefault: React.FC<MenuDefaultProps> = ({ showHome = true }) => { // Valor por defecto de true
  return (
    <>
      {showHome && <Link to="/">Inicio</Link>}
      <Link to="/about">Acerca de</Link>
      <Link to="/articles">Artículos</Link>
      <Link to="/contact">Contacto</Link>
    </>
  );
};

export default MenuDefault;

