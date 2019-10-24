import React from "react";

import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/Hero/About";
import Stats from "../components/Hero/Stats";
import Work from '../components/Hero/Work';



const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
    <AboutMe />
    <Stats />
    <Work />
  </>
);

export default IndexPage;