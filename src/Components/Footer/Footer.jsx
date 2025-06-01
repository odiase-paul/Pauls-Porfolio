import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

const Footer = ({ scrollTo }) => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-7 font-medium text-grey mb-20 lg:mx-20 mx-5">
      <div className="flex flex-col md:flex-row gap-y-15 justify-between">
        <div className="flex flex-col gap-y-5 sm:w-60">
          <header className="text-white font-semibold mb-3 text-[min(6vw,22px)]">
            Quote
          </header>
          <p className="text-[min(4vw,16px)]">
            The future belongs to those who believe in the beauty of their
            dreams
          </p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-5 mt-10"
          >
            <Link
              to="https://x.com/OdiaseAkhere?t=Ym1s4PbNYBdcRNdLhb39Yw&s=08"
              className="p-3 rounded-full bg-innerBg"
            >
              {" "}
              <XIcon sx={{ fontSize: 25 }} />
            </Link>
            <Link
              to="https://www.instagram.com/odiase.paul?igsh=ZGUzMzM3NWJiOQ=="
              className="p-3 rounded-full bg-innerBg"
            >
              {" "}
              <InstagramIcon sx={{ fontSize: 25 }} />
            </Link>
            <Link
              to="https://github.com/odiase-paul"
              className="p-3 rounded-full bg-innerBg"
            >
              {" "}
              <GitHubIcon sx={{ fontSize: 25 }} />
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-5 sm:w-50">
          <header className="text-white font-semibold mb-3 text-[min(6vw,22px)]">
            Links
          </header>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.home}
          >
            &#8594; Home
          </a>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.about}
          >
            &#8594; About
          </a>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.services}
          >
            &#8594; Service
          </a>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.projects}
          >
            &#8594; Projects
          </a>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.contacts}
          >
            &#8594; Contact
          </a>
        </div>
        <div className="flex flex-col gap-y-5 sm:w-60">
          <header className="text-white font-semibold mb-3 text-[min(6vw,22px)]">
            Services
          </header>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.services}
          >
            &#8594; Web Development
          </a>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.services}
          >
            &#8594; Mobile App Development
          </a>
          <a
            className="text-[min(4vw,16px)] cursor-pointer"
            onClick={scrollTo.services}
          >
            &#8594; Graphics Design
          </a>
        </div>
        <div className="flex flex-col gap-y-5 sm:w-70">
          <header className="text-white font-semibold mb-3 text-[min(6vw,22px)]">
            Have a Question?
          </header>
          <span className="flex gap-x-5">
            <LocationOnIcon />{" "}
            <p className="text-[min(4vw,16px)]">
              Aduwawa, Benin city, Edo state, Nigeria
            </p>
          </span>
          <a href="tel:+234 705 493 0908" className="flex gap-x-5">
            <LocalPhoneIcon />{" "}
            <p className="text-[min(4vw,16px)]">+234 705 493 0908</p>
          </a>
          <a href="mailto:paulakhere48@gmail.com" className="flex gap-x-5">
            <EmailIcon />{" "}
            <p className="text-[min(4vw,16px)]">paulakhere48@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="flex justify-center align-middle my-15">
        <p className="text-[min(4vw,16px)]">Copyright © {year} | Akh</p>
      </div>
    </div>
  );
};

export default Footer;
