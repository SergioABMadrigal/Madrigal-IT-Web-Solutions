import Hero from '../Components/Hero'
import { useRef, useState, useEffect } from 'react';
import useIsVisible from '../Functions/useIsVisible';
import ElevatorPitch from '../Components/ElevatorPitch';
import Freebies from '../Components/Freebies';


const Home = () => {
    const [heroLoaded, setHeroLoaded] = useState(false);
    useEffect(() => {
      setHeroLoaded(true);
    }, []);
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    // About Me fade-in section hooks (must be declared inside the component)
    const aboutRef0 = useRef();
    const aboutRef1 = useRef();
    const aboutRef2 = useRef();
    const aboutRef3 = useRef();
    const aboutVisible0 = useIsVisible(aboutRef0, { threshold: 0.1 });
    const aboutVisible1 = useIsVisible(aboutRef1, { threshold: 0.1 });
    const aboutVisible2 = useIsVisible(aboutRef2, { threshold: 0.1 });
    const aboutVisible3 = useIsVisible(aboutRef3, { threshold: 0.1 });
    const aboutVisibles = [aboutVisible0, aboutVisible1, aboutVisible2, aboutVisible3];
    const aboutAllVisible = aboutVisibles.every(Boolean);
    const aboutDelays = aboutAllVisible ? aboutVisibles.map((_, i) => `${i * 200}ms`) : aboutVisibles.map(() => '0ms');

  return (

    <div className={`px-${window.innerWidth < 800 ? '2' : '20'} py-${window.innerWidth < 800 ? '3' : '15'}`}>
      <div className={`py-6 transition-opacity duration-1000 ease-in ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
      </div>
      <div className="w-full flex flex-col items-center">
        <hr className="my-8 border-gray-300 w-full max-w-5xl" />
      </div>
      <div className={`transition-opacity ease-in duration-800 ${isVisible1 ? "opacity-100" : "opacity-0"}`} ref={ref1}>
        <ElevatorPitch />
      </div>
        <div className="w-full flex flex-col items-center">
        <hr className="my-8 border-gray-300 w-full max-w-5xl" />
      </div>
      <div className={`transition-opacity ease-in duration-800 ${isVisible1 ? "opacity-100" : "opacity-0"}`} ref={ref1}>
        <Freebies />
      </div>
      <div className="w-full flex flex-col items-center">
        <hr className="my-8 border-gray-300 w-full max-w-5xl" />
      </div>
      {/* About Me fade-in section */}
      <div className="w-full flex flex-col items-center py-10">
        <div className="p-5 w-full max-w-3xl">
          <h2 ref={aboutRef0} className={`text-2xl sm:text-xl text-gray-600 text-center font-bold mb-5 transition-all duration-[1050ms] ease-in-out ${aboutVisible0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: aboutDelays[0] }}>
            About Me
          </h2>
          <p ref={aboutRef1} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${aboutVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: aboutDelays[1] }}>
            I’m a self-taught web developer with a passion for problem solving, research, and building secure, SEO-friendly websites. I focus on helping small businesses and startups create fast, reliable, and user-friendly online experiences.
          </p>
          <p ref={aboutRef2} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${aboutVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: aboutDelays[2] }}>
            My approach is collaborative and transparent. I meet clients in person or over video to ensure every decision supports their goals. I prioritize strong technical foundations so your site is secure, scalable, and easy to maintain—even if we part ways after launch.
          </p>
          <p ref={aboutRef3} className={`text-lg text-left mt-6 transition-all duration-[1050ms] ease-in-out ${aboutVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: aboutDelays[3] }}>
            With a background in Environmental Science from Colby College and a business license in hand, I take every project seriously. I’m always learning, always improving, and committed to delivering real value—not just code.<br/><br/>
            <span className="block text-green-800 text-center font-bold mt-6">Let’s build something that lasts.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home