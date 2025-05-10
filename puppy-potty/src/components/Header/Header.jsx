import React from 'react';
import { Link } from 'react-router-dom';
import { LinkList } from './LinkList'; // ✅ correct
import Globalcontainer from '../GlobalContainer/Globalcontainer';
import { Button } from '../ui/button';
// import Logo from './image/logo.svg';

const Header = () => {
  return (
    <Globalcontainer>
    <header className="flex items-center justify-between p-6 shadow-md">
      <div className="flex w-[20%] items-center gap-2">
      <img src="./img/logo.png" alt="Logo" className="w-30 h-10" />
      </div>

      <nav className="hidden md:flex gap-6 text-sm text-gray-700">
        {LinkList.map((link) => (
          <Link to={link.path} key={link.name} className="hover:text-blue-500">
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-2">
      <Button className="px-4 py-2 bg-[#F9CE3B] text-white rounded-md text-sm hover:bg-[#F9CE3B]">
          Sign Up
        </Button>
        <Button className="px-4 py-2 border rounded-md text-sm">Log In</Button>
      
      </div>
    
    </header>
    </Globalcontainer>
  );
};

export default Header;
