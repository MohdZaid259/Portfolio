import React from 'react'
import world from '../Media/world.png'
import fiverr from '../Media/fiverr.png'
import upwork from '../Media/upwork.png'
import { motion } from 'framer-motion'

function Freelance() {
  return (
    <div className='flex justify-start gap-5 pt-5 items-center'>
      <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,delay:2.5}} className='w-32 sm:w-40 md:w-52 lg:w-60 group relative h-[72px] sm:min-h-20 md:min-h-28 lg:min-h-32 border-green-500 border-2 rounded-xl bg-zinc-700 p-2'>
        <a href="http://fiverr.com/s/NN6KkpG" target='_blank'>
        <img src={world} alt="" className='absolute -translate-y-1 transition-transform group-hover:scale-90 duration-300 invert opacity-20' />
        <img src={fiverr} alt="" className='absolute p-1 sm:p-0 transition-transform scale-75 group-hover:scale-90 duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]'/>
        <span className='hidden md:inline-block font-semibold text-white absolute lg:bottom-2 md:bottom-1 md:right-2 lg:right-5'>click to visit</span>
        </a>
      </motion.div>
      <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.8,delay:3}} className='w-32 sm:w-40 md:w-52 lg:w-60 group relative h-[72px] sm:min-h-20 md:min-h-28 lg:min-h-32 border-2 border-green-500 rounded-xl bg-zinc-200 p-2'>
        <a href="https://upwork.com/freelancers/~0168a87cd15cfb210d" target='_blank'>
        <img src={world} alt="" className='absolute -translate-y-1 transition-transform group-hover:scale-90 duration-300 opacity-20' />
        <img src={upwork} alt="" className=' absolute transition-transform scale-75 group-hover:scale-90 duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%]'/>
        <span className='hidden md:inline-block font-bold text-black absolute lg:bottom-2 md:bottom-1 md:right-2 lg:right-5'>click to visit</span>
        </a>
      </motion.div>
    </div>
  )
}

export default Freelance