import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';

const Solutions = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <div className={`flex flex-col items-center ${window.innerWidth < 800 ? 'px-2 py-5' : 'px-5 py-10'} w-full`}>
      <div className='w-full max-w-5xl'>
        <h1 className='text-center text-4xl font-bold mb-8'>Madrigal IT Web Solutions: Your Partner in Digital Success</h1>
        <div ref={ref1} className={`py-5 transition-opacity ease-in duration-700 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className='text-2xl font-semibold text-green-800 mb-2'>Empowering Small Businesses</h2>
          <p className='text-xl indent-4 mb-6'>
            At Madrigal IT Web Solutions, we are dedicated to empowering small businesses by offering custom and scalable websites designed with security best practices in mind. As a small business owner, you want to focus on what you do best—serving your customers and growing your company. We take the burden of website design and development off your shoulders, ensuring your site ranks high in Search Engine Optimization (SEO) scores. With meticulous encoding and support for Google Business Profile, your business can achieve visibility on the first page of Google. Additionally, our monthly payment plans make it easier for you to budget for your website without compromising on quality. Continuous updates and security monitoring mean that your website remains secure and up-to-date, allowing you to concentrate on your core business activities.
          </p>
        </div>
        <div ref={ref2} className={`py-5 transition-opacity ease-in duration-700 ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className='text-2xl font-semibold text-green-800 mb-2'>Supporting Startups</h2>
          <p className='text-xl indent-4 mb-6'>
            For startups, a strong digital presence is crucial for attracting investors and customers. We specialize in building websites that not only look great but perform exceptionally well in search rankings. Startups can benefit from our expert SEO encoding, which boosts visibility and drives traffic to the site. With a focus on scalable solutions, your website grows with your business. We also offer monthly website management services that include fixing bugs, updating website dependencies, and enhancing SEO efforts. This proactive approach ensures that your startup&apos;s website is always functioning at its best, allowing you to pursue innovative ideas and expand your market reach without worrying about the technical aspects.
          </p>
        </div>
        <div ref={ref3} className={`py-5 transition-opacity ease-in duration-700 ${isVisible3 ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className='text-2xl font-semibold text-green-800 mb-2'>Showcasing Artists</h2>
          <p className='text-xl indent-4 mb-6'>
            Artists need a platform that reflects their unique creativity and helps them reach a wider audience. We understand this and offer tailor-made websites that showcase artistic work while scoring high on SEO. By leveraging security best practices and ongoing SEO management, artists can ensure their website is not only beautiful but also easy to find online. Our team handles all the intricate aspects of web development, from initial design to continuous optimization, freeing artists to focus on their craft. With the added benefit of retainer services for established websites, we provide ongoing support to keep your website current and secure, maintaining its relevance in the constantly evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Solutions