import React, { useState } from 'react';
import { IoMdPerson, IoMdMail, IoMdLock, IoMdPhonePortrait } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from '../../firebase'; // Adjust the import path as needed
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate email format
    if (name === 'email') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormErrors({
        ...formErrors,
        email: isValidEmail ? '' : 'Please enter a valid email address'
      });
    }

    // Validate phone number format
    if (name === 'phone') {
      const isValidPhone = /^\d{10}$/.test(value);
      setFormErrors({
        ...formErrors,
        phone: isValidPhone ? '' : 'Phone number must be 10 digits'
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate name
    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Validate email (basic format check)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate phone number (basic format check)
    if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save additional user data to Realtime Database
      await set(ref(database, 'users/' + user.uid), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });

      toast(`🎉 Signed up successfully as ${user.email}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Clear form fields after successful signup
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: ''
      });
    } catch (error) {
      const errorMessage = error.message;
      toast(`😞 Signup failed: ${errorMessage}`, {
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
      <Navbar/>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl text-center text-violet-950  font-bold mb-6">Sign Up</h1>
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="flex items-center border-b border-gray-300 py-2">
                <IoMdPerson className="text-gray-500 mr-3" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>
              {formErrors.name && <p className="text-white-500 text-xs mt-1">{formErrors.name}</p>}

              <div className="flex items-center border-b border-gray-300 py-2">
                <IoMdMail className="text-gray-500 mr-3" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>
              {formErrors.email && <p className="text-white-500 text-xs mt-1">{formErrors.email}</p>}

              <div className="flex items-center border-b border-gray-300 py-2">
                <IoMdPhonePortrait className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>
              {formErrors.phone && <p className="text-white-500 text-xs mt-1">{formErrors.phone}</p>}

              <div className="flex items-center border-b border-gray-300 py-2">
                <IoMdLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                  required
                />
              </div>
              {formErrors.password && <p className="text-white-500 text-xs mt-1">{formErrors.password}</p>}

              <button
                type="submit"
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
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
      <Footer/>
    </>
  );
};

export default Signup;
