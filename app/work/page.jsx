"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'fullstack project',
    title: 'GOAT CULT',
    description: 'GOATCULT is a full-stack streetwear e-commerce platform built using the MERN stack—MongoDB, Express.js, React.js, and Node.js—designed to deliver a smooth, responsive, and visually striking user experience. The frontend is developed with React.js and Tailwind CSS, offering a mobile-first interface that reflects the brands bold identity. The platform features full e-commerce functionality including add-to-cart, wishlist, and secure checkout with Stripe/PayPal integration. supporting role-based access for buyers and admins. A custom admin dashboard allows seamless management of products, inventory, and orders.',
    stack: [{ name: "ReactJS" }, { name: "MongoDB" },{ name: "ExpressJs" }, { name: "NodeJs" }, { name: "Tailwind Css" }],
    image: '/assets/work/9.png',
    live: 'https://www.goatcult.lk',
    github: "https://github.com/binukhewage/goatco",
  },
  {
    num: '02',
    category: 'frontend Project',
    title: 'ORAGAN',
    description: "ORAGAN Website – Next.js Application This repository contains the official website for ORAGAN, an idea-to-product based company focused on transforming innovative concepts into impactful solutions. Built with Next.js, the site showcases the company's mission, services, and products while providing a seamless, responsive user experience.",
    stack: [{ name: "NextJS" }, { name: "Tailwind Css" }],
    image: '/assets/work/2.png',
    live: 'https://www.oragan-idea.com',
    github: "https://github.com/binukhewage/ORAGAN",
  },
  {
    num: '03',
    category: 'fullstack project',
    title: 'Environmental Condition Monitoring System',
    description: 'The Environmental Condition Monitoring System (ECMS) is a real-time dashboard web application developed using the MERN Stack . It allows users to monitor and manage environmental conditions across multiple IoT devices in real time',
    stack: [{ name: "ReactJS" }, { name: "MongoDB" },{ name: "ExpressJs" }, { name: "NodeJs" }, { name: "Tailwind Css" }],
    image: '/assets/work/3.png',
    live: '',
    github: "https://github.com/binukhewage/Environmental-Condition-Monitoring-System",
  },
  {
    num: '04',
    category: 'frontend project',
    title: 'Real Estate Website',
    description: 'Developed a user-friendly real estate website that offers an intuitive platform for users to seamlessly search for and explore properties. The site is designed to enhance the property discovery experience, making it easy for users to find their ideal home or investment opportunity.',
    stack: [{ name: "ReactJS" }, { name: "Html" }, { name: "Css" }],
    image: '/assets/work/4.png',
    live: 'https://real-estate-website-brown.vercel.app',
    github: "https://github.com/binukhewage/Real-Estate-Website",
  },
  {
    num: '05',
    category: 'frontend project',
    title: 'Fashion Portfolio',
    description: 'Created a visually engaging fashion portfolio website that showcases designs and collections in a stylish, user-friendly format. The site allows users to effortlessly browse through various fashion pieces, providing an immersive experience that highlights creativity and craftsmanship.',
    stack: [{ name: "Wix" }],
    image: '/assets/work/5.png',
    live: 'https://sheharamad4.wixsite.com/shehara-madurawala-3',
    github: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto px-4">
        

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image Carousel */}
          <div className="relative w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={projects[currentIndex].image}
              fill
              className="object-cover"
              alt={projects[currentIndex].title}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-between p-4">
              <button 
                onClick={prevProject}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
              >
                <BsChevronLeft className="text-white text-xl" />
              </button>
              <button 
                onClick={nextProject}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
              >
                <BsChevronRight className="text-white text-xl" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-accent w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 flex items-center gap-4">
              <span className="text-accent font-bold text-2xl">
                {projects[currentIndex].num}
              </span>
              <span className="text-sm uppercase text-gray-500">
                {projects[currentIndex].category}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white-900 mb-4">
              {projects[currentIndex].title}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {projects[currentIndex].description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[currentIndex].stack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {projects[currentIndex].live && (
                <Link
                  href={projects[currentIndex].live}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  Live Demo <FiExternalLink className="text-sm" />
                </Link>
              )}
              {projects[currentIndex].github && (
                <Link
                  href={projects[currentIndex].github}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  View Code <BsGithub className="text-sm" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;