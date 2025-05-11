import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkList } from '../Header/LinkList'; 
import { X, Menu } from 'lucide-react'; // lucide-react for icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}><X className="w-6 h-6" /></button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          {LinkList.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Hamburger for mobile */}
      <button 
        className="md:hidden p-2 focus:outline-none z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>
    </>
  );
};

export default Sidebar;
