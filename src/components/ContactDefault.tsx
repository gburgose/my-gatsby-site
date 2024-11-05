import * as React from "react";
import FormContact from "./FormContact";
import CardContact from "./CardContact";
import CardContent from "./CardContent";

const ContactDefault: React.FC = () => {
  const contactList = [
    { type: "Teléfono", value: "+123 456 7890" },
    { type: "Email", value: "contacto@ejemplo.com" },
    { type: "Dirección", value: "Calle Falsa 123, Ciudad, País" },
  ];

  return (
    <section className="contact contact--default">
      <div className="contact--default__container">
        <div className="contact--default__content">
          <h2 className="contact--default__content__title title title--h2">Let's Connect</h2>
          <div className="contact--default__content__description paragraph">
            FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.
          </div>
          <FormContact />
        </div>
        <div className="contact--default__sidebar">
          <CardContact
            title="Contacto"
            description="Puedes contactarnos a través de los siguientes medios:"
            contactList={contactList}
          />
          <CardContent
            title="Información Adicional"
            text="Aquí puedes agregar cualquier información adicional que desees compartir."
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDefault;