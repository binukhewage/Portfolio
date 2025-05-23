"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "Year Of Experience"
    },

    {
        num: 15,
        text: "Projects Completed"
    },

    {
        num: 8,
        text: "Technologies Mastered"
    },

    {
        num: 250,
        text: "Code Commits"
    },
]

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                    <div className="flex-1 flex gap-4 items-center justify-center" key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold text-white/80"/>
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/60`}>{item.text}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats