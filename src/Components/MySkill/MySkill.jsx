import React from "react";

const MySkill = ({ ref }) => {
  const skillBars = [
    { id: 1, heading: "HTML", barValue: 95 },
    { id: 2, heading: "CSS", barValue: 95 },
    { id: 3, heading: "Tailwind", barValue: 95 },
    { id: 4, heading: "JavaScript", barValue: 95 },
    { id: 5, heading: "React", barValue: 95 },
    { id: 6, heading: "GitHub", barValue: 90 },
  ];
  return (
    <div
      ref={ref}
      id="skills"
      className="lg:mb-40 mb-20 max-lg:mx-5 scroll-mt-20 "
    >
      <div className="items-center flex justify-center">
        <div className="relative">
          <h1 className="relative text-5xl font-extrabold z-10 mb-5 sm:mb-10 text-[min(9vw,48px)]">
            My Skills
          </h1>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-2 text-[min(10vw,96px)] font-extrabold text-white/10 z-0">
            Skills
          </h1>
        </div>
      </div>
      <div className="mx-0 md:mx-20 mb-20">
        <p className="text-balance text-center text-grey text-[min(4vw,16px)] font-normal leading-6">
          We are available to satisfy your needs in any of the following
          services below:
        </p>
      </div>

      <div className="grid grid-rows md:grid-cols-2 gap-8 lg:mx-20">
        {skillBars.map((items, i) => {
          return (
            <div key={i}>
              <div>
                <p className="text-lg font-semibold mb-2">{items.heading}</p>
                <div className="relative w-full bg-innerBg rounded-full h-3">
                  <div
                    className={`bg-major-yellow h-3 rounded-full `}
                    style={{ width: `${items.barValue}%` }}
                  ></div>

                  <div
                    className={`absolute -top-9  text-lg font-medium text-white -translate-x-1/2`}
                    style={{ left: `${items.barValue}%` }}
                  >
                    {items.barValue}%
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MySkill;
