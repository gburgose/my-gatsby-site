import * as React from "react";
import DefaultLayout from "../layouts/default";
import FakeDefault from "../components/FakeDefault";

const AboutPage: React.FC = () => {
  return (
    <DefaultLayout>
      <FakeDefault />
    </DefaultLayout>
  );
};

export default AboutPage;