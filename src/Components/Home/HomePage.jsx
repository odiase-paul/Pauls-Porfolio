import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "/src/assets/data-administrator.webp";
import "./HomePage.css";
const HomePage = ({ ref }) => {
  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="homePage"
      className=" bg-cover  bg-[left_20%]  darkest-shadow-background w-full h-lvh home-page flex items-center max-md:h-screen px-5 lg:px-15 max-md:bg-center mb-20 lg:mb-40 scroll-mt-20"
    >
      <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-140  flex flex-col space-y-5 max-sm:w-full max-sm:items-center "
            key="box1"
          >
            <p className="text-major-yellow text-[min(4vw,14px)] font-medium tracking-widest">
              HELLO!
            </p>
            <header className="text-major-yellow tracking-wide font-extrabold text-[min(7vw,60px)] leading-tight max-sm:text-center">
              <span className="text-white">I'm</span> Paul Akhere Odiase
            </header>
            <p className="text-[min(5vw,30px)] max-sm:text-center font-medium tracking-wide">
              A Freelance Web Developer
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-major-yellow text-major-black px-5.5 py-3.5 rounded-4xl  text-[min(5vw,12px)] font-semibold tracking-widest"
              >
                HIRE ME
              </a>
              <a
                href="#our-projects"
                className="bg-major-black text-white px-5.5 py-3.5 rounded-4xl border-1 border-gray-500 text-[min(5vw,12px)] font-semibold tracking-widest"
              >
                MY PROJECTS
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="w-140 flex flex-col space-y-5 max-sm:w-full max-sm:items-center"
            key="box2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-major-yellow text-[min(4vw,14px)] font-medium tracking-widest">
              HELLO!
            </p>
            <header className=" text-white tracking-wide font-extrabold text-[min(7vw,60px)] leading-snug md:leading-tight max-sm:text-center">
              I'm a <span className="text-major-yellow">web developer</span>
              <br className="max-sm:invisible" /> based in Nigeria
            </header>

            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-major-yellow text-major-black px-5.5 py-3.5 rounded-4xl text-[min(5vw,12px)] font-semibold tracking-widest"
              >
                HIRE ME
              </a>
              <a
                href="#our-projects"
                className="bg-major-black text-white px-5.5 py-3.5 rounded-4xl border-1 border-gray-500 text-[min(5vw,12px)] font-semibold tracking-widest"
              >
                MY PROJECTS
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
