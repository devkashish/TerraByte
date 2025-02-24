// src/components/Hero/Hero.jsx
import React from "react";
import videoSource from "../../assets/video/video.mp4";
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import "./videobackground.css"; // Ensure to uncomment if needed
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const Hero = () => {
  let words = ["Custom Development", "AI Integration", "Software Solutions"];

  const scrollToSection = () => {
    document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative w-screen h-screen flex justify-center bg-cover bg-center items-center h-7px overflow-hidden">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center p-6 bg-black bg-opacity-50 rounded-md">
          <h1 className="text-5xl font-bold text-white mb-4">Building Tomorrow’s Technology Today</h1>
          <p className="text-3xl font-bold text-white mb-6">
            Empowering businesses with <span className="text-violet-900 font-serif font-bold"><Typewriter  words={words} loop={0} /></span>
          </p>
          
          <Link to={"/about"} className="text-white bg-violet-600 border border-violet-700 rounded-md px-4 py-3 inline-flex justify-center items-center hover:bg-violet-900 hover:underline transition-colors">Read More<FaArrowRight /></Link>
        </div>
      </div>

      {/* <div className="fixed bottom-4 right-4">
        <button
          onClick={scrollToSection}
          className="p-3 rounded-full bg-violet-600 text-white shadow-lg hover:bg-violet-900 transition duration-300"
        >
          <FaArrowDown />
        </button>
      </div> */}
      <section className="container h-12 md:h-32">
      <div className="mx-auto my-4 grid w-full -translate-y-10 grid-cols-3 divide-x divide-slate-700 bg-white p-2 shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] md:-translate-y-16 md:p-8">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={234} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md text-xs  md:text-lg">Clients</h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={56} suffix="+" duration={2.75} />
          </h1>
          <h1 className=" sm:text-md text-xs md:text-lg">projects</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={234} suffix="k+" />
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Employees</h1>
        </div>
        
      </div>
    </section>
    </>
  );
};

export default Hero;
