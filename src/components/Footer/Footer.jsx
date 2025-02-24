import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Logo from "../../assets/website/Vector.svg";

const Footer = () => {
  return (
    

<footer class="bg-violet-400 rounded-lg shadow  dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} class="h-8" alt="" />
                <div className="text-2xl text-white md:text-3xl ">
                <a href="/#home" className="">
                  TERRA
                  <span className="inline-block font-bold text-violet-900">BYTE</span>
                </a>
              </div>
                </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black-800 sm:mb-0 dark:text-white-400">
                <li>
                    <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/privacypolicy" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/licensing" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">TERRA<span className="inline-block font-bold text-violet-900">BYTE™</span></a>. All Rights Reserved.</span>
    </div>
</footer>


  );
};

export default Footer;
