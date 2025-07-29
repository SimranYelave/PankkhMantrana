import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../UI/Button';
import logo from "../../assets/images/logo.png";
import { useToast } from '../../hooks/use-toast';
import BookingModal from '../BookingModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleBookingSubmit = (formData) => {
    toast({
      title: "Session Booked Successfully!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setIsBookingOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 w-auto sm:h-12 cursor-pointer" 
                onClick={() => scrollToSection('home')}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="relative text-gray-700 hover:text-[#ccabdb] transition-colors duration-300 font-medium text-sm tracking-wide group"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ccabdb] transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#fa8978] hover:bg-[#fa8978]/90 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Book a Session
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#ccabdb] hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  {label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <Button
                  onClick={() => {
                    setIsBookingOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#fa8978] hover:bg-[#fa8978]/90 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md"
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onSubmit={handleBookingSubmit}
      />
    </>
  );
};

export default Navbar;