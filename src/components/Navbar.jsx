import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Projects', href: '#project', id: 'project' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll Progress Bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // 2. Background Glassmorphism Trigger
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 3. Active Section Tracking
      const sections = ['home', 'about', 'project', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for sticky nav

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/10'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="group flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Dhruv<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 ${
                    activeSection === link.id
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Underline for active state */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 ${
                      activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="relative group overflow-hidden px-5 py-2 rounded-full border border-indigo-500/30 text-white font-medium text-sm transition-all duration-300 hover:border-indigo-500/80 shadow-md hover:shadow-indigo-500/20"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-100 group-hover:scale-105 transition-transform duration-500" />
              <span className="relative z-10">Connect Me</span>
            </a>
          </div>

          {/* Mobile Hamburguer button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#030712]/95 backdrop-blur-lg flex flex-col justify-center items-center space-y-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-wide transition-colors ${
                activeSection === link.id
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg shadow-indigo-500/30"
        >
          Connect Me
        </a>
      </div>
    </>
  );
};

export default Navbar;