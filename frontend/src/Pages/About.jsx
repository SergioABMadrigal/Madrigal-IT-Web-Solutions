

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
    <div className={`flex flex-col items-center justify-center gap-4 ${window.innerWidth < 800 ? 'px-2 py-4 w-full' : 'mx-10 py-20'}`}>
      
      <div className={`flex flex-col gap-4 ${window.innerWidth < 800 ? 'w-full' : 'w-1/2'} text-center`}>
        <h1 className="text-4xl font-bold">We offer a number of tiers to meet your website needs.</h1>
        <h2 className="text-2xl text-green-800 font-bold p-4 rounded-md" style={{ maxWidth: '400px', margin: '0 auto' }}>Why Choose Us?</h2>
      </div>
      </div>
    </div>
    )
}

export default About