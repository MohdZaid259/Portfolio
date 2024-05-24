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
// import git from '../Media/skills/git.png' 
import github from '../Media/skills/github.png' 

function Skills() {
  return (
    <div className='flex flex-wrap gap-10'>
      <div>
        <span className='text-xl text-green-500'>Web Development</span>
        <div className='pl-5 pt-2'>
        <p className='flex items-center gap-5'>HTML 5 <img className='w-8' src={html}/></p>
        <p className='flex items-center gap-5'>CSS 3<img className='w-8' src={css}/></p>
        <p className='flex items-center gap-5'>React<img className='w-8' src={atom}/></p>
        <p className='flex items-center gap-5'>Redux<img className='w-8' src={redux}/></p>
        <p className='flex items-center gap-5'>Tailwind<img className='w-8' src={tailwind}/></p>
        <p className='flex items-center gap-5'>NodeJs<img className='w-8' src={nodejs}/></p>
        <p className='flex items-center gap-5'>Appwrite<img className='w-8' src={appwrite}/></p>
        <p className='flex items-center gap-5'>ExpressJs<img className='w-8 invert' src={express}/></p>
        <p className='flex items-center gap-5'>Framer Motion<img className='w-8' src={framer}/></p>
        </div>
      </div>
      <div>
        <span className='text-xl text-green-500'>Languages known</span>
        <div className='pl-5 pt-2'>
        <div className='flex items-center gap-5'>Javascript<img className='w-8' src={js}/></div>
        <div className='flex items-center gap-5'>Java<img className='w-8' src={java}/></div>
        <div className='flex items-center gap-5'>C<img className='w-8' src={c}/></div>
        <div className='flex items-center gap-5'>C++<img className='w-8' src={cpp}/></div>
        </div>
      </div>
      <div>
        <span className='text-xl text-green-500'>DataBase Management</span>
        <div className='pl-5 pt-2'>
        <p className='flex items-center gap-5'>MySQL<img className='w-8' src={mysql}/></p>
        <p className='flex items-center gap-5'>MongoDB<img className='w-8' src={mongodb}/></p>
        </div>
      </div>
      <div>
        <span className='text-xl text-green-500'>Version Control</span>
        <div className='pl-5 pt-2'>
        <div className='flex items-center gap-5'>Git<img className='w-8 invert' src={github}/></div>
        <div className='flex items-center gap-5'>Github<img className='w-8 invert' src={github}/></div>
        </div>
      </div>
    </div>
  )
}

export default Skills