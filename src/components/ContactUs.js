import React from "react";
import contactImage from "../playground_assets/about-us.png";

const ContactUs = (props) => {
  return (
    <div id="contact-us" className="home-section-six section-container">
      <div className="home-max-width6 max-content-container">
        <div className="content-container5">
          <h1 className="home-text29 Heading2">Contact Us.</h1>
          <span className="home-text30">
            Say hello and let&apos;s explore the possibilities together
          </span>
          <div id="contact-container">
            <form
              target="formFrame"
              id="form-keep"
              action="https://formkeep.com/f/db18c8899338"
              accept-charset="UTF-8"
              enctype="multipart/form-data"
              method="POST"
              onsubmit="submitForm()"
            >
              <input
                name="name"
                autocomplete="off"
                type="text"
                id="name-input"
                placeholder="Your name"
              />
              <input
                name="company"
                autocomplete="off"
                type="text"
                id="company-input"
                placeholder="Your company"
              />
              <input
                name="email"
                autocomplete="off"
                type="text"
                id="email-input"
                placeholder="Your email"
              />

              <input
                name="description"
                autocomplete="off"
                type="text"
                id="description-input"
                placeholder="Leave us a message"
              />
              <button
                id="contact-form-submit"
                className="home-button button-primary button"
              >
                Get started
              </button>
            </form>
            <iframe name="formFrame" id="form-frame" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
