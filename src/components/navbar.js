import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import '../style/style.scss'

const Navbar = ({ toggleNavbar, isActive }) => {
	const data = useStaticQuery(graphql`
    query NavbarQuery {
			headerImage: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 112, height: 112) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
		}
	`)
	return (
		<div style={{ borderBottom: '2px solid black' }}>
		<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
		<Link to="/">
			<Img style={{ height: 64, width: 64, marginLeft:32, marginRight:32 }} fixed={data.headerImage.childImageSharp.fixed} />
		</Link>
		<a role="button" className={`navbar-burger burger link-button ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarTop" onClick={toggleNavbar}>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
		</a>
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
		<div className="navbar-item">
		<i className="fa-brands fa-facebook-f"></i>
		<a className="button is-light">
		Log in
		</a>
		</div>
		</div>
		</div>
		
		</nav>
		</div>
		
	)
}

export default Navbar
