import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import videosource from '/video3.mp4';

const CareerPage = () => {
  return (
    <>
    <Navbar />
    <div className="relative">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={videosource}type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Join Terra<span className='text-violet-900'>Byte</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up-delay">
            Shape the future of technology with us.
          </p>

          {/* Apply Now Button */}
          <a
            href="/apply"
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-full inline-block mb-12 transition duration-300 ease-in-out animate-bounce"
          >
            Apply Now
          </a>

          {/* Company Mission */}
          <section className="mb-12 animate-fade-in-up-delay">
            <h2 className="text-3xl font-semibold mb-4">How Terrabyte Shapes the Future of Technology</h2>
            <p className="text-lg leading-relaxed">
              Terrabyte is committed to revolutionizing the digital landscape through innovative solutions in software development, cloud computing, and cybersecurity. Our mission is to empower businesses and individuals with cutting-edge technologies that drive growth and efficiency.
            </p>
          </section>

          {/* Why Terrabyte */}
          <section className="mb-12 animate-fade-in-up-delay">
            <h2 className="text-3xl font-semibold mb-4">Why Choose Terra<span className='text-violet-900'>Byte?</span></h2>
            <ul className=" list-inside text-lg">
              <li className="mb-2">
                <span className=" w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-3">
                  1
                </span>We foster a culture of innovation and creativity.
              </li>
              <li className="mb-2">
                <span className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-3">
                  2
                </span>
                We prioritize employee growth and development.
              </li>
              <li className="mb-2">
                <span className=" w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-3">
                  3
                </span>
                Our commitment to integrity and excellence.
              </li>
              <li className="mb-2">
                <span className=" w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mr-3">
                  4
                </span>
                We offer competitive compensation and benefits.
              </li>
            </ul>
          </section>

          {/* CEO's Message */}
          <section className="animate-fade-in-up-delay">
            <h2 className="text-3xl font-semibold mb-4">A Message from Our CEO</h2>
            <p className="text-lg leading-relaxed">
              "At Terrabyte, we are driven by a passion for technological advancement and a vision to make a meaningful impact in the world. Join us as we continue to push boundaries and innovate for a better future."
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CareerPage;
