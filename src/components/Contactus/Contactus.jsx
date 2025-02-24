import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import FaPhone and FaMapMarkerAlt for phone and location icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import Logo from "../../assets/website/Vector.svg";

import Navbar from "../Navbar/Navbar";

const ContactUs = () => {
  return (
    <div className="relative w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Header */}
    <Navbar />
   
      {/* Main Content */}
      <main className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-violet-900 mb-8">Get in Touch with Us</h1>
        <p className="text-lg text-gray-900 mb-12">
          Have questions? We're here to help. Reach out to us and we'll get
          back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl text-violet-900 font-bold mb-4">General Inquiries</h2>
            <p className="mb-4">For any general questions or information.</p>
            <Link to="/feedback" className="text-violet-600 hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl  text-violet-900 font-bold mb-4">Call Support</h2>
            <div className="flex items-center mb-4">
              <FaPhone className="text-gray-600 mr-2" />
              <a href="tel:+123456789" className="text-violet-600 text-center hover:underline">
                +1 (234) 567-89
              </a>
            </div>
            <p className="mb-4">Call our support team for immediate assistance.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl text-violet-900 font-bold mb-4">Address</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              <address className="not-italic text-center">
                1234 Tech Park, Cyber City
                <br />
                Gurgaon,India
              </address>
            </div>
            <p className="mb-4">
              Visit us at our headquarters. Here's our physical address.
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-violet-900 mb-4">Connect with Us on Social Media</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/terrabyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-600 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com/terrabyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-600 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/terrabyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/terrabyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-600 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl text-violet-900 font-bold mb-4">Looking for something else?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/careers" className="text-lg hover:text-violet-800 transition-colors duration-300">
              Careers
            </Link>
            <Link to="/login" className="text-lg hover:text-violet-800 transition-colors duration-300">
              Login
            </Link>
            <Link to="/services" className="text-lg hover:text-violet-800 transition-colors duration-300">
              Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
