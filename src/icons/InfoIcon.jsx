// src/components/InfoIcon.jsx
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

const InfoIcon = forwardRef(({ size = 28, className, ...props }, ref) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () => (reduced ? controls.start("normal") : controls.start("animate")),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleEnter = useCallback(() => {
    if (reduced) return;
    if (!isControlled.current) controls.start("animate");
  }, [controls, reduced]);

  const handleLeave = useCallback(() => {
    if (!isControlled.current) controls.start("normal");
  }, [controls]);

  // Variants
  const svgVariants = {
    normal: { rotate: 0, scale: 1 },
    animate: { rotate: [0, -2, 2, 0], scale: [1, 1.08, 0.95, 1], transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const drawVariants = {
    normal: { pathLength: 1, opacity: 1 },
    animate: { pathLength: [0, 1], opacity: [0.6, 1], transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const pulseVariants = {
    normal: { scale: 1, opacity: 1 },
    animate: { scale: [1, 1.3, 0.8, 1], opacity: [1, 0.5, 1], transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        initial="normal"
        variants={svgVariants}
      >
        <motion.circle cx="12" cy="12" r="10" variants={drawVariants} />
        <motion.path d="M12 16v-4" variants={pulseVariants} />
        <motion.path d="M12 8h.01" variants={pulseVariants} />
      </motion.svg>
    </motion.div>
  );
});

InfoIcon.displayName = "InfoIcon";
export { InfoIcon };
