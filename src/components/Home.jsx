import React,{useEffect,useRef} from 'react'
import { Link } from "react-router-dom";
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'
import twitter from '../Media/twitter.png'
import Typed from 'typed.js';
import hero from '../Media/hero.png'
import { motion } from 'framer-motion';

function Home() {
    const element =useRef(null);
    const desc =useRef(null)

    useEffect(() => {
      const typed = new Typed(element.current, {
        strings: ['Mohd Zaid.', 'a Web Developer.', 'a Web Designer.'],
        typeSpeed: 70,
      });
      return () => {
        typed.destroy();
      };
    }, []);

    setTimeout(()=>{
      const descTyped = new Typed(desc.current, {
        strings:['A Creative Exlorer, on a compellong journey to reshape the future of Tech, guided by the thirst for innovation.'],
        typeSpeed:1,
      });
      return ()=>{
        descTyped.destroy();
      }
    },1000)

    const textVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 }
    }

  return (
    <div className='bg-gradient-to-br from-fuchsia-300 via-blue-300 to-green-200 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black w-full h-auto md:flex justify-center m-auto'>
      <div className='flex flex-1 flex-col justify-center pl-5 sm:pl-10 md:pl-16'>
        <motion.h3 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='pt-5 text-sm sm:text-lg md:text-2xl'>Hi, There!</motion.h3>
        <motion.h1 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5,delay:0.5}} className='py-3 font-extrabold text-xl sm:text-2xl md:text-5xl'>I am <span ref={element} className="dark:text-green-500 text-pink-600"></span></motion.h1>
        <motion.p initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5,delay:1}} className='text-sm pr-2 sm:text-lg md:text-xl w-full'><span ref={desc}></span></motion.p>
        <motion.div initial='hidden' animate='visible' variants={textVariants} transition={{duration:0.5,delay:1.5}} className="flex gap-5">
          <Link to="https://x.com/zaidrazvi09" target='_blank'><img className='dark:invert w-5 md:w-7 my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></Link>
          <Link to="https://www.linkedin.com/in/mohd-zaid-b28aa2248/" target='_blank'><img className='dark:invert w-5 md:w-7 my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></Link>
          <Link to="https://github.com/MohdZaid259" target='_blank'><img className='dark:invert w-6 md:w-8 my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></Link>
        </motion.div>
        <motion.button initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5,delay:2}} className='my-2 dark:bg-green-500 bg-pink-600 dark:hover:bg-green-600 hover:bg-pink-700 text-white rounded-lg w-fit px-2 py-1 text-base sm:text-lg md:text-xl'>Download CV</motion.button>
      </div>
      <div className='flex flex-1  items-center m-auto'>
        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='md:pl-10 h-1/6 sm:h-1/5 md:h-3/4 w-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_20px_rgba(225,225,225,0.25)]' src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home