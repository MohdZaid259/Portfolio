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
import mysql from '../Media/skills/mysql.png' 
import mongodb from '../Media/skills/mongodb.png' 
import git from '../Media/skills/git.png' 
import github from '../Media/skills/github.png' 
import '../style.css'

function Skills() {
  const img = [
    html,css,atom,redux,tailwind,nodejs,appwrite,express,framer,js,cpp,java,mysql,mongodb,git,github
  ]
  const totalCells = 6 * 6;
  const gridCells = Array.from({ length: totalCells }, (_, index) => index);

  return (
    <div className='h-full flex p-10 gap-5 bg-gradient-to-br from-fuchsia-300 via-blue-300 to-green-200 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
        <div id="shapeContainer" className="p-10 -mt-5 grid grid-cols-7 grid-rows-4 w-3/5">
            {gridCells.map((cellIndex) => {
                const isImageCell = cellIndex % 2 === 0;
                return (
                    <div key={cellIndex}>
                        {isImageCell && img[cellIndex / 2] && (
                            <img src={img[cellIndex / 2]} alt="" className="p-2 border border-pink-700 dark:border-green-400 rounded-full w-16 h-16" />
                        )}
                    </div>
                );
            })}
        </div>
      <div className='flex flex-1'>
        <div className='flex flex-col w-full flex-wrap gap-5'>
          <div className='flex justify-around'>
            <div>
              <div className='text-2xl font-semibold -mx-1 text-pink-700 dark:text-green-400'>Frontend</div>
                <div className='flex flex-col -mx-1'>
                  <span className='text-lg'>HTML 5</span>        
                  <span className='text-lg'>CSS 3</span>        
                  <span className='text-lg'>ReactJs</span>        
                  <span className='text-lg'>Redux</span>        
                  <span className='text-lg'>Tailwind</span>        
                  <span className='text-lg'>Framer</span>        
                </div>
            </div>
            <div>
              <div className='text-2xl font-semibold text-pink-700 dark:text-green-400'>Backend</div>
                <div className='flex flex-col'>
                  <span className='text-lg'>NodeJs</span>
                  <span className='text-lg'>Express</span>
                  <span className='text-lg'>Appwrite</span>
                </div>
            </div>
          </div>
          <div className='mx-20 flex flex-col gap-5'>
          <div className=''>
            <span className='text-2xl font-semibold text-pink-700 dark:text-green-400'>Languages known</span>
            <div className='flex flex-col'>
              <span className='text-lg'>Javascript</span>
              <span className='text-lg'>Python</span>
              <span className='text-lg'>C++</span>
            </div>
          </div>
          <div className=''>
            <span className='text-2xl font-semibold text-pink-700 dark:text-green-400'>Database Management</span>
            <div className='flex flex-col'>
              <span className='text-lg'>MongoDb</span>
              <span className='text-lg'>MySQL</span>
            </div>
          </div>
          <div className=''>
            <span className='text-2xl font-semibold text-pink-700 dark:text-green-400'>Version Control</span>
            <div className='flex flex-col'>
              <span className='text-lg'>GitHub</span>
              <span className='text-lg'>Git</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills