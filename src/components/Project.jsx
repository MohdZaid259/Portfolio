import React, { useState , useEffect } from 'react';
import arrowright from '../Media/arrowright.png'
import arrowleft from '../Media/arrowleft.png'
import ecommercehero from '../Media/showoff/ecommercehero.png'
import ecommerce1 from '../Media/showoff/ecommerce1.png'
import ecommerce2 from '../Media/showoff/ecommerce2.png'
import ecommerce3 from '../Media/showoff/ecommerce3.png'
import bloggerhero from '../Media/showoff/bloggerhero.png'
import blogger1 from '../Media/showoff/blogger1.png'
import blogger2 from '../Media/showoff/blogger2.png'
import blogger3 from '../Media/showoff/blogger3.png'

const projects = [
  {
    title: "Cara",
    subtitle: "The ecommerce",
    description: "Let your dreams come true",
    image: ecommercehero,
    image1: ecommerce1,
    image2: ecommerce2,
    image3: ecommerce3
  },
  {
    title: "Blogger",
    subtitle: "Blogging website",
    description: "Let your dreams come true",
    image: bloggerhero,
    image1: blogger1,
    image2: blogger2,
    image3: blogger3 
  }
];

const style = {
  boxShadow: '0 0 25px rgba(107, 114, 128, 0.5)',
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pressedKey,setPressedKey] = useState('')

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
        setPressedKey('ArrowLeft')
      } else if (event.key === 'ArrowRight') {
        nextSlide();
        setPressedKey('ArrowRight')
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className='bg-gradient-to-tr h-screen from-black  via-gray-950 to-gray-900 text-white'>
      <div className="rounded-lg relative w-full max-w-4xl mx-auto mt-5 overflow-hidden" style={style}>
      <div className="relative h-96">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          > 
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-1 ${pressedKey==='ArrowLeft'?'outline':''} hover:bg-gray-700`}
      >
        <img className='w-5 pr-0.5 invert' src={arrowleft}/>
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-1 ${pressedKey==='ArrowRight'?'outline':''} hover:bg-gray-700`}
      >
        <img className='w-5 pl-0.5 invert' src={arrowright}/>
      </button>
      </div>
      <div className='py-10 pb-7'>
        {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-row justify-evenly items-center absolute  transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
            > 
            <img
                  src={project.image1}
                  alt={project.title}
                  className="inline object-cover w-1/5 rounded-lg"
                />
            <img
                  src={project.image2}
                  alt={project.title}
                  className="inline object-cover w-1/5 rounded-lg"
                />
            <img
                  src={project.image3}
                  alt={project.title}
                  className="inline object-cover w-1/5 rounded-lg"
                />
            {/* <div className="flex flex-col items-center justify-center text-center text-white p-4">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <h3 className="text-2xl">{project.subtitle}</h3>
                    <p className="mt-2">{project.description}</p>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Carousel;