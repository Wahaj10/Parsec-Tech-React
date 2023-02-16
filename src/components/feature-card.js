import React from "react";

import "./feature-card.css";

const FeatureCard = (props) => {
  return (
    <div className="feature-card-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <h4 className="feature-card-text Heading4">{props.heading}</h4>
      <span className="feature-card-text1 Content-Light">{props.text}</span>
      <span className="feature-card-text2">{props.text1}</span>
    </div>
  );
};

FeatureCard.defaultProps = {
  text1: "Get started >",
  text: "Creative & Innovative tools that improve the way you do business",
  heading: "Idea to Production",
  image_alt: "image",
  image_src: "https://play.teleporthq.io/static/svg/default-img.svg",
};

export default FeatureCard;
