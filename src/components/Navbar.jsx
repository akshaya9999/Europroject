import React,{useState} from 'react';
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai';
import logo from './eurologo.png';

const Navbar = () => {
  const [nav,setNav]= useState(false)

  const handleNav=() =>{
    setNav(!nav)
  }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
                    <img
                    className="w-full max-w-xs" src={logo} alt='logo'
                     />
                     <ul className='hidden lg:flex'>
                      <li className='p-4'>ABOUT</li>
                      <li className='p-4'>SERVICES</li>
                      <li className='p-4'>PROJECTS</li>
                      <li className='p-4'>GALLERY</li>
                      <li className='p-4'>CONTACT</li>

                     </ul>
                     <div onClick={handleNav} className='block lg:hidden'>
                      {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
                      
                     </div>
                     <div className={!nav ? 'fixed left-0 h-full top-0 w-[30%] bg-black text-white border-r border-r-black ease-in-out duration-500':'fixed left-[-100%]'}>
                      <ul className='pt-5 uppercase'>
                    
                      <li className='p-4 border-b border-gray-500'>ABOUT</li>
                      <li className='p-4 border-b border-gray-500'>SERVICES</li>
                      <li className='p-4 border-b border-gray-500'>PROJECTS</li>
                      <li className='p-4 border-b border-gray-500'>GALLERY</li>
                      <li className='p-4'>CONTACT</li>

                      </ul>
                     </div>

                    </div>
                    

  );
};

export default Navbar; 