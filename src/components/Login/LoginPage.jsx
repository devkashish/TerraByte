import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdMail, IoMdLock } from "react-icons/io";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const LoginPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    loginEmail: '',
    loginPassword: ''
  });

  const [emailError, setEmailError] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });

    if (name === 'loginEmail') {
      // Validate email format
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailError(isValidEmail ? '' : 'Please enter a valid email address');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Check if there's any validation error
    if (emailError) {
      toast.error('Please enter a valid email address', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginData.loginEmail, loginData.loginPassword);
      const user = userCredential.user;

      toast(`🎉 Logged in successfully as ${user.email}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate('/redirect'); // Redirect to home after successful login
    } catch (error) {
      const errorMessage = error.message;
      toast(`😞 Login failed: ${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center min-h-screen">
          <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md'>
            <h1 className="text-3xl text-center text-violet-950 font-bold dark:text-white mb-6">Login</h1>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="flex items-center border-b border-gray-300 py-2">
                <IoMdMail className="text-gray-500 mr-3" />
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  value={loginData.loginEmail}
                  onChange={handleLoginChange}
                  placeholder="Email Address"
                  className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" // Email pattern
                  title="Enter a valid email address" // Tooltip text
                  required
                />
              </div>
              {emailError && (
                <p className="text-white-700 text-xs mt-1">{emailError}</p>
              )}

              <div className="flex items-center border-b border-gray-300 py-2">
                <IoMdLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  value={loginData.loginPassword}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>

              <div className="text-center mt-4">
                <p className="text-white-900">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
              </div>
            </form>
          </div>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
