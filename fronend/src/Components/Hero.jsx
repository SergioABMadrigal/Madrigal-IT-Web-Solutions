import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row pb-5' >
        
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center py-10 sm:py-0' >
            
            <div className='p-5'>
                <h1 className='text-3xl sm:text-5xl font-semibold mb-5'>Welcome to Johnson's Self Defense</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magni maxime, perferendis nemo impedit sint quibusdam nesciunt accusantium voluptatem cupiditate vitae eveniet culpa quod corporis provident alias? Laboriosam, dicta nostrum.</p>
            </div>

        </div>
        
        {/* Hero Right Side */}
        <img className='max-w-65 m-auto' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero