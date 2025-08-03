import { useCallback } from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleMail = () => {
    const toEmail = 'pankkhmantrana@gmail.com';
    const fromEmail = 'client@example.com'; // Default sender email
    const subject = 'Inquiry from Website';
    const body = `Hello PankkhMantrana team,

I am interested in your services and would like to get more information.

Best regards,
[Your Name]`;

    // Check if device is mobile/tablet
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768;

    // Check if Gmail is likely available (Chrome browser or signed into Google)
    const isChrome = /Chrome/i.test(navigator.userAgent);
    const isGoogleUser = document.cookie.includes('google') || window.gapi;

    if (isMobile) {
      // On mobile, try mailto with body content
      window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else if (isChrome || isGoogleUser) {
      // On desktop with Chrome or Google user, try Gmail web interface with body
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    } else {
      // Fallback to mailto for other desktop browsers with body
      window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold playfair mb-4">
              PankkhMantrana
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
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
              <button
                onClick={handleMail}
                className="text-gray-400 hover:text-[#86e3ce] transition-colors duration-300 cursor-pointer"
                aria-label="Send Email"
              >
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold playfair mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
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
            <h4 className="text-lg font-semibold playfair mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400"> <Link to="/personalcounselling">Personal Counselling</Link></li>
              <li className="text-gray-400"><Link to="/careercounselling">Career Counselling</Link></li>
              <li className="text-gray-400"> <Link to="/abroadcounselling" >Abroad Counselling</Link></li>
              <li className="text-gray-400"><Link to="/workshoppanels" >Workshop Panels</Link></li>
              <li className="text-gray-400"><Link to="/internshipprograms" >Internship Programs</Link></li>
              <li className="text-gray-400"><Link to="/personalityassessment">Personality Assessment</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 PankkhMantrana. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for your growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;