import * as React from "react";
import { Link } from "gatsby";
import MenuDefault from "./MenuDefault";
import Logo from "../images/logo.svg"; // Importa el logo como un componente React

const HeaderDefault: React.FC = () => {
  return (
    <header className="header header--default">
      <div className="header--default__container">
        <div className="header--default__logo">
          <Link to="/">
            <Logo /> {/* Logo aquí */}
          </Link>
        </div>
        <div className="header--default__menu">
          <MenuDefault />
        </div>
      </div>
    </header>
  );
};

export default HeaderDefault;