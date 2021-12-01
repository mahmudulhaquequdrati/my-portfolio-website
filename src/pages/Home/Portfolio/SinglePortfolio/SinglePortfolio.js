import React from "react";
import { Link } from "react-router-dom";

const SinglePortfolio = ({ portfolio }) => {
  const { name, img, description, id } = portfolio;
  let newName = name;
  newName = name.slice(0, 19);
  let newDescription = description;
  newDescription = description.slice(0, 57);
  return (
    <>
      <Link to={`/portfolio/${id}`}>
        <div className="custom-bg  border cursor-pointer border-gray-800 rounded-lg  mt-12 mb-8 shadow-2xl overflow-hidden mx-0 sm:mx-6 lg:mx-0">
          <img
            className="rounded h-60 lg:h-60 sm:h-96 w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            src={img}
            alt=""
          />
          <div className="px-6 py-6">
            <div className="flex justify-between my-6 text-gray-400">
              <h2 className="font-bold text-sm font-two">{newName}</h2>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="#CF1E1E"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <p className="px-1 font-bold text-sm font-two">{id}</p>
              </div>
            </div>
            <h2 className="text-left mt-4 text-gray-400 font-medium hover:text-red-600">
              {newDescription}
            </h2>
            <div className="text-left ml-2">
              <Link to={`/portfolio/${id}`}>
                <button className="mt-4 svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#AF3319"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SinglePortfolio;
