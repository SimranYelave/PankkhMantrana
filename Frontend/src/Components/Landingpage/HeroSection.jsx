import React, { useState, useEffect } from 'react';
import { Button } from "../UI/Button";
import { ChevronLeft, ChevronRight, User, Briefcase, Globe, Users, Heart, Brain, Target, Play, Pause } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
  {
    id: 0,
    title: "PankkhMantrana",
    subtitle: "Let's Tap Into Our Own Wisdom",
    description: "Founded by Ms. Nidhi Borana, PankkhMantrana is a safe space offering holistic mental wellness and career clarity through personalized guidance and deep introspection.",
    image: "https://i.ytimg.com/vi/k3ftlbnbwuc/maxresdefault.jpg", // calm therapy office
    icon: <Heart className="w-8 h-8" />,
    color: "from-slate-900/70 via-black-900/60 to-slate-900/70"
  },
  {
    id: 1,
    title: "Professional Counselling",
    subtitle: "Discover Your Inner Strength",
    description: "One-on-one therapy sessions with experienced psychologists to help you overcome stress, anxiety, trauma, and emotional roadblocks.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=2070&q=80", // therapist and client
    icon: <User className="w-8 h-8" />,
    color: "from-slate-900/70 via-black-900/60 to-slate-900/70"
  },
  {
    id: 2,
    title: "Career Counselling",
    subtitle: "Shape Your Professional Future",
    description: "Detailed career guidance using psychometric assessments and expert mentorship to help you choose the right career path with confidence.",
    image: "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20255/6848c0422cfac21d45657e23_Untitled+design/Untitled+design_d6475c26-73ec-488c-94a7-875165bc696f-prv.jpg", // professional guidance
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-slate-900/70 via-black-900/60 to-slate-900/70"
  },
  {
    id: 3,
    title: "Abroad Counselling",
    subtitle: "Your Gateway to Global Opportunities",
    description: "Step-by-step support for students and professionals planning to study or work abroad, including visa guidance, SOPs, and university selection.",
    image: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=2070&q=80", // airport or international student
    icon: <Globe className="w-8 h-8" />,
    color: "from-slate-900/70 via-black-900/60 to-slate-900/70"
  },
  {
    id: 4,
    title: "Workshops Panel",
    subtitle: "Learn, Grow, Transform",
    description: "Engaging workshops and group sessions on emotional intelligence, goal setting, self-confidence, and mental wellness, tailored for youth and professionals.",
    image: "https://itokri.com/cdn/shop/articles/header6_1_bf61afaa-180c-4ea9-a2fb-be108b9ca401.jpg?v=1738050867", // workshop or group session
    icon: <Users className="w-8 h-8" />,
    color: "from-slate-900/70 via-black-900/60 to-slate-900/70"
  },
  {
    id: 5,
    title: "Internship Programs",
    subtitle: "Real-World Exposure for Students",
    description: "Hands-on internship opportunities in psychology and counselling fields designed to build practical knowledge and interpersonal skills.",
    image: "https://cdn2.hubspot.net/hubfs/3850360/rawpixel-983649-unsplash%20(1).jpg", // interns working
    icon: <Brain className="w-8 h-8" />,
    color: "from-slate-900/70 via-black-900/60 to-slate-900/70"
  },
  {
    id: 6,
    title: "Personality and EQ Assessment",
    subtitle: "Understand Yourself, Choose Wisely",
    description: "Scientific tools to assess your personality, emotional intelligence, and aptitudes—providing insight for both personal growth and career planning.",
    image: "https://media.proprofs.com/images/QM/user_images/1826446/New%20Project%20(61)(21).webp", // psychometric testing
    icon: <Target className="w-8 h-8" />,
    color: "from-slate-900/70 via-black-900/60 to-slate-900/70"
  }
];


  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const currentService = services[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Transitions */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color}`} />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-24 h-24 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Auto-play Control */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleAutoPlay}
          className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-all duration-300"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Service Icon */}
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full animate-pulse">
            <div className="text-white">
              {currentService.icon}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="block animate-fade-in-up">
              {currentService.title}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {currentService.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {currentService.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={scrollToServices}
              className="px-8 py-4 bg-white text-gray-900 hover:bg-white/90 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Our Services
            </Button>
            {/* <Button
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Button> */}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{
            width: `${((currentSlide + 1) / services.length) * 100}%`
          }}
        />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation-duration: 0.6s;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;