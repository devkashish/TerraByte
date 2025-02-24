import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "../Navbar/ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "../Navbar/DarkMode";
import { Link } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/about",
    // subLinks: [
    //   { name: "Service 1", link: "/#service1" },
    //   { name: "Service 2", link: "/#service2" },
    //   { name: "Service 3", link: "/#service3" },
    // ],
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
    subLinks: [
      { name: "Web Development", link: "/#service1" },
      { name: "App Development", link: "/#service2" },
      { name: "Artificial Intelligence", link: "/#service3" },
      { name: "Cloud Hosting", link: "/#service3" },
    ],
  },
  {
    id: 3,
    name: "Career",
    link: "/career",
    
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div
        data-aos="fade"
        data-aos-duration="300"
        className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent"
      >
        <div className="container py-3 md:py-2 flex justify-between items-center">
          {/* Logo section */}
          <div className="flex flex-row items-center gap-2">
            <img src={Logo} alt="Logo" className="w-5" />
            <div className="text-2xl text-black dark:text-white items-center font-bold md:text-3xl">
          <a href="/home">  TERRA<span className="inline-block font-bold text-violet-900">BYTE</span></a>
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
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-violet-800 py-2 hover:border-b-2 hover:border-violet-800 transition-colors duration-500"
                  >
                    {name}
                  </a>
              
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us and DarkMode section */}
          <div className="flex flex-row items-center right-3 gap-4 md:order-2 space-x-3 md:space-x-0">
            <Link to="/contact" className="">
              Contact Us
            </Link>
            <Link to="/login" className="">
              Login
              </Link>
            <DarkMode />
          </div>

          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Hamburger icon */}
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
      {/* Conditionally render ResponsiveMenu */}
      {showMenu && <ResponsiveMenu showMenu={showMenu} />}
      {/* Overlay content */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black  bg-opacity-30 z-20"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
