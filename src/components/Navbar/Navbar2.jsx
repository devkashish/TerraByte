import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import DarkMode from '../Navbar/DarkMode';
import ResponsiveMenu from '../Navbar/ResponsiveMenu';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaUserCircle } from 'react-icons/fa';
import Logo from "../../assets/website/Vector.svg";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
   
  },
  {
    id: 3,
    name: "Career",
    link: "/career",
  },
];

const Navbar2 = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <>
      <nav>
        <div
          data-aos="fade"
          data-aos-duration="300"
          className="relative border-b-[1px] z-10 w-full dark:bg-gray-900 bg-violet-400 dark:text-white shadow-lg duration-300"
        >
          <div className="container py-3 md:py-2 flex justify-between items-center">
            {/* Logo section */}
            <div className="flex flex-row items-center gap-2">
              <img src={Logo} alt="Logo" className="w-5" />
              <div className="text-2xl text-black dark:text-white items-center font-bold md:text-3xl">
                <Link to="/home">TERRA<span className="inline-block font-bold text-violet-900">BYTE</span></Link>
              </div>
            </div>

            {/* Desktop view Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <ul className="flex items-center gap-10">
                {MenuLinks.map(({ id, name, link }) => (
                  <li
                    key={id}
                    className="relative py-4"
                  >
                    <Link
                      to={link}
                      className="text-lg font-medium hover:text-violet-800 py-2 hover:border-b-2 hover:border-violet-800 transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* User section */}
            <div className="flex items-center gap-4">
              <Link to="/contact" className="text-lg font-medium hover:text-violet-800 py-2 transition-colors duration-500">
                Contact Us
              </Link>
              {user && (
                <div className="relative flex items-center gap-4">
                  <button
                    className="flex items-center focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <FaUserCircle size={30} className="text-gray-800 dark:text-white" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg py-2 z-20">
                      <div className="block px-4 py-2 text-gray-800 dark:text-white w-full text-left">
                        {user.email}
                      </div>
                      <button
                        className="block px-4 py-2 text-gray-800 dark:text-white w-full text-left"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                  <DarkMode />
                </div>
                
                
              )}
            </div>

            {/* Mobile view Drawer */}
            <div className="flex items-center gap-4 md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        {showMenu && <ResponsiveMenu showMenu={showMenu} />}
        {showMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-20"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar2;

