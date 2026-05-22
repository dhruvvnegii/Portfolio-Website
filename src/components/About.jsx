import React from "react";
import profilePhoto from "../assets/main.jpg";
import { 
  FaLaptopCode, FaCode, FaTools, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaJava, FaDatabase, FaGitAlt, FaNodeJs, FaNetworkWired 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiPostgresql, 
  SiMongodb, SiPrisma, SiMicrosoftsharepoint 
} from "react-icons/si";

const About = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <FaLaptopCode className="text-indigo-400 text-lg" />,
      skills: [
        { 
          name: "React.js", 
          icon: <FaReact className="text-sky-400 text-lg" />,
          glow: "hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/5 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]"
        },
        { 
          name: "Next.js", 
          icon: <SiNextdotjs className="text-white text-lg" />,
          glow: "hover:text-white hover:border-white/30 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        },
        { 
          name: "JavaScript", 
          icon: <FaJsSquare className="text-yellow-400 text-lg" />,
          glow: "hover:text-yellow-400 hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]"
        },
        { 
          name: "TypeScript", 
          icon: <SiTypescript className="text-blue-400 text-lg" />,
          glow: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        },
        { 
          name: "Node.js", 
          icon: <FaNodeJs className="text-green-500 text-lg" />,
          glow: "hover:text-green-500 hover:border-green-500/30 hover:bg-green-500/5 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
        },
        { 
          name: "Express.js", 
          icon: <SiExpress className="text-gray-400 text-lg" />,
          glow: "hover:text-gray-400 hover:border-gray-500/30 hover:bg-gray-500/5 hover:shadow-[0_0_15px_rgba(156,163,175,0.15)]"
        },
        { 
          name: "Java", 
          icon: <FaJava className="text-red-500 text-lg" />,
          glow: "hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
        },
        { 
          name: "Tailwind CSS", 
          icon: <SiTailwindcss className="text-sky-400 text-lg" />,
          glow: "hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/5 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]"
        },
        { 
          name: "HTML5 & CSS3", 
          icon: <div className="flex space-x-1"><FaHtml5 className="text-orange-500 text-lg" /><FaCss3Alt className="text-blue-500 text-lg" /></div>,
          glow: "hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/5 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]"
        },
      ]
    },
    {
      title: "Databases & Integrations",
      icon: <FaDatabase className="text-purple-400 text-lg" />,
      skills: [
        { 
          name: "PostgreSQL", 
          icon: <SiPostgresql className="text-sky-500 text-lg" />,
          glow: "hover:text-sky-500 hover:border-sky-500/30 hover:bg-sky-500/5 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]"
        },
        { 
          name: "MySQL", 
          icon: <FaDatabase className="text-blue-400 text-lg" />,
          glow: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)]"
        },
        { 
          name: "MongoDB", 
          icon: <SiMongodb className="text-emerald-500 text-lg" />,
          glow: "hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
        },
        { 
          name: "Prisma ORM", 
          icon: <SiPrisma className="text-teal-300 text-lg" />,
          glow: "hover:text-teal-300 hover:border-teal-500/30 hover:bg-teal-500/5 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]"
        },
        { 
          name: "Socket.io", 
          icon: <FaNetworkWired className="text-white text-lg" />,
          glow: "hover:text-white hover:border-white/30 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        },
        { 
          name: "JWT & SSO", 
          icon: <FaTools className="text-indigo-400 text-lg" />,
          glow: "hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
        },
        { 
          name: "REST APIs & Integrations", 
          icon: <FaLaptopCode className="text-teal-400 text-lg" />,
          glow: "hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/5 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]"
        }
      ]
    },
    {
      title: "Tools, Systems & Concepts",
      icon: <FaTools className="text-teal-400 text-lg" />,
      skills: [
        { 
          name: "Git & GitHub", 
          icon: <FaGitAlt className="text-orange-600 text-lg" />,
          glow: "hover:text-orange-600 hover:border-orange-600/30 hover:bg-orange-600/5 hover:shadow-[0_0_15px_rgba(240,80,50,0.12)]"
        },
        { 
          name: "Microsoft Power Apps", 
          icon: <FaTools className="text-purple-400 text-lg" />,
          glow: "hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        },
        { 
          name: "Power Automate", 
          icon: <FaTools className="text-blue-500 text-lg" />,
          glow: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        },
        { 
          name: "SharePoint", 
          icon: <SiMicrosoftsharepoint className="text-emerald-600 text-lg" />,
          glow: "hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:shadow-[0_0_15px_rgba(16,185,129,0.12)]"
        },
        { 
          name: "OOP Concepts", 
          icon: <FaCode className="text-gray-300 text-lg" />,
          glow: "hover:text-gray-300 hover:border-gray-500/30 hover:bg-gray-500/5 hover:shadow-[0_0_15px_rgba(156,163,175,0.12)]"
        },
        { 
          name: "DSA Concepts", 
          icon: <FaCode className="text-gray-300 text-lg" />,
          glow: "hover:text-gray-300 hover:border-gray-500/30 hover:bg-gray-500/5 hover:shadow-[0_0_15px_rgba(156,163,175,0.12)]"
        }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden bg-grid-pattern">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="bg-cosmic-glow bg-purple-600 w-[400px] h-[400px] left-[5%] top-[30%] animate-pulse-glow" />
        <div className="bg-cosmic-glow bg-indigo-600 w-[300px] h-[300px] right-[10%] top-[10%] animate-blob-orbit-1" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
            Introduction
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Outer Stack: Profile & Bio Top, Skills Bottom */}
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Top Row: 2-Column Photo and Bio */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Profile Photo */}
            <div className="md:col-span-4 flex justify-center reveal reveal-delay-100">
              <div className="relative group max-w-[280px] w-full">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 opacity-20 blur-sm group-hover:opacity-40 transition duration-500" />
                
                <div className="relative glass-card p-3 rounded-2xl">
                  <img
                    src={profilePhoto}
                    alt="Dhruv Negi Portrait"
                    className="w-full h-72 object-cover rounded-xl border border-white/5 shadow-2xl group-hover:scale-[1.01] transition-all duration-300"
                  />
                  
                  {/* floating badge */}
                  <div className="absolute -bottom-3 -right-3 glass-card px-3 py-1.5 rounded-xl shadow-lg border border-white/10 flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-ping" />
                    <span className="text-[10px] font-bold tracking-wider text-white uppercase">Hire Me</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Biography */}
            <div className="md:col-span-8 reveal reveal-delay-200">
              <div className="glass-card p-6 md:p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-white">Who am I?</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  I am a motivated Computer Science undergraduate (B.Tech, 2026) and a passionate Software Developer with hands-on experience in full-stack web development and enterprise application engineering. Adept at building robust RESTful services, integrating third-party systems, and rendering sleek modular UI interfaces.
                </p>
                <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                  Currently working as a Software Developer Intern contributing to production-grade employee engagement portals and automation workflows, I enjoy building high-fidelity platforms and turning designs into elegant, fluid realities.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Row: Compact Skills Grid sitting below biography */}
          <div className="reveal reveal-delay-300 border-t border-white/5 pt-10">
            <h3 className="text-xl font-bold text-white mb-6 text-center md:text-left tracking-wide">
              Technical Arsenal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col">
                  
                  {/* Category Header */}
                  <div className="flex items-center space-x-2.5 pb-3 border-b border-white/5 mb-4">
                    {category.icon}
                    <h4 className="font-bold text-white tracking-wider text-xs uppercase">{category.title}</h4>
                  </div>

                  {/* Skills Pills Box */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skIndex) => (
                      <div
                        key={skIndex}
                        className={`flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-300 transition-all duration-300 transform hover:-translate-y-0.5 cursor-default ${skill.glow}`}
                      >
                        {skill.icon}
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
