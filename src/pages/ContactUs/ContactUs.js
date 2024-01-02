import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../../components/Navbar/Navbar.js"
const EmailForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isMessageSent, setMessageSent] = useState(false);

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
      .send("service_spaceloom312024", "template_sp2fvvv", formData, "zlC1TeyRq0BY2dzYp")
      .then((response) => {
        console.log("Email sent successfully:", response);
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
        <Navbar/>
      <h2>Contact Form</h2>
      <form onSubmit={sendEmail}>
        <label>
          Name:
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Send Email</button>
      </form>
      {isMessageSent && <p>Email sent successfully!</p>}
    </div>
  );
};

export default EmailForm;
