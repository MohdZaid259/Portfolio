import React from 'react'
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

function Skills() {
  return (
    <div className='flex flex-col flex-wrap gap-10'>
      <div className=''>
        <span className='text-2xl font-semibold text-green-400'>Web Development</span>
        <div className='flex mt-5 gap-5 flex-wrap'>
        <img className='w-10' src={html}/>        
        <img className='w-10' src={css}/>
        <img className='w-10' src={atom}/>
        <img className='w-10' src={redux}/>    
        <img className='w-10' src={tailwind}/> 
        <img className='w-10' src={nodejs}/>
        <img className='w-10' src={appwrite}/>
        <img className='invert w-10' src={express}/>
        <img className='w-10' src={framer}/>
        </div>
      </div>
      <div>
        <span className='text-2xl font-semibold text-green-400'>Languages known</span>
        <div className='flex mt-5 gap-5 flex-wrap'>
        <img className='w-10' src={js}/>
        <img className='w-10' src={java}/>
        <img className='w-10' src={c}/>
        <img className='w-10' src={cpp}/>
        </div>
      </div>
      <div>
        <span className='text-2xl font-semibold text-green-400'>DataBase Management</span>
        <div className='flex mt-5 gap-5 flex-wrap'>
        <img className='w-10' src={mysql}/>
        <img className='w-10' src={mongodb}/>
        </div>
      </div>
      <div>
        <span className='text-2xl font-semibold text-green-400'>Version Control</span>
        <div className='flex mt-5 gap-5 flex-wrap'>
        <img className='w-10 invert' src={github}/>
        <img className='w-10' src={git}/>
        </div>
      </div>
    </div>
  )
}

export default Skills