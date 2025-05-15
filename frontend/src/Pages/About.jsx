import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';


const Solutions = () => {

  const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${window.innerWidth < 800 ? 'px-2 py-4 w-full' : 'mx-10 py-20'}`}>
      
      <div className={`flex flex-col gap-4 ${window.innerWidth < 800 ? 'w-full' : 'w-1/2'} text-center`}>
        <h1 className="text-4xl font-bold">We offer a number of tiers to meet your website needs.</h1>
        <h2 className="text-2xl text-green-800 p-4 rounded-md" style={{ maxWidth: '400px', margin: '0 auto' }}>Why Choose Us?</h2>
      </div>
      <div ref={ref1} className={`flex flex-col gap-4 ${window.innerWidth < 800 ? 'w-full' : 'w-2/3'} items-center ${isVisible1 ? 'fade-in' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-in-out`}>
        <ul className={`list-inside py-5 text-2xl ${window.innerWidth < 800 ? 'text-left' : 'grid grid-cols-1'}`}>
          <li className="py-2">We manage the website in a Virtual Private Network through Hostinger</li>
          <li className="py-2">Security updates and patches are included.</li>
          <li className="py-2">Search Engine Optimization is conducted INSIDE the code to ensure fast loading times and Search Engine compatibility</li>
          <li className="py-2">We use our own templates, with higher customization than DIY paid sites. If you can dream it, we can make it!</li>
          <li className="py-2">Real Domains used. We search, buy, and connect the domain name for you. The Domain name is YOURS to transfer if needed.</li>
          <li className="py-2">Our websites are optimized for mobile use at no extra cost.</li>
          <li className="py-2">We implement SSL certificates at no extra cost.</li>
          <li className="py-2">Continuous research from us means more affordable features to come.</li>
        </ul>
        <p className="text-center text-2xl">Our development and hosting structure reduces costs per website. Savings are passed to YOU.</p>
      </div>
    </div>
  );
}

export default Solutions;