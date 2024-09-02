import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"
import fleur from "../images/fleur1920.jpg"
import { Link } from 'react-scroll'

const IndexPage = () => (
   <Layout>
    <SEO title="index" />
    <section className="hero is-fullheight-with-navbar" style={{ backgroundImage: 'url(' + fleur + ')', backgroundSize: "cover" }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Mon nom</h1>
          <h2> petite citation stylée </h2>
        </div>
        <span className="cta-btn cta-btn--hero" style={{ position: "absolute", bottom: 0, left: "45%", marginBottom: 10 }}>
         <Link to="suite" smooth duration={1000}>
            Découvrir
         </Link>
         </span>
      </div>
    </section>
    <section id="suite" className="hero is-fullheight has-background-primary">
      YOYO
    </section>
  </Layout>
)
export default IndexPage;
