import Ferret_Banner_Stretch from '../assets/Ferret banner stretch.svg';

const Hero = () => {
  // Determine objectPosition based on screen width
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 800;
  const objectPosition = isMobile ? '40% center' : 'right';

  return (
    <div className='relative flex flex-col sm:flex-row pb-5 w-full max-w-5xl mx-auto'>
      {/* Hero Right Side - Background Image */}
      <img 
        className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none rounded-3xl z-0' 
        src={Ferret_Banner_Stretch} 
        alt="Madrigal IT Banner with a happy ferret" 
        style={{objectPosition}}
      />
      {/* Hero Left Side */}
      <div className='relative w-full sm:w-1/2 flex items-center py-10 sm:py-0 z-10'>
        <div className='p-5 w-full'>
          <div className='p-5'>
            <h1 className='text-3xl sm:text-4xl font-bold text-center mb-4 text-white'>
              Transform Your Online Presence with a Website That Works for You
            </h1>
            <p className='text-white text-center mb-1'> Personalized website solutions designed to grow your business—without the stress.</p>
            <a href="/contact" className="block w-fit mx-auto">
              <button
                className="text-center font-bold bg-green-800 text-white px-6 py-2 rounded transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 shadow-md"
              >
                Get Your Website Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero