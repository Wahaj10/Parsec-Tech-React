import React from "react";

import PropTypes from "prop-types";

import "./navigation-links.css";

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a className="navbar-link" href="#">
        {props.text}
      </a>
      <a href="#services" className="navigation-links-text1 navbar-link">
        {props.text2}
      </a>
      <a href="#contact-us" className="navigation-links-text2 navbar-link">
        {props.tesxt3}
      </a>
    </nav>
  );
};

NavigationLinks.defaultProps = {
  text: "Home",
  text2: "Services",
  tesxt3: "Contact Us",
  rootClassName: "",
};

export default NavigationLinks;
