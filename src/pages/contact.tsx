import * as React from "react";
import DefaultLayout from "../layouts/default";
import ContactDefault from "../components/ContactDefault";

const ContactPage: React.FC = () => {
  return (
    <DefaultLayout>
      <ContactDefault />
    </DefaultLayout>
  );
};

export default ContactPage;