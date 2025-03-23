import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
return (
    <div className='flex gap-5 justify-center py-10' >
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='text-gray-600 hover:text-blue-700' size={50} />
            
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className='text-gray-600 hover:text-red-500' size={50} />
            
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-gray-600 hover:text-pink-500' size={50} />
            
        </a>
    </div>
)
}

export default SocialMedia