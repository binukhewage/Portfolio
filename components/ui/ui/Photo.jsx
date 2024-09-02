"use clients";

import Image from "next/image"; 


const Photo = () => {
  return (
    <div className="w-full h-full realtive">
        <div>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
                <Image src="/assets/work/heroimg.png" priority quality={100} fill alt="" className="obeject-containe" />
            </div>
        </div>
    </div>
  )
}

export default Photo