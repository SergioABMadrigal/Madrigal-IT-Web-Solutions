import logo2_480px from '../assets/logo2_480px.webp';



const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row pb-5 w-full max-w-5xl mx-auto' >
        
        {/* Hero Left Side */}
          <div 
            className={`w-full sm:w-1/2 flex items-center ${window.innerWidth < 800 ? 'py-10' : ''}`} 
          >
            
              <div className='py-5 px-4'>
            <h1 className='text-2xl sm:text-xl font-semibold mb-5'> Welcome to <b>Madrigal IT</b></h1>
            <p className='text-gray-600 mb-1'> We provide websites to <em>small businesses</em> at competitive pricing. All you have to worry about is telling your customers you have a new website! </p>
            <p className='text-gray-600 flex justify-end'> 
              <a 
                href="/contact" 
                className="transition-transform duration-200 hover:scale-110"
              >
                <strong>Contact us for more information!</strong>
              </a>
            </p>
              </div>
            
          </div>
          
          {/* Hero Right Side */}
        <img className='max-w-65 m-auto rounded-full' src={logo2_480px} alt="Madrigal IT Logo of a ferret" />
        
    </div>
  )
}

export default Hero