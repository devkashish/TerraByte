import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase'; // Adjust the import path as needed
import Logo from '../../assets/website/Vector.svg'; // Replace with your logo path

const ResponsiveMenu = ({ showMenu, closeMenu }) => {
  const [user, setUser] = useState(null); // State to hold the user object
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Firebase authentication listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Cleanup function to unsubscribe from the listener when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      history.push('/'); // Redirect to the home page or another route after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-violet-200 dark:bg-gray-900 dark:text-white  z-50 flex flex-col justify-between transition-all duration-300 ${
        showMenu ? 'left-0' : '-left-full'
      } md:hidden`}
    >
      <div className="flex flex-col items-center pt-10 pb-6 px-4">
        <img src={Logo} alt="Logo" className="w-24 mb-4" />
        <h1 className='text-5xl font-bold text-white bg-violet-200 dark:bg-gray-900 mb-4'>TERRA<span className='inline-block font-bold text-violet-900'>BYTE</span></h1>
        {user ? (
          <div className="flex items-center mb-4">
            <FaUserCircle size={32} className="mr-2" />
            <span className="text-lg">{user.email}</span>
          </div>
        ) : (
          <Link to="/login" className="text-lg  text-violet mb-4" onClick={closeMenu}>
            Login
          </Link>
        )}
        <nav className="flex flex-col space-y-4 text-violet-800 text-lg">
          <NavLink to="/" text="Home" closeMenu={closeMenu} />
          <NavLink to="/about" text="About" closeMenu={closeMenu} />
          <NavLink to="/services" text="Services" closeMenu={closeMenu} />
          <NavLink to="/career" text="Career" closeMenu={closeMenu} />
          {user && (
            <button
              onClick={handleLogout}
              className="block px-2 py-1 rounded transition duration-300 text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
      <div className="pb-6 px-4">
        <div className="flex items-center justify-center">
          <span className="text-lg text-gray-600">© 2024  TERRA<span className='text-violet-900 font-bold'>BYTE</span></span>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ to, text, closeMenu }) => {
  const isActive = useLocation().pathname === to;
  return (
    <Link
      to={to}
      className={`block px-2 py-1 rounded transition duration-300 ${
        isActive ? ' text-violet-900' : ''
      }`}
      onClick={closeMenu}
    >
      {text}
    </Link>
  );
};

export default ResponsiveMenu;
