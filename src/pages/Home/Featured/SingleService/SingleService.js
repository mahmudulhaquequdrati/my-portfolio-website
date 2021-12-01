import React from "react";
//added
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const SingleService = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="py-16 px-12 text-gray-400 border border-gray-900 hover:bg-black shadow-xl rounded-lg"
    >
      <img className="w-8 " src={img} alt="" />

      <h2 className="text-2xl font-bold font-two pt-4">{name}</h2>
      <p className="text-lg font-one mt-4">{description}</p>
    </div>
  );
};

export default SingleService;
