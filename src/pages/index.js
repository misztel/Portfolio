import React from "react";

import SEO from "../components/seo";
import Layout from "../layouts/HeroLayout";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/Hero/About";
import Stats from "../components/Hero/Stats";
import Work from '../components/Hero/Work';
import Technologies from '../components/Hero/Technologies';
import Contact from '../components/Hero/Contact';
import Footer from '../components/Footer/Footer';



const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
    <AboutMe />
    <Stats />
    <Work />
    <Technologies />
    <Contact />
    <Footer />
  </>
);

export default IndexPage;