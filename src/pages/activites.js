import React from 'react';

import Layout from '../components/layout'
import SEO from "../components/seo"
/* import { Link } from 'react-scroll' */

const ActivitesPage = () => (
  <Layout>
    <SEO title="Mes activités" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Mes activités</h1>
        </div>
      </div>
    </section>
    <section id="suite" className="hero is-fullheight">
      Présentation des activités
    </section>
  </Layout>
)
export default ActivitesPage;
