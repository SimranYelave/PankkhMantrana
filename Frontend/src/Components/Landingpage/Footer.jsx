import { useCallback } from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-['playfair'] mb-4">
              PankkhMantrana
            </h3>
            <p className="text-gray-300 font-['poppins'] leading-relaxed mb-6 max-w-md">
              Empowering minds and enriching paths through professional counselling, 
              career guidance, and holistic wellness services. Your journey to personal 
              and professional growth starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#86e3ce] transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#86e3ce] transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#86e3ce] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#86e3ce] transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hello@pankhmantrana.com" className="text-gray-400 hover:text-[#86e3ce] transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-['playfair'] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-['poppins']">
              {['home', 'about', 'services', 'testimonials', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-[#86e3ce] transition-colors duration-300 capitalize"
                  >
                    {id === 'about' ? 'About Us' : id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-['playfair'] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 font-['poppins'] text-sm">
              <li className="text-gray-400">Personal Counselling</li>
              <li className="text-gray-400">Career Counselling</li>
              <li className="text-gray-400">Abroad Counselling</li>
              <li className="text-gray-400">Yoga Training</li>
              <li className="text-gray-400">Internship Programs</li>
              <li className="text-gray-400">Personality Assessment</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-['poppins']text-sm">
            © 2024 PankkhMantrana. All rights reserved.
          </p>
          <p className="text-gray-400 font-['poppins'] text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for your growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
