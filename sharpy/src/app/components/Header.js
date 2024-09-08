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
    <header className="py-4">
       <div className="mx-10 sm:mx-auto max-w-7xl lg:max-w-8xl xl:max-w-9xl px-5 flex items-center justify-between border border-white p-4 rounded-full w-full sm:w-auto"
     style={{ maxWidth: '77%', '@media(min-width: 640px)': { maxWidth: '75%' } }}>
        {/* Left Part */}
        <div className="mb-4 sm:mb-0">
          <span className="text-3xl text-purple-100 cursor-pointer font-bold">
            Prasad <span className="text-purple-300 font-bold">Shelar</span>
          </span>
        </div>

       
           <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Part */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center">
          <Link href="https://www.linkedin.com/in/prasad-shelar-a86399235" passHref legacyBehavior>
            <button className="border cursor-pointer border-purple-500 px-4 py-2  text-white rounded-full hover:bg-blue-600 w-full sm:w-auto">
              Linkedin
            </button>
          </Link>
          
          <Link href="https://github.com/SHARPY777" passHref legacyBehavior>
            <button className="border cursor-pointer border-purple-500 px-4 py-2 text-white rounded-full hover:bg-black w-full sm:w-auto">
              Github
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
