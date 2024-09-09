import React from "react";
import Link from 'next/link';
import NavLink from "./NavLink";

function Header() {
  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <header className="py-auto mx-3 my-3 ">
    <div className="container mx-auto px-2 sm:px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between border border-white p-2 sm:p-3 lg:p-4 rounded-full overflow-x-auto">
      
      {/* Left Part */}
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-100 font-bold cursor-pointer flex-shrink-0 mb-2 sm:mb-0">
        Prasad <span className="text-purple-300">Shelar</span>
      </div>
  
      {/* Navigation Links */}
      <nav className="flex-1 w-full">
        <ul className="flex flex-row flex-wrap space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 text-center justify-center">
          {navLinks.map((link, index) => (
            <li key={index} className="flex-shrink-0 mb-2 sm:mb-0">
              <NavLink
                href={link.path}
                title={link.title}
                className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1 rounded-lg"
              />
            </li>
          ))}
        </ul>
      </nav>
  
      {/* Right Part */}
      <div className="flex flex-row flex-wrap space-x-2 sm:space-x-3 items-center flex-shrink-0 mt-2 sm:mt-0">
        <Link href="https://www.linkedin.com/in/prasad-shelar-a86399235" passHref>
          <button className="border border-purple-500 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base text-white rounded-full hover:bg-blue-600">
            Linkedin
          </button>
        </Link>
        
        <Link href="https://github.com/SHARPY777" passHref>
          <button className="border border-purple-500 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base text-white rounded-full hover:bg-black">
            Github
          </button>
        </Link>
      </div>
    </div>
  </header>
  

  );
}

export default Header;
