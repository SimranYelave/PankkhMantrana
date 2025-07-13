import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../UI/Button'; // Ensure this path is correct
import { useToast } from '../../hooks/use-toast';
import BookingModal from '../BookingModal';
const Navbar = ({ onBookSession }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { toast } = useToast();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold playfair text-gray-800">
                PankkhMantrana
              </h1>
            </div>

            {/* Desktop Menu - only visible above 768px */}
            <div className="hidden min-[769px]:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="hover:text-[#ccabdb] transition-colors duration-300 relative group text-[15px] "
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ccabdb] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Book Session Button */}
            <div className="hidden min-[769px]:block">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#fa8978] hover:bg-[#fa8978]/90 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Book a Session
              </Button>
            </div>

            {/* Mobile Hamburger Button - visible on 768px and below */}
            <div className="block min-[769px]:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu - visible on 768px and below */}
          {isOpen && (
            <div className="block min-[769px]:hidden">
              <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ccabdb] transition-colors duration-300"
                  >
                    {label}
                  </button>
                ))}
                <Button
                  onClick={onBookSession}
                  className="w-full mt-4 bg-[#fa8978] hover:bg-[#fa8978]/90 text-white font-bold py-2 rounded-full"
                >
                  Book a Session
                </Button>
              </div>
            </div>
          )}
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
