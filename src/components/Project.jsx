import React from 'react'
import { Link } from 'react-router-dom'
import ecommercehero from '../Media/showoff/ecommercehero.png';
import ecommerce1 from '../Media/showoff/ecommerce1.png';
import ecommerce2 from '../Media/showoff/ecommerce2.png';
import ecommerce3 from '../Media/showoff/ecommerce3.png';
import bloggerhero from '../Media/showoff/bloggerhero.png';
import blogger1 from '../Media/showoff/blogger1.png';
import blogger2 from '../Media/showoff/blogger2.png';
import blogger3 from '../Media/showoff/blogger3.png';

const projects = [
  {
    title: "Cara",
    subtitle: "The ecommerce",
    description: "Let your dreams come true",
    images: [ecommercehero, ecommerce1, ecommerce2, ecommerce3],
    liveDemo: "https://live-demo-cara.com",
    github: "https://github.com/cara-repo"
  },
  {
    title: "Blogger",
    subtitle: "The Blogging website",
    description: "Let your dreams come true",
    images: [bloggerhero, blogger1, blogger2, blogger3],
    liveDemo: "https://live-demo-cara.com",
    github: "https://github.com/cara-repo"
  }
];

const style = {
  boxShadow: '0 0 15px rgba(107, 114, 128, 0.5)',
};

function Project() {
  return (
    <div className='bg-gradient-to-tr overflow-auto scrollbar-hide h-full from-black via-gray-950 to-gray-800 text-white'>
      {projects.map((project)=>{
        return <div className='mb-20'>
          <div className='flex mx-12 my-4 gap-6'>
            <div className='h-full flex-1' style={style}>
              <img className='rounded-md' src={project.images[0]} alt={project.title} />
            </div>
            <div className='h-auto flex flex-col items-center -mt-1 gap-4 flex-[0.32]'>
              <div className='rounded-md w-full' style={style}>
                <img className='rounded-md aspect-video' src={project.images[1]} alt={project.title} />
              </div>
              <div className='rounded-md w-full' style={style}>
                <img className='rounded-md aspect-video' src={project.images[2]} alt={project.title} />
              </div>
              <div className='rounded-md w-full' style={style}>
                <img className='rounded-md aspect-video' src={project.images[3]} alt={project.title} />
              </div>
            </div>
          </div>
          <div className='mx-12 my-5'>
            <div className='flex gap-5 mx-6 mt-5 mb-5'>
              <button className=''>
                <Link to={project.github} target="_blank" className="border-2 border-green-500 px-4 py-2 text-lg rounded hover:bg-green-600 duration-150">Github</Link>
              </button>
              <button>
                <Link to={project.liveDemo} target="_blank" className="border-2 border-green-500 px-4 py-2 text-lg rounded hover:bg-green-600 duration-150">Live Demo</Link>
              </button>
            </div>
            <div className='tracking-wider text-xl'>
              <span className='text-3xl font-bold text-green-400'>{project.title} : </span>
              <span className='text-2xl font-semibold'>{project.subtitle}</span><br />
              <span className=''>{project.description}</span>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Project