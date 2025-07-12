import React from "react";
import { Button } from "../UI/Button"; // Ensure this path is correct

const  HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80"
          alt="Professional counselling and wellness background"
          className="w-full h-full object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#86e3ce]/20 via-[#ccabdb]/20 to-[#86e3ce]/20"></div>
      </div>

      {/* Decorative Pattern (Animated Circles) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-bold font-['playfair'] text-white mb-6 leading-tight drop-shadow-2xl">
            Empower Your Mind.
            <br />
            <span className="text-[#ffdd94]">Enrich Your Path.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto font-['poppins'] font-light drop-shadow-lg">
            Professional counselling, career guidance, yoga training, and
            personality assessment services to help you discover your true
            potential and create the life you deserve.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToServices}
            className="bg-white text-gray-800 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
