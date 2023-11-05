import React from "react";
import "./About.css";
import Arrowup from "../../Photos/Arrowup.png";

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="AboutUsPage">
      <div className="Header"></div>
      <div className="AboutSec">
        <h1 className="H1">ABOUT SPACE-LOOM</h1>
        <div className="AboutImgSec Our-spac">
          <p className="Text">
            Spaceloom is more than just an online platform; it is a meticulously
            curated space where inspiration meets innovation.
            <br />
            As a collective of distinguished interior design companies,
            <br />
            we have set out to redefine the essence of contemporary living.
            <br />
            We believe that every space has a story to tell, and through our
            collaborative approach,
            <br />
            we aim to weave narratives that reflect the unique identities and
            aspirations of our clients.
          </p>
        </div>
      </div>
      <div className="AboutSec">
        <h1 className="H1">OUR MISSION </h1>
        <div className="AboutImgSec Our-miss">
          <p className="Text">
            {" "}
            At Spaceloom, our mission is to revolutionize the way individuals
            perceive interior design. By connecting users with a handpicked
            selection of top-tier interior design firms,
            <br />
            we strive to facilitate a seamless and personalized experience,
            transforming living spaces into unparalleled expressions of artistry
            and functionality.
            <br />
            We are dedicated to fostering a community where creativity thrives
            and where every design endeavor is met with the utmost dedication
            and expertise.
          </p>
        </div>
      </div>
      <div className="AboutSec">
        <h1 className="H1">OUR VISION</h1>
        <div className="AboutImgSec Our-visi">
          <p className="Text">
            Our vision is to become the definitive online destination for those
            seeking the pinnacle of interior design excellence.
            <br /> Through our commitment to fostering meaningful collaborations
            between clients and industry-leading design firms, we envision a
            future where the boundaries of creativity are constantly being
            redefined.
            <br /> By championing innovation, inclusivity, and sustainability,
            we aspire to leave an indelible mark on the landscape of interior
            design,
            <br /> inspiring individuals to re-imagine their living spaces and
            create environments that resonate with their lifestyles and values.
          </p>
        </div>
      </div>
      <div id="arrowContainer" onClick={scrollToTop}>
        <img src={Arrowup} className="Arrowup" alt="Scroll to top" />
      </div>
    </div>
  );
};

export default AboutPage;
