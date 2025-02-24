// ContactToggle.jsx
import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; // Import icons from react-icons

const ContactToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContact = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-10">
      <button
        onClick={toggleContact}
        className="flex items-center justify-center bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        {isOpen ? 'Close Contact' : 'Open Contact'}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-8 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Contact Information</h3>
          <div className="flex items-center space-x-2 mb-2">
            <FiPhone className="text-violet-500 w-6 h-6" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <FiMail className="text-violet-500 w-6 h-6" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMapPin className="text-violet-500 w-6 h-6" />
            <span>123 Street, City, Country</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactToggle;
