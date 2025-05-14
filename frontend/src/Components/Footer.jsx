import logo2_480px from '../assets/logo2_480px.webp';
import { Link } from 'react-router-dom'

const Footer = () => {
        return (
                <div className='flex flex-col items-center'>
                        <div className='flex flex-col sm:grid grid-cols-2 gap-14 my-10 px-5 mt-10 text-sm w-full max-w-5xl items-center'>
                                <div className='flex flex-row gap-5 items-center'>
                                        <img src={logo2_480px} className='mb-2 max-w-30 max-h-30 rounded-full' alt="Madrigal IT Logo of a ferret" />
                                        <p className='w-full md:w-2/3 text-gray-600 text-center'>
                                                Web Solutions For Small Businesses
                                        </p>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                        <Link to="/contact">
                                        <p className='text-lg font-medium mb-5 text-center'>GET IN TOUCH</p>
                                        <ul className='flex flex-col gap-1 text-gray-600 items-center'>
                                                <li>smadrigal@madrigalit.dev</li>
                                        </ul>
                                        </Link>
                                </div>
                        </div>
                        <div className='w-full'>
                                <hr />
                                <p className='py-5 text-sm text-center bg-gradient-to-bl from-[#3f4d55] to-[#1f1e26] text-white'>Copyright 2025@ Madrigalit.dev - All rights Reserved</p>
                        </div>
                </div>
        )
}

export default Footer