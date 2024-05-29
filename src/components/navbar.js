import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../style/style.scss'

const Navbar = ({ toggleNavbar, isActive }) => {
    return (
        <div style={{ borderBottom: '2px solid black' }}>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/">
                        <StaticImage src="../images/logo.png" alt="A kitten" width={64} height={64} style={{ marginLeft:32, marginRight:32 }}/>
                    </Link>
                    <button className={`navbar-burger burger link-button ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarTop" onClick={toggleNavbar}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarTop" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link to="/presentation/" className="navbar-item">
                            Un peu plus sur moi
                        </Link>
                        <Link to="/activites/" className="navbar-item">
                            Mes activités
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <a href="https://www.facebook.fr" target="_blank" rel="noreferrer" className="navbar-item">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.instagram.fr" target="_blank" rel="noreferrer" className="navbar-item">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </nav>
        </div>	
    )
}

export default Navbar
