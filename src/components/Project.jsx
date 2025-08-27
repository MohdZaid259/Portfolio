import { useState, useEffect } from 'react';
import nextgenhero from '../Media/showoff/nextgenhero.png'
import nextgen1 from '../Media/showoff/nextgen1.png'
import nextgen2 from '../Media/showoff/nextgen2.png'
import nextgen3 from '../Media/showoff/nextgen3.png'
import lsitHero from '../Media/showoff/lsitHero.png'
import lsit1 from '../Media/showoff/lsit1.png'
import lsit2 from '../Media/showoff/lsit2.png'
import lsit3 from '../Media/showoff/lsit3.png'
import rdtechHero from '../Media/showoff/rdtechHero.png'
import rdtech1 from '../Media/showoff/rdtech1.png'
import rdtech2 from '../Media/showoff/rdtech2.png'
import rdtech3 from '../Media/showoff/rdtech3.png'

import ythero from '../Media/showoff/ythero.png'
import yt1 from '../Media/showoff/yt1.png'
import yt2 from '../Media/showoff/yt2.png'
import yt3 from '../Media/showoff/yt3.png'
import { motion } from 'framer-motion';

const projects = [
  {
    title: "LS4IT",
    subtitle: "Fabric Manufacturing Company",
    description:
      "A professional corporate website built as a freelance project for LS4IT, a leading fabric manufacturing company. Designed with Next.js, Tailwind CSS, and a headless CMS, the site supports **multi-language content (English & Arabic)** with smooth language switching. Optimized with CDN delivery, advanced SEO practices, and blazing-fast load times. Integrated a custom CMS for easy content management, product showcasing, and blog updates. Fully responsive, secure, and tailored for a global audience in the textile industry.",
    images: [lsitHero, lsit1, lsit2, lsit3],
    liveDemo: "https://www.ls4it.com/en",
    github: "https://github.com/MohdZaid259/lsit",
  },
  {
    title: "RDTech Group",
    subtitle: "Multi-Million Group of Companies",
    description:
      "A large-scale, enterprise-grade website delivered as a freelance project for RDTech Group, a diversified multi-million business conglomerate. Built with Next.js, TypeScript, and Tailwind CSS, backed by a powerful CMS for effortless updates across multiple divisions. The site includes **multi-language support, global CDN integration, SEO optimization, custom animations, and scalable architecture**. Focused on showcasing the brand’s subsidiaries, projects, and services with a premium, corporate aesthetic. Designed for speed, accessibility, and long-term scalability, making it a true digital flagship for the group.",
    images: [rdtechHero, rdtech1, rdtech2, rdtech3],
    liveDemo: "https://rdtech-group.com/",
    github: "https://github.com/MohdZaid259/rdtech.git",
  },
  {
    title: "ViewTube",
    subtitle: "The Yt Clone",
    description:
      "A dynamic, high-performance video streaming web app built with Next.js, Express.js, and MongoDB. Features include JWT auth, seamless video & thumbnail uploads via Cloudinary, real-time likes, comments, views, and subscriptions. Users can manage playlists, watch history, and even save videos for later. Includes an admin panel and smart recommendations using real YouTube APIs. Feels like YouTube, built from scratch!",
    images: [ythero, yt1, yt2, yt3],
    liveDemo: "https://yt-frontend-three.vercel.app/",
    github: "https://github.com/MohdZaid259/yt-frontend.git",
  },
  {
    title: "NextGen Herbals",
    subtitle: "The Ecommerce",
    description:
      "A modern, full-featured eCommerce site for herbal products built with React.js and Tailwind CSS. Integrated with Firebase for secure authentication and real-time data, and Razorpay for smooth, reliable payments. Features include dynamic product listings, shopping cart, order history, and a clean, mobile-friendly UI. Fast, secure, and designed to deliver a premium shopping experience with a traditional herbal touch.",
    images: [nextgenhero, nextgen1, nextgen2, nextgen3],
    liveDemo: "https://nextgen-herbals.vercel.app/",
    github: "https://github.com/MohdZaid259/NextGen.git",
  },
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
        duration:0.4
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
                  transition={{duration:0.5}}
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
              <div className='flex gap-2 lg:gap-5 mx-2 lg:mx-6 mt-5 mb-5'>
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.4}}>
                  <a href={project.github} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Github</a>
                </motion.button>
                <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0.3}}>
                  <a href={project.liveDemo} target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Live Demo</a>
                </motion.button>
                {project.buy ? <>
                  <motion.button initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:0.4,delay:0.6}}>
                  <a href='https://wa.me/919795372555/' target="_blank" className="border-2 border-pink-700 dark:border-green-500 px-2 py-1 lg:px-4 lg:py-2 text-lg rounded hover:bg-pink-600 dark:hover:bg-green-600 duration-150">Buy Now</a>
                </motion.button>
                </>: <></>}
              </div>
              <div className='tracking-wider text-xl'>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:0.4,delay:0.3}} className='text-3xl font-bold text-pink-600 dark:text-green-400'>{project.title} : </motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants} transition={{transition:0.4,delay:0.6}} className='text-2xl font-semibold'>{project.subtitle}</motion.span>
                <motion.span initial='hidden' whileInView='visible' variants={variants } transition={{transition:0.4,delay:0.9}} className='inline-block mt-3 pb-3'>{project.description}</motion.span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Project;