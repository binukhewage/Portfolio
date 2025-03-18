"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'frontend project',
    title: 'Job Portal',
    description: 'Developed a user-friendly job portal website that provides an intuitive platform for users to seamlessly search for and explore job opportunities. The backend, powered by a JSON server, simulates real-world job data, enabling a dynamic and interactive job search experience.',
    stack: [{ name: "ReactJS" }, { name: "Tailwind Css" }],
    image: '/assets/work/7.png',
    live: 'https://job-portal-sigma-two.vercel.app',
    github: "https://github.com/binukhewage/JobPortal",
  },
  {
    num: '02',
    category: 'frontend project',
    title: 'Real Estate Website',
    description: 'Developed a user-friendly real estate website that offers an intuitive platform for users to seamlessly search for and explore properties. The site is designed to enhance the property discovery experience, making it easy for users to find their ideal home or investment opportunity.',
    stack: [{ name: "ReactJS" }, { name: "Html" }, { name: "Css" }],
    image: '/assets/work/1.png',
    live: '',
    github: "https://github.com/binukhewage/Real-Estate-Website",
  },
  {
    num: '03',
    category: 'frontend project',
    title: 'Fashion Portfolio',
    description: 'Created a visually engaging fashion portfolio website that showcases designs and collections in a stylish, user-friendly format. The site allows users to effortlessly browse through various fashion pieces, providing an immersive experience that highlights creativity and craftsmanship.',
    stack: [{ name: "Wix" }],
    image: '/assets/work/2.png',
    live: 'https://sheharamad4.wixsite.com/shehara-madurawala-3',
    github: "",
  },
  {
    num: '04',
    category: 'frontend project',
    title: 'Travel Website',
    description: 'Developed an engaging travel website designed to inspire and simplify trip planning. Built with React.js and styled using Tailwind CSS, the platform offers an intuitive interface for users to explore destinations, compare packages, and plan their ideal getaway. The site prioritizes user experience, making travel discovery effortless and enjoyable.',
    stack: [{ name: "ReactJS" }, { name: "Tailwind Css" }],
    image: '/assets/work/6.png',
    live: 'https://development.d1q0biyqr94j8d.amplifyapp.com',
    github: "https://github.com/uexplus/consumer_web",
  },
  {
    num: '05',
    category: 'UI/UX',
    title: 'Crop Management App Design',
    description: 'Designed a user-friendly UI tailored for farmers, simplifying crop management and making it easy to monitor and manage their fields. The intuitive interface streamlines tasks, helping farmers efficiently track growth, plan harvests, and optimize crop yields with ease.',
    stack: [{ name: "Figma" }],
    image: '/assets/work/3.png',
    live: '',
    github: "",
  },
];

const Work = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden h-[400px]"
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  fill
                  className="object-cover"
                  alt={project.title}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-none group-hover:backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300"></div>

              {/* Default Content (Title and Category) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-white/60 uppercase mt-2">
                  {project.category}
                </p>
              </div>

              {/* Hover Content (Description, Stack, Buttons) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-white">
                  {/* Project Number and Category */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-accent">
                      {project.num}
                    </span>
                    <span className="text-sm uppercase text-white/60">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm text-white/80 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <ul className="flex gap-2 flex-wrap mb-4">
                    {project.stack.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-accent bg-white/10 px-2 py-1 rounded-full"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    {/* Live Project Button */}
                    {project.live && (
                      <Link href={project.live}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-all">
                              <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                              <TooltipContent>
                                <p>Live Project</p>
                              </TooltipContent>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}

                    {/* GitHub Button */}
                    {project.github && (
                      <Link href={project.github}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-all">
                              <BsGithub className="text-white text-xl group-hover:text-accent" />
                              <TooltipContent>
                                <p>GitHub</p>
                              </TooltipContent>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;