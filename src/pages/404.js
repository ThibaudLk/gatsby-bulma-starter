import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const NotFoundPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="404: Not found" />
        <h1 className="title is-1" style={{ textAlign: "center" }}> Erreur 404 · Page introuvable ...</h1>
        {data.image && (
          <Img style={{ margin: "14px auto", display: "block" }} fixed={data.image.childImageSharp.fixed} />
        )}
        <p style={{ textAlign: "center" }}>J'ai cherché partout mais je n'ai pas trouvé la page que vous cherchez ! <br/>
        </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    image: file(relativePath: {eq: "404.jpg"}) {
      childImageSharp {
        fixed(width: 450) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default NotFoundPage
