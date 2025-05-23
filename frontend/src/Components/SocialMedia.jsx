import { FaLinkedin } from 'react-icons/fa';
import { SiWordpress } from 'react-icons/si';

const SocialMedia = () => {
return (
    <div className='flex flex-col items-center gap-5 justify-center py-10' >
        <h2 className='text-xl text-gray-700 mb-2 text-center'>Learn more about me through my <strong>LinkedIn Profile</strong> and my <strong>WordPress Blog</strong></h2>
        <div className='flex gap-5 justify-center'>
            <a href="https://www.linkedin.com/in/sergio-baez-madrigal-519172365" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile for Sergio Madrigal">
                <FaLinkedin className='text-gray-600 hover:text-blue-700' size={50} title="LinkedIn Logo" />
            </a>
            <a href="https://madrigalit.wordpress.com/" target="_blank" rel="noopener noreferrer" aria-label="WordPress Blog for Madrigal IT">
                <SiWordpress className='text-gray-600 hover:text-blue-500' size={50} title="WordPress Logo" />
            </a>
        </div>
    </div>
)
}

export default SocialMedia