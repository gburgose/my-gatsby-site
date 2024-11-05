import * as React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.svg"; // Importa el logo como un componente React
import MenuDefault from "./MenuDefault"; // Importa MenuDefault
import MenuLegal from "./MenuLegal"; // Importa MenuLegal
import MenuSocial from "./MenuSocial"; // Importa MenuSocial

const FooterDefault: React.FC = () => {
  return (
    <footer className="footer footer--default">
      <div className="footer--default__container">
        <div className="footer--default__item">
          <Link className="footer--default__logo" to="/">
            <Logo /> {/* Logo aquí */}
          </Link>
          <p>© {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.</p>
        </div>
        <div className="footer--default__item">
          <div className="footer--default__item__title">Menú</div>
          <div className="footer--default__item__menu">
            <MenuDefault showHome={false} />
          </div>
        </div>
        <div className="footer--default__item">
          <div className="footer--default__item__title">Asuntos legales</div>
          <div className="footer--default__item__menu">
            <MenuLegal />
          </div>
        </div>
        <div className="footer--default__item">
          <div className="footer--default__item__title">Redes sociales</div>
          <div className="footer--default__item__menu">
            <MenuSocial />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDefault;