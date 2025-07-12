import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Professional counselling session"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#86e3ce] to-[#ccabdb] rounded-2xl opacity-80"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#fa897b] to-[#ffdd94] rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['playfair'] text-gray-800 mb-6">
              About PankkhMantrana
            </h2>

            <div className="space-y-6 font-poppins text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                At PankkhMantrana, we believe that every individual has the potential to achieve greatness. 
                Our mission is to provide comprehensive support services that empower minds and enrich life paths.
              </p>

              <div className="bg-pale-green/20 p-5 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 font-playfair">Our Mission</h3>
                <p className="text-sm sm:text-base">
                  To create a supportive environment where individuals can explore their potential, 
                  overcome challenges, and achieve personal and professional fulfillment through 
                  evidence-based practices and compassionate guidance.
                </p>
              </div>

              <div className="bg-lavender/20 p-5 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 font-playfair">Our Vision</h3>
                <p className="text-sm sm:text-base">
                  To be the leading platform for holistic personal development, making quality 
                  counselling, career guidance, and wellness services accessible to everyone, 
                  regardless of their background or circumstances.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <i className="text-2xl sm:text-3xl font-bold text-[#98FF98] font-['playfair'] ">500+</i>
                <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <i className="text-2xl sm:text-3xl font-bold text-[#ffb997] font-['playfair']">5+</i>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <i className="text-2xl sm:text-3xl font-bold text-[#E6E6FA] font-['playfair']">6</i>
                <div className="text-xs sm:text-sm text-gray-600">Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
