import React from "react";

const Resume = ({ ref }) => {
  const resumeDetails = [
    {
      id: 1,
      year: "2022",
      heading: "Web Development",
      institution: "UDEMY",
      paragragh:
        "An institution commited to improving lives through online and physical learning of the software skill.",
    },
    {
      id: 2,
      year: "2022",
      heading: "Frontend Web Development",
      institution: "APTLEARN",
      paragragh:
        "An online learning platform that helps learners gain on-demand tech skills they need to compete in today's economy and acquire professional certificates.",
    },
    {
      id: 3,
      year: "2022",
      heading: "Frontend Web Development",
      institution: "Side Hustle",
      paragragh:
        "A platform designed to small business owners to achieve their business goals and increase sales through technology by empowering undergraduates and Youth corp members.",
    },
    {
      id: 4,
      year: "2022",
      heading: "Frontend Web Development",
      institution: "Private Enterprise",
      paragragh:
        "An enterprise set to train individuals who are willing to learn frontend development.",
    },
    {
      id: 5,
      year: "2021",
      heading: "BSc. Banking and Finance",
      institution: "University of Benin",
      paragragh:
        "A federal University committed in impacting every Nigerian youth positively and also the economy of Nigeria by improving on the educatonal standard.",
    },
  ];
  return (
    <div
      ref={ref}
      id="resume"
      className="lg:mb-40 mb-20 max-lg:mx-5 scroll-mt-20"
    >
      <div className="items-center flex justify-center">
        <div className="relative">
          <h1 className="relative font-extrabold z-10 mb-5 sm:mb-10 text-[min(9vw,48px)]">
            Resume
          </h1>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1.5 text-[min(10vw,96px)] font-extrabold text-white/10 z-0">
            Resume
          </h1>
        </div>
      </div>
      <div className="mx-0 md:mx-20 mb-20">
        <p className="text-balance text-center text-grey text-[min(4vw,16px)] leading-6 font-normal">
          I am both an efficient team player and solo worker. Not just work
          oriented but also a result oriented, seeking organizational
          opportunity to combine with interpersonal skill for the actualization
          of one's full potential and set goals and objectives of the
          organization.
        </p>
      </div>
      <div className="grid grid-rows md:grid-cols-2 gap-8 lg:mx-20">
        {resumeDetails.map((items, i) => {
          return (
            <div key={i} className="bg-innerBg rounded-sm p-10">
              <div className="flex flex-col gap-y-4">
                <h1 className="text-major-yellow font-extrabold text-[min(6vw,24px)]">
                  {items.year}
                </h1>
                <p className=" font-normal text-[min(6vw,24px)]">
                  {items.heading}
                </p>
                <p className="tracking-widest font-semibold text-[min(6vw,12px)] text-grey">
                  {items.institution}
                </p>
                <p className="font-normal text-[min(5vw,16px)] leading-6 text-grey">
                  {items.paragragh}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
