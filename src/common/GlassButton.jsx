import React from "react";

const GlassButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative
        inline-block
        px-8 py-3
        text-white font-semibold
        text-lg sm:text-xl
        rounded-2xl
        bg-[#563269]/90
        backdrop-blur-md
        border border-white/20
        hover:bg-[#563269]/100
        hover:scale-105
        transition-all duration-300
        shadow-lg shadow-[#563269]/40
      "
    >
      {text}
    </button>
  );
};

export default GlassButton;

