import React from "react";
import '../styles/Contact.css'
import logo from '../assests/logo.png'

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{backgroundImage: `url(${logo})`}}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <lable htmlFor="name">Full Name</lable>
          <input name="name" type="text" placeholder="Enter Your Name" />
          <lable htmlFor="email">Email</lable>
          <input name="name" type="email" placeholder="Enter email address" />
          <lable htmlFor="message"> Message</lable>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="7"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
