import React from "react";
import aboutUsImage from "/src/assets/my_photo.jpg";
const AboutUs = ({ ref }) => {
  return (
    <div
      ref={ref}
      id="aboutUs"
      className="flex justify-center mx-5 mb-20 lg:mb-40 lg:space-x-30 lg:mx-15 md:flex-row flex-col-reverse gap-10 scroll-mt-20"
    >
      <div className="flex items-center w-3/4 md:w-600 max-md:mx-auto">
        <img className="w-full md:w-[100%]" src={aboutUsImage} alt="" />
      </div>

      <div>
        <div className="relative mb-10">
          <h1 className="relative text-[min(9vw,48px)] font-extrabold z-10 text-center max-md:text-[min(9vw,48px)]">
            About Us
          </h1>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-3.5 sm:mt-5 text-[min(10vw,72px)] max-md:text-[min(10vw,96px)] font-extrabold text-white/10 z-0 ">
            About
          </h1>
        </div>
        <div>
          <p className="text-balance max-md:text-center text-grey text-[min(4vw,16px)] leading-6 font-light mb-5">
            A result driven individual with an excellent communication. Not just
            work oriented but also result oriented, seeking organizational
            opportunity to combine with interpersonal skill for the
            actualization of one’s full potential and the set goals and
            objectives of the organization. I possess great prowess in frontend
            development. Proficient in HTML5, CSS, Tailwind, JavaScript,
            React.js etc. An experienced teacher and also a learner. Passionate
            about self-development and continuous professional growth.
          </p>
          <div className=" mb-5 p-0 m-0 text-[min(4vw,16px)]">
            <table className="table-auto w-auto pl-0 ml-0 border-separate border-spacing-y-3 ">
              <tbody className="p-0 m-0">
                <tr className="">
                  <th className="text-left font-medium">Name:</th>
                  <td className="pl-5 text-grey">Paul Akhere Odiase</td>
                </tr>
                <tr className="">
                  <th className="text-left font-medium">Date of Birth:</th>
                  <td className="pl-5 text-grey">25th June</td>
                </tr>
                <tr className="">
                  <th className="text-left font-medium">Address:</th>
                  <td className="pl-5 text-grey">
                    Benin city, Edo State, Nigeria
                  </td>
                </tr>
                <tr className="">
                  <th className="text-left font-medium">Email:</th>
                  <td className="pl-5 text-grey text-[min(3.6vw,16px)]">
                    paulakhere48@gmail.com
                  </td>
                </tr>
                <tr className="">
                  <th className="text-left font-medium">Phone:</th>
                  <td className="pl-5 text-grey">+234 705 493 0908</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <a
              href="paul_akhere_odiase.pdf"
              download="paul_akhere_odiase.pdf"
              className="rounded-4xl px-5 py-4 text-major-black bg-major-yellow text-[12px] font-semibold tracking-widest"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
