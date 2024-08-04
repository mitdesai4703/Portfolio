import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub,  } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="text-white py-4 relative z-10 flex flex-col items-center">

        {/* Footer Content */}
        
        <div className="container mx-auto px-6 lg:px-20 relative z-20 flex flex-col items-center">
          <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider p-6 text-center">
            Join me on social media for fresh updates and insights:
          </p>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/mit-desai-38944025b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://x.com/MitDesai0407"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter Profile"
            >
              <FaXTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/mitdesai_04/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://github.com/mitdesai4703"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
