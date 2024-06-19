import React from 'react'
import qopen from '../Media/qopen.png'
import qclose from '../Media/qclose.png'
import signatureop from '../Media/signatureop.png'

export default function About() {

  return (
    <div className='flex h-auto gap-7 justify-center bg-gradient-to-br from-green-200 via-green-50 to-green-200 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <div className='md:flex m-auto md:flex-col px-5 sm:pl-8 md:px-16 justify-center items-start '>
        <h1 className='text-xl md:text-2xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400'># know me</h1>
        <p className='w-full text-base sm:text-lg md:text-xl'>
          <img className='inline w-4 md:w-8 dark:invert-0 invert' src={qopen} alt=""/>
          <p className='inline ml-6'>Hii, I'm Zaid, a Full-stack developer with a passion for building high-quality web applications. I specialize in using ReactJS, NextJS, and Tailwind CSS on the frontend, and NodeJS, Express, and MongoDB on the backend.<br/><br/></p>
          <p className='inline ml-6'>
          I believe in creating websites that look great and perform exceptionally. Whether it's designing responsive layouts, optimizing performance, or developing robust backends, I strive to deliver top-notch results.<br/><br/></p>
          <p className='inline ml-6 mr-6'>
          If you need a developer skilled in the latest technologies with a strong design sense, let's chat about your project and how I can help bring your vision to life.</p>
          <img className='inline w-4 md:w-8 dark:invert-0 invert' src={qclose} alt=""/>
        </p>
        <img className='lg:ml-32rem m-auto w-24 sm:w-36 mt-7 dark:invert-0 invert' src={signatureop} alt=""/>
      </div>
    </div>
  )
}
