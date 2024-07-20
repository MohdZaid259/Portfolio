import React from 'react'
import qopen from '../Media/qopen.png'
import qclose from '../Media/qclose.png'
import signatureop from '../Media/signatureop.png'
import { motion } from 'framer-motion'

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className='flex bg-radial-gradient py-10 h-auto gap-7 justify-center dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <div className='md:flex m-auto md:flex-col px-5 sm:pl-8 md:px-16 justify-center items-start '>
        <motion.h1 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400 '># know me</motion.h1>
        <motion.p initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.5}} className='w-full text-base sm:text-lg md:text-xl'>
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qopen} alt=""/>
          <p className='inline ml-6'>Hey there! I’m Zaid, a front-end enthusiast with a flair for crafting delightful web experiences. Currently, I’m in my final year of pursuing a Bachelor’s degree in Computer Applications.<br/><br/></p>
          <p className='inline ml-6'>
          My toolkit is robust, featuring HTML5, CSS3, JavaScript ES6+, and React.js. I'm also proficient in Tailwind CSS, Git, DevTools, Axios, Framer Motion, and Redux Toolkit. On the backend, I've experience with Node.js, Express.js, and MongoDB.<br/><br/></p>
          <p className='inline ml-6 mr-6'>
          I've built projects like a blog app using Appwrite, where I implemented features such as user registration, login, public posting, and editing. My soft skills include problem-solving, teamwork, communication, and consistency—traits that I believe are essential for any successful project.</p>
          {/* <p className='inline ml-6 mr-6'>When I’m not chasing bugs, you’ll find me sipping chai, solving DSA puzzles, or debugging that pesky CSS code. Let’s connect—I’m all ears for tech talk and eager to collaborate on innovative projects!</p> */}
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qclose} alt=""/>
        </motion.p>
        <img loading='lazy' className='lg:ml-[52rem] m-auto w-24 sm:w-36 mt-7 dark:invert-0 invert dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)]' src={signatureop} alt=""/>
      </div>
    </section>
  )
}
