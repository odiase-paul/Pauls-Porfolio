import React, { useEffect, useRef, useState } from "react";
import HomePage from "../Home/HomePage";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import NavBar from "../NavBar/NavBar";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";
import MySkill from "../MySkill/MySkill";
import OurProjects from "../OurProjects/OurProjects";
import Contact from "../Contact/Contact";
import { useInView } from "framer-motion";

const RootComponent = () => {
  const [isActive, setIsActive] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { threshold: 0.6 });
  const aboutInView = useInView(aboutRef, { threshold: 0.6 });
  const skillInView = useInView(skillRef, { threshold: 0.6 });
  const resumeInView = useInView(resumeRef, { threshold: 0.6 });
  const projectInView = useInView(projectRef, { threshold: 0.6 });
  const servicesInView = useInView(servicesRef, { threshold: 0.6 });
  const contactInView = useInView(contactRef, { threshold: 0.6 });

  useEffect(() => {
    if (isScrolling) return;
    if (homeInView) {
      setIsActive("home");
    } else if (aboutInView) {
      setIsActive("about");
    } else if (resumeInView) {
      setIsActive("resume");
    } else if (skillInView) {
      setIsActive("skills");
    } else if (servicesInView) {
      setIsActive("services");
    } else if (projectInView) {
      setIsActive("projects");
    } else if (contactInView) {
      setIsActive("contacts");
    }
  }, [
    homeInView,
    aboutInView,
    resumeInView,
    skillInView,
    servicesInView,
    projectInView,
    contactInView,
    isScrolling,
  ]);

  const scrollTo = (ref, sectionName) => {
    setIsScrolling(true);
    const offSet = 50;
    const top = ref.current.offsetTop - offSet;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
    setTimeout(() => {
      setIsActive(sectionName);
      setIsScrolling(false);
    }, 600);
  };

  return (
    <div>
      <NavBar
        isActive={isActive}
        setIsActive={setIsActive}
        scrollTo={{
          home: () => scrollTo(homeRef, "home"),
          about: () => scrollTo(aboutRef, "about"),
          resume: () => scrollTo(resumeRef, "resume"),
          services: () => scrollTo(servicesRef, "services"),
          skills: () => scrollTo(skillRef, "skills"),
          projects: () => scrollTo(projectRef, "projects"),
          contacts: () => scrollTo(contactRef, "contacts"),
        }}
      />
      <HomePage ref={homeRef} />
      <AboutUs ref={aboutRef} />
      <Resume ref={resumeRef} />
      <Services ref={servicesRef} />
      <MySkill ref={skillRef} />
      <OurProjects ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default RootComponent;
