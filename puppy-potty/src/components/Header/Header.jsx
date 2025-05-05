import React from 'react';
import { Link } from 'react-router-dom';
import { LinkList } from './LinkList'; // ✅ correct
// import Logo from './image/logo.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 shadow-md">
      <div className="flex items-center gap-2">
      <img src="/image/logo.png" alt="Logo" className="w-10 h-10" />

        <span className="text-lg font-bold">Puppy Potty Log</span>
      </div>

      <nav className="hidden md:flex gap-6 text-sm text-gray-700">
        {LinkList.map((link) => (
          <Link to={link.path} key={link.name} className="hover:text-blue-500">
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-2">
        <button className="px-4 py-2 border rounded-md text-sm">Log In</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
