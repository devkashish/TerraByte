import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const LicensingPage = () => {
  return (
    <><Navbar/>
    <div className="bg-gray-100  text-black min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-semibold text-center mb-4">Licensing Information</h1>
            <p className="text-lg text-center mb-8">Welcome to Terrabyte's Licensing Information.</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Software Licensing</h2>
              <p className="text-lg mb-2">Terrabyte provides software solutions under various licensing terms:</p>
              <ul className="list-disc list-inside text-lg mb-4">
                <li>Single User License: Allows use by a single designated user.</li>
                <li>Enterprise License: Allows use across multiple users within an organization.</li>
                <li>Developer License: Allows use for development purposes.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Intellectual Property Rights</h2>
              <p className="text-lg mb-2">Terrabyte respects intellectual property rights:</p>
              <ul className="list-disc list-inside text-lg mb-4">
                <li>All rights reserved for proprietary software and content.</li>
                <li>No unauthorized distribution or reproduction.</li>
                <li>License agreements apply to all software and content usage.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Terms of Use</h2>
              <p className="text-lg mb-2">By using Terrabyte's software and services, you agree to:</p>
              <ul className="list-disc list-inside text-lg mb-4">
                <li>Comply with all licensing terms and conditions.</li>
                <li>Respect intellectual property rights.</li>
                <li>Report any unauthorized use or violations.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
              <p className="text-lg mb-2">For any questions regarding licensing, please contact us:</p>
              <ul className="list-disc list-inside text-lg">
                <li>Email: licensing@terrabyte.com</li>
                <li>Phone: +1234567890</li>
                <li>Address: 123 Licensing St, Terrabyte City, TB 12345</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LicensingPage;
