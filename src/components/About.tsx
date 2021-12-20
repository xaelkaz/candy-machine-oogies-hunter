import React from "react";
import MobileAppPortfolio from "./portfolio/MobileAppPortfolio";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper">
          <div className="client-info font-rubik">
              <div className="app-screen-preview-one">
                  <div className="container">
                      <div className="app-preview-slider-one">
                          <MobileAppPortfolio />
                      </div>
                  </div>
                  {/* End .container */}

                  <img
                      src="images/shape/bg5.svg"
                      alt="shape"
                      className="shapes round-bg"
                  />
                  <img
                      src="images/shape/216.svg"
                      alt="shape"
                      className="shapes shape-one"
                  />
                  <img
                      src="images/shape/217.svg"
                      alt="shape"
                      className="shapes shape-two"
                  />
                  <img
                      src="images/shape/218.svg"
                      alt="shape"
                      className="shapes shape-three"
                  />
                  <img
                      src="images/shape/219.svg"
                      alt="shape"
                      className="shapes shape-four"
                  />
              </div>
          </div>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
