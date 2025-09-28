import React from "react";
import { motion } from "framer-motion";
import ai from "../images/ai.png";
import practice from "../images/practice.png";
import test from "../images/test.png";
import speaking from "../images/speaking.png";


// Example feature data
const features = [
  {
    icon: speaking ,
    title: "Speaking Practice",
    description: "Boost your fluency with live speaking practice sessions led by expert mentors.",
  },
  {
    icon: test,
    title: "Mock Tests",
    description: "Real-time test simulations to get you ready for the actual IELTS exam.",
  },
  {
    icon: ai,
    title: "AI Band Score",
    description: "Get instant AI-powered feedback on your writing and speaking.",
  },
  {
    icon: practice,
    title: "Community Support",
    description: "Join a vibrant community to learn, share, and grow together.",
  },
];

// Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      ease: "easeOut",
    },
  }),
  exit: { opacity: 0, y: 50 }, 
};


const Features = () => {
  return (
    <section id="features" className="relative py-28 bg-gradient-to-br from-[#382b3f] via-[#4a364f] to-[#382b3f] text-white overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl animate-float-slow delay-2000"></div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10"
      >
        Our Features
      </motion.h2>

      {/* Feature Cards Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.3 },
            }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_40px_#c8a8db]"
          >
            {/* Icon */}
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-20 w-20 mb-6"
            />

            {/* Title */}
            <h3 className="font-semibold text-2xl mb-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-lg leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

