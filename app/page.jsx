"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/ui/button";
import { FiDownload } from 'react-icons/fi';
import Social from "@/components/ui/ui/Social";
import Stats from "@/components/ui/ui/Stats";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const photoAnimation = {
  hidden: { opacity: 0, x: -100 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: 0.2
    }
  }
};

const Home = () => {
  return (
    <motion.section 
      className="h-full"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Photo with animation */}
          <motion.div 
            className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 flex justify-center xl:justify-start xl:mb-0 xs:mb-[60px]"
            variants={photoAnimation}
          > 
            <motion.img
              className="rounded-full object-contain xl:w-[390px] xl:h-[550px] xs:w-[350px] xs:h-[350px] sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-2 border-accent"
              src="/assets/work/heroimg.png"
              alt="Binuk Hewage"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>

          {/* Text content with animations */}
          <motion.div 
            className="text-center xl:text-left"
            variants={textAnimation}
          >
            <motion.span 
              className="text-xl text-accent"
              variants={item}
            >
              Full Stack Developer Intern
            </motion.span>
            
            <motion.h1 
              className="h1 mb-4"
              variants={item}
            >
              I'm <br />
              <motion.span 
                className="text-accent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Binuk Hewage
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="max-w-[500px] mb-9 text-white/60"
              variants={item}
            >
              Passionate Full Stack Developer with hands-on experience in web development and design, proficient in a wide range of programming languages and technologies.
            </motion.p>
            
            {/* Button and socials with animations */}
            <motion.div 
              className="flex flex-col xl:flex-row items-center gap-8"
              variants={item}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase items-center gap-2"
                >
                  <a download href="./CV.Final.pdf">
                    Download CV
                  </a>
                  <FiDownload className="text-xl"/>
                </Button>
              </motion.div>
              
              <motion.div 
                className="mb-8 xl:mb-0"
                whileHover={{ scale: 1.05 }}
              >
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Stats section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.div>
    </motion.section>
  )
}

export default Home;