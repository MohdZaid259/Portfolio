import React, { createElement, useEffect } from 'react'
import html from '../Media/skills/html.png' 
import css from '../Media/skills/css.png' 
import atom from '../Media/skills/atom.png' 
import redux from '../Media/skills/redux.png'  
import tailwind from '../Media/skills/tailwind.png' 
import nodejs from '../Media/skills/nodejs.png' 
import appwrite from '../Media/skills/appwrite.png' 
import express from '../Media/skills/express.png' 
import framer from '../Media/skills/framer.png' 
import js from '../Media/skills/js.png' 
import cpp from '../Media/skills/cpp.png' 
import java from '../Media/skills/java.png' 
import c from '../Media/skills/c.png' 
import mysql from '../Media/skills/mysql.png' 
import mongodb from '../Media/skills/mongodb.png' 
import git from '../Media/skills/git.png' 
import github from '../Media/skills/github.png' 
import '../style.css'

function Skills() {
  useEffect(()=>{
    for(let i=0;i<25;i++){
      const box = document.createElement('div')
      box.className='box absolute'

      const size = Math.random() * (78 - 10) + 15;
      box.style.width = `${size}px`
      box.style.height = `${size}px`
      console.log(window.innerWidth/2)
      const randomX = Math.random() * (window.innerWidth/2 - size);
      const randomY = Math.random() * (window.innerHeight/2 - size);
      box.style.left = `${randomX}px`;
      box.style.top = `${randomY}px`;
      box.style.marginTop = '7rem'
      box.style.marginLeft = '3rem'

      shapeContainer.appendChild(box)
    }
  },[])

  return (
    <div className='h-full flex p-10 gap-5 bg-gradient-to-tr from-black  via-gray-950 to-gray-800 text-white'>
      <div id='shapeContainer' className='flex gap-3 flex-wrap w-3/5'></div>
      <div>
        <div className='flex flex-col flex-wrap gap-5'>
          <div className=''>
            <div className='text-2xl font-semibold text-green-400'>Frontend Techstack</div>
              <div className='ml-7 flex my-5 gap-5 flex-wrap'>
                <img className='w-11' src={html}/>        
                <img className='w-11' src={css}/>
                <img className='w-11' src={atom}/>
                <img className='w-11' src={redux}/>    
                <img className='w-11' src={tailwind}/> 
                <img className='w-11' src={framer}/>
              </div>
            <div className='text-2xl font-semibold text-green-400'>Backend Techstack</div>
              <div className='ml-7 flex mt-5 gap-5 flex-wrap'>
                <img className='w-11' src={nodejs}/>
                <img className='invert w-11' src={express}/>
                <img className='w-11' src={appwrite}/>
              </div>
          </div>
          <div className=''>
            <span className='text-2xl font-semibold text-green-400'>Languages known</span>
            <div className='ml-7 flex mt-5 gap-5 flex-wrap'>
            <img className='w-11' src={js}/>
            <img className='w-11' src={java}/>
            <img className='w-11' src={c}/>
            <img className='w-11' src={cpp}/>
            </div>
          </div>
          <div className=''>
            <span className='text-2xl font-semibold text-green-400'>Database Management</span>
            <div className='ml-7 flex mt-5 gap-5 flex-wrap'>
            <img className='w-11' src={mysql}/>
            <img className='w-11' src={mongodb}/>
            </div>
          </div>
          <div className=''>
            <span className='text-2xl font-semibold text-green-400'>Version Control</span>
            <div className='ml-7 flex mt-5 gap-5 flex-wrap'>
            <img className='w-11 invert' src={github}/>
            <img className='w-11' src={git}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills