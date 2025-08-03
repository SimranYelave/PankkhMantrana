import { Link } from 'react-router-dom';
import { Card, CardContent } from '../UI/Card';
import { Button } from '../UI/Button';
import {
  Heart,
  Briefcase,
  Plane,
  Palette,
  GraduationCap,
  Brain,
} from 'lucide-react';

const services = [
  {
    icon: <Heart className="w-12 h-12" />,
    title: 'Personal Counselling',
    description:
      "Individual therapy sessions to help you navigate life's challenges with confidence and clarity.",
    color:'bg-[#86e3ce]',
    link: '/personalcounselling',
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: 'Career Counselling',
    description:
      'Professional guidance to help you make informed career decisions and achieve your goals.',
    color:'bg-[#ffdd94]',
    link: '/careercounselling',
  },
  {
    icon: <Plane className="w-12 h-12" />,
    title: 'Abroad Counselling',
    description:
      'Expert advice for studying or working abroad, including visa guidance and cultural preparation.',
    color:'bg-[#ccabdb]',
    link: '/abroadcounselling',
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'Workshops',
    description:
      'Creative workshops in Yoga, Pottery, and Arts to develop your skills and express creativity.',
    color:'bg-[#d0e6a5]',
    link: '/workshoppanels',
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: 'Hands-on learning programs',
    description:
      'Professional internship opportunities in Counselling, Clinical, Industrial, and Marketing fields.',
    color:'bg-[#fa897b]',
    link: '/internshipprograms',
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'Personality and EQ Assessment',
    description:
      'Comprehensive personality tests to help you understand your strengths and areas for growth.',
    color:'bg-[#86e3ce]',
    link: '/personalityassessment',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold playfair text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto playfair">
            Comprehensive solutions designed to empower your personal and professional journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-up border-none group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold playfair text-gray-800 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow playfair leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link to={service.link}>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-gray-800 hover:text-white transition-colors duration-300 border-gray-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
