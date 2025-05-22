import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import { useTranslation } from "react-i18next";
import Banner from "./Components/Banner";
import SupportSection from "./Components/support";

const Home = () => {
   const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner />
        <SupportSection />
        {/* <FeaturedProducts /> */}
      </Container>
    </>
  );
};

export default Home;
