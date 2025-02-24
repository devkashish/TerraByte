import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Hero from "./components/Hero/Hero";
import Services from "./components/Service/Services";
import BlogsComp from "./components/Blogs/BlogsComp";
import Testimonial from "./components/Testimonial/Testimonial";
import LoginPage from "./components/Login/LoginPage";
import Footer from "./components/Footer/Footer";
import Contactus from "./components/Contactus/Contactus";
import About from "./components/About/About";
import FeedbackForm from "./components/Form/FeedbackForm";
import Signup from "./components/Login/Signup";
import CareerPage from "./components/Career/Career";
import ContactToggle from "./components/Contactus/ContactToggle";
import ApplyNow from "./components/Career/Apply";
import Privacypolicy from "./components/Privacy/Privacypolicy";
import LicensingPage from "./components/Licesnce/LicensingPage";
import RedirectPage from "./components/Login/redirectpage";
// import Services from "./components/Service/Services";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Services />
            <Testimonial />
            <BlogsComp />
            <FeedbackForm />
            <ContactToggle />
            <Footer />
          </>
        } />
        <Route path="/home" element={
          <>
            <Navbar />
            <Hero />
            <Services />
            <Testimonial />
            <BlogsComp />
            <FeedbackForm />
            <ContactToggle />
            <Footer />
          </>
        } />
        
                <Route path="/services" element={
          <>
            <Navbar />
            
            <Services />

            <ContactToggle />
            <Footer />
          </>
        } />
                <Route path="/feedback" element={
          <>
            <Navbar />
            <FeedbackForm />
            <ContactToggle />
            <Footer />
          </>
        } />
          <Route path="/redirect" element={
          <>
            <Navbar2 />
            <Hero />
            <Services />
            <Testimonial />
            <BlogsComp />
            <FeedbackForm />
            <ContactToggle />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About  />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/licensing" element={<LicensingPage />} />
        <Route path="/services" element={<Services />} /> 
        <Route path ="/feedback" element={<FeedbackForm />} />
        <Route path="/redirect"element={<RedirectPage />} />     </Routes>
    </div>
  );
};

export default App;
