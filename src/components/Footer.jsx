import React from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import twitter from "react-useanimations/lib/twitter";
import facebook from "react-useanimations/lib/facebook";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import women from "../images/women.gif";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#382b3f] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* ====== Logo & About Section ====== */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* White blended GIF */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white">
              <img
                src={women}
                alt="Logo"
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
              />
            </div>
            <h2 className="text-2xl font-bold">IELTS Pro</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Master IELTS with AI-powered tools, expert instructors, and a
            supportive community. Get ready to ace your test and study abroad
            with confidence.
          </p>
        </div>

        {/* ====== Quick Links ====== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white transition duration-200 cursor-pointer">Home</li>
            <li className="hover:text-white transition duration-200 cursor-pointer">Features</li>
            <li className="hover:text-white transition duration-200 cursor-pointer">Testimonials</li>
            <li className="hover:text-white transition duration-200 cursor-pointer">Courses</li>
            <li className="hover:text-white transition duration-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* ====== Contact Info ====== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Email: support@ieltspro.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123 IELTS Lane, Delhi, India</li>
          </ul>
        </div>

        {/* ====== Social Icons ====== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
               <UseAnimations animation={github} size={40} strokeColor="white" autoplay loop />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <UseAnimations animation={twitter} size={40} strokeColor="white" autoplay loop/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <UseAnimations animation={facebook} size={40} strokeColor="white" autoplay loop/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <UseAnimations animation={linkedin} size={40} strokeColor="white" autoplay loop/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <UseAnimations animation={instagram} size={40} strokeColor="white" autoplay loop/>
            </a>
          </div>
        </div>
      </div>

      {/* ====== Divider ====== */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} IELTS Pro. All Rights Reserved.
      </div>

      {/* ====== Decorative Background Glow ====== */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;

