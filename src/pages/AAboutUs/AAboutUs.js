import React from "react";
import ANavbar from "../../components/ANavbar/ANavbar.js";
import AFooter from "../../components/AFooter/AFooter.js";
import Img1 from "../../Photos/categories-1.png";
import Img2 from "../../Photos/categories-2.png";
import Img3 from "../../Photos/categories-3.png";
import "./AAboutUs.css";

import Carousel from "react-bootstrap/Carousel";

const AAboutUs = () => {
  return (
    <div>
      <ANavbar />
      <div className="carousel-container">
        <Carousel slide={false}>
          <Carousel.Item interval={3000}>
            <img src={Img1} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h3>ABOUT SPACE-LOOM</h3>
              <p>
                Spaceloom is more than just an online platform; it is a
                meticulously curated space where inspiration meets innovation.
                <br />
                As a collective of distinguished interior design companies,
                <br />
                we have set out to redefine the essence of contemporary living.
                <br />
                We believe that every space has a story to tell, and through our
                collaborative approach,
                <br />
                we aim to weave narratives that reflect the unique identities
                and aspirations of our clients.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={Img2} alt="Second slide" />
            <Carousel.Caption className="carousel-caption">
              <h3>OUR MISSION</h3>
              <p>
                At Spaceloom, our mission is to revolutionize the way
                individuals perceive interior design. By connecting users with a
                handpicked selection of top-tier interior design firms,
                <br />
                we strive to facilitate a seamless and personalized experience,
                transforming living spaces into unparalleled expressions of
                artistry and functionality.
                <br />
                We are dedicated to fostering a community where creativity
                thrives and where every design endeavor is met with the utmost
                dedication and expertise.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={Img3} alt="Third slide" />
            <Carousel.Caption className="carousel-caption">
              <h3>OUR VISION</h3>
              <p>
                Our vision is to become the definitive online destination for
                those seeking the pinnacle of interior design excellence.
                <br /> Through our commitment to fostering meaningful
                collaborations between clients and industry-leading design firms,
                we envision a future where the boundaries of creativity are
                constantly being redefined.
                <br /> By championing innovation, inclusivity, and
                sustainability, we aspire to leave an indelible mark on the
                landscape of interior design,
                <br /> inspiring individuals to re-imagine their living spaces
                and create environments that resonate with their lifestyles and
                values.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <AFooter />
    </div>
  );
};

export default AAboutUs;
