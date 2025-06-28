import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
function SocialIcon({instagram, facebook, linkedin, twitter}) {
  return (
    <div className="iconBoxBg w-full h-[7%] flex justify-evenly items-center gap-2 ">
      <ul className="flex justify-evenly w-full  text-sm">
        <li className="social-icon textWithHover">
          <a
            href={facebook?.link}
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="social-icon textWithHover">
          <a href={linkedin?.link} target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icon textWithHover">
          <a href={instagram?.link} target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li className="social-icon textWithHover">
          <a href={twitter?.link} target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li className="social-icon textWithHover">
          <a href="https://www.youtube.com/@TechTorialss" target="_blank">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcon;
