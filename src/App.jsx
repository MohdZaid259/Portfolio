import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Project = lazy(() => import('./components/Project'))
const Certificate = lazy(() => import('./components/Certificate'))
const Contact = lazy(() => import('./components/Contact'))

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
        <section className='h-full w-full' id='home'>
          <Home/>
        </section>
        <section className='h-full w-full' id='about'>
          <About />
        </section>
        <section className='h-full w-full' id='skills'>
          <Skills />
        </section>
        <section className='h-full w-full' id='projects'>
          <Project />
        </section>
        <section className='h-full w-full' id='certificates'>
          <Certificate />
        </section>
        <section className='h-full w-full' id='contact'>
          <Contact />
        </section>
      </Suspense> 
    </div>
  )
}

export default App