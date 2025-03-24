import { useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";



const Navbar = () => {

    const [visible,setVisible] = useState(false);

return (
    <div className='w-full bg-gradient-to-bl from-[#3f4d55] to-[#1f1e26] text-white'>
        <div className='flex items-center justify-between py-5 px-5 font-medium mt-0 mr-7 m-4'>

            <Link to='/'><p className='text-xl'>Madrigal IT Web Solutions</p></Link>

            <nav>
                <ul className='hidden sm:flex gap-5 text-sm'>
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>Home</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>About</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>Contact</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="/solutions" className="flex flex-col items-center gap-1">
                        <p>Solutions</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </ul>

                <div>
                    {/* ------------ Sidebar menu for small screens ----------------- */}
                    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                        <div className='flex flex-col text-gray-600' >
                            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                                <IoIosArrowDropdown className='size-6' />
                                <p>Back</p>
                            </div>
                            <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/' >HOME</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/about' >ABOUT</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/contact' >CONTACT</NavLink>
                            <NavLink onClick={() => setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/solutions'>SOLUTIONS</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {/* ------------ Three bars used to show small screen menu ---------------- */}
            <div className='sm:hidden pl-2' onClick={()=>setVisible(true)}>
                <IoReorderThreeOutline className='size-6' />
            </div>
        </div>
    </div>
)
}

export default Navbar