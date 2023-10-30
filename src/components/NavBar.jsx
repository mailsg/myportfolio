import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../App.css';

function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'portfolio',
    },
    {
      id: 3,
      link: 'about',
    },
    {
      id: 4,
      link: 'skill',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
  return (
    <div className="flex justify-between items-center w-full px-4 h-20 text-white bg-black fixed">
      <div>
        <h1
          className="text-4xl font-mono ml-2 animate-pulse"
          style={{ fontFamily: 'Caveat' }}
        >
          Sandeep
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer
          capitalize
          font-medium
          text-white
          hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
          
      {nav && (
        <ul className="flex flex-col justify-center items-left absolute top-16 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 z-50"
            style={{ fontFamily: 'Playpen' }}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-6 cursor-pointer capitalize py-6 -mt-1.5 text-2xl"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
