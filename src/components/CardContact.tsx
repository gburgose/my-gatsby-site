import * as React from "react";

type CardContactProps = {
  title: string;
  description: string;
  contactList: { type: string; value: string }[];
};

const CardContact: React.FC<CardContactProps> = ({ title, description, contactList }) => {
  return (
    <div className="card card--contact">
      <h3 className="card--contact__title title title--h3">{title}</h3>
      <p className="card--contact__description paragraph">{description}</p>
      <ul className="card--contact__list">
        {contactList.map((contact, index) => (
          <li key={index} className="card--contact__list-item">
            <strong>{contact.type}:</strong> {contact.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardContact;