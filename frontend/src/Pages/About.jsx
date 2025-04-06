

import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';


const About = () => {

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <div className={`flex flex-col items-center ${window.innerWidth < 800 ? 'px-2 py-5' : 'px-5 py-10'} w-full`}>
      <div className='w-full max-w-5xl'>
      <h1 className='text-center text-6xl'>About Us</h1>
      <div ref={ref1} className={`py-5 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <p className='text-2xl indent-4'>
      Welcome to Madrigal IT Web Solutions, your trusted partner for website development services. We specialize in creating professional and user-friendly websites for small businesses and startups. Our goal is to help you establish a strong online presence and achieve your business objectives.
      </p>
      </div>
      <div ref={ref2} className={`py-5 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
      <p className='text-2xl indent-4'>
      We work closely with you to understand your unique needs and deliver customized solutions that align with your brand. Whether you need a simple informational site or a complex e-commerce platform, we have the expertise to bring your vision to life.
      </p>
      </div>
      <div ref={ref3} className={`py-5 transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
      <p className='text-2xl indent-4'>
      At Madrigal IT Web Solutions, we are committed to delivering high-quality services and exceptional customer support. Let us help you take your business to the next level with a website that stands out.
      </p>
      </div>
      </div>
    </div>
    )
}

export default About