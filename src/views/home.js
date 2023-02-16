import React from "react";

import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
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
                    <span>Quick development cycles </span>
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
              <span>Latest </span>
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
                    services to help businesses grow.  From complex enterprise
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
        <div id="contact-us" className="home-section-six section-container">
          <div className="home-max-width6 max-content-container">
            <div className="home-content-container5">
              <h1 className="home-text29 Heading2">Contact Us.</h1>
              <span className="home-text30">
                Say hello and let&apos;s explore the possibilities together
              </span>
              <div className="home-input-container">
                <div className="home-container1 input">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon06"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Name"
                    className="home-input input"
                  />
                </div>
                <div className="home-container2 input">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon08"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="home-textinput input"
                  />
                </div>
                <div className="home-container3 input">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon10"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Leave us a message"
                    className="home-input1 input"
                  />
                </div>
                <button className="home-button button-primary button">
                  Get started
                </button>
              </div>
              <div className="home-features-container1">
                <div className="home-feature3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text31">
                    Easiest way to read news and RSS Feeds.
                  </span>
                </div>
                <div className="home-feature4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text32">
                    Works with all mail providers, including Google and Yahoo.
                  </span>
                </div>
                <div className="home-feature5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text33">
                    Over 2000, highly recommended customer reviews.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Home;
