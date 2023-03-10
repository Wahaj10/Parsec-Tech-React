import React from "react";

import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import ContactUs from "../components/ContactUs";
import FeatureCard from "../components/feature-card";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import "./home.css";

import mainImageSrc from "../playground_assets/mobileapp2-400h.png";
import icon1Src from "../playground_assets/icon1.jpeg";
import icon2Src from "../playground_assets/icon2.png";
import icon3Src from "../playground_assets/icon3.png";
import laptopImage from "../playground_assets/laptop-1200w.jpeg";
import phoneImage from "../playground_assets/phone-1200w.jpeg";
import laptop2Image from "../playground_assets/laptop2-1200w.jpeg";
import securityImage from "../playground_assets/security-1200w.jpeg";

const Home = (props) => {
  function submitForm() {
    document.getElementById("contact-form-submit").onclick = () => {
      document.getElementById("form-keep").clear();
    };
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>Parsec Tech</title>
        <meta property="og:title" content="Parsec Tech" />
      </Helmet>
      <Navbar></Navbar>
      <main className="home-main">
        <div className="section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">Creating better IT Solutions</h1>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text01">
                    <span>Quick development cycles??</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Quality software with reliable support
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text05">
                    <span>Custom solutions for your exact needs</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img alt="image" src={mainImageSrc} className="home-image" />
            </div>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text08 Heading2">
              <span>Latest??</span>
              <span className="home-text10">software and solutions</span>
              <span> and</span>
              <br></br>
              <span>our clients</span>
            </h2>
            <div className="home-cards-container">
              <FeatureCard
                text="Delivering custom-built solutions that streamline and enhance your business operations"
                text1="See how &gt;"
                heading="Solutions you will love"
                image_src={icon1Src}
              ></FeatureCard>
              <FeatureCard
                text="Latest designs to ensure your website stands out and reaches your audience"
                text1="Learn more &gt;"
                heading="Websites / Apps"
                image_src={icon2Src}
              ></FeatureCard>
              <FeatureCard
                text="Ensuring the protection of your data with our comprehensive security services."
                heading="Security Testing"
                image_src={icon3Src}
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div id="services">
          <div className="section-container">
            <div className="home-max-width2 max-content-container">
              <div className="home-image-container1">
                <img alt="image" src={laptopImage} className="home-image1" />
              </div>
              <div className="home-content-container1">
                <h1 className="home-text14">Website Design and Development</h1>
                <span className="home-text15">
                  <span className="home-text16">W</span>
                  <span>
                    e understand that a well-designed website is crucial to the
                    success of any business in today&apos;s digital age.
                    That&apos;s why we offer exceptional web design and
                    development services to help our clients establish a strong
                    online presence. Our team of experienced designers and
                    developers work closely with each client to create a unique
                    website that accurately represents their brand and
                    effectively communicates their message to their target
                    audience. Our web design and development services are fully
                    customizable to meet the specific needs and goals of each
                    client, ensuring a seamless user experience and maximum
                    results. Partner with Parsec for a cutting-edge web presence
                    that drives success.
                  </span>
                  <br className="home-text18"></br>
                </span>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="home-max-width3 max-content-container">
              <div className="home-content-container2">
                <h1 className="home-text19 Heading2">
                  App Design and Development
                </h1>
                <span className="home-text20">
                  We take pride in building high-performance, user-friendly
                  mobile and web applications that meet the needs of your
                  business. Our app development services are designed to provide
                  a seamless user experience and drive success. Our team of
                  experienced app developers work closely with each client to
                  understand their specific requirements and create custom
                  solutions that deliver results. From concept to deployment,
                  Parsec provides a full-service app development experience,
                  ensuring a smooth and successful launch. Whether you&apos;re
                  looking to enhance your existing business or launch a new
                  venture, our app development services will give you a
                  competitive edge in today&apos;s rapidly evolving digital
                  landscape.
                </span>
              </div>
              <div className="home-image-container2">
                <img alt="image" src={phoneImage} className="home-image2" />
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="home-max-width4 max-content-container">
              <div className="home-image-container3">
                <img alt="image" src={laptop2Image} className="home-image3" />
              </div>
              <div className="home-content-container3">
                <h1 className="home-text21">Custom Solutions</h1>
                <span className="home-text22">
                  <span>
                    We offer a full range of custom software development
                    services to help businesses grow.?? From complex enterprise
                    systems to small business applications, we have the
                    expertise to deliver reliable and effective software
                    solutions that drive success. With a focus on innovation and
                    collaboration, we ensure that each project is completed
                    on-time and on-budget. Trust Parsec to bring your software
                    ideas to life and give your business the competitive edge it
                    needs to thrive.
                  </span>
                  <br className="home-text24"></br>
                </span>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="home-max-width5 max-content-container">
              <div className="home-content-container4">
                <h1 className="home-text25 Heading2">Security Management</h1>
                <span className="home-text26">
                  <span>
                    We understand the importance of protecting your software and
                    data from potential threats. That&apos;s why we offer
                    comprehensive software security services to ensure the
                    safety of your critical information. Our team of security
                    experts work closely with each client to identify potential
                    vulnerabilities and implement the best solutions to secure
                    your software. From penetration testing to security
                    auditing, we provide a full range of services to help you
                    maintain the highest level of security for your business.
                    Trust Parsec to safeguard your software and give you peace
                    of mind in today&apos;s increasingly digital world.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-image-container4">
                <img alt="image" src={securityImage} className="home-image4" />
              </div>
            </div>
          </div>
        </div>
        <ContactUs />
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Home;
