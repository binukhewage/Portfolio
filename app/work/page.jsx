"use client";

import React, {useState} from "react"; 
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import WorkSliderBtns from "@/components/ui/ui/WorkSliderBtns";

const projects = [

  {
    num: '01',
    category: 'frontend project',
    title: 'Travel Website',
    description: 'Developed an engaging travel website designed to inspire and simplify trip planning. Built with React.js and styled using Tailwind CSS, the platform offers an intuitive interface for users to explore destinations, compare packages, and plan their ideal getaway. The site prioritizes user experience, making travel discovery effortless and enjoyable.',
    stack: [{name: "ReactJS"}, {name: "Tailwind Css"},],
    image: '/assets/work/6.png',
    live: 'https://development.d1q0biyqr94j8d.amplifyapp.com',
    github: "https://github.com/uexplus/consumer_web",
  },

  {
    num: '02',
    category: 'frontend project',
    title: 'Real Estate Website',
    description: 'Developed a user-friendly real estate website that offers an intuitive platform for users to seamlessly search for and explore properties. The site is designed to enhance the property discovery experience, making it easy for users to find their ideal home or investment opportunity.',
    stack: [{name: "ReactJS"}, {name: "Html"}, {name: "Css"},],
    image: '/assets/work/1.png',
    live: '',
    github: "https://github.com/binukhewage/Real-Estate-Website",
  },

  {
    num: '02',
    category: 'frontend project',
    title: 'Fashion Portfolio',
    description: 'Created a visually engaging fashion portfolio website that showcases designs and collections in a stylish, user-friendly format. The site allows users to effortlessly browse through various fashion pieces, providing an immersive experience that highlights creativity and craftsmanship.',
    stack: [{name: "Wix"}],
    image: '/assets/work/2.png',
    live: 'https://sheharamad4.wixsite.com/shehara-madurawala-3',
    github: "",
  },

  {
    num: '03',
    category: 'UI/UX',
    title: 'Crop Management App Design',
    description: 'Designed a user-friendly UI tailored for farmers, simplifying crop management and making it easy to monitor and manage their fields. The intuitive interface streamlines tasks, helping farmers efficiently track growth, plan harvests, and optimize crop yields with ease.',
    stack: [{name: "Figma"}],
    image: '/assets/work/3.png',
    live: '',
    github: "",
  },
]

const Work = () => {

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }
  const [project, setProject] = useState(projects[0]);
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
                </div>
                {/* projects category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <h3 className="text-1xl">{project.title}</h3>
                {/* project description */}
                <p className="text-white/60">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return(
                      <li key={index} className="text-xl text-accent ">{item.name}

                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                       </li>
                    )
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>

                {/* buttons */}
                <div className="flex items-center gap-4 ">
                  {/* live project button */}
                  <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>

                  {/* github button */}
                  <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                    {/*image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover"/>
                    </div>
                    </div>
                    </SwiperSlide>
                )
              })}
            </Swiper>

            {/* swiper buttons */}
            <WorkSliderBtns 
              containerStyles="justify-end flex gap-2 z-20 relative bottom-20"  // Positioning at bottom-right
              btnStyles="bg-white/10 p-2 rounded-full text-white hover:text-accent transition"
              iconStyles="w-6 h-6"
            />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Work;

