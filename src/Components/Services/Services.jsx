import React, { useState } from "react";
import webDevelopment from "/src/assets/mobile-app-developer.webp";
import appDevelopment from "/src/assets/full-stack-developer.webp";
import graphicsDesign from "/src/assets/video-content-editor.webp";
import { easeInOut, motion } from "framer-motion";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";

const Services = ({ ref }) => {
  const serviceDetails = [
    {
      id: "Web-Development",
      icon: <CodeOffOutlinedIcon sx={{ fontSize: 60 }} />,
      background: webDevelopment,
      heading: "Web Development",
    },
    {
      id: "App-Development",
      icon: <PhoneAndroidOutlinedIcon sx={{ fontSize: 60 }} />,
      background: appDevelopment,
      heading: "App Development",
    },
    {
      id: "Graphics-Design",
      icon: <BrushOutlinedIcon sx={{ fontSize: 60 }} />,
      background: graphicsDesign,
      heading: "Graphics Design",
    },
  ];
  const [isHovered, setIsHovered] = useState(null);
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      ref={ref}
      id="services"
      className="lg:mb-40 mb-20 max-lg:mx-5 scroll-mt-20"
    >
      <div className="items-center flex justify-center">
        <div className="relative">
          <h1 className="relative font-extrabold z-10 mb-5 sm:mb-10 text-[min(9vw,48px)]">
            Services
          </h1>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1.5 text-[min(10vw,96px)] font-extrabold text-white/10 z-0">
            Services
          </h1>
        </div>
      </div>
      <div className=" mx-0 md:mx-20 mb-20">
        <p className="text-balance text-center text-grey text-[min(4vw,16px)] font-normal leading-6">
          We are available to satisfy your needs in any of the following
          services below:
        </p>
      </div>

      <div className="grid grid-rows md:grid-cols-3 gap-8 lg:mx-20">
        {serviceDetails.map((items, i) => {
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              id={items.id}
              onMouseEnter={() => setIsHovered(items.id)}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                background: `url(${items.background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              key={items.id}
              className={`rounded-sm p-10 flex justify-center align-middle h-52 sm:h-80 md:h-52 ${
                isHovered === items.id
                  ? "transition ease-in-out duration-400 darkest-shadow-bg"
                  : "transition ease-in-out duration-400 dark-shadow-bg"
              }`}
            >
              {isHovered === items.id ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  className="flex flex-col justify-center align-middle text-center gap-y-4"
                >
                  <h1 className="text-major-yellow font-extrabold text-2xl">
                    {items.icon}
                  </h1>
                  <p className="text-2xl font-medium">{items.heading}</p>
                </motion.div>
              ) : (
                ""
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
