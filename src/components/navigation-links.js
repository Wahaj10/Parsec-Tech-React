import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navbar-link">{props.text}</span>
      <span className="navigation-links-text1 navbar-link">{props.text2}</span>
      <span className="navigation-links-text2 navbar-link">{props.text21}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Services',
  rootClassName: '',
  text: 'Home',
  text21: 'Contact Us',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text21: PropTypes.string,
}

export default NavigationLinks
