import React from 'react'
import Cyber_security from '../Media/Cyber_Security.jpg'
import Gen_Ai from '../Media/Gen_Ai.jpg'
import cyber from '../asset/cyber.pdf'
import gen from '../asset/gen.pdf'
import { motion } from 'framer-motion';

const docs = [
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    subtitle: " ~ Microsoft & LinkedIn",
    description: `This program provided me with essential knowledge and practical skills in AI, focusing on responsible practices and the transformative potential of generative AI. This certification underscores my commitment to technological innovation and my readiness to implement advanced AI solutions in my work.`,
    images: Gen_Ai,
    link: gen
  },
  {
    title: "Introduction to Cyber Security",
    subtitle: " ~ Infosys Springboard",
    description: "This program provided me with essential skills in network security, data protection, and threat mitigation. The course's practical approach and real-world scenarios have equipped me to effectively safeguard digital assets and contribute to a secure digital environment.",
    images: Cyber_security,
    link: cyber
  }
]

function Certificate() {
  const variants = {
    visible:{
      opacity:1,
      y:0,
    },
    hidden:{
      opacity:0,
      y:50
    }
  }

  return (
    <section className='h-full px-2 bg-radial-gradient md:px-4 lg:px-10 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <h1 className='px-2 sm:pl-5 md:px-12 text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400'># Certificates</h1>
      {docs.map((item,id)=>{
        return (
          <div key={id} className='flex flex-col lg:flex-row lg:px-10 py-5'>
          <div className='flex xl:flex-1 px-3 justify-center'>
            <motion.img initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} className=' rounded-md' src={item.images} alt="certificate.png" />
          </div>
          <div className='flex pt-3 lg:w-2/3 flex-col pl-3 sm:pl-5 lg:pl-10 '>
            <motion.h2 initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5}} className='font-semibold text-2xl'>{item.title}</motion.h2>
            <motion.h3 initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5, delay:0.4}} className='text-xl italic'>{item.subtitle}</motion.h3>
            <motion.p initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5, delay:0.8}} className='pt-5 text-xl '>{item.description}</motion.p>
            <motion.a initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5, delay:1}}  href={item.link} target='_blank' className='border-2 w-24 border-pink-700 dark:border-green-500  text-center mt-3 py-0.5  lg:py-1 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150'>Certificate</motion.a>
          </div>
        </div>
        )
      })}
    </section>
  )
}

export default Certificate