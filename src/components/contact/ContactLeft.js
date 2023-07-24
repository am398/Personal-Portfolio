import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Anuj Maurya</h3>
        <p className="text-lg font-normal text-gray-400">
          Student at Shiv Nadar Institute of Emminece
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I love solving DSA problems and learning Full Stack Development. I
          have a good grasp on ReactJS, NodeJS, ExpressJS, MongoDB, and
          PostgreSQL. I am also familiar with Python, C and Java.
          <br />
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9795392069</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">anujmaurya499@gmail.com</span>
        </p>
      </div>
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
    </div>
  );
}

export default ContactLeft