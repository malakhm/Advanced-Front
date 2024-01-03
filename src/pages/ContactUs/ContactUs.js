import React, { useState } from "react";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import ANavbar from "../../components/ANavbar/ANavbar.js";
import AFooter from "../../components/AFooter/AFooter.js";
// import CouchImage from "../../Photos/royal-blue-couch-living-room.jpg";
import "./ContactUs.css";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isMessageSent, setMessageSent] = useState(false);
  let maxCharacters = 200;
  const charactersLeft = maxCharacters - formData.message.length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_spaceloom312024",
        "template_sp2fvvv",
        formData,
        "zlC1TeyRq0BY2dzYp"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Email sent successfully!");
        setMessageSent(true);
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <ANavbar />
      <h3 className="contactus-title">Send us a message now!</h3>
      <div className="contactus-container container">
        <div className="contact-box">
          <form className="contactus-form right" onSubmit={sendEmail}>
            <label>
              Name
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleInputChange}
                required
                className="field"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleInputChange}
                required
                className="field"
              />
            </label>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="field"
              />
            </label>

            <label className="message-contact">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                maxLength={maxCharacters}
                className="field"
              />
            </label>
            <span className="character-count">
              {charactersLeft} characters left
            </span>
            <button className="btn btn-blue" type="submit">
              Send Email
            </button>
          </form>
          {isMessageSent}
          <div className="image-container-contactus left">
            {/* <img src={CouchImage} alt="background-contactus" /> */}
          </div>
        </div>
      </div>

      <AFooter />
    </div>
  );
};

export default EmailForm;
