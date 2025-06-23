import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <div className={`flex flex-col items-center ${window.innerWidth < 800 ? 'px-2 py-5' : 'px-5 py-10'} w-full`}>
      <div className={`${window.innerWidth < 800 ? 'w-full' : 'w-1/2'} max-w-5xl`}>
        <h1 className='text-center text-4xl font-bold mb-8'>Madrigal IT Web Solutions: Your Partner in Digital Success</h1>
        <div ref={ref1} className={`py-5 transition-opacity ease-in duration-700 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className='text-2xl font-semibold text-green-800 mb-2'>Website design for small businesses</h2>
          <p className='text-xl indent-4 mb-6'>
            At Madrigal IT Web Solutions, we are dedicated to <strong>empowering small businesses</strong> by offering custom and scalable websites designed with <strong>security</strong> best practices in mind. As a small business owner, you want to focus on what you do best—serving your customers and growing your company. We take the burden of website design and development off your shoulders, ensuring your site <strong>ranks high</strong> in Search Engine Optimization (SEO) scores. With meticulous encoding and support for Google Business Profile, your business can achieve visibility on the first page of Google. Additionally, our <strong>monthly payment plans</strong> make it easier for you to budget for your website without compromising on quality. <strong>Continuous updates</strong> and <strong>security monitoring</strong> mean that your website remains secure and up-to-date, allowing you to concentrate on your core business activities.
          </p>
        </div>
        <div ref={ref2} className={`py-5 transition-opacity ease-in duration-700 ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className='text-2xl font-semibold text-green-800 mb-2'>Unlock your startup&apos;s online potential</h2>
          <p className='text-xl indent-4 mb-6'>
            For startups, a <strong>strong digital presence</strong> is crucial for attracting investors and customers. We specialize in building websites that not only <strong>look great</strong> but perform <strong>exceptionally</strong> well in search rankings. Startups can benefit from our expert SEO encoding, which <strong>boosts visibility</strong> and <strong>drives traffic</strong> to the site. With a focus on scalable solutions, your website <strong>grows with your business</strong>. We also offer <strong>monthly website management services</strong> that include fixing bugs, updating website dependencies, and enhancing SEO efforts. This proactive approach ensures that your startup&apos;s website is always functioning at its best, allowing you to pursue innovative ideas and expand your market reach without worrying about the technical aspects.
          </p>
        </div>
        <div ref={ref3} className={`py-5 transition-opacity ease-in duration-700 ${isVisible3 ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className='text-2xl font-semibold text-green-800 mb-2'>Showcasing Artists</h2>
          <p className='text-xl indent-4 mb-6'>
            Artists need a platform that reflects their <strong>unique creativity</strong> and helps them reach a <strong>wider audience</strong>. We understand this and offer <strong>tailor-made websites</strong> that showcase artistic work while scoring high on SEO. By leveraging security best practices and ongoing SEO management, artists can ensure their website is not only <strong>beautiful</strong> but also <strong>easy to find online</strong>. We handle all the intricate aspects of web development, from <strong>initial design</strong> to <strong>continuous optimization</strong>, freeing artists to focus on their craft. With the added benefit of <strong>retainer services for established websites</strong>, we provide ongoing support to keep your website current and secure, maintaining its relevance in the constantly evolving digital landscape.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="/contact" className="text-green-800 font-semibold text-xl hover:underline">👉 Book Your Free Call or Request a Code Review</Link>
        </div>
      </div>
    </div>
  )
}

export default Solutions