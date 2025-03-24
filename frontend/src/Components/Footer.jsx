import { assets } from '../assets/assets'
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-2 gap-14 my-10 px-5 mt-10 text-sm '>
            <div className='flex flex-row gap-5'>
                <img src={assets.logo2_png} className='mb-2 max-w-30 max-h-30 rounded-full' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magni maxime, perferendis nemo impedit sint quibusdam nesciunt accusantium voluptatem cupiditate vitae eveniet culpa quod corporis provident alias? Laboriosam, dicta nostrum.
                </p>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-lg font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>212-456-7890</li>
                    <li>contact@Madrigal-IT.com</li>
                </ul>
            </div>

        </div>
        <div className='flex justify-center gap-5 my-5'>
            
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='text-gray-600 hover:text-red-500' size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-gray-600 hover:text-blue-700' size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-gray-600 hover:text-pink-500' size={24} />
            </a>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center bg-gradient-to-bl from-[#3f4d55] to-[#1f1e26] text-white'>Copyright 2025@ Madrigal-IT.com - All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer