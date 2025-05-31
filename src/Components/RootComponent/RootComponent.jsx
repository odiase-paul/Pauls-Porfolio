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
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { threshold: 0.5 });
  const aboutInView = useInView(aboutRef, { threshold: 0.5 });
  const skillInView = useInView(skillRef, { threshold: 0.5 });
  const resumeInView = useInView(resumeRef, { threshold: 0.5 });
  const projectInView = useInView(projectRef, { threshold: 0.5 });
  const servicesInView = useInView(servicesRef, { threshold: 0.5 });
  const contactInView = useInView(contactRef, { threshold: 0.5 });

  const [isActive, setIsActive] = useState("home");

  useEffect(() => {
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
    servicesInView,
    skillInView,
    projectInView,
    contactInView,
  ]);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar
        isActive={isActive}
        setIsActive={setIsActive}
        scrollTo={{
          home: () => scrollTo(homeRef),
          about: () => scrollTo(aboutRef),
          resume: () => scrollTo(resumeRef),
          services: () => scrollTo(servicesRef),
          skills: () => scrollTo(skillRef),
          projects: () => scrollTo(projectRef),
          contacts: () => scrollTo(contactRef),
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
