import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <div className='overflow-y-auto scroll-smooth no-scrollbar'>
      <Navbar/>
      <Home className='snap-mandatory h-screen snap-y snap-center'/>
      <About className='snap-mandatory h-screen snap-y snap-center'/>
      <Skills className='snap-mandatory h-screen snap-y snap-center'/>
      <Project className='snap-mandatory h-screen snap-y snap-center'/>
      <Contact className='snap-mandatory h-screen snap-y snap-center'/>
    </div>
  )
}

export default App