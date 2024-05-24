import React,{useEffect,useRef} from 'react'
import { Link } from "react-router-dom";
import instagram from '../Media/instagram.png'
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'
import twitter from '../Media/twitter.png'
import Typed from 'typed.js';

function Home() {
    const element =useRef(null);
  
    useEffect(() => {
      const typed = new Typed(element.current, {
        strings: ['Mohd Zaid.', 'a Web Developer.', 'a Web Designer.'],
        typeSpeed: 80,
      });
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div className='bg-gradient-to-tr from-black  via-gray-950 to-gray-900 text-white w-full h-full flex'>
      <div className='flex flex-col justify-center pl-16'>
        <h3 className='text-xl'>Hi, There!</h3>
        <h1 className='py-3 font-extrabold text-5xl'>I am <span ref={element} className="text-green-500">Mohd Zaid.</span></h1>
        <p className='text-lg w-4/5'>A Creative Exlorer, on a compellong journey to reshape the future of Tech, guided by the thirst for innovation.</p>
        <div className="flex gap-5">
            <Link to="https://x.com/ZAIDrazvi9"><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></Link>
            <Link to="https://www.linkedin.com/in/mohd-zaid-b28aa2248/"><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></Link>
            <Link to="https://github.com/MohdZaid259"><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></Link>
        </div>
        <button className='my-2 bg-green-500 rounded-lg w-1/5 py-1 text-xl'>Download CV</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Home