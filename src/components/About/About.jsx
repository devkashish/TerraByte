import React from 'react';
import videoSource from '../../assets/video/video2.mp4';
import { Typewriter } from 'react-simple-typewriter';
import img1 from '../../assets/blog/gallery1.jpg';
import img2 from '../../assets/blog/gallery2.jpg';
import img3 from '../../assets/blog/gallery3.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const About = () => {
    let words = ["TERRABYTE"];

    const scrollToSection = () => {
        document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <Navbar/>
            <div className="relative w-screen min-h-screen flex justify-center items-center overflow-hidden">
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Hero Section */}
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white animate-fadeIn mb-4">
                        About <span className="text-violet-900 font-serif font-bold">
                            <Typewriter words={words} loop={0} />
                        </span>
                    </h1>
                    <div className="border-t-2 border-violet-500 w-1/2 mb-4"></div>
                    <p className="text-lg text-white mb-6">Innovating the Future, One Byte at a Time.</p>
                </div>
            </div>

            <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
                <h2 className="text-4xl font-bold text-violet-800 text-center mb-8">Company Overview</h2>
                <div className="text-center">
                    <div className="border-t-2 border-violet-500 inline-block w-1/2 mb-4"></div>
                </div>
                <p className="text-lg text-center text-gray-900 mb-6">
                    Terrabyte is a leading technology company specializing in innovative solutions and services. We are committed to transforming digital experiences through our expertise in various tech domains.
                </p>
                <p className="text-lg text-center text-gray-900">
                    Our team of dedicated professionals works relentlessly to deliver top-notch services that drive value and growth for our clients. Join us on our journey to explore new horizons in the digital world.
                </p>
            </div>

            {/* Mission and Vision Section */}
            <div className="py-12 px-4 md:px-8 lg:px-16 bg-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="animate-slideLeft">
                        <h2 className="text-3xl font-bold text-violet-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-900">
                            Our mission is to provide innovative technology solutions that empower businesses to achieve their goals. We strive to deliver excellence through our services, ensuring customer satisfaction and continuous improvement.
                        </p>
                    </div>
                    <div className="animate-slideRight">
                        <h2 className="text-3xl font-bold text-violet-900 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-900">
                            Our vision is to be a global leader in the technology sector, known for our commitment to quality, innovation, and sustainability. We aim to create a better future through technology that positively impacts the world.
                        </p>
                    </div>
                </div>
            </div>

            {/* What Drives Us Section */}
            <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-violet-900 mb-8">What Drives Us</h2>
                <div className="max-w-3xl mx-auto">
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-900 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Innovation: Constantly pushing the boundaries to bring new ideas and solutions.
                        </li>
                        <li className="flex items-center text-gray-900 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Collaboration: Working together to achieve collective goals and foster teamwork.
                        </li>
                        <li className="flex items-center text-gray-900 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Excellence: Striving for the highest standards in everything we do.
                        </li>
                        <li className="flex items-center text-gray-900 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Integrity: Upholding honesty, ethics, and transparency in all our interactions.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-12 px-4 md:px-8 lg:px-16 bg-violet-200">
                <h2 className="text-4xl font-bold text-violet-900 text-center mb-8">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={img1}
                            alt="Gallery Image 1"
                            className="object-cover w-full h-72 transition duration-300 transform group-hover:scale-105"
                        />
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={img2}
                            alt="Gallery Image 2"
                            className="object-cover w-full h-72 transition duration-300 transform group-hover:scale-105"
                        />
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={img3}
                            alt="Gallery Image 3"
                            className="object-cover w-full h-72 transition duration-300 transform group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* Join Us Section */}
            <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-violet-900 mb-8">Join Us</h2>
                <div className="text-center">
                    <div className="border-t-2 border-violet-500 inline-block w-1/2 mb-4"></div>
                </div>
                <div className="max-w-lg mx-auto text-gray-900 text-center">
                    <p className="text-lg mb-6">
                        Are you passionate about technology and innovation?</p>
                    <p className="text-lg mb-6">
                        Join Terrabyte and be part of a dynamic team that is shaping the future of digital solutions.
                    </p>
                    <a
                        href="/career"
                        className="inline-block bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Explore Careers
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
