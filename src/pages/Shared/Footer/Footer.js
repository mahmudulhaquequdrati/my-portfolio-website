import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center pt-4 mx-8">
        <div className="text-center">
          <img className="w-24 mx-auto" src={logo} alt="logo" />
          <div className="text-center font-mono my-4">
            <h2 className="uppercase text-2xl">mahmudul haque qudrati</h2>
            <p>junior web developer</p>
            <p className="font-sans">email: mahmud.qudrati@gmail.com</p>
          </div>
          <h2 className="font-bold text-xl  text-center flex justify-center mx-auto w-24 font-mono border-2 px-2 py-1 border-purple-300">
            MHQ
          </h2>
        </div>
      </div>
      <br />

      <p className="text-center">
        {"\u00a9"} 2021 all right reserved by Qudrati{" "}
      </p>
    </>
  );
};

export default Footer;
