import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../UI/Button'; // Ensure this path is correct

const Navbar = ({ onBookSession }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-playfair text-gray-800">
              PankkhMantrana
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'about', 'services', 'testimonials', 'faqs', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-lavender transition-colors duration-300 relative group capitalize"
                >
                  {item === 'faqs' ? 'FAQs' : item === 'about' ? 'About Us' : item === 'contact' ? 'Contact Us' : item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lavender transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Book Session Button */}
          <div className="hidden md:block">
            <Button
              onClick={onBookSession}
              className="bg-[#ffb997] hover:bg-peach/90 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {['home', 'about', 'services', 'testimonials', 'faqs', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lavender transition-colors duration-300 capitalize"
                >
                  {item === 'faqs' ? 'FAQs' : item === 'about' ? 'About Us' : item === 'contact' ? 'Contact Us' : item}
                </button>
              ))}
              <Button
                onClick={onBookSession}
                className="w-full mt-4 bg-peach hover:bg-peach/90 text-white font-bold py-2 rounded-full"
              >
                Book a Session
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
