import React from "react";
import { SiHtmx } from "react-icons/si";
import videoSource from "../../assets/video/Ai.mp4"; // Correct import
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCloud } from "react-icons/fa6";
import cloudimage from "../../assets/blog/cloud.jpeg";
import appdevimage from "../../assets/blog/appdev.jpg";
import videoSource2 from "../../assets/video/webdev.mp4";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Services = () => {
  return (
    <>
 
      <section className="text-gray-600 bg-violet-200 dark:bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="xl:w-1/2 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-80 rounded  w-full object-cover object-center mb-6"
                  src={cloudimage}
                  alt="Cloud Hosting"
                />
                <FaCloud className="text-4xl text-primary" />
                <h2 className="text-lg text-violet-800  font-bold  title-font mb-4">
                  Cloud Hosting
                </h2>
                <p className="leading-relaxed text-base">
                Terabyte Company provides scalable infrastructure resources such as virtual machines, storage, and networking components through their IaaS offerings. This allows businesses to quickly scale their IT infrastructure without the need for physical hardware investments.

                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="xl:w-1/2 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="h-80  mb-6 rounded overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-80 object-cover"
                  >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <GiArtificialIntelligence className="text-4xl text-primary" />
                <h2 className="text-lg text-violet-800  font-bold  title-font mb-4">
                  Artificial Intelligence
                </h2>
                <p className="leading-relaxed text-base">
                Terabyte Company integrates AI into business processes to automate repetitive tasks and streamline operations. This includes robotic process automation (RPA) solutions that improve productivity, reduce errors, and free up human resources for more strategic activities.


                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="xl:w-1/2 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-80 rounded object-cover"
                >
                  <source src={videoSource2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <SiHtmx className="text-5xl text-primary" />
                <h2 className="text-lg text-violet-800  font-bold title-font mb-4">
                  Web Development
                </h2>
                <p className="leading-relaxed text-base">
                Terabyte Company excels in creating bespoke websites from scratch, aligning closely with client specifications and business objectives. Whether it's a corporate website, e-commerce platform, or a specialized web application, they leverage the latest technologies to deliver robust and scalable solutions.

                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="xl:w-1/2 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-80 rounded w-full object-cover object-center mb-6"
                  src={appdevimage}
                  alt="App Development"
                />
                <MdOutlineAppSettingsAlt className="text-4xl text-primary" />
                <h2 className="text-lg text-violet-800  font-bold  title-font mb-4">
                  App Development
                </h2>
                <p className="leading-relaxed text-base">
                Terabyte Company specializes in creating customized mobile applications tailored to specific business requirements. They develop apps for iOS (iPhone/iPad) and Android platforms, ensuring seamless performance, intuitive user interfaces, and optimal user experience.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Services;

    