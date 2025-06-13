import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { easeInOut, motion } from "framer-motion";
import sonaQode from "/src/assets/sona-qode_ss.png";
import heroShop from "/src/assets/hero-shop_ss.png";
import fakeApi from "/src/assets/fake-api_shop.png";
import quizPage from "/src/assets/quiz-page_ss.png";
import ourMenu from "/src/assets/our_menu_ss.png";
import tinDog from "/src/assets/tindog_ss.png";
import revent from "/src/assets/rectangle.png";
import { useSwipeable } from "react-swipeable";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import backGroundImageTwo from "/src/assets/backgroundImgTop.jpg";

const OurProjects = ({ ref, scrollTo }) => {
  const [isHovered, setIsHovered] = useState(null);
  const projects = [
    {
      id: 1,
      image: sonaQode,
      icon: (
        <TravelExploreIcon
          sx={{
            fontSize: 45,
            color: "#ffbd39",
          }}
        />
      ),
      title: "Sona Qode",
      link: "https://sona-qode-vite.vercel.app/",
    },
    {
      id: 2,
      image: heroShop,
      icon: (
        <TravelExploreIcon
          sx={{
            fontSize: 45,
            color: "#ffbd39",
          }}
        />
      ),
      title: "Hero Shop",
      link: "https://hero-commerce-tan.vercel.app/",
    },
    {
      id: 3,
      image: fakeApi,
      icon: (
        <TravelExploreIcon
          sx={{
            fontSize: 45,
            color: "#ffbd39",
          }}
        />
      ),
      title: "AKH Store",
      link: "https://fake-api-e-commerce.vercel.app/",
    },
    {
      id: 4,
      image: quizPage,
      icon: (
        <TravelExploreIcon
          sx={{
            fontSize: 45,
            color: "#ffbd39",
          }}
        />
      ),
      title: "Quizpedia",
      link: "https://react-quiz-page.vercel.app/",
    },
    {
      id: 5,
      image: ourMenu,
      icon: (
        <TravelExploreIcon
          sx={{
            fontSize: 45,
            color: "#ffbd39",
          }}
        />
      ),
      title: "Our Menu",
      link: "https://menu-list-sooty.vercel.app/",
    },

    {
      id: 7,
      image: tinDog,
      icon: (
        <TravelExploreIcon
          sx={{
            fontSize: 45,
            color: "#ffbd39",
          }}
        />
      ),
      title: "Tin Dog",
      link: "https://tindog-project-nine.vercel.app//",
    },
    {
      id: 8,
      image: revent,
      icon: (
        <TravelExploreIcon
          sx={{
            fontSize: 45,
            color: "#ffbd39",
          }}
        />
      ),
      title: "Revent",
      link: "https://revent-nine.vercel.app/",
    },
  ];
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const pageItems = projects.slice(startIndex, startIndex + itemsPerPage);
  while (pageItems.length < itemsPerPage) {
    pageItems.push(null);
  }

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    trackMouse: true,
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      ref={ref}
      id="our-projects"
      className="lg:mb-40 mb-20 max-lg:mx-5 scroll-mt-20"
    >
      <div className="items-center flex justify-center">
        <div className="relative">
          <h1 className="relative text-5xl font-extrabold z-10 mb-5 sm:mb-10 text-[min(9vw,48px)]">
            Our Projects
          </h1>
        </div>
      </div>
      <div className="mx-0 md:mx-20 mb-20">
        <p className="text-balance text-center text-grey text-[min(4vw,16px)] font-normal leading-6">
          What lies in our power to do, lies in our power not to do.
        </p>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-[min(4vw,11px)] text-center relative -top-6">
          Double click to navigate website
        </p>

        <div className="w-full  relative" {...handlers}>
          <div className="w-full max-w-5xl mx-auto overflow-hidden relative">
            <div className="flex flex-col max-md:items-center gap-y-8 md:flex-row  transition-transform duration-500 ease-in-out">
              {pageItems.map((item, index) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  key={index}
                  className="w-full md:w-1/3 mx-2 "
                >
                  {item ? (
                    <div
                      onDoubleClick={() => {
                        window.open(item.link);
                      }}
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                      onMouseEnter={() => setIsHovered(item.id)}
                      onMouseLeave={() => setIsHovered(null)}
                      className={`h-50 rounded flex items-center justify-center bg-center bg-cover bg-no-repeat cursor-pointer ${
                        isHovered === item.id
                          ? "transition ease-in-out duration-500 darkest-shadow-bg"
                          : ""
                      }`}
                    >
                      {isHovered === item.id ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, ease: easeInOut }}
                          className="flex flex-col justify-center items-center text-2xl"
                        >
                          <p>{item.title}</p>
                          <span>{item.icon}</span>
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <div className="bg-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="absolute left-0 -top-12 lg:left-20 lg:top-1/2 lg:-translate-y-1/2"
          >
            <ArrowBackIosNewIcon
              onClick={prevPage}
              disabled={currentPage === 0}
              sx={{
                fontSize: 40,
                color: currentPage === 0 ? "#364153" : "#ffbd39",
                cursor: currentPage === 0 ? "" : "pointer",
              }}
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
            }}
            className="absolute right-0 -top-12 lg:right-20 lg:top-1/2 lg:-translate-y-1/2"
          >
            <ArrowForwardIosIcon
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              sx={{
                fontSize: 40,
                color: currentPage === totalPages - 1 ? "#364153" : "#ffbd39",
                cursor: currentPage === totalPages - 1 ? "" : "pointer",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
      <div
        className="h-fit  w-full bg-no-repeat bg-center bg-cover text-center px-2 my-20 flex items-center justify-center  md:h-110 max-md:py-10"
        style={{ backgroundImage: `url(${backGroundImageTwo})` }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" flex flex-col items-center gap-5"
        >
          <h1 className="text-[min(8vw,36px)] font-black">
            I'm <span className="text-major-yellow">Available</span> for
            freelancing
          </h1>
          <p className="text-balance text-center text-grey text-[min(6vw,16px)] font-normal leading-6">
            Hire the best to get the best project
          </p>
          <a
            onClick={scrollTo.contacts}
            className=" rounded-4xl px-10 py-4 text-major-black-text bg-major-yellow text-[min(4vw,12px)] font-semibold tracking-widest cursor-pointer"
          >
            HIRE ME
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurProjects;
