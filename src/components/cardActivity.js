import React from 'react';
import '../style/style.scss'
import RoundedButton from './roundedButton';

import { Link } from "gatsby"

const CardActivity = ({ title, imageUrl, content, link }) => {
  return (
    <div className={`card p-0`}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageUrl} alt="Card image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          {content}
        </div>
      </div>
      <footer className="card-footer" style={{ border: 'none' }}>
        <Link to={link} className="card-footer-item">
          <RoundedButton text="Découvrir" />
        </Link>
      </footer>
    </div>
  )
}

export default CardActivity
