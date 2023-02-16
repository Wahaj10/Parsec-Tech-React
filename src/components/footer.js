import React from "react";

import "./footer.css";
import logo from "../playground_assets/parsec-black-200h.png";

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer section-container ${props.rootClassName} `}
    >
      <div className="footer-max-width max-content-container">
        <div className="footer-container">
          <img alt="image" src={logo} className="footer-image" />
          <div className="footer-social-media">
            <span className="footer-text">Follow us</span>
            <div className="footer-container1">
              <a
                href="https://www.linkedin.com/company/parsec-tech-consulting"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <svg viewBox="0 0 1024 1024" className="footer-icon">
                  <path
                    d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"
                    className=""
                  ></path>
                  <path d="M64 384h192v576h-192v-576z" className=""></path>
                  <path
                    d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"
                    className=""
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  rootClassName: "",
};

export default Footer;
