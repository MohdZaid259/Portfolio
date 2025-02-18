import html from '../Media/skills/html.png' 
import css from '../Media/skills/css.png' 
import atom from '../Media/skills/atom.png' 
import redux from '../Media/skills/redux.png'  
import tailwind from '../Media/skills/tailwind.png' 
import node from '../Media/skills/node.webp' 
import appwrite from '../Media/skills/appwrite.png' 
import express from '../Media/skills/express.png' 
import framer from '../Media/skills/framer.png' 
import js from '../Media/skills/js.png' 
import c from '../Media/skills/c.png' 
import firebase from '../Media/skills/firebase.png' 
import postman from '../Media/skills/postman.jpeg' 
import shadcn from '../Media/skills/shadcn.jpeg' 
import vercel from '../Media/skills/vercel.png' 
import axios from '../Media/skills/axios.jpeg' 
import ts from '../Media/skills/ts.png' 
import mysql from '../Media/skills/mysql.png' 
import mongodb from '../Media/skills/mongodb.png' 
import git from '../Media/skills/git.png' 
import github from '../Media/skills/github.png' 
// import jest from '../Media/skills/jest.png'
import next from '../Media/skills/next.png'
import { easeInOut, motion } from 'framer-motion'

function Skills() {
  const img = [
    html,css,atom,redux,tailwind,shadcn,node,next,appwrite,express,axios,firebase,framer,js,c,ts,mysql,mongodb,git,github,vercel,postman
  ]
  const skills=[
    ['HTML 5','CSS 3','ReactJs','Redux','Tailwind','Shadcn','Framer Motion'],
    ['NodeJs','NextJs','Express','Appwrite','Axios','Firebase'],
    ['Typescript','Javascript','Python','c'],
    ['MongoDb','MySQL'],
    ['Git','Github','Postman','Vercel']
  ]
  const tooltipTexts = [
    'HTML','CSS','ReactJs','Redux','Tailwind','Shadcn','NodeJs','NextJs','Appwrite','Express','Axios','Firebase','Framer Motion','Javascript','c','Typescript','MySQL','MongoDb','Git','Github','Vercel','Postman'
  ];
  const variants = {
    hidden:{
      opacity:0,
      scale:0
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        staggerChildren:0.05      
      }
    }
  }
  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i)=>(
      { 
        opacity: 1, 
        x: 0,  
        transition:{ delay: i * 0.3, easeInOut} 
      }
    )
  }

  const totalCells = 8 * 6;
  const gridCells = Array.from({ length: totalCells }, (_, index) => index);

  return (
    <section className="h-full lg:h-screen px-5 py-10 gap-5 bg-radial-gradient dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black">
      <h1 className="px-2 sm:pl-5 md:px-12 text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400">
        # Skills
      </h1>
      <div className="flex flex-col md:flex-row ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          id="shapeContainer"
          className="p-3 mb-5 md:mb-0 -mt-5 grid grid-cols-5 grid-rows-4 md:grid-cols-9 md:grid-rows-5 justify-items-center items-center w-full md:w-3/5"
        >
          {gridCells.map((cellIndex) => {
            const isImageCell = cellIndex % 1 === 0;
            const imageIndex = cellIndex / 2;
            const tooltipText = tooltipTexts[imageIndex] || "skill";
            return (
              <motion.div variants={variants} key={cellIndex} className="relative">
                {isImageCell && img[imageIndex] && (
                  <div className="group relative">
                    <img
                      loading="lazy"
                      src={img[imageIndex]}
                      alt="img"
                      className={`p-1 md:p-2 border border-pink-700 aspect-square object-cover dark:border-green-400 rounded-full w-11 sm:w-14 md:w-16 hover:cursor-pointer`}
                      onClick={(e) => {
                        const tooltip = e.currentTarget.nextSibling;
                        tooltip.classList.add('visible');
                        setTimeout(() => {
                          tooltip.classList.remove('visible');
                        }, 500); 
                      }}
                    />
                    <span
                      className="tooltip absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm text-white bg-transparent rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                    >{tooltipText}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
        <div className='flex flex-1 justify-center items-center'>
          <div className="grid grid-cols-[auto_auto]  grid-rows-[auto_auto_auto] gap-x-24 gap-y-5">
            <div>
              <span className="text-xl md:text-2xl font-semibold  text-pink-700 dark:text-green-400">
                Frontend
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className="flex flex-col"
              >
                {skills[0].map((item, i) => {
                  return (
                    <motion.span key={i} variants={textVariants} custom={i}>
                      {item}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-semibold text-pink-700 dark:text-green-400">
                Backend
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className="flex flex-col"
              >
                {skills[1].map((item, i) => {
                  return (
                    <motion.span key={i} variants={textVariants} custom={i}>
                      {item}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
            <div className="">
              <span className="text-xl md:text-2xl font-semibold text-pink-700 dark:text-green-400">
                Languages
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className="flex flex-col"
              >
                {skills[2].map((item, i) => {
                  return (
                    <motion.span key={i} variants={textVariants} custom={i}>
                      {item}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
            <div className="">
              <span className="text-xl md:text-2xl font-semibold text-pink-700 dark:text-green-400">
                Tools
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className="flex flex-col"
              >
                {skills[4].map((item, i) => {
                  return (
                    <motion.span key={i} variants={textVariants} custom={i}>
                      {item}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
            <div className="">
              <span className="text-xl md:text-2xl font-semibold text-pink-700 dark:text-green-400">
                DBMS
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className="flex flex-col"
              >
                {skills[3].map((item, i) => {
                  return (
                    <motion.span key={i} variants={textVariants} custom={i}>
                      {item}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills