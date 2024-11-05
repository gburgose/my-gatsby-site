import * as React from "react";
import "../styles/main.scss"; // Importa el archivo de estilos Sass
import HeaderDefault from "../components/HeaderDefault";
import FooterDefault from "../components/FooterDefault";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="layout layout--default">
      <HeaderDefault />
      <main>{children}</main>
      <FooterDefault />
    </div>
  );
};

export default DefaultLayout;