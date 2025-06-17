import React from "react";

export default function HomeSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] text-white py-20 px-6 lg:px-6">
      {/* Right Side Gradient Glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500 via-blue-500 to-transparent opacity-20 blur-3xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Text */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Unlock the Potential<br />of Flutter
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-full font-semibold transition">
            UPGRADE YOUR TECH
          </button>
        </div>

        {/* Right - Image & Floating Overlays */}
        <div className="flex-1 relative">
          {/* Main Image */}
          <img
            src="/img1.jpg"
            alt="Flutter code main"
            className="rounded-lg w-full shadow-lg"
          />

          {/* Floating Snippet 1 (animated) */}
          <img
            src="/img2.png"
            alt="Snippet Top"
            className="absolute top-6 right-4 w-56 rounded-md shadow-md animate-float1"
          />

          {/* Floating Snippet 2 (animated) */}
          <img
            src="/img3.png"
            alt="Snippet Bottom"
            className="absolute bottom-4 right-10 w-64 rounded-md shadow-md animate-float2"
          />
        </div>
      </div>
    </section>
  );
}
