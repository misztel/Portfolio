import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Project1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "project1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Project1;
