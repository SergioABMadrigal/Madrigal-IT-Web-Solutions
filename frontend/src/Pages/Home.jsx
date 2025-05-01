
import Hero from '../Components/Hero'
import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';
import ElevatorPitches from '../Components/ElevatorPitches';


const Home = () => {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  return (
    <div className={`px-2 py-10`}>
      <div className={`transition-opacity ease-in duration-800 ${isVisible1 ? "opacity-100" : "opacity-0"}`} ref={ref1}>
        
        <Hero />
        <ElevatorPitches/>
      </div>
    </div>
  )
}

export default Home