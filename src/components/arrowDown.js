import React from 'react'
import '../style/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ArrowDown = ({style}) => {
  return (
    <div className="arrow-container">
      <FontAwesomeIcon style={style} icon={faChevronDown} className="arrow-icon" />
    </div>
  );
};

export default ArrowDown