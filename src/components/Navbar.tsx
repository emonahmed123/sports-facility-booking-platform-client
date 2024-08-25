/* eslint-disable react-hooks/rules-of-hooks */
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  
  
  const [open, setOpen] = useState(false);


 
    return (
  
    <nav className="bg-[#FFFFFF]   border-b">
    <div className="max-w-[1170px] mx-auto flex items-center font-medium justify-around">
      <div className="z-50 p-5 md:w-auto w-full flex justify-between">
        <img src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/N8lApmzhKXbK5HA7kTpU1702703250.svg" alt="logo" className="md:cursor-pointer h-9" />
        <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
      </div>
      <ul className="md:flex hidden uppercase items-center gap-8 font-">
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
          About Us
          </Link>
          <Link to="/" className="py-7 px-3 inline-block">
          Contact Us
          </Link>
        </li>
        {/* <NavLinks /> */}
      </ul>
      <div className="md:flex gap-x-2 hidden "> 
      <Link to=''>
      <button className="bg-[#3d85ff] text-white  px-6 py-2 rounded-full">
      Login
    </button>
      </Link>
    <Link to='' >
    <button className="bg-[#3d85ff] text-white  px-6 py-2 rounded-full">
      Singup
    </button>
    </Link>
      </div>
      {/* Mobile nav */}
      <ul
        className={`
      md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"}
      `}
      >
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
            Home
          </Link>
        
         
        </li>
        <li>  <Link to="/" className="py-7 px-3 inline-block">
          Contact Us
          </Link></li>
        <li> <Link to="/" className="py-7 px-3 inline-block">
        About us
          </Link></li>
        {/* <NavLinks /> */}
        <div className="py-5">
        <Link to=''>
      <button className="bg-[#3d85ff] text-white  px-6 py-2 rounded-full">
      Login
    </button>
      </Link>
        </div>
      </ul>
    </div>
  </nav>

    )
};

export default navbar;