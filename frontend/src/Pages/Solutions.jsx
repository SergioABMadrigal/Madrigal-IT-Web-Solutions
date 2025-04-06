import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';

const Solution = () => {
  const listItems = [
    "Professional Websites bring in and hold customers.",
    "We manage the website in a Virtual Private Network. The server is fully under our control.",
    "Security updates and patches are included.",
    "Search Engine Optimization is conducted INSIDE the code to ensure fast loading times and Search Engine compatibility",
    "We use our own templates, with higher customization than DIY paid sites.",
    "Real Domains used. We search, buy, and connect the domain name for you. The Domain name is YOURS to transfer if needed.",
    "Our websites are optimized for mobile use at no extra cost.",
    "We implement SSL certificates at no extra cost.",
    "Continuous research from us means more affordable features to come.",
  ];

  const refs = listItems.map(() => useRef());
  const visibilityStates = refs.map(ref => useIsVisible(ref));

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${window.innerWidth < 800 ? 'px-2 py-4 w-full' : 'mx-10 py-20'}`}>
      
      <div className={`flex flex-col gap-4 ${window.innerWidth < 800 ? 'w-full' : 'w-1/2'} text-center`}>
        <h1 className="text-4xl font-bold">We offer a number of tiers to meet your website needs.</h1>
        <p className="text-2xl">Why Choose Us?</p>
      </div>
      <div className={`flex flex-col gap-4 ${window.innerWidth < 800 ? 'w-full' : 'w-2/3'} items-center`}>
        <ul className="list-disc list-inside text-left py-5 text-2xl">
          {listItems.map((item, index) => (
            <li
              key={index}
              ref={refs[index]}
              className={`transition-opacity ease-in duration-800 ${visibilityStates[index] ? 'opacity-100' : 'opacity-0'}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-center text-2xl">Our development and hosting structure reduces costs per website. Savings are passed to YOU.</p>
      </div>
    </div>
  );
}

export default Solution