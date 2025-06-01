import React, { useState } from "react";
import SignpostIcon from "@mui/icons-material/Signpost";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import picture from "/src/assets/my_photo.jpg";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const defaultFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = ({ ref }) => {
  const [formField, setFormField] = useState(defaultFields);
  const [successForm, setSuccessForm] = useState(null);
  const [errorForm, setErrorForm] = useState(null);

  const { name, email, subject, message } = formField;
  const isFormFilled =
    formField.name && formField.email && formField.subject && formField.message;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qlyvm4g",
        "template_6wp99n8",
        formField,
        "GHAcj-X_o2y5wFjlE"
      )
      .then(
        (result) => {
          setSuccessForm("Your message has been sent successully!");
          setFormField(defaultFields);
          setTimeout(() => setSuccessForm(null), 5000);
        },
        (error) => {
          setErrorForm("Failed to send message", error);
          setTimeout(() => setErrorForm(null), 5000);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const contacts = [
    {
      id: 1,
      icon: <SignpostIcon sx={{ color: "#ffbd39", fontSize: 40 }} />,
      title: "ADDRESS",
      paragraph: "Benin City, Edo State, Nigeria",
    },
    {
      id: 2,
      icon: <LocalPhoneIcon sx={{ color: "#ffbd39", fontSize: 40 }} />,
      title: "CONTACT NUMBER",
      paragraph: <a href="tel:+234 705 493 0908">+234 705 493 0908</a>,
    },
    {
      id: 3,
      icon: <EmailIcon sx={{ color: "#ffbd39", fontSize: 40 }} />,
      title: "EMAIL ADDRESS",
      paragraph: (
        <a href="mailto:paulakhere48@gmail.com?subject=Hiring%20Team&body=Hi%20Paul,">
          paulakhere48@gmail.com
        </a>
      ),
    },
    {
      id: 4,
      icon: <InstagramIcon sx={{ color: "#ffbd39", fontSize: 40 }} />,
      title: "INSTAGRAM",
      paragraph: (
        <Link to="https://www.instagram.com/odiase.paul?igsh=ZGUzMzM3NWJiOQ==">
          Odiase Paul
        </Link>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="lg:mb-40 mb-20 max-lg:mx-5 scroll-mt-20"
    >
      <div className="items-center flex justify-center">
        <div className="relative">
          <h1 className="relative font-extrabold z-10 mb-5 sm:mb-10 text-[min(9vw,48px)]">
            Contact Me
          </h1>
        </div>
      </div>
      <div className=" mx-0 md:mx-20 mb-15 lg:mb-25">
        <p className="text-balance text-center text-grey text-[min(4vw,16px)] font-normal leading-6">
          Don't let yesterday take up too much today.
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-10 max-md:items-center max-lg:items-start md:flex-row md:justify-between max-lg:gap-x-2 lg:mx-25 md:mb-25 mb-15">
        {contacts.map((items, index) => {
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col items-center gap-5 w-60"
            >
              <span className="p-7 bg-innerBg rounded-full">{items.icon}</span>
              <p className="font-medium text-center text-[min(4vw,18px)]">
                {items.title}
              </p>
              <p className="text-[min(4vw,16px)] text-center text-grey font-normal">
                {items.paragraph}
              </p>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:mx-25"
      >
        <div className="flex gap-10 flex-col max-md:flex-col-reverse md:flex-row ">
          <div className="w-3/6 flex items-center max-md:hidden">
            <img className="w-96" src={picture} alt="" />
          </div>
          <div className="p-5 py-10 bg-[#f8f9fa] w-full lg:p-10 md:w-3/6 rounded-lg max-sm:me-5 md:me-20">
            <form
              className="flex flex-col gap-5 w-full"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-white text-[#000] border-1 rounded-sm border-grey px-3 py-2 text-[min(4vw,14px)] outline-none"
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                name="name"
                value={name}
                required
              />
              <input
                className="bg-white text-[#000] border-1 rounded-sm border-grey px-3 py-2 text-[min(4vw,14px)] outline-none"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={email}
                required
              />
              <input
                className="bg-white text-black border-1 rounded-sm border-grey px-3 py-2 text-[min(4vw,14px)] outline-none"
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                name="subject"
                value={subject}
                required
              />
              <textarea
                className="bg-white h-40 text-black border-1 rounded-sm border-grey px-3 py-2 text-[min(4vw,14px)] outline-none"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                value={message}
                required
              />
              {successForm && (
                <p className="text-green-400 text-[min(4vw,14px)]">
                  {successForm}
                </p>
              )}
              {errorForm && (
                <p className="text-red-500 text-[min(4vw,14px)]">{errorForm}</p>
              )}
              <button
                className={`rounded-4xl px-10 py-4 text-[min(4vw,14px)] font-semibold tracking-widest ${
                  isFormFilled
                    ? "text-black bg-major-yellow cursor-pointer"
                    : "text-white bg-grey cursor-not-allowed"
                }`}
                type="submit"
                disabled={!isFormFilled}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
