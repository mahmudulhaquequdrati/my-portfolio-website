import React from "react";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div id="home">
      <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2  pt-8">
        <div className="pl-8 order-last lg:order-1">
          <div className="some-text ">
            <h4 className="text-lg pt-16 font-mono">Welcome To My World</h4>
            <h2 className="text-3xl lg:text-5xl py-4 font-two  ">
              Hi, I'm <span style={{ color: "#ff014f" }}>Mahmud Qudrati</span>
            </h2>

            <h2 className="font-mono text-3xl lg:text-4xl  font-bold py-4">
              {" "}
              a{" "}
              <Typical
                className="font-mono text-3xl lg:text-4xl  font-bold py-4"
                steps={[
                  "Developer.",
                  3000,
                  "YouTuber.",
                  3000,
                  "Programmer.",
                  3000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h2>
            <p className="text-base">
              My main goal is to discover something new and move forward by
              solving problems. The new technology inspires me to learn
              something new by jumping on it to discover.
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1wA_cxD9SxnUDLSJyid0GkHGZw6zrD1kR/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-3 rounded-lg shadow-lg mt-4 bg-purple-700">
              Download Resume
            </button>
          </a>
          <div className="mt-8">
            <div>
              <p className="uppercase text-md font-mono text-gray-400">
                Find Me Here
              </p>
            </div>
            <div className="flex mt-2">
              <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
                <a
                  href="https://www.linkedin.com/in/mahmudulhaquequdrati/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
                <a
                  href="https://www.instagram.com/mahmudulhaquequdrati/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
                <a
                  href="https://twitter.com/MahmudulHaqueQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1">
          <div className="mt-2">
            <div className="mt-2">
              <img
                className="lg:h-screen -mt-8 md:h-full border-b-2 lg:border-b-0 md:border-b-0 border-gray-700 shadow-lg "
                src="https://rainbowit.net/html/inbio/assets/images/slider/banner-01.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
