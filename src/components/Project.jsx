import React, { useState , useEffect } from 'react';
import arrowright from '../Media/arrowright.png'
import arrowleft from '../Media/arrowleft.png'
import ecommerce from '../Media/ecommerce.png'

const projects = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Ajio",
    subtitle: "The ecommerce",
    description: "Let your dreams come true",
    image: {ecommerce}
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
      <div className="rounded-lg relative w-full max-w-4xl mx-auto mt-10 overflow-hidden" style={style}>
      <div className="relative h-96">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          > 
          {console.log(project.image)}
            <div className="h-full">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-center text-white p-4">
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <h3 className="text-2xl">{project.subtitle}</h3>
                  <p className="mt-2">{project.description}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 ${pressedKey==='ArrowLeft'?'outline':''} hover:bg-gray-700`}
      >
        <img className='w-6 pr-0.5 invert' src={arrowleft}/>
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 ${pressedKey==='ArrowRight'?'outline':''} hover:bg-gray-700`}
      >
        <img className='w-6 pl-0.5 invert' src={arrowright}/>
      </button>
    </div>
    </div>
  );
};
export default Carousel;