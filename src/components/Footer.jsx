import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-[#113E4F] text-white py-10 px-10 text-xl md:text-2xl md:flex md:px-24">
        <div>
          <h1 className="font-bold">Paula Toole</h1>
          <p>PR consultancy & copywriting</p>
          <div className="bg-[#FFBFEF] h-6 my-4 "></div>
        </div>

        <div className="md:ml-20">
          <div>
            <h1 className="font-bold">Let's talk:</h1>
            <p>
              <span>hello@paulatoolePR.co.uk</span>
              <br />
              M: <span>07827011201</span>
            </p>
          </div>

          <div className="flex gap-x-4 my-4">
            <FaLinkedin className="size-10"/>
            <FaInstagram className="size-10"/>
            <FaXTwitter className="size-10"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
