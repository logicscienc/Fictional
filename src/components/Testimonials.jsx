import React from "react";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";
import man1 from "../images/man1.jpg"
import man2 from "../images/man2.jpg"
import women1 from "../images/women1.jpg"
import women2 from "../images/women2.jpg"

// Sample data
const testimonials = [
  {
    name: "Aarav Patel",
    review:
      "The practice sessions and mock tests were incredible! I felt confident and well-prepared for my IELTS exam.",
    rating: 5,
    course: "IELTS General Training",
    img: man1,
  },
  {
    name: "Priya Sharma",
    review:
      "The AI Band Score feedback was so accurate and helped me improve my writing quickly. Highly recommended!",
    rating: 4.5,
    course: "IELTS Academic",
    img: women2,
  },
  {
    name: "Rahul Mehta",
    review:
      "Amazing instructors and a vibrant learning community. I scored higher than I expected thanks to their support.",
    rating: 5,
    course: "IELTS Academic",
    img: man2,
  },
  {
    name: "Ananya Singh",
    review:
      "The personalized study plan made my preparation so much smoother and less stressful. Loved the experience!",
    rating: 4,
    course: "IELTS General Training",
    img: women1,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 bg-white overflow-hidden">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#382b3f] mb-14">
        What Our Students Say
      </h2>

      {/* Wrapper for Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Two sets of testimonials back-to-back for a seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] rounded-2xl shadow-lg p-6 flex-shrink-0
                         bg-[#f1e9f6] border border-[#382b3f]/30 
                         hover:shadow-[0_0_25px_#c8a8db] transition-shadow duration-300"
            >
              {/* Student Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full border-2 border-[#382b3f] object-cover"
                />
              </div>

              {/* Student Name */}
              <h3 className="text-lg font-semibold text-center text-[#382b3f]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-center text-gray-600 mb-3">
                {testimonial.course}
              </p>

              {/* Review */}
              <p className="text-gray-800 text-sm leading-relaxed text-center mb-4">
                "{testimonial.review}"
              </p>

              {/* Star Ratings */}
              <div className="flex justify-center">
                <StarRatings
                  rating={testimonial.rating}
                  starRatedColor="#382b3f"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                  name={`rating-${index}`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Gradient Edges */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;

