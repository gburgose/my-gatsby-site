import * as React from "react";

const NewsletterDefault: React.FC = () => {
  return (
    <section className="newsletter newsletter--default">
      <div className="newsletter--default__container">
        <h2 className="newsletter--default__title title title--h2">Suscríbete a nuestro boletín</h2>
        <div className="newsletter--default__text paragraph">We'll send you the best of our blog just once a month. We promise.</div>
        <form className="newsletter--default__form">
          <input
            type="email"
            className="newsletter--default__input"
            placeholder="Introduce tu correo electrónico"
          />
          <button type="submit" className="newsletter--default__button button button--submit">
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterDefault;