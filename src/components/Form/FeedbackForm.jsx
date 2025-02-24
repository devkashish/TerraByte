// Form.jsx

import React, { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  ref, push } from 'firebase/database';
import { database } from '../../firebase'; // Adjust the path as per your file structure

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phone && formData.msg) {
      try {
        await push(ref(database, 'feedback'), formData);
        toast('🤞🏻 Submitted successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          msg: ''
        });
      } catch (error) {
        toast(`😞 Submission failed: ${error.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } else {
      toast('🫠 Please fill out all fields before submitting', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    
  };

  return (
    <div className="bg-cover bg-violet-200 dark:bg-slate-900 bg-center p-5 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-violet-950 font-bold dark:text-violet-900 mb-6 text-center">Feedback</h1>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4 dark:text-black">
            <label htmlFor="name" className="block text-gray-700 dark:text-black font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-violet-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-black font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-violet-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 dark:text-black font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-violet-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="msg" className="block text-gray-700 dark:text-black font-bold mb-2">Message/Query</label>
            <textarea
              id="msg"
              name="msg"
              value={formData.msg}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-violet-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition-colors focus:outline-none flex items-center justify-center w-full"
          >
            <span className="mr-2">Submit</span>
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
