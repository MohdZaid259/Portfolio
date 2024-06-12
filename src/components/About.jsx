import React from 'react'
import qopen from '../Media/qopen.png'
import qclose from '../Media/qclose.png'
import signatureop from '../Media/signatureop.png'

export default function About() {
  const style = {
    boxShadow: '0 5px 8px rgba(0, 0, 0, 0.4)',
  };

  return (
    <div className='flex h-full gap-7 justify-center bg-gradient-to-tr from-black  via-gray-950 to-gray-800 text-white'>
      <div className='flex flex-col pl-16 justify-center items-start '>
        <h1 className='text-5xl -mt-10 mb-10 font-bold text-green-400'># know me</h1>
        <p className='w-2/3 pr-20 text-2xl'>
          <img className='inline w-8' src={qopen} style={style} alt=""/>
          <p className='inline ml-6'>I'm Mohd Zaid, a dedicated computer applications student with a forte for coding and a relentless drive for web game development.<br/><br/></p>
          <p className='inline ml-6'>
          Beyond the digital landscape, I derive immense joy from photography and the art of creative editing. I thrive on tackling complex problems as they fuel my drive for personal and academic growth. <br/><br/></p>
          <p className='inline ml-6 mr-6'>
          Discipline, honesty, and unwavering consistency are my guiding principles, and my ultimate aspiration is to leave an indelible mark in the realms of technology and creativity.</p>
          <img className='inline w-8' src={qclose} style={style} alt=""/>
        </p>
        <img className='ml-32rem' src={signatureop} style={style} alt=""/>
      </div>
    </div>
  )
}
// or use arbitrary value: ml-[32rem]