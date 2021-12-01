import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PortfolioDetails = () => {
  const { nameId } = useParams();
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch(`/portfolio.json`)
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);
  console.log(portfolio);
  const found = portfolio.find((detail) => detail.id === nameId);
  const {
    img,
    img1,
    img2,
    name,
    id,
    description,
    beAdmin,
    tech,
    live,
    client_code,
    server_code,
  } = found || {};
  return (
    <div>
      <h2 className="my-8 text-4xl text-red-500 mx-16 text-center">
        Project details of {nameId}
      </h2>
      <div className="mx-8 text-center mt-4 mb-2  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        <div className="">
          <img className="rounded-lg" src={img} alt="" />
          <div className="grid grid-cols-2 mt-8  gap-4">
            <img className="rounded-lg" src={img1} alt="" />
            <img className="rounded-lg" src={img2} alt="" />
          </div>
        </div>
        <div className="px-4 mt-4 flex items-center text-left">
          <div>
            <h2 className="text-2xl font-bold text-gray-400">{name}</h2>
            <p className="font-semibold text-gray-300">Project type : {id}</p>
            <br />
            <p>{description}</p>
            <br />
            <p>
              website live here :{" "}
              <a href={live} rel="noreferrer" target="_blank" alt="live">
                <span className="underline text-blue-500">Here</span>
              </a>
            </p>
            <p>
              client code :{" "}
              <a href={client_code} rel="noreferrer" target="_blank" alt="live">
                <span className="underline text-blue-500">Here</span>
              </a>
            </p>
            {server_code && (
              <p>
                server code :{" "}
                <a
                  href={server_code}
                  rel="noreferrer"
                  target="_blank"
                  alt="live"
                >
                  <span className="underline text-blue-500">Here</span>
                </a>
              </p>
            )}
            <br />
            <p className="w-72">{beAdmin}</p>
            <br />
            <h4>
              Technology I have used : <br />{" "}
              <span className="font-bold">{tech}</span>
            </h4>
            <br />
            <Link to="/" className="bg-red-600 py-2 px-4 rounded-lg">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
