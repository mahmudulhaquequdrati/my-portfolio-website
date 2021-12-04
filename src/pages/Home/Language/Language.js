import React from "react";
import { CircleProgress } from "react-gradient-progress";
//added
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Language = () => {
  return (
    <div className="relative">
      <div className="text-center text-4xl font-bold mb-8 text-red-600">
        <h2>Language I know</h2>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="mx-0  text-center grid lg:mx-24 grid-cols-2 lg:grid-cols-4 md:grid-cols-2 z-auto"
      >
        <div className="">
          <h2>HTML</h2>
          <CircleProgress percentage={90} strokeWidth={12} />
        </div>
        <div className="">
          <h2>Tailwind</h2>
          <CircleProgress percentage={85} strokeWidth={12} />
        </div>
        <div className="">
          <h2>JavaScript</h2>
          <CircleProgress percentage={85} strokeWidth={12} />
        </div>
        <div className="">
          <h2>React</h2>
          <CircleProgress percentage={80} strokeWidth={12} />
        </div>
      </div>
    </div>
  );
};

export default Language;
