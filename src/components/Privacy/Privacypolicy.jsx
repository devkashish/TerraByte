import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "../Navbar/DarkMode";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    
    <div className="relative w-full bg-violet-200 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        
        <h1 className="text-4xl font-bold text-violet-900 mb-8 text-center">Privacy Policy</h1>
        <div className="text-lg  leading-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>At TerraByte, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold  mb-4">Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc ml-5">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Use of Your Information</h2>
            <p>We may use information collected about you via the Site to:</p>
            <ul className="list-disc ml-5">
              <li>Create and manage your account.</li>
              <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
              <li>Respond to your comments, questions, and requests, and provide customer service.</li>
              <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className="list-disc ml-5">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Policy for Children</h2>
            <p>We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <address>
              TerraByte<br />
              1234 Example Street<br />
              City, State, ZIP Code<br />
              Email: <a href="mailto:support@terrabyte.com" className="text-violet-600 hover:underline">support@terrabyte.com</a>
            </address>
          </section>
        </div>
      </main>
     
    </div>
     <Footer />
     </>
  );
};

export default PrivacyPolicy;
