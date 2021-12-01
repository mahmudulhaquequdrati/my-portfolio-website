import React, { useEffect, useState } from "react";
import SinglePortfolio from "./SinglePortfolio/SinglePortfolio";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);
  return (
    <div className="mx-8 my-12 text-center ">
      <p id="portfolio" className="text-red-600 text-md font-mono">
        visit my portfolio and feedback to improve
      </p>
      <h2 className="text-5xl font-bold text-gray-300">My Portfolio</h2>
      <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {portfolios.map((portfolio) => (
          <SinglePortfolio
            key={portfolio.name}
            portfolio={portfolio}
          ></SinglePortfolio>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
/*

 */
