"use client";

import { Button } from "@/components/ui/ui/button";
import { Input } from "@/components/ui/ui/input";
import { Textarea } from "@/components/ui/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';


const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: '(+94) 77 881 0168'
  },

  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: 'binukhe@gmail.com'
  },

  {
    icon: <FaMapMarkerAlt/>,
    title: 'Address',
    description: 'No:2/444, Green Village, Panadura.'
  },
]



const Contact = () => {
  return (
    <section className="py-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">
          
          {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" action="">
            <h3 className="text-4xl text-accent">Let's Work Together</h3>
            <p className="text-white/60">Whether you have a project in mind or are seeking expertise in web development and design, Please feel free to get in touch.</p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="FirstName"/>
              <Input type="lastname" placeholder="LastName"/>
              <Input type="email" placeholder="Email"/>
              <Input type="phone" placeholder="ContactNo"/>
            </div>
            {/* select  */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="select a service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Service</SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                  <SelectItem value="cst">UI/UX</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
              className="h-[200px] bg-primary"
              placeholder="Type Your Message Here."
            ></Textarea>
            {/* button */}
            <Button size="md" className="max-w-40">
              Send Message
            </Button>
          </form>
        </div>
        {/* Info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return(
                <li key={index} className="flex items-center gap-6 ">
                  <div className="w-[65px] h-[55px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;