import React from 'react';

import Layout from '../components/layout';
import fleur from "../images/fleur1920.jpg"
import { Link } from 'react-scroll'

const ActivitesPage = () => (
  <Layout>
    <section className="hero is-primary is-fullheight" style={{ backgroundImage: 'url(' + fleur + ')', backgroundSize: "cover" }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Mes activités</h1>
          <span className="cta-btn cta-btn--hero">
            <Link to="suite" smooth duration={1000}>
              Découvrir
            </Link>
          </span>
        </div>
      </div>
    </section>
    <section id="suite" className="hero is-primary is-fullheight">
      Présentation des activités
    </section>
  </Layout>
)
export default ActivitesPage;
