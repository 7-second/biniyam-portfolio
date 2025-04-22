import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../assets/logo.png"

import { FaArrowCircleDown, FaHome, FaUser } from 'react-icons/fa';

function Header() {
  const headerItem = [
    {
      name: 'Home',
      icon: FaHome,
      id: 1,
      link: '/', 
    },
   
    {
      name: 'About',
      icon: FaUser,
      id: 3,
      link: '/about', 
    },
  ];

  return (
    <div className="sticky top-0 bg-white z-10 flex justify-between items-center py-2 px-2 shadow-lg md:px-4 lg:px-6">
      <div className="p-[2px] rounded-full ">
        <img
          src={logo}
          alt=""
          className='w-[50px] h-[50px] rounded-full  md:w-[100px] md:h-[50px]'
        />
      </div>
      <div className="flex justify-end items-center h-[50px] px-2 text-[15px] text-teal-500 ">
        <ul className="flex h-fit gap-7 list-none items-center">
          {headerItem.map((item) => (
            <li key={item.id} className="flex flex-row items-center gap-1 md:gap-4 ">
              <a href={item.link} className="flex items-center gap-1">  {/* Use Link here */}
                {item.icon && <item.icon size={16} />}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
