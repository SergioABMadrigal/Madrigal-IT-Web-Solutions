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
        <h2 className='text-xl text-gray-700 font-semibold mb-6 text-center'>Submit the form or call us at <a href="tel:14132008785" className="text-gray-800 underline hover:text-green-600">1-413-200-8785</a></h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact