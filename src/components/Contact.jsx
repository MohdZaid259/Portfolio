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
      <div className='bg-gradient-to-tr from-black  via-gray-950 to-gray-800 text-white w-full h-full flex justify-around items-center'>
      <div className='flex flex-col gap-3 mt-10'>
        <h2 className='text-3xl font-bold '>Let's Chat.</h2>
        <h2 className='text-3xl font-bold mb-5'>Tell me about your project.</h2>
        <div className="border-b-2 border-l-2 border-green-400 flex">
            <img className='invert w-8 m-4' src={mail} alt=""/>
            <div className="mt-2">
            <p className='font-semibold'>Mail me at</p>
            <p className='font-bold text-green-400../Media/mail.png'>razvizaid259@gmail.com</p>
            </div>
        </div>
        <div className="flex ml-5 mb-20 gap-5">
            <Link to="https://x.com/zaidrazvi09" target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></Link>
            <Link to="https://www.linkedin.com/in/mohd-zaid-b28aa2248/" target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></Link>
            <Link to="https://github.com/MohdZaid259" target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></Link>
            <Link to='https://www.google.co.in/maps/@26.2290722,81.2506927,14.84z?entry=ttu' target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={location} alt="" /></Link>
            <Link to="" target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={paperplane} alt="" /></Link>
        </div>
      </div>
      <div className="flex flex-col border-2 border-green-40 -mt-5 w-2/6 h-2/3 bg-gray-900 rounded-lg p-5">
        <h2 className='text-3xl mb-4'>Send us a message</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 ' action="">
            <input className='bg-gray-950 p-1 px-2 text-lg rounded-sm' type="text" placeholder="Full name*"/>
            <input className='bg-gray-950 p-1 px-2 text-lg rounded-sm' type="text" placeholder="Email address*"/>
            <input className='bg-gray-950 p-1 px-2 text-lg rounded-sm' type="text" placeholder="Subject"/>
            <textarea className='bg-gray-950 p-1 px-2 text-lg rounded-sm' name="" id="" cols="20" rows="5" placeholder="Message"/>
            <button type='submit' className='bg-green-600 hover:bg-green-700 mt-3 p-2 rounded-lg text-xl'>Send Message</button>
        </form>
      </div>
  </div>
  )
}

export default Contact