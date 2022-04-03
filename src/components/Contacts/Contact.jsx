import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8g0fkql",
        "template_7kfenck",
        form.current,
        "2bZODEKSwjvfRokah"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>elinahulbert@gmail.com</h5>
            <a href="mailto:elinahulbert@gmail.com">Send email</a>
          </article>
          <article className="contact__option">
            <BsTelephone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+46722980499</h5>
          </article>
        </div>
        {/* End of contact oprions */}

        <form ref={form} onSubmit={sendEmail}>
          <input name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
