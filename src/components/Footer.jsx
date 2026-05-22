import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaTwitter />,
      url: "https://x.com/dhruvnegii",
      label: "Twitter",
      color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/5"
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/dhruv-negi-b74371207",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/20 hover:bg-[#0A66C2]/5"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/dhruvvnegii",
      label: "GitHub",
      color: "hover:text-white hover:border-white/20 hover:bg-white/5"
    }
  ];

  return (
    <footer className="bg-[#030712] text-gray-400 py-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Upper footer grid */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/5 mb-8">
          
          {/* Logo & Pitch */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Dhruv<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">.</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Crafting premium and highly interactive front-end web experiences.
            </p>
          </div>

          {/* Social Circle Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 text-lg rounded-full bg-white/5 border border-white/5 text-gray-400 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Lower footer grid */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copy and Rights */}
          <p className="text-xs text-gray-500 text-center sm:text-left order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Dhruv Negi. All rights reserved.
          </p>

          {/* Scroll to Top Circle */}
          <div className="order-1 sm:order-2">
            <a
              href="#home"
              aria-label="Back to Top"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 animate-pulse"
            >
              <FaArrowUp className="text-sm" />
            </a>
          </div>

          {/* Policies Links */}
          <div className="flex space-x-6 text-xs text-gray-500 order-3">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
