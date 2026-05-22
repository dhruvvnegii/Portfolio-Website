import React, { useState, useEffect } from "react";
import profilePhoto from "../assets/avatar.JPG";
import resumeFile from "../assets/Dhruv_Negi_Resume_ATS.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const words = ["Software Developer", "React Specialist", "UI/UX Craftsman"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentWord.substring(0, currentText.length - 1)
            : currentWord.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#030712] bg-dots-pattern"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bg-cosmic-glow bg-indigo-600 w-[350px] h-[350px] left-[10%] top-[15%] animate-blob-orbit-1" />
        <div className="bg-cosmic-glow bg-purple-600 w-[380px] h-[380px] right-[10%] bottom-[15%] animate-blob-orbit-2" />
        <div className="bg-cosmic-glow bg-teal-500 w-[250px] h-[250px] left-[45%] top-[40%] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col items-center">
        {/* Profile Image with Glow Ring */}
        <div className="relative mb-8 group reveal">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <img
            src={profilePhoto}
            alt="Dhruv Negi Profile"
            className="relative w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/20 transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Hello Greeting */}
        <div className="reveal reveal-delay-100">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            Welcome to my portfolio
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white reveal reveal-delay-200 max-w-3xl leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400">
            Dhruv Negi
          </span>
        </h1>

        {/* Typing Speciality Subtitle */}
        <div className="mt-4 h-12 flex items-center justify-center reveal reveal-delay-300">
          <p className="text-xl md:text-2xl font-medium text-gray-300">
            I'm a <span className="text-white font-semibold typing-cursor pr-1">{currentText}</span>
          </p>
        </div>

        {/* Bio Pitch */}
        <p className="mt-4 text-center text-gray-400 max-w-xl text-base md:text-lg reveal reveal-delay-400 leading-relaxed">
          I specialize in building stunning, responsive, and performance-oriented web experiences. Bringing web design to life through meticulous and modern engineering.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-500 w-full max-w-md">
          <a
            href="#contact"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Connect Me
          </a>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full border border-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
