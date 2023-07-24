import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiDownloadSimpleDuotone } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import CV from "../../assets/CV.pdf";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/am398">
              {" "}
              <BsGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.instagram.com/anujmaurya.5/">
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/anuj-maurya-1b6b16227/">
              {" "}
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div flex justify-center>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Download My CV
        </h2>
        <div flex justify-center>
          <span className="bannerIcon">
            <a href={CV} download>
              <PiDownloadSimpleDuotone className="bannerIcon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
