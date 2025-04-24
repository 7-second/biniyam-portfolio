import React from 'react';
import logoprofile from "../assets/footer logo.jfif";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold underline underline-offset-4 decoration-yellow-500">Contact Me</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logoprofile}
            alt="Profile Logo"
            className="w-40 h-40 object-cover rounded-2xl mb-4 shadow-md"
          />
          <p className="text-lg font-medium">Biniyam Gossa</p>
          <p className="text-sm text-gray-400">Front-End Developer | Addis Ababa</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-2 text-sm">
          <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
          <p><strong>Email:</strong> <a href="mailto:biniyamgossa01@gmail.com" className="text-yellow-400 hover:underline">biniyamgossa01@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+251985434363" className="text-yellow-400 hover:underline">+251 985 434 363</a></p>
          <p className="flex items-center gap-2">
            <FaTelegram className="text-blue-400" />
            <a href="https://t.me/Biniyam05" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Join me on Telegram
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
          <h2 className="text-2xl font-semibold mb-2">Follow Me</h2>
          <div className="flex flex-col gap-3 text-lg">
            <a href="https://www.instagram.com/biniyamgossa?utm_source=qr&igsh=Z2ZtMWZuaThudW83" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-all">
              <FaInstagram className="text-pink-500" /> Instagram
            </a>
            <a href="https://www.facebook.com/biniyam.gossa.5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-all">
              <FaFacebook className="text-blue-600" /> Facebook
            </a>
            <a href="https://www.tiktok.com/@biniyamgossa?_t=ZM-8vRlBuZPJ4P&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-all">
              <FaTiktok className="text-white" /> TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Biniyam Gossa. All rights reserved.</p>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 mt-4 md:mt-0 text-yellow-400 hover:text-yellow-300 transition-all"
        >
          <FaArrowUp />
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
