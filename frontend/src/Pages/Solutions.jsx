import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';


const Solutions = () => {

  const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${window.innerWidth < 800 ? 'px-2 py-4 w-full' : 'mx-10 py-20'}`}>
      
      <div className={`flex flex-col gap-4 ${window.innerWidth < 800 ? 'w-full' : 'w-1/2'} text-center`}>
        <h1 className="text-4xl font-bold">We offer a number of tiers to meet your website needs.</h1>
        <p className="text-2xl">Why Choose Us?</p>
      </div>
      <div ref={ref1} className={`flex flex-col gap-4 ${window.innerWidth < 800 ? 'w-full' : 'w-2/3'} items-center ${isVisible1 ? 'fade-in' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-in-out`}>
        <ul className="list-disc list-inside text-left py-5 text-2xl">
          <li>We manage the website in a Virtual Private Network. The server is fully under our control.</li>
          <li>Security updates and patches are included.</li>
          <li>Search Engine Optimization is conducted INSIDE the code to ensure fast loading times and Search Engine compatibility</li>
          <li>We use our own templates, with higher customization than DIY paid sites.</li>
          <li>Real Domains used. We search, buy, and connect the domain name for you. The Domain name is YOURS to transfer if needed.</li>
          <li>Our websites are optimized for mobile use at no extra cost.</li>
          <li>We implement SSL certificates at no extra cost.</li>
          <li>Continuous research from us means more affordable features to come.</li>
        </ul>
        <p className="text-center text-2xl">Our development and hosting structure reduces costs per website. Savings are passed to YOU.</p>
      </div>
    </div>
  );
}

export default Solutions;