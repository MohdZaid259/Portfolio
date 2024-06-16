import React,{useEffect,useRef} from 'react'
import { Link } from "react-router-dom";
import instagram from '../Media/instagram.png'
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'
import twitter from '../Media/twitter.png'
import Typed from 'typed.js';
import hero from '../Media/hero.png'

function Home() {
    const element =useRef(null);

    useEffect(() => {
      const typed = new Typed(element.current, {
        strings: ['Mohd Zaid.', 'a Web Developer.', 'a Web Designer.'],
        typeSpeed: 70,
      });
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div className='bg-gradient-to-br from-blue-400 via-blue-200 to-pink-100 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black w-full h-full flex justify-center'>
      <div className='flex flex-1 flex-col justify-center pl-16'>
        <h3 className='text-2xl'>Hi, There!</h3>
        <h1 className='py-3 font-extrabold text-5xl'>I am <span ref={element} className="dark:text-green-500 text-pink-600">Mohd Zaid.</span></h1>
        <p className='text-xl w-full'>A Creative Exlorer, on a compellong journey to reshape the future of Tech, guided by the thirst for innovation.</p>
        <div className="flex gap-5">
            <Link to="https://x.com/zaidrazvi09" target='_blank'><img className='dark:invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></Link>
            <Link to="https://www.linkedin.com/in/mohd-zaid-b28aa2248/" target='_blank'><img className='dark:invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></Link>
            <Link to="https://github.com/MohdZaid259" target='_blank'><img className='dark:invert w-8 my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></Link>
        </div>
        <button className='my-2 dark:bg-green-500 bg-pink-600 dark:hover:bg-green-600 hover:bg-pink-700 text-white rounded-lg w-1/5 py-1 text-xl'>Download CV</button>
      </div>
      <div className='flex flex-1 items-center'>
        <img className='pl-10 h-3/4 w-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_20px_rgba(225,225,225,0.25)]' src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home