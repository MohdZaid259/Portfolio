import React from 'react'
import { Link } from "react-router-dom";
import mail from '../Media/mail.png'
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'
import twitter from '../Media/twitter.png'
import paperplane from '../Media/paperplane.png'
import location from '../Media/location.png'

function Contact() {
  const handleSubmit=()=>{

  }

  return (
      <div className='bg-gradient-to-br from-blue-500 via-blue-300 to-green-200 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black w-full h-full md:flex justify-around items-center px-10'>
      <div className='flex flex-col gap-1 md:gap-3 mt-10'>
        <h2 className='text-xl md:text-3xl font-bold '>Let's <span className='text-pink-600 dark:text-green-500'>Chat</span>.</h2>
        <h2 className='text-xl md:text-3xl font-bold mb-5'>Tell me about your project.</h2>
        <div className="border-b-2 border-l-2 border-pink-600 dark:border-green-400 flex">
            <img className='dark:invert w-8 m-4' src={mail} alt=""/>
            <div className="mt-2">
            <p className='font-semibold'>Mail me at</p>
            <p className='font-bold text-pink-600 dark:text-green-400'>razvizaid259@gmail.com</p>
            </div>
        </div>
        <div className="flex ml-5 mb-20 gap-5">
            <Link to="https://x.com/zaidrazvi09" target='_blank'><img className='dark:invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></Link>
            <Link to="https://www.linkedin.com/in/mohd-zaid-b28aa2248/" target='_blank'><img className='dark:invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></Link>
            <Link to="https://github.com/MohdZaid259" target='_blank'><img className='dark:invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></Link>
            <Link to='https://www.google.co.in/maps/@26.2290722,81.2506927,14.84z?entry=ttu' target='_blank'><img className='dark:invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={location} alt="" /></Link>
            <Link to="" target='_blank'><img className='dark:invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={paperplane} alt="" /></Link>
        </div>
      </div>
      <div className="flex w-full flex-col border-2 border-black dark:border-white -mt-5 md:w-2/6 dark:bg-gray-900 rounded-lg p-4">
        <h2 className='text-lg md:text-3xl mb-3'>Send us a message</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2' action="">
            <input className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' type="text" placeholder="Full name*"/>
            <input className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' type="text" placeholder="Email address*"/>
            <input className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' type="text" placeholder="Subject"/>
            <textarea className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' name="" id="" cols="20" rows="5" placeholder="Message"/>
            <button type='submit' className='bg-pink-600 dark:bg-green-600 hover:bg-pink-700 dark:hover:bg-green-700 text-white mt-2 p-2 font-bold rounded-lg text-base md:text-xl'>Send Message</button>
        </form>
      </div>
  </div>
  )
}

export default Contact