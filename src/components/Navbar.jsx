import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import { ThemeProvider,Switcher } from '../context/Theme'
import z from '../Media/z.png'
import menu from '../Media/menu.png'
import close from '../Media/close.png'

export default function Header() {
  const [ham, setHam] = useState(false);
  const handleHam = () => setHam(!ham); 

  const navItems=[
    {
      name:'Home',
      slug:'/'
    },
    {
      name: "About",
      slug: "/about"
    },
    {
      name: "Skills",
      slug: "/skills"
    },
    {
      name: "Projects",
      slug: "/projects"
    }
  ]

  return (
      <div className="flex drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0_10px_rgba(225,225,225,0.15)] justify-around items-center py-4 bg-gradient-to-r from-blue-400 via-blue-200 to-red-200 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 tracking-wider" >
          <Link to='/'><img className="w-12 invert dark:invert-0" src={z} alt="" /></Link>
          <div className="flex">
            <div onClick={handleHam} className="sm:hidden">
              {ham ? (
                <img className="w-5 mr-5 mt-1.5 dark:invert rounded-sm " src={close} alt="close" />
              ) : (
                <img className="w-7 mr-5 mt-0.5 dark:invert rounded-sm " src={menu} alt="menu" />
              )}
            </div>
            <ul
              onClick={handleHam}
              className={`dark:bg-inherit dark:text-white sm:text-base sm:bg-transparent w-auto rounded-lg sm:rounded-none p-5 sm:p-0 absolute sm:static top-16 right-4 ${
                ham
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 sm:opacity-100 -translate-y-[140%] sm:translate-y-0"
              } flex flex-col sm:flex-row items-end sm:items-center gap-3 sm:gap-4 sm:text-lg transition-all duration-150 ease-in-out`}
            >
            {navItems.map((item,id)=>(
              <NavLink key={id} className={({isActive})=>`${isActive?'dark:text-green-400 text-pink-700 underline':''} mx-3 hover:underline text-xl underline-offset-4`} to={item.slug}>{item.name}</NavLink>
            ))}
            <NavLink className={({isActive})=>`${isActive?'bg-green-700':''} mx-3 rounded-md dark:bg-green-600 text-white px-2 py-0.5 bg-pink-600 hover:bg-pink-700 dark:hover:bg-green-700 text-xl`} to='/contact'>Contact Me</NavLink>
            </ul>
            <div className="ml-2 invert dark:invert-0"><ThemeProvider><Switcher/></ThemeProvider></div>
          </div>
      </div>
  )
} 