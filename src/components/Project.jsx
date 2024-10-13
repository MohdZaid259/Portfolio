import { useState, useEffect } from 'react';
import ecommercehero from '../Media/showoff/ecommercehero.jpg';
import ecommerce1 from '../Media/showoff/ecommerce1.png';
import ecommerce2 from '../Media/showoff/ecommerce2.png';
import ecommerce3 from '../Media/showoff/ecommerce3.jpg';
import bloggerhero from '../Media/showoff/bloggerhero.png';
import blogger1 from '../Media/showoff/blogger1.jpg';
import blogger2 from '../Media/showoff/blogger2.png';
import blogger3 from '../Media/showoff/blogger3.png';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Cara",
    subtitle: "The ecommerce",
    description: "I designed and developed 'Cara,' a frontend-based eCommerce website. Using React.js, Tailwind CSS, core JavaScript, and various other libraries, I brought this project to life. 'Cara' was the first fully-fledged website I created, showcasing my skills in modern web development and providing a smooth, user-friendly shopping experience.",
    images: [ecommercehero, ecommerce1, ecommerce2, ecommerce3],
    liveDemo: "https://mohdzaid259.github.io/Cara_07/",
    github: "https://github.com/MohdZaid259/Cara_07.git"
  },
  {
    title: "Blogger",
    subtitle: "Unlock passion",
    description: "Built and deployed a production-quality blog application using Appwrite (backend-as-a-service). Utilizing a modern tech stack, including React.js, Tailwind CSS, and various other libraries, I engineered the application for seamless performance and robust functionality.",
    images: [bloggerhero, blogger1, blogger2, blogger3],
    liveDemo: "https://flexblogg.vercel.app/",
    github: "https://github.com/MohdZaid259/Blogger.git"
  },
  // {
  //   title: "Youtube",
  //   subtitle: "A legit clone",
  //   description: "Built a full-stack web application with Express.js and React.js, seamlessly integrating MongoDB using Mongoose and optimizing for SEO to enhance visibility. Collaborating closely with 3 friends in pair programming sessions, we took Git to the next level, refining our development workflow and achieving outstanding results.",
  //   images: [bloggerhero, blogger1, blogger2, blogger3],
  //   liveDemo: "",
  //   github: "https://github.com/MohdZaid259/Youtube.git"
  // }
];

function Project() {
  const [mainImageIndices, setMainImageIndices] = useState(Array(projects.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImageIndices((prevIndices) => 
        prevIndices.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (projectIndex, subImageIndex) => {
    setMainImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = subImageIndex;
      return newIndices;
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
      <h1 className='px-2 sm:pl-5 md:px-12 text-2xl md:text-3xl lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400'># Projects</h1>
      {projects.map((project, projectIndex) => {
        const mainImageIndex = mainImageIndices[projectIndex];
        const mainImage = project.images[mainImageIndex];
        return (
          <div key={projectIndex}>
            <div className='md:flex mx-2 md:mx-4 lg:mx-12 my-3 gap-3'>
              <div className='h-full flex-1'>
                <motion.img loading='lazy'
                  initial={{opacity:0,x:-100}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.7}}
                  className='border border-black rounded-sm transition-opacity duration-1000' 
                  src={mainImage} 
                  alt={project.title} 
                />
              </div>
              <motion.div initial='hidden' whileInView='visible' variants={projectVarient} className='h-auto hidden md:flex flex-col items-center -mt-1 gap-2 lg:gap-3 flex-[0.32]'>
                {project.images.map((image, subImageIndex) => (
                  subImageIndex !== mainImageIndex && (
                    <div key={subImageIndex}>
                      <img loading='lazy'
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
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
                  <a href={project.github} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Github</a>
                </motion.button>
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.7,delay:0.5}}>
                  <a href={project.liveDemo} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Live Demo</a>
                </motion.button>
              </div>
              <div className='tracking-wider text-xl'>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:1,delay:0.5}} className='text-3xl font-bold text-pink-600 dark:text-green-400'>{project.title} : </motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:1,delay:0.7}} className='text-2xl font-semibold'>{project.subtitle}</motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants } transition={{transition:1,delay:0.9}} className='inline-block mt-3 pb-3'>{project.description}</motion.span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Project;