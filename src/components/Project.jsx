import React, { useState, useEffect } from 'react';
import ecommercehero from '../Media/showoff/ecommercehero.png';
import ecommerce1 from '../Media/showoff/ecommerce1.png';
import ecommerce2 from '../Media/showoff/ecommerce2.png';
import ecommerce3 from '../Media/showoff/ecommerce3.png';
import bloggerhero from '../Media/showoff/bloggerhero.png';
import blogger1 from '../Media/showoff/blogger1.png';
import blogger2 from '../Media/showoff/blogger2.png';
import blogger3 from '../Media/showoff/blogger3.png';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Cara",
    subtitle: "The ecommerce",
    description: "I designed and developed 'Cara,' a frontend-based eCommerce website. Using React.js, Tailwind CSS, core JavaScript, and various other libraries, I brought this project to life. 'Cara' was the first fully-fledged website I created, showcasing my skills in modern web development and providing a smooth, user-friendly shopping experience.",
    images: [ecommercehero, ecommerce1, ecommerce2, ecommerce3],
    liveDemo: "https://live-demo-cara.com",
    github: "https://github.com/cara-repo"
  },
  {
    title: "Blogger",
    subtitle: "The Blogging website",
    description: "Built and deployed a production-quality blog application using Appwrite (backend-as-a-service). Utilizing a modern tech stack, including React.js, Tailwind CSS, and various other libraries, I engineered the application for seamless performance and robust functionality.",
    images: [bloggerhero, blogger1, blogger2, blogger3],
    liveDemo: "https://live-demo-cara.com",
    github: "https://github.com/cara-repo"
  },
  {
    title: "Youtube",
    subtitle: "A Legit Youtube Clone",
    description: "Built a full-stack web application with Express.js and React.js, seamlessly integrating MongoDB using Mongoose and optimizing for SEO to enhance visibility. Collaborating closely with 3 friends in pair programming sessions, we took Git to the next level, refining our development workflow and achieving outstanding results.",
    images: [bloggerhero, blogger1, blogger2, blogger3],
    liveDemo: "https://live-demo-cara.com",
    github: "https://github.com/cara-repo"
  }
];

function Project() {
  const [mainImageIndices, setMainImageIndices] = useState(Array(projects.length).fill(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainImageIndices(Array(projects.length).fill(0));
    }, 4000); 
    
    return () => clearTimeout(timer);
  }, [mainImageIndices]);

  const handleImageClick = (projectIndex, subImageIndex) => {
    setMainImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = subImageIndex;
      return newIndices;c
    });
  };

  const projectVarient = {
    visible:{
      opacity:1,
      x:0,
      transition:{
        staggerChildren: 0.3,
        ease:'easeInOut'
      }
    },
    hidden:{
      opacity:0,
      x:100
    }
  }
  const variants = {
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5
      }
    },
    hidden:{
      opacity:0,
      y:50
    }
  }

  return (
    <section className='h-full px-2 bg-radial-gradient md:px-4 lg:px-10 py-10 dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black'>
      <h1 className='dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)] px-2 sm:pl-5 md:px-12 text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400'># Projects</h1>
      {projects.map((project, projectIndex) => {
        const mainImageIndex = mainImageIndices[projectIndex];
        const mainImage = project.images[mainImageIndex];
        return (
          <div key={projectIndex}>
            <div className='flex mx-2 md:mx-4 lg:mx-12 my-3 gap-3'>
              <div className='h-full flex-1'>
                <motion.img
                  initial={{opacity:0,x:-100}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.7}}
                  className='border border-black rounded-sm transition-opacity duration-1000' 
                  src={mainImage} 
                  alt={project.title} 
                />
              </div>
              <motion.div initial='hidden' whileInView='visible' variants={projectVarient} className='h-auto  flex flex-col items-center -mt-1 gap-2 lg:gap-3 flex-[0.32]'>
                {project.images.map((image, subImageIndex) => (
                  subImageIndex !== mainImageIndex && (
                    <div key={subImageIndex}>
                      <img
                        className='border border-black rounded-sm aspect-video transition-opacity duration-1000'
                        src={image}
                        onClick={() => handleImageClick(projectIndex, subImageIndex)}
                        alt={project.title}
                      />
                    </div>
                  )
                ))}
              </motion.div>
            </div>
            <div className='px-4 lg:px-12'>
              <div className='flex gap-3 lg:gap-5 mx-2 lg:mx-6 mt-5 mb-5'>
                <button>
                  <a href={project.github} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Github</a>
                </button>
                <button>
                  <a href={project.liveDemo} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Live Demo</a>
                </button>
              </div>
              <div className='tracking-wider text-xl'>
                <motion.span initial='hidden' whileInView='visible' variants={variants} className='text-3xl font-bold text-pink-600 dark:text-green-400'>{project.title} : </motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants} className='text-2xl font-semibold'>{project.subtitle}</motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants} className='inline-block mt-3 pb-3'>{project.description}</motion.span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Project;