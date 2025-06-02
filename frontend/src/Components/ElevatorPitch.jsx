import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';

const ElevatorPitch = () => {
  // Refs for each list item
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  // Visibility for each list item
  const isVisible0 = useIsVisible(ref0);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);
  const isVisible4 = useIsVisible(ref4);
  const directions = ['-translate-x-10', 'translate-x-10', '-translate-x-10', 'translate-x-10', '-translate-x-10'];
  const items = [
    'Complete websites. Clear results. Confidence in every click.',
    'Building powerful, affordable websites that do more than look good—they get found.',
    'From design to deployment, I build websites that work—and help you understand why.',
    'Web development made simple, personal, and built for small business success.',
    'More than a website—your business’s full digital launchpad.'
  ];
  const refs = [ref0, ref1, ref2, ref3, ref4];
  const visibles = [isVisible0, isVisible1, isVisible2, isVisible3, isVisible4];

  return (
    <div className='flex items-center flex-col py-5 w-full justify-end mx-auto max-w-5xl'>
      {/* <div className='w-full flex items-center py-10'>
        <div className='p-5 w-full'>
          <h1 className='text-2xl sm:text-xl text-green-800 font-semibold mb-5'>We want your business to thrive</h1>
          <p className='text-gray-600 mb-1'>
            We believe that every small business and startup deserves more than just a website—they deserve a complete, affordable, and personalized digital foundation built for growth. That’s why we offer an all-in-one web development experience that goes beyond design: from hosting and cybersecurity to SEO, Google Business integration, and custom online tools. We work closely with a few clients at a time to simplify the technical process and deliver not just a beautiful site, but one that performs, converts, and attracts real customers. Our goal is to empower business owners with a website that works—and the clarity and confidence to understand what’s working and why.
          </p>
          <p className='text-gray-600 flex justify-end'>
            <strong>Your success is our goal!</strong>
          </p>
        </div>
      </div> */}
      {/* <div className="w-full flex flex-col items-center">
        <hr className="my-8 border-gray-300 w-full max-w-5xl" />
      </div> */}
      <div>
        <ul className="list-disc pl-5 space-y-3 text-gray-600 text-xl font-medium">
          {items.map((text, i) => (
            <li
              key={i}
              ref={refs[i]}
              className={`transition-all duration-700 ease-in-out ${visibles[i] ? 'opacity-100 translate-x-0' : 'opacity-0 ' + directions[i]}`}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ElevatorPitch