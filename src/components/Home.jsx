import React,{useEffect,useRef} from 'react'
import { Link } from "react-router-dom";
import instagram from '../Media/instagram.png'
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'
import twitter from '../Media/twitter.png'
import Typed from 'typed.js';
import hero from '../Media/hero.png'

function Home() {
    const element =useRef(null);

    useEffect(() => {
      const typed = new Typed(element.current, {
        strings: ['Mohd Zaid.', 'a Web Developer.', 'a Web Designer.'],
        typeSpeed: 70,
      });
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div className='bg-gradient-to-tr from-black via-gray-950 to-gray-800 text-white w-full h-full flex justify-center'>
      <div className='flex flex-1 flex-col justify-center pl-16'>
        <h3 className='text-2xl'>Hi, There!</h3>
        <h1 className='py-3 font-extrabold text-5xl'>I am <span ref={element} className="text-green-500">Mohd Zaid.</span></h1>
        <p className='text-xl w-full'>A Creative Exlorer, on a compellong journey to reshape the future of Tech, guided by the thirst for innovation.</p>
        <div className="flex gap-5">
            <Link to="https://x.com/zaidrazvi09" target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></Link>
            <Link to="https://www.linkedin.com/in/mohd-zaid-b28aa2248/" target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></Link>
            <Link to="https://github.com/MohdZaid259" target='_blank'><img className='invert w-7 my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></Link>
        </div>
        <button className='my-2 bg-green-500 hover:bg-green-600 rounded-lg w-1/5 py-1 text-xl'>Download CV</button>
      </div>
      <div className='flex flex-1 items-center'>
        {/* <div className=' h-3/4 w-auto' style={{ backgroundImage: `url(${hero})`}}></div> */}
        <img className='pl-10 h-3/4 w-auto' src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home