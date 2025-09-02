import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';
import ContactForm from "../Components/ContactForm"


const Contact = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className='flex flex-col items-center justify-center px-20 py-15'>
      <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className='text-3xl text-green-800 font-bold mb-4 text-center'>Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact