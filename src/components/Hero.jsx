        import React, { useRef, useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import favor from "../images/animation/favor.png";
import Ielts from "../images/animation/Ielts.png";
import plan from "../images/animation/plan.png";
import step from "../images/animation/step.png";
import corner from "../images/animation/corner.png";
import GlassButton from "../common/GlassButton"
import reading from "../images/reading.png";

const Hero = () => {
  const firstWordRef = useRef(null);
  const [cornerPos, setCornerPos] = useState({ top: 0, left: 0 });

  const { scrollY } = useViewportScroll();

  // Map scroll to corner movement (adjust values for your layout)
  const cornerTop = useTransform(scrollY, [0, 500], [cornerPos.top, 100]);
  const cornerLeft = useTransform(scrollY, [0, 500], [cornerPos.left, 50]);

  useEffect(() => {
    if (firstWordRef.current) {
      const rect = firstWordRef.current.getBoundingClientRect();
      setCornerPos({
        top: rect.top + window.scrollY - 2, // adjust -20 to shift corner
        left: rect.left + window.scrollX - 10,
      });
    }
  }, []);

  const heading = [
    { type: "text", content: "Step " }, // first word wrapped with ref
    { type: "text", content: "by " },
    { type: "image", src: step },
    { type: "text", content: " to " },
    { type: "image", src: Ielts },
    { type: "text", content: " Success" },
  ];

  const subheading = [
    { type: "text", content: "Set goals, " },
    { type: "image", src: plan },
    { type: "text", content: " your path, practice smartly, and let time work in your " },
    { type: "image", src: favor },
    { type: "text", content: " Achieve your dream band score with our expert guidance." },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
   <section className="relative w-full bg-white ">
  <div className="relative w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 mt-12 sm:mt-16 md:mt-0">
    

    {/* Corner Image */}
    <motion.img
      src={corner}
      alt="corner"
      style={{ top: cornerTop, left: cornerLeft, position: "absolute" }}
      animate={{ rotate: [0, 180, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="h-20 w-20"
    />

    {/* Text Content */}
    <motion.div
      className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-4xl gap-6 mt-12 md:mt-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold flex flex-wrap justify-center md:justify-start gap-2 text-[#563269]">
        {heading.map((item, index) => {
          if (index === 0) {
            return (
              <motion.span
                key={index}
                ref={firstWordRef}
                variants={textVariants}
              >
                {item.content}
              </motion.span>
            );
          } else if (item.type === "text") {
            return (
              <motion.span key={index} variants={textVariants}>
                {item.content}
              </motion.span>
            );
          } else {
            return (
              <motion.img
                key={index}
                src={item.src}
                alt="highlight"
                className="w-16 sm:w-20 md:w-28 animate-floatLarge"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
              />
            );
          }
        })}
      </motion.h1>

      {/* Subheading */}
      <motion.p className="text-gray-700 text-base sm:text-lg md:text-xl flex flex-wrap justify-center md:justify-start gap-2">
        {subheading.map((item, index) =>
          item.type === "text" ? (
            <motion.span key={index} variants={textVariants}>
              {item.content}
            </motion.span>
          ) : (
            <motion.img
              key={index}
              src={item.src}
              alt="highlight"
              className="w-16 sm:w-20 md:w-28 animate-floatLarge"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            />
          )
        )}
      </motion.p>

      {/* Button */}
      <div className="flex justify-center md:justify-start">
        <GlassButton text="Get Started" onClick={() => alert("Clicked!")} />
      </div>
    </motion.div>

    {/* Right Side Image */}
   <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
  <img
    src={reading} 
    alt="Right Side"
    className="h-40 sm:h-60 md:h-96 lg:h-[28rem] w-auto mx-auto md:mx-0"
  />
</div>

  </div>
</section>

  );
};

export default Hero;









