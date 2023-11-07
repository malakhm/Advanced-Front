import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"
import "./About.css";
import Arrowup from "../../Photos/Arrowup.png";
import Header from "../../components/header/Header";
import imageHeader from "../../Photos/header-1.png";
import emailjs from '@emailjs/browser';
const AboutPage = () => {

  const location = useLocation()

  const executeScroll = () => {
    const element = document.getElementById('Contact');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [showContactUs, setShowContactUs] = useState(true);

  const handleContactFormToggle = () => {
    if (!showContactUs) {
      setShowContactUs(true);
    }
  };

  const handleFeedbackFormToggle = () => {
    if (showContactUs) {
      setShowContactUs(false);
    }
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        executeScroll();
      }, 0);
    }
  }, [location.hash]);

  const form = useRef();

  const [isMessageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pd98twe', 'template_utnvs9n', form.current, 'PuCdCBN6lOG2qgfMX')
      .then((result) => {
        console.log(result.text);
        console.log("success");
      }, (error) => {
        console.log(error.text);
      }); setMessageSent(true);
    setFormData({
      from_name: "",
      from_email: "",
      phone: "",
      message: "",
    });
  }

  return (
    <>
      <Header imageSrc={imageHeader} />
      <div className="AboutUsPage">
        <div className="Header"></div>
        <div className="AboutSec">
          <h1 className="H1">ABOUT SPACE-LOOM</h1>
          <div className="AboutImgSec Our-spac">
            <p className="Text">
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
              transforming living spaces into unparalleled expressions of
              artistry and functionality.
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
              Our vision is to become the definitive online destination for
              those seeking the pinnacle of interior design excellence.
              <br /> Through our commitment to fostering meaningful
              collaborations between clients and industry-leading design firms,
              we envision a future where the boundaries of creativity are
              constantly being redefined.
              <br /> By championing innovation, inclusivity, and sustainability,
              we aspire to leave an indelible mark on the landscape of interior
              design,
              <br /> inspiring individuals to re-imagine their living spaces and
              create environments that resonate with their lifestyles and
              values.
            </p>
          </div>
        </div>
        <div className="AboutSec">
          {showContactUs ? (
            <div id="Contact" className="contact-box">
              <div className="left"></div>
              <div className="right">
                <form ref={form} onSubmit={sendEmail}>
                  <button onClick={handleContactFormToggle} className="SwitchForm">
                    Contact Us
                  </button>
                  <button onClick={handleFeedbackFormToggle} className="SwitchForm">
                    Feedback
                  </button>
                  <input value={formData.from_name} onChange={handleInputChange} type="text" name="from_name" className="field" placeholder="Your Name" />
                  <input value={formData.from_email} onChange={handleInputChange} type="text" name="from_email" className="field" placeholder="Your Email" />
                  <input value={formData.phone} onChange={handleInputChange} name="Phone" type="text" className="field" placeholder="Phone" />
                  <textarea value={formData.message} onChange={handleInputChange} name="message" placeholder="Message" className="field"></textarea>
                  <button type="submit" className="btn">SEND</button>
                </form>
                {isMessageSent && <p>Message sent successfully!</p>}
              </div>
            </div>
          ) : (
            <div id="Contact" className="contact-box">
              <div className="left"></div>
              <div className="right">
                <button onClick={handleContactFormToggle} className="SwitchForm">
                  Contact Us
                </button>
                <button onClick={handleFeedbackFormToggle} className="SwitchForm">
                  Feedback
                </button>
                <input type="text" className="field" placeholder="Your Name" />
                <textarea placeholder="Message" className="field2"></textarea>
                <button className="btn">SEND</button>
              </div>
            </div>
          )}
        </div>
        <div id="arrowContainer" onClick={scrollToTop}>
          <img src={Arrowup} className="Arrowup" alt="Scroll to top" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
