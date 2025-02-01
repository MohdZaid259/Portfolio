import {useEffect,useRef} from 'react'
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'
import twitter from '../Media/twitter.png'
import Typed from 'typed.js';
import hero from '../Media/hero.webp'
import { motion } from 'framer-motion';
import resume_fs from '../asset/resume_fs.pdf'
import Freelance from './Freelance';

function Home() {
    const element =useRef(null);
    const desc =useRef(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        new Typed(element.current, {
          strings: ['Mohd Zaid.', 'a Frontend Specialist', 'a FullStack Developer.'],
          typeSpeed: 70,
        });
      }, 800);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        new Typed(desc.current, {
          strings:['A Creative Exlorer, on a compellong journey to reshape the future of Tech, guided by the thirst for innovation.'],
          typeSpeed:3
        });
      }, 1000);
      return () => clearTimeout(timer);
  }, []);

    const textVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 }
    }

  return (
      <section data-testid='home-1' className='h-full lg:h-screen bg-radial-gradient dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black w-full sm:flex justify-center m-auto'>
      <div className='flex flex-1 flex-col justify-center pl-5 pt-10 sm:pl-10 md:pl-16'>
        <motion.h3 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.3}} className='pt-5 text-base sm:text-lg md:text-2xl'>Hi, There!</motion.h3>
        <motion.h1 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.3,delay:0.3}} className='py-3 font-extrabold text-2xl sm:text-3xl md:text-5xl'>I am <span ref={element} className=" dark:text-green-500 text-pink-600"></span></motion.h1>
        <motion.p initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.3,delay:0.6}} className='text-base pr-2 sm:text-lg md:text-xl w-full'><span ref={desc}></span></motion.p>
        <motion.div initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.3,delay:0.9}} className="flex gap-5 pt-2">
          <a href="https://x.com/zaidrazvi09" aria-label='twitter' target='_blank'><img loading='lazy' className='dark:invert w-7 h-auto md:w-8 my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></a>
          <a href="https://www.linkedin.com/in/mohd-zaid-b28aa2248/" aria-label='linkedin' target='_blank'><img loading='lazy' className='dark:invert w-7 h-auto md:w-8 my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></a>
          <a href="https://github.com/MohdZaid259" aria-label='github' target='_blank'><img loading='lazy' className='dark:invert w-8 h-auto md:w-9 my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></a>
        </motion.div>
        <motion.a href={resume_fs} initial='hidden' aria-label='resume' whileInView='visible' variants={textVariants} transition={{duration:0.3,delay:1.2}} className='my-2 dark:bg-green-600 bg-pink-600 dark:hover:bg-green-700 hover:bg-pink-700 text-white rounded-md w-fit px-3 py-1 text-base sm:text-lg md:text-xl'>Checkout CV</motion.a>
      <Freelance/>
      </div>
      <div className='flex flex-1 items-center m-auto'>
        <motion.img loading='eager' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='md:pl-10 md:mt-10 h-1/6 sm:h-1/5 lg:h-1/4 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_10px_rgba(225,225,225,0.25)]' src={hero} alt="" />
      </div>
    </section>
  )
}

export default Home