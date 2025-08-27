import {useState} from "react";
import { ThemeProvider,Switcher } from '../context/Theme'
import z from '../Media/z.png'
import menu from '../Media/menu.png'
import close from '../Media/close.png'
import { motion } from "framer-motion";

export default function Header() {
  const [ham, setHam] = useState(false);
  const handleHam = () => setHam(!ham); 

  const navItems=[
    {
      name:'Home',
      slug:'#'
    },
    {
      name: "About",
      slug: "#about"
    },
    {
      name: "Skills",
      slug: "#skills"
    },
    {
      name: "Projects",
      slug: "#projects"
    },
    {
      name: "Certificates",
      slug: "#certificates"
    }
  ]
  const headerstyle = {
    boxShadow: '0 1px 4px rgba(0, 225, 150, 0.4)',
  };

  return (
    <section className="fixed top-0 w-full z-10 flex justify-around items-center py-2 backdrop-blur-sm tracking-normal md:tracking-wider" style={headerstyle}>
      <a href='/' aria-label="home">
            <motion.img loading="lazy" initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.4}} className="w-8 sm:w-12 invert dark:invert-0" src={z} alt="" />
      </a>
      <div className="flex">
        <div onClick={handleHam} className="sm:hidden">
          {ham ? (
            <img loading="lazy" className="w-5 h-auto mt-2 dark:invert rounded-sm" src={close} alt="close" />
          ) : (
            <img loading="lazy" className="w-7 h-auto mt-1 dark:invert rounded-sm" src={menu} alt="menu" />
          )}
        </div>
        <ul onClick={handleHam} className={`dark:text-white w-auto rounded-lg sm:rounded-none p-2 sm:p-0 absolute sm:static top-16 right-2 ${
            ham
              ? "opacity-100 translate-y-0 dark:bg-black/80 sm:dark:bg-transparent bg-green-100/80 sm:bg-transparent"
              : "opacity-0 sm:opacity-100 -translate-y-[140%] sm:translate-y-0"
          } flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-4 sm:text-base transition-all duration-200 ease-in-out`}
        >
        {navItems.map((item,id)=>(
          <li key={id} className="list-none"><a className='active:text-green-500 md:mx-3 hover:underline text-lg underline-offset-4' href={item.slug}>{item.name}</a></li>
        ))}
          <a href='#contact' className='active:text-green-500 mx-3 rounded-md dark:bg-green-600 text-white px-2 py-0.5 bg-pink-600 hover:bg-pink-700 dark:hover:bg-green-700 text-lg'>Contact Me</a>            
        </ul>
        <div className="ml-2 w-10 h-auto sm:w-12 invert dark:invert-0"><ThemeProvider><Switcher/></ThemeProvider></div>
      </div>
    </section>
  )
} 