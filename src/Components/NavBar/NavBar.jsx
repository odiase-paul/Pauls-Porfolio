import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import face from "/src/assets/face.jpg";
const NavBar = ({ isActive, scrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-major-black fixed top-0 left-0 w-full z-9999 max-lg:px-5">
        <div className="mx-auto max-w-7xl  lg:mx-15">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${menuOpen ? "hidden" : "block"} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className={`${menuOpen ? "block" : "hidden"} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex md:items-stretch md:justify-start">
              <div className="flex shrink-0 items-center">
                <a
                  href="/"
                  className="text-major-yellow font-extrabold text-3xl"
                >
                  PAUL
                </a>
              </div>
            </div>
            <div className="hidden  md:ml-6 md:block ">
              <div className="flex space-x-4 ">
                <a
                  onClick={scrollTo.home}
                  className={`cursor-pointer ${
                    isActive === "home"
                      ? " border-major-yellow border-b-2 inline-block text-major-yellow"
                      : "text-white"
                  } z-10 relative align-center group pb-1 mx-3 my-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Home
                  {isActive === "home" ? (
                    ""
                  ) : (
                    <span className="absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-0 bottom-0 h-0.5 w-0 bg-major-yellow transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
                <a
                  onClick={scrollTo.about}
                  className={`cursor-pointer ${
                    isActive === "about"
                      ? "border-b-2 border-major-yellow inline-block text-major-yellow"
                      : "text-white"
                  } z-10 relative align-center group pb-1 mx-3 my-2 text-sm font-medium`}
                  aria-current="page"
                >
                  About
                  {isActive === "about" ? (
                    ""
                  ) : (
                    <span className="absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-0 bottom-0 h-0.5 w-0 bg-major-yellow transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
                <a
                  onClick={scrollTo.resume}
                  className={`cursor-pointer ${
                    isActive === "resume"
                      ? "border-b-2 border-major-yellow inline-block text-major-yellow"
                      : "text-white"
                  } z-10 relative align-center group pb-1 mx-3 my-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Resume
                  {isActive === "resume" ? (
                    ""
                  ) : (
                    <span className="absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-0 bottom-0 h-0.5 w-0 bg-major-yellow transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
                <a
                  onClick={scrollTo.services}
                  className={`cursor-pointer ${
                    isActive === "services"
                      ? "border-b-2 border-major-yellow inline-block text-major-yellow"
                      : "text-white"
                  } z-10 relative align-center group pb-1 mx-3 my-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Services
                  {isActive === "services" ? (
                    ""
                  ) : (
                    <span className="absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-0 bottom-0 h-0.5 w-0 bg-major-yellow transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
                <a
                  onClick={scrollTo.skills}
                  className={`cursor-pointer ${
                    isActive === "skills"
                      ? "border-b-2 border-major-yellow inline-block text-major-yellow"
                      : "text-white"
                  } z-10 relative align-center group pb-1 mx-3 my-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Skills
                  {isActive === "skills" ? (
                    ""
                  ) : (
                    <span className="absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-0 bottom-0 h-0.5 w-0 bg-major-yellow transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
                <a
                  onClick={scrollTo.projects}
                  className={`cursor-pointer ${
                    isActive === "projects"
                      ? "border-b-2 border-major-yellow inline-block text-major-yellow"
                      : "text-white"
                  } z-10 relative align-center group pb-1 mx-3 my-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Projects
                  {isActive === "projects" ? (
                    ""
                  ) : (
                    <span className="absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-0 bottom-0 h-0.5 w-0 bg-major-yellow transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
                <a
                  onClick={scrollTo.contacts}
                  className={`cursor-pointer ${
                    isActive === "contacts"
                      ? "border-b-2 border-major-yellow inline-block text-major-yellow"
                      : "text-white"
                  } z-10 relative align-center group pb-1 mx-3 my-2 text-sm font-medium`}
                  aria-current="page"
                >
                  Contacts
                  {isActive === "contacts" ? (
                    ""
                  ) : (
                    <span className="absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-0 bottom-0 h-0.5 w-0 bg-major-yellow transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
              </div>
            </div>
            {/* profile image */}
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <div className="relative ml-3">
                <img className="size-8 rounded-full" src={face} alt="" />
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:hidden"
              id="mobile-menu"
            >
              <div className="space-y-1 px-2 pt-2 pb-3">
                <div className="relative">
                  <a
                    onClick={scrollTo.home}
                    className={`block rounded-md  px-3 py-2  transition text-base font-medium ${
                      isActive === "home" ? "text-major-yellow" : "text-white"
                    } `}
                    aria-current="page"
                  >
                    <span className="relative inline-block">
                      Home
                      {isActive === "home" && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-2 h-1 bg-major-yellow rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </span>
                  </a>
                </div>

                <div className="relative">
                  <a
                    onClick={scrollTo.about}
                    className={`block rounded-md  px-3 py-2  transition text-base font-medium ${
                      isActive === "about" ? "text-major-yellow" : "text-white"
                    } `}
                    aria-current="page"
                  >
                    <span className="relative inline-block">
                      About
                      {isActive === "about" && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-2 h-1 bg-major-yellow rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </span>
                  </a>
                </div>
                <div className="relative">
                  <a
                    onClick={scrollTo.resume}
                    className={`block rounded-md  px-3 py-2  transition text-base font-medium ${
                      isActive === "resume" ? "text-major-yellow" : "text-white"
                    } `}
                    aria-current="page"
                  >
                    <span className="relative inline-block">
                      Resume
                      {isActive === "resume" && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-2 h-1 bg-major-yellow rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </span>
                  </a>
                </div>
                <div className="relative">
                  <a
                    onClick={scrollTo.services}
                    className={`block rounded-md  px-3 py-2  transition text-base font-medium ${
                      isActive === "services"
                        ? "text-major-yellow"
                        : "text-white"
                    } `}
                    aria-current="page"
                  >
                    <span className="relative inline-block">
                      Service
                      {isActive === "services" && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-2 h-1 bg-major-yellow rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </span>
                  </a>
                </div>
                <div className="relative">
                  <a
                    onClick={scrollTo.skills}
                    className={`block rounded-md  px-3 py-2  transition text-base font-medium ${
                      isActive === "skills" ? "text-major-yellow" : "text-white"
                    } `}
                    aria-current="page"
                  >
                    <span className="relative inline-block">
                      Skills
                      {isActive === "skills" && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-2 h-1 bg-major-yellow rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </span>
                  </a>
                </div>
                <div className="relative">
                  <a
                    onClick={scrollTo.projects}
                    className={`block rounded-md  px-3 py-2  transition text-base font-medium ${
                      isActive === "projects"
                        ? "text-major-yellow"
                        : "text-white"
                    } `}
                    aria-current="page"
                  >
                    <span className="relative inline-block">
                      Projects
                      {isActive === "projects" && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-2 h-1 bg-major-yellow rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </span>
                  </a>
                </div>
                <div className="relative">
                  <a
                    onClick={scrollTo.contacts}
                    className={`block rounded-md  px-3 py-2  transition text-base font-medium ${
                      isActive === "contacts"
                        ? "text-major-yellow"
                        : "text-white"
                    } `}
                    aria-current="page"
                  >
                    <span className="relative inline-block">
                      Contact
                      {isActive === "contacts" && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 right-0 -bottom-2 h-1 bg-major-yellow rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        ></motion.div>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default NavBar;
