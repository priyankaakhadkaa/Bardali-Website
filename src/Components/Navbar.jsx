import logo from '../assets/image/logo.png';
import { TbWorld } from "react-icons/tb";
import {FaXmark, FaBars} from "react-icons/fa6" 
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar =() =>{
const [isMenuOpen, setIsMenuOpen]=useState(false);

   const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
   }

   const closeMenuOnScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', closeMenuOnScroll);
    
    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
    };
  }, [isMenuOpen]);
   

  

    const navItems= [
        {link: "Home",path:"/"},
        {link: "Service", path:"service"},
        {link: "Contact", path:"contact"}, 
        {link: "About us", path:"about"},
        {link: "Course", path:"course"},
       
      
     ]
    return (
        <>
        <nav className="bg-white md:px-14  border-b p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
         <div className='text-lg font-medium container mx-auto flex justify-between items-center '>
          <div className="flex space-x-14 items-center">
              <a href="/" className='text-2xl flex items-center space-x-3 '><img className='w-24 inline-block items-center' src={logo}></img>
              </a>

              {/*Showing navitem using map*/}
              <ul className='md:flex space-x-12 hidden'>
                {
                     navItems.map(({link,path})=> <a key={link} href={path} className="block hover:text-orange-400">{link}</a>)
                    
                }

              </ul>
          </div>

          {/* language */}
                <div className='hidden md:flex items-center'>
                   <a href="/" className="hidden lg:flex items-center hover:text-secondary"><TbWorld className="mr-2"/><span>Language</span></a>
                </div>
  

           {/*Menubar button only display on mobile*/}
           <div className="md:hidden">
              <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                  {
                    isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
                  }
              </button>
           </div>
         </div>
        </nav>


        <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-emerald-700 text-white text-md ${
          isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link key={link} to={path} className="block hover:text-orange-400">
            {link}
          </Link>
        ))}
      </div>
    </>


    );
};

export default Navbar;