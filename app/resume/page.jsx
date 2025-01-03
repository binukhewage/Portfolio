"use clients";

import { University } from 'lucide-react';
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaPhp, FaWix, FaWordpress, FaNodeJs,} from 'react-icons/fa';
import {SiMysql, SiTailwindcss, SiCanva} from 'react-icons/si';

//About Data

const about = {
  title: 'About Me',
  description: "As a Full Stack Developer Intern and a Computer Science undergraduate, I have acquired extensive experience in software development. My hands-on involvement in various projects has allowed me to develop and maintain web applications, honing a wide range of skills in programming languages and technologies. These experiences have not only sharpened my technical expertise but also enhanced my ability to create intuitive, user-friendly solutions. I am dedicated to continuous learning and am eager to contribute to innovative projects that push the boundaries of technology.",
  info: [
    {
      fielName : 'Name',
      fieldValue : 'Binuk Hewage' 
    },
    {
      fielName : 'Email',
      fieldValue : 'binukhe@gmail.com' 
    },
    {
      fielName : 'Freelance',
      fieldValue : 'Available' 
    },
    {
      fielName : 'Country',
      fieldValue : 'Sri Lanka' 
    },
  ]
}

// Experience Data

const experience = {
  icon: '',
  title: "My Experience",
  description: 'As a Full Stack Developer, I have acquired extensive experience across various programming languages and technologies. My work in diverse organizations has provided me with a well-rounded skill set, enabling me to contribute effectively to both front-end and back-end development.',
  items: [
    {
      company: "Sri Lanka Telecom",
      position: "Full Stack Developer - Intern",
      duration: "2024-Present"
    },

    {
      company: "UEXplus",
      position: "FrontEnd Developer - Intern",
      duration: "2024-Present"
    },

    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2023-Present"
    }
  ]
}

//Education Data

const education = {
  icon: '',
  title: "My Education",
  description: "My passion for technology and commitment to pursuing a career in the IT industry led me to choose the University of Westminster for my higher education in Computer Science. This decision was driven by my desire to gain a solid foundation in the field and to develop the skills necessary for a successful career in technology.",
  items: [
    {
      University: "University Of Westminster",
      degree: "Bsc.Computer Science",
      duration: "2022-Present"
    },

    {
      University: "S.Thomas' College",
      degree: "GCE Advanced Level",
      duration: "2022"
    },

  ]
}

// Skills Data 

const skills = {
  icon: '',
  title: "My Skills",
  description: "Through my academic journey at university and hands-on experience in the industry, I have developed a strong skill set in web development and designing. These experiences have equipped me with the technical and creative abilities essential for building dynamic, user-friendly websites and applications.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },

    {
      icon: <FaCss3/>,
      name: "css 3"
    },

    {
      icon: <FaJs/>,
      name: "javascript"
    },

    {
      icon: <FaReact/>,
      name: "react.js"
    },

    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css"
    },

    {
      icon: <FaPhp/>,
      name: "php"
    },

    {
      icon: <SiMysql/>,
      name: "my sql"
    },

    {
      icon: <FaNodeJs/>,
      name: "node.js"
    },

    {
      icon: <FaFigma/>,
      name: "figma"
    },

    {
      icon: <FaWordpress/>,
      name: "wordPress"
    },

    {
      icon: <FaWix/>,
      name: "wix"
    },

    {
      icon: <SiCanva/>,
      name: "canva"
    },

  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'; 

import { ScrollArea } from '@radix-ui/react-scroll-area';

//import {motion} from "framer-motion";

const Resume = () => {
  return (
    <div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        
        <Tabs defaultValue='aboutme' className='flex flex-col xl:flex-row gap-[60px]' >
          <TabsList className='flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh] w-full'>
            {/* About Me */}
            <TabsContent value="aboutme" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[800px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return(
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fielName}: </span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left '>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* Dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    }
                  )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[60pxx] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                    {skills.skillList.map((skill, index) =>{
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
              </div>
            </TabsContent>

            {/* Education */} 
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left '>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/* Dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.University}</p>
                          </div>
                        </li>
                      )
                    }
                  )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default Resume;