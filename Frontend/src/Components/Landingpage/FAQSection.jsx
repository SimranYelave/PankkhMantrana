import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  Users,
  Shield,
  CreditCard,
  Phone,
} from 'lucide-react';

const faqs = [
  {
    icon: HelpCircle,
    question: 'What types of counselling services do you offer?',
    answer:
      'We offer personal counselling for mental health and emotional wellbeing, career counselling for professional guidance, and abroad counselling for international education and migration. Each service is tailored to meet your specific needs and goals.',
  },
  {
    icon: Clock,
    question: 'How long are the counselling sessions?',
    answer:
      'Standard counselling sessions are typically 50-60 minutes long. However, we can adjust session lengths based on your needs and preferences. Initial consultations may take up to 90 minutes to thoroughly understand your requirements.',
  },
  {
    icon: Users,
    question: 'Are group sessions available?',
    answer:
      'Yes, we offer both individual and group sessions. Group sessions are particularly beneficial for yoga training and certain types of therapy. We also conduct workshops and seminars on various topics related to personal development and career growth.',
  },
  {
    icon: Shield,
    question: 'Is my information kept confidential?',
    answer:
      'Absolutely. We maintain strict confidentiality standards and follow professional ethics guidelines. Your personal information and session details are kept secure and private. We only share information with your explicit consent or when legally required.',
  },
  {
    icon: CreditCard,
    question: 'What are your payment options and pricing?',
    answer:
      'We offer flexible payment options including online payments, bank transfers, and installment plans. Pricing varies by service type and duration. Contact us for detailed pricing information and to discuss payment plans that work for your budget.',
  },
  {
    icon: Phone,
    question: 'Do you offer online sessions?',
    answer:
      'Yes, we provide both in-person and online sessions via secure video conferencing platforms. Online sessions are just as effective as in-person meetings and offer greater convenience and accessibility, especially for those with busy schedules or location constraints.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-['playfair'] text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-['poppins']">
            Find answers to common questions about our services and processes
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#86e3ce]"
                >
                  <div className="flex items-center space-x-4">
                    <Icon className="w-6 h-6 text-[#86e3ce] flex-shrink-0" />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-['poppins']">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 sm:px-6 pb-5">
                    <p className="text-sm sm:text-base text-gray-600 font-['poppins'] pl-10 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 font-['poppins'] mb-4">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[#86e3ce] to-[#ccabdb] text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
