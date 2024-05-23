import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Project from './components/Project.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}>
        <Route path="skills" element={<Skills/>}/>
        <Route path="education" element={<Education/>}/>
      </Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="projects" element={<Project/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
