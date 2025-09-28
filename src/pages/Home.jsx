import React, {useEffect} from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import "aos/dist/aos.css";
import AOS from "aos";




const Home = () => {
     useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // animate only once
    });
  }, []);
  return (
    <div>
         <Toaster position="top-right" />
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
