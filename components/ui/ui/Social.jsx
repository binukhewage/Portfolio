import Link from "next/link"


import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/> , path: 'https://github.com/binukhewage' },
    {icon: <FaLinkedin/> , path: 'https://www.linkedin.com/in/binuk-hewage' },
    {icon: <FaInstagram/> , path: 'https://www.instagram.com/binuk.he' },
]



const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social