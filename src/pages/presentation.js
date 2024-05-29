import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
/* import { Link } from 'react-scroll' */

const PresentationPage = () => (
  <Layout>
    <SEO title="à propos" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Un peu plus sur moi</h1>
        </div>
      </div>
    </section>
    <section id="suite" className="hero is-fullheight">
      écrire du texte
    </section>
  </Layout>
)
export default PresentationPage;
