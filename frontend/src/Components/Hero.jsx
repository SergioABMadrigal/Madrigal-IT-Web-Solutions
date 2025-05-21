import logo2_480px from '../assets/logo2_480px.webp';



const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row pb-5 w-full max-w-5xl mx-auto' >
        
        {/* Hero Left Side */}

        <div className='w-full sm:w-1/2 flex items-center py-10 sm:py-0' >
          <div className='p-5'>
            <div className='p-5'>
                <p className='text-gray-600 text-center mb-1'> We provide websites to small businesses at competitive pricing. All you have to worry about is telling your customers you have a new website! </p>
                <p className='text-gray-600 text-center'> <strong>Contact us for more information!</strong></p>
            </div>
          </div>
        </div>
        
        {/* Hero Right Side */}

        <img className='max-w-65 m-auto rounded-full' src={logo2_480px} alt="Madrigal IT Logo of a ferret" />
        
    </div>
  )
}

export default Hero