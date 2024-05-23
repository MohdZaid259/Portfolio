import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='h-screen flex flex-col'>
    <Navbar/>
    <Outlet className='flex flex-1 items-center'/>
    </div>
  )
}

export default App