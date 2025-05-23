import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';


const About = () => {
  // Create refs and visibility states for each paragraph (must be declared individually for hooks)
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const isVisible0 = useIsVisible(ref0, { threshold: 0.1 });
  const isVisible1 = useIsVisible(ref1, { threshold: 0.1 });
  const isVisible2 = useIsVisible(ref2, { threshold: 0.1 });
  const isVisible3 = useIsVisible(ref3, { threshold: 0.1 });
  const isVisible4 = useIsVisible(ref4, { threshold: 0.1 });
  const isVisible5 = useIsVisible(ref5, { threshold: 0.1 });
  const visibles = [isVisible0, isVisible1, isVisible2, isVisible3, isVisible4, isVisible5];

  // If all paragraphs are visible at once, trigger sequential fade-in
  const allVisible = visibles.every(Boolean);
  const delays = allVisible ? visibles.map((_, i) => `${i * 200}ms`) : visibles.map(() => '0ms');

  return (
    <div className={`flex flex-col items-center justify-center gap-4 w-full ${window.innerWidth < 800 ? 'px-2 py-4' : 'px-5 py-20'}`}>
      <div className="w-1/2 max-w-5xl">
        <h1 className="text-4xl text-gray-600 font-bold">Building Honest, Secure, and Impactful Websites for Small Businesses</h1>
        <p ref={ref0} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${isVisible0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delays[0] }}>
          I’m a self-taught web developer who found a passion for programming through my love of problem solving and working with computers. What started as a way to earn extra income—rooted in my experience fixing broken computers—quickly turned into a commitment to helping small businesses thrive online.
        </p>
        <p ref={ref1} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delays[1] }}>
          My goal is more than just building websites. <strong>I want to build trust.</strong> I work with small business owners, startups, and independent professionals because I believe in <strong>personal connections, honest communication, and delivering real value.</strong> I want every project I take on to be something I’m proud of—something that helps a client grow their business with a <strong>strong, secure, and user-friendly online presence.</strong>
        </p>
        <p ref={ref2} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delays[2] }}>
          I prioritize <strong>security, SEO, and usability</strong> from day one. With cybersecurity threats increasingly targeting small businesses, I ensure that every site I build follows security best practices, loads fast, and is optimized to be found by search engines. I also focus on clean, simple design so your visitors can easily find what they need.
        </p>
        <p ref={ref3} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delays[3] }}>
          What makes my process different? I take a collaborative approach. Whether we’re meeting in person or via video call, I work closely with clients throughout the design and development process. I explain the technical decisions I make and give you control where it matters most. Even if you choose not to work with me long-term, I’ll deliver a site with a strong foundation—something you or another developer can build on with confidence.
        </p>
        <p ref={ref4} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delays[4] }}>
          I hold a business license because I take this work seriously. My reputation, reliability, and results are everything to me.
        </p>
        <p ref={ref5} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${isVisible5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delays[5] }}>
          Outside of development, I’m a first-generation college graduate from California with a degree in Environmental Science from Colby College. I’m a lifelong learner who’s always researching and implementing new features—testing them on my own website first to ensure they’re safe, secure, and effective before recommending them to clients.
        </p>
        <span className="block text-green-800 text-center font-bold mt-6">If you’re a small business, startup, or team looking for someone who <span className="underline decoration-green-800">treats your project like their own</span>, I’d love to talk.</span>
      </div>
    </div>
  );
}

export default About;