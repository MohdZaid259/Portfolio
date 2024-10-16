import mail from '../Media/mail.png'
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'
import twitter from '../Media/twitter.png'
import paperplane from '../Media/paperplane.png'
import location from '../Media/location.png'
import whatsapp from '../Media/whatsapp.png'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSubmitForm = (data) => {
    const { Name, subject, message} = data;
    const whatsappMessage = `Hi, I am ${Name}. ${subject}: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/979537555?text=${encodedMessage}`; 
    window.open(whatsappURL, "_blank");
  };

  const variants = {
    visible:{
      opacity:1,
      y:0,
    },
    hidden:{
      opacity:0,
      y:-30
    }
  }

  return (
      <section className='bg-radial-gradient dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black w-full h-screen px-10 pt-24'>
      <h1 className='-ml-4 md:px-10 text-2xl md:text-3xl  lg:text-5xl mb-7 font-bold text-pink-600 dark:text-green-400'># Contact Me</h1>
      <div className='md:flex justify-around items-center'>
      <div className='flex flex-col gap-1 md:gap-3 mt-10'>
        <h2 className='text-xl md:text-3xl font-bold '>Let&apos;s <span className='text-pink-600 dark:text-green-500'>Chat</span>.</h2>
        <h2 className='text-xl md:text-3xl font-bold mb-5'>Tell me about your project.</h2>
        <div className="border-b-2 border-l-2 border-pink-600 dark:border-green-400 flex">
            <img loading='lazy' className='dark:invert w-8 h-auto m-4' src={mail} alt=""/>
            <div className="mt-2">
            <p className='font-semibold'>Mail me at</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@example.com" target='_blank'><p className='font-bold text-pink-600 dark:text-green-400'>razvizaid259@gmail.com</p></a>
            </div>
        </div>
        <motion.a initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5}} className='ml-5 mt-1 flex bg-green-600 hover:bg-green-700 max-w-fit items-center gap-3 px-2 rounded' href="https://wa.me/979537555/" target='_blank'><img loading='lazy' aria-label='whatsapp' className='dark:invert w-7 h-auto my-2 ' src={whatsapp} alt="" />Chat on Whatsapp</motion.a>
        <div className="flex ml-5 mb-10 gap-5">
            <a href="https://x.com/zaidrazvi09" aria-label='twitter' target='_blank'><motion.img loading='lazy' initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5,delay:0}} className='dark:invert w-7 h-auto my-2 hover:bg-pink-500 p-1 rounded' src={twitter} alt="" /></a>
            <a href="https://www.linkedin.com/in/mohd-zaid-b28aa2248/" aria-label='linkedin' target='_blank'><motion.img loading='lazy' initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5,delay:0.3}} className='dark:invert w-7 h-auto my-2 hover:bg-pink-500 p-1 rounded' src={linkedin} alt="" /></a>
            <a href="https://github.com/MohdZaid259" aria-label='github' target='_blank'><motion.img loading='lazy' initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5,delay:0.6}} className='dark:invert w-7 h-auto my-2 hover:bg-pink-500 p-1 rounded' src={github} alt="" /></a>
            <a href='https://www.google.co.in/maps/@26.2290722,81.2506927,14.84z?entry=ttu' target='_blank'><motion.img loading='lazy' initial='hidden' aria-label='location' whileInView='visible' variants={variants} transition={{duration:0.5,delay:0.9}} className='dark:invert w-7 h-auto my-2 hover:bg-pink-500 p-1 rounded' src={location} alt="" /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@example.com" target='_blank'><motion.img loading='lazy' aria-label='mail' initial='hidden' whileInView='visible' variants={variants} transition={{duration:0.5,delay:1.2}} className='dark:invert w-7 h-auto my-2 hover:bg-pink-500 p-1 rounded' src={paperplane} alt="" /></a>
        </div>
      </div>
      <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5}}  className="flex w-full flex-col border-2 border-black dark:border-white -mt-5 md:w-2/5 backdrop-blur-3xl rounded-lg p-4">
        <h2 className='text-lg md:text-3xl mb-3'>Send us a message</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)} className='flex flex-col gap-2' action="">
            <input {...register('Name', { required: 'Full Name is required' })} className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' type="text" placeholder="Full name*"/>
            {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
            <input {...register('email', { required: 'Email is required', pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ })} className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' type="text" placeholder="Email address*"/>
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            <input {...register('subject')} className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' type="text" placeholder="Subject"/>
            <textarea  {...register('message', { required: 'Message is required' })} className='dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md' name="message" id="" cols="20" rows="5" placeholder="Message"/>
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            <button type='submit' className='bg-pink-600 dark:bg-green-600 hover:bg-pink-700 dark:hover:bg-green-700 text-white mt-2 p-2 font-bold rounded-lg text-base md:text-xl'>Send Message</button>
        </form>
      </motion.div>
      </div>
  </section>
  )
}

export default Contact