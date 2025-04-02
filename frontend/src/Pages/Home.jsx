
import Hero from '../Components/Hero'
import SocialMedia from '../Components/SocialMedia'
import { useRef } from 'react';
import useIsVisible from '../Functions/useIsVisible';


const Home = () => {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  return (
    <div className='px-20 py-15'>
        <div className={`transition-opacity ease-in duration-800 ${isVisible1 ? "opacity-100" : "opacity-0"}`} ref={ref1}><Hero /></div>
        <SocialMedia />
    </div>
  )
}

export default Home