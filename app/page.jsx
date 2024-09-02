import { Button } from "@/components/ui/ui/button"
import {FiDownload} from 'react-icons/fi'
import Social from "@/components/ui/ui/Social"
import Photo from "@/components/ui/ui/Photo"
import Stats from "@/components/ui/ui/Stats"
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Photo*/}
          <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 flex justify-center xl:justify-start  xl:mb-0 xs:mb-[60px]" > 
          <img
            className="rounded-full object-contain xl:w-[390px] xl:h-[550px] xs:w-[350px] xs:h-[350px] sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border border-accent"
            src="/assets/work/heroimg.png"
            alt=""
          />
          </div>
          {/*text*/}
          <div className="text-center xl:text-left">
            <span className="text:xl ">Full Stack Developer Intern</span>
            <h1 className="h1">I'm <br /><span className="text-accent ">Binuk Hewage</span></h1>
            <p className="max-w-[500px] mb-9 text-white/60">
            Passionate Full Stack Developer with hands-on experience in web development and design, proficient in a wide range of programming languages and technologies.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
