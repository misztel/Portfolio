import React from "react";

import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/Hero/AboutMe";
import Stats from "../components/Hero/Stats";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutMe />
    <Stats />
  </Layout>
);

export default IndexPage;