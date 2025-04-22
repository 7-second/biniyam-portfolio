import React from 'react';
import logo from "../assets/logo.png";

import { FaHome, FaUser } from 'react-icons/fa';
import { MdContactMail } from "react-icons/md";

function Header() {
  const scroolDownBottom = () => {
    const scrollToPosition = document.documentElement.scrollHeight - 20;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  };

  const headerItem = [
    {
      name: 'Home',
      icon: FaHome,
      id: 1,
      href: '#', 
    },
    {
      name: 'Contact Me',
      icon: MdContactMail,
      id: 2,
      onClick: scroolDownBottom,
    },
    {
      name: 'About',
      icon: FaUser,
      id: 3,
      href: '#', 
    },
  ];

  return (
    <div className="sticky top-0 bg-white z-10 flex justify-between items-center py-2 px-2 shadow-lg md:px-4 lg:px-6">
      <div className="p-[2px] rounded-full">
        <img
          src={logo}
          alt="logo"
          className="w-[50px] h-[50px] rounded-full md:w-[100px] md:h-[50px]"
        />
      </div>
      <div className="flex justify-end items-center h-[50px] px-2 text-[15px] text-teal-500">
        <ul className="flex h-fit gap-7 list-none items-center">
          {headerItem.map((item) => (
            <li key={item.id} className="flex items-center gap-1 md:gap-4 cursor-pointer">
              {item.onClick ? (
                <button onClick={item.onClick} className="flex items-center gap-1">
                  {item.icon && <item.icon size={16} />}
                  <span>{item.name}</span>
                </button>
              ) : (
                <a href={item.href} className="flex items-center gap-1">
                  {item.icon && <item.icon size={16} />}
                  <span>{item.name}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
