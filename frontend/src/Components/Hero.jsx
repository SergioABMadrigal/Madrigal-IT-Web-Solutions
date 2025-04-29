import logo2_480px from '../assets/logo2_480px.webp';
import logo2_900px from '../assets/logo2_900px.webp';
import logo2_1600px from '../assets/logo2_1600px.webp';



const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row pb-5 w-full max-w-5xl mx-auto' >
        
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center py-10 sm:py-0' >
          <div className='p-5'>
            <div className='p-5'>
                <h1 className='text-2xl sm:text-xl font-semibold mb-5'> Welcome to <b>Madrigal IT</b></h1>
                <p className='text-gray-600 mb-1'> We provide websites to small businesses at competitive pricing. All you have to worry about is telling your customers you have a new website! </p>
                <p className='text-gray-600 flex justify-end'> <strong>Contact us for more information!</strong></p>
            </div>
          </div>
        </div>
        
        {/* Hero Right Side */}
        <picture>
          <source media="(max-width: 480px)" srcSet={logo2_480px} />
          <source media="(max-width: 900px)" srcSet={logo2_900px} />
          <source media="(min-width: 901px)" srcSet={logo2_1600px} />
          <img className='max-w-65 m-auto rounded-full' src={logo2_1600px} alt="Madrigal IT Logo of a ferret" />
        </picture>
        
    </div>
  )
}

export default Hero