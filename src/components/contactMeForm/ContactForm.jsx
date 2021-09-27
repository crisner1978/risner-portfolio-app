import { motion } from "framer-motion";
import React, { useState } from "react";
import BigButton from "../button/ButtonBig";
import { FormWrapper, ButtonWrapper } from "./ContactFormElements";
import emailjs from "emailjs-com";

//for framer motion slide onto page
const formVar = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const magic = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_s671csh",
        "template_763qvnh",
        e.target,
        "user_hiyPOmrHsgoMbn3zDDDhV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <FormWrapper onSubmit={sendEmail}>
      <motion.div
        variants={formVar}
        initial="hidden"
        animate="visible"
        className="form-group">
        <div className="form-group">
          <motion.label variants={magic}>
            Name
          </motion.label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <motion.label variants={magic}>
            Email
          </motion.label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <motion.label variants={magic}>
            Phone
          </motion.label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            placeholder="Your Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <motion.label variants={magic} className="text-box">
            Message
          </motion.label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </motion.div>
      <ButtonWrapper>
        <BigButton type="submit" value="Send" name="Send" primary />
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default ContactForm;
