"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from "next/link";
import Work from '../work/page';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "Crafting responsive, high-performance websites tailored to your business needs, ensuring scalability and seamless integration.",
    href: ""
  },

  {
    num: '02',
    title: 'UI/UX Design',
    description: "Designing intuitive and visually engaging interfaces that prioritize user experience, enhancing usability and brand identity.",
    href: ""
  },
];

//import {motion} from "framer-motion";


const Services = () => {
  return (
    <section className='min-h-[75vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((services, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{services.num}</div>
                  <Link href={services.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45  '>
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                {/* Title */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{services.title}</h2>
                {/* description */}
                <p className='text-white/60 text-[20px]'>{services.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
                
              </div>
            )
          }
        )}
        </div>
      </div>
    </section>
  )
}

export default Services;