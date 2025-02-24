import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../firebase'; // Adjust the import path as needed
import { useInView } from 'react-intersection-observer';
import Navbar from '../Navbar/Navbar'; // Assuming you have a Navbar component
// Assuming you have a DarkModeToggle component
import Footer from '../Footer/Footer';
// import ApplyImage from '../../assets/blog/apply.jpg'; // Assuming you have an ApplyImage component for the image

const ApplyNow = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        resume: null
    });

    const [isDarkMode, setIsDarkMode] = useState(false);

    const positionRequirements = {
        'software-engineer': [
            'Bachelor\'s degree in Computer Science or related field',
            '3+ years of experience in software development',
            'Proficiency in JavaScript, React, Node.js'
        ],
        'cloud-architect': [
            'Bachelor\'s degree in Computer Science or related field',
            '5+ years of experience in cloud architecture',
            'AWS certification',
            'Strong knowledge of networking and security principles'
        ],
        'data-scientist': [
            'Master\'s degree in Computer Science, Statistics, or related field',
            '3+ years of experience in data analysis',
            'Proficiency in Python, R, SQL',
            'Strong understanding of machine learning algorithms'
        ],
        'network-engineer': [
            'Bachelor\'s degree in Computer Science or related field',
            '4+ years of experience in network engineering',
            'Cisco certification',
            'Strong knowledge of TCP/IP and routing protocols'
        ],
        'ui-ux-designer': [
            'Bachelor\'s degree in Design, Computer Science, or related field',
            '3+ years of experience in UI/UX design',
            'Proficiency in Figma, Adobe XD, Sketch',
            'Understanding of front-end technologies like HTML, CSS, JavaScript'
        ],
        // Add more positions as needed
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            resume: file
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(database, 'applications'), formData);
            console.log('Application submitted with ID: ', docRef.id);
            // Clear form after submission
            setFormData({
                name: '',
                email: '',
                position: '',
                resume: null
            });
            alert('Application submitted successfully!');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error submitting application. Please try again later.');
        }
    };

    // Animation with Intersection Observer
    const [frontendRef, frontendInView] = useInView({ threshold: 0.5 });
    const [backendRef, backendInView] = useInView({ threshold: 0.5 });
    const [cloudRef, cloudInView] = useInView({ threshold: 0.5 });
    const [dataRef, dataInView] = useInView({ threshold: 0.5 });
    const [designRef, designInView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (frontendInView) {
            // Execute animations or add classes for frontend role
            console.log('Frontend role is in view');
        }
    }, [frontendInView]);

    useEffect(() => {
        if (backendInView) {
            // Execute animations or add classes for backend role
            console.log('Backend role is in view');
        }
    }, [backendInView]);

    useEffect(() => {
        if (cloudInView) {
            // Execute animations or add classes for cloud role
            console.log('Cloud role is in view');
        }
    }, [cloudInView]);

    useEffect(() => {
        if (dataInView) {
            // Execute animations or add classes for data role
            console.log('Data role is in view');
        }
    }, [dataInView]);

    useEffect(() => {
        if (designInView) {
            // Execute animations or add classes for design role
            console.log('Design role is in view');
        }
    }, [designInView]);

    // Toggle dark mode
    

    return (
            <>
            <Navbar />
            <div className={`min-h-screen py-12` }>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between flex-col lg:flex-row">

                    {/* Left Side: Apply Now Form */}
                    <div className="w-full lg:w-1/32">
                        <div className={`rounded-lg shadow-md p-6`}>
                            <h2 className={`text-3xl font-semibold  text-violet-900 text-center mb-8 `}>Join Our Team</h2>

                            {/* Application Form */}
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                {/* Name */}
                                <div className="mb-4">
                                    <label htmlFor="name" className={`block `}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className={`w-full border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} focus:border-blue-500`}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-4">
                                    <label htmlFor="email" className={`block `}>Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className={`w-full border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} focus:border-blue-500`}
                                        required
                                    />
                                </div>

                                {/* Position */}
                                <div className="mb-4">
                                    <label htmlFor="position" className={`block `}>Position</label>
                                    <select
                                        id="position"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        className={`w-full border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} focus:border-blue-500`}
                                        required
                                    >
                                        <option value="">Select a position</option>
                                        <option value="software-engineer">Software Engineer</option>
                                        <option value="cloud-architect">Cloud Architect</option>
                                        <option value="data-scientist">Data Scientist</option>
                                        <option value="network-engineer">Network Engineer</option>
                                        <option value="ui-ux-designer">UI/UX Designer</option>
                                        {/* Add more positions as needed */}
                                    </select>
                                </div>

                                {/* Requirements based on selected position */}
                                {formData.position && (
                                    <div className="mb-4">
                                        <label className={`block `}>Requirements for {formData.position}</label>
                                        <ul className={`text-gray-600 `}>
                                            {positionRequirements[formData.position].map((requirement, index) => (
                                                <li
                                                    key={index}
                                                    className={`${formData.position === 'ui-ux-designer' ? 'hidden' : ''} ${formData.position === 'software-engineer' ? 'animate-fade-in-right' : 'animate-fade-in-left'}`}
                                                    ref={formData.position === 'software-engineer' ? frontendRef : formData.position === 'cloud-architect' ? cloudRef : formData.position === 'data-scientist' === 'data-scientist' ? dataRef : formData.position === 'network-engineer' ? backendRef : designRef}
                                                >
                                                    {requirement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Resume */}
                                <div className="mb-4">
                                    <label htmlFor="resume" className={`block `}>Upload Resume (PDF or DOCX)</label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className={`w-full border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} focus:border-blue-500`}
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className={`bg-violet-800 hover:bg-violet-900 text-white font-semibold py-2 px-6 rounded-md focus:outline-none ${isDarkMode ? 'dark-mode-btn' : ''}`}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Apply Image Section */}
                    <div className="py-12 px-4 w-full lg:w-1/32 md:px-8 lg:px-16 bg-violet-200 dark:text-white rounded  dark:bg-gray-900">
                        <h2 className="text-4xl font-bold text-center text-violet-900 mb-8">Why Join Us</h2>
                        <div className="max-w-3xl mx-auto">
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-900 dark:text-white animate-bounce">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    We foster a culture of collaboration and continuous learning.
                                </li>
                                <li className="flex items-center text-gray-900 dark:text-white animate-bounce">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    We offer competitive compensation and benefits.
                                </li>
                                <li className="flex items-center text-gray-900 dark:text-white animate-bounce">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Opportunity to work on cutting-edge technologies in a dynamic environment.
                                </li>

                            </ul>
                        </div>
                    </div>
                    

                </div>


               </div>
               <Footer />
        </>
            );
  };

            export default ApplyNow;

