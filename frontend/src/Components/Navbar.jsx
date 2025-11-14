import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import logo2_img from '../assets/logo2_480px.webp';


const Navbar = () => {

    const [visible,setVisible] = useState(false);

    // Hide mobile sidebar when viewport is >= 1000px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setVisible(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

return (
    <div className='w-full bg-gradient-to-bl from-[#3f4d55] to-[#1f1e26] text-white'>
        <div className='flex items-center justify-center py-5 px-5 font-medium relative'>

            <Link to='/' className='absolute left-5 max-[630px]:hidden'><p className='text-xl font-sans'>Madrigal IT {window.innerWidth < 608 ? <br /> : ' '}Web Solutions</p></Link>
            
            <Link to='/' className='flex-shrink-0'>
                <img src={logo2_img} alt="Madrigal IT Logo of a ferret" className='w-25 h-25 rounded-full' />
            </Link>

            <nav className='absolute right-5'>
                <ul className='flex gap-5 text-sm max-[1000px]:hidden'>
                    <li>
                        <NavLink to="/" className="flex flex-col items-center gap-1">
                            <p>Home</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-amber-300 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="flex flex-col items-center gap-1">
                            <p>About</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-amber-300 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="flex flex-col items-center gap-1">
                            <p>Contact</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-amber-300 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/solutions" className="flex flex-col items-center gap-1">
                            <p>Solutions</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-amber-300 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://madrigalit.wordpress.com/" className="flex flex-col items-center gap-1" target="_blank" rel="noopener noreferrer">
                            <p>Blog</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-amber-300 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="https://github.com/SergioABMadrigal/Madrigal-IT-Web-Solutions/tree/main" className="flex flex-col items-center gap-1" 
                        target="_blank" rel="noopener noreferrer">
                            <p>GitHub Repo</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-amber-300 hidden" />
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/artdisplay" className="flex flex-col items-center gap-1">
                            <p>Art Display</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-amber-300 hidden" />
                        </NavLink>
                    </li> */}
                </ul>

                <div>
                    {/* ------------ Sidebar menu for small screens ----------------- */}
                    {visible && (
                      <div className="fixed inset-0 z-40">
                        <div className="absolute inset-0 bg-black opacity-40" onClick={()=>setVisible(false)}></div>
                        <div className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white transition-all z-50 ${visible ? '' : 'w-0'}`}>
                          <div className='flex flex-col text-gray-600' >
                              <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                                  <IoIosArrowDropdown className='size-6' />
                                  <p>Back</p>
                              </div>
                              <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/' >HOME</NavLink>
                              <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/about' >ABOUT</NavLink>
                              <NavLink onClick={()=>setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/contact' >CONTACT</NavLink>
                              <NavLink onClick={() => setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/solutions'>SOLUTIONS</NavLink>
                              <NavLink onClick={() => setVisible(false)} to="https://madrigalit.wordpress.com/" className="py-2 pl-6 border" target="_blank" rel="noopener noreferrer">BLOG</NavLink>
                              <NavLink onClick={() => setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='https://github.com/SergioABMadrigal/Madrigal-IT-Web-Solutions/tree/new-branch-from-c663149'>GITHUB REPO</NavLink>

                              {/* <NavLink onClick={() => setVisible(false)} className={({ isActive }) => isActive ? 'py-2 pl-6 border text-white bg-[#3f4d55]' : 'py-2 pl-6 border'} to='/artdisplay'>ART DISPLAY</NavLink> */}
                          </div>
                        </div>
                      </div>
                    )}
                </div>
            </nav>
            {/* ------------ Three bars used to show small screen menu ---------------- */}
            <div className='pl-2 min-[1000px]:hidden absolute right-5' onClick={()=>setVisible(true)}>
                <IoReorderThreeOutline className='size-6' />
            </div>
        </div>
    </div>
)
}

export default Navbar