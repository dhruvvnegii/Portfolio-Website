import React, { useState } from "react";
import mega from "../assets/megablog.png";
import netfllix from "../assets/netflix.png";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projectList = [
  {
    id: 1,
    name: "Mega Blog",
    category: "React & Appwrite",
    technologies: ["React JS", "Tailwind CSS", "Appwrite", "JavaScript"],
    image: mega,
    github: "https://github.com/dhruvvnegii/AppwriteMegaBlog.git",
    live: "#", // placeholder
    description: "A high-fidelity modern blogging application featuring a rich text editor, article posting, user authentication, and databases integrated using Appwrite Cloud services.",
  },
  {
    id: 2,
    name: "Netflix Landing Page",
    category: "HTML & CSS",
    technologies: ["HTML5", "CSS3", "Responsive Web Design"],
    image: netfllix,
    github: "https://github.com/dhruvvnegii/Netflix-Landing-Page.git",
    live: "#", // placeholder
    description: "A pixel-perfect clone of the Netflix Landing Page featuring modern CSS layouts, responsive grids, custom tabs, accordion lists, and dynamic video trailers panels.",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React & Appwrite", "HTML & CSS"];

  const filteredProjects = filter === "All"
    ? projectList
    : projectList.filter(project => project.category === filter);

  return (
    <section id="project" className="py-24 bg-[#030712] relative overflow-hidden bg-dots-pattern">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="bg-cosmic-glow bg-indigo-600 w-[350px] h-[350px] left-[40%] bottom-[5%] animate-pulse-glow" />
        <div className="bg-cosmic-glow bg-teal-500 w-[280px] h-[280px] right-[5%] top-[25%] animate-blob-orbit-2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Projects
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal reveal-delay-100">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl overflow-hidden glass-card-hover group flex flex-col h-full reveal reveal-delay-${(index + 1) * 100}`}
            >
              {/* Image Box with zoom hover */}
              <div className="relative h-56 md:h-64 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60 z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Heading */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 border border-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions Links */}
                <div className="flex items-center space-x-4 border-t border-white/5 pt-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors group/link"
                  >
                    <FaGithub className="text-lg" />
                    <span>Source Code</span>
                  </a>
                  
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-teal-400 transition-colors group/link"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
