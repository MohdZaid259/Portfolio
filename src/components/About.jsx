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
    <section className='flex bg-radial-gradient py-10 h-auto lg:h-screen gap-7 justify-center dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <div className='md:flex m-auto md:flex-col px-5 sm:pl-8 md:px-16 justify-center items-start '>
        <motion.h1 initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.4}} className='text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400 '># know me</motion.h1>
        <motion.p initial='hidden' whileInView='visible' variants={textVariants} transition={{duration:0.4}} className='w-full text-base sm:text-lg md:text-xl'>
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qopen} alt=""/>
          <p className='inline ml-6'>Hey there! I’m Zaid, a frontend specialist evolving into a full-stack innovator with a passion for building seamless, high-performance web applications. As a final-year Computer Applications student, I’m constantly pushing boundaries in modern web development.<br/><br/></p>
          <p className='inline ml-6'>
          My expertise centers around Next.js, React, and cutting-edge tools like ShadCN, Framer Motion, and Zustand. I excel in creating SEO-friendly, AI-integrated applications, with a strong focus on performance optimization and user experience. I’m also proficient in backend technologies like Node.js, Appwrite, and MongoDB, enabling me to deliver end-to-end solutions.<br/><br/></p>
          <p className='inline ml-6 mr-2'>
          I’m driven by problem-solving, collaboration, and a relentless pursuit of excellence, making every project a fusion of innovation and reliability. Let’s create something extraordinary!</p>
          <img loading='lazy' className='inline w-4 md:w-8 dark:invert-0 invert' src={qclose} alt=""/>
        </motion.p>
        <img loading='lazy' className='lg:ml-[52rem] m-auto w-24 sm:w-36 mt-7 dark:invert-0 invert dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)]' src={signatureop} alt=""/>
      </div>
    </section>
  )
}
