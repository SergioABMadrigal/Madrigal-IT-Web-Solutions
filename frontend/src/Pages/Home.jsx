
import Hero from '../Components/Hero'
import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';
import ElevatorPitch from '../Components/ElevatorPitch';

const Home = () => {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  return (
    <div className={`px-${window.innerWidth < 800 ? '2' : '20'} py-${window.innerWidth < 800 ? '3' : '15'}`}>
      <div className={`transition-opacity ease-in duration-800 ${isVisible1 ? "opacity-100" : "opacity-0"}`} ref={ref1}>
        <Hero />
      </div>
      <div className={`transition-opacity ease-in duration-800 ${isVisible1 ? "opacity-100" : "opacity-0"}`} ref={ref1}>
        <ElevatorPitch />
      </div>
      
    </div>
  )
}

export default Home