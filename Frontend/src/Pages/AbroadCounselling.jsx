import { useState } from "react";
import { Card, CardContent } from "../Components/UI/Card";
import { Button } from "../Components/UI/Button";
import { FileText, Globe, GraduationCap, MapPin, Plane } from "lucide-react";
import BookingModal from "../Components/BookingModal";
import { useToast } from "../hooks/use-toast";

const AbroadCounselling = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const { toast } = useToast();
    const benefits = [
        {
            icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Country Selection",
            description: "Expert guidance on choosing the best country for your education or career goals."
        },
        {
            icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Visa Assistance",
            description: "Complete support with visa applications, documentation, and interview preparation."
        },
        {
            icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "University Guidance",
            description: "Help with university selection, application process, and scholarship opportunities."
        },
        {
            icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Cultural Preparation",
            description: "Prepare for cultural differences and lifestyle adjustments in your new country."
        }
    ];


    const handleBookingSubmit = (formData) => {
        toast({
            title: "Session Booked Successfully!",
            description: "We'll contact you within 24 hours to confirm your appointment.",
        });
        setIsBookingOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Banner Section */}
            <section className="relative bg-gradient-to-r from-[#CCABDB] to-[#86E3CE] py-12 sm:py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['playfair'] text-white mb-4 sm:mb-6 animate-fade-up">
                        Your Gateway to Global Opportunities
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-up px-4" style={{ animationDelay: '0.2s' }}>
                        Expert guidance for studying and working abroad. Make your international dreams a reality.
                    </p>
                    <Button
                        onClick={() => setIsBookingOpen(true)}
                        size="lg"
                        className="bg-white text-gray-800 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full animate-fade-up text-sm sm:text-base"
                        style={{ animationDelay: '0.4s' }}
                    >
                        Start Your Journey
                    </Button>
                </div>
            </section>

            {/* Service Description */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div className="animate-fade-up">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['playfair'] text-gray-800 mb-4 sm:mb-6">
                                Complete Abroad Counselling Services
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                                Our comprehensive abroad counselling service guides you through every step of your international journey.
                                From university selection to visa processing, we ensure you have the best possible chance of success.
                            </p>
                            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                                With partnerships across 15+ countries and 500+ universities, we help you find the perfect match
                                for your academic and career aspirations.
                            </p>
                        </div>
                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Why Study/Work Abroad?</h3>
                                <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#CCABDB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Access to world-class education and facilities
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#86E3CE] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Enhanced career opportunities and earning potential
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#CCABDB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Cultural exposure and personal growth
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#86E3CE] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Global network and international experience
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['playfair'] text-gray-800 mb-4 sm:mb-6">
                            Our Abroad Counselling Services
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Comprehensive support for your international education and career journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up border-none"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-6 sm:p-8 text-center">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#CCABDB] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['playfair'] text-gray-800 mb-4 sm:mb-6">
                            Your Journey Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Consultation", description: "Initial assessment of your goals and preferences" },
                            { step: "2", title: "Planning", description: "Create your personalized study/work abroad strategy" },
                            { step: "3", title: "Application", description: "Complete university and visa application process" },
                            { step: "4", title: "Departure", description: "Pre-departure orientation and ongoing support" }
                        ].map((item, index) => (
                            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#86E3CE] text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base px-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#86E3CE] to-[#CCABDB] ">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['playfair'] italic text-white mb-4 sm:mb-6 leading-relaxed">
                        "The world is a book, and those who do not travel read only one page."
                    </blockquote>
                    <p className="text-white/80 text-base sm:text-lg">- Saint Augustine</p>
                </div>
            </section>

            {/* Sticky Book Button */}
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
                <Button
                    onClick={() => setIsBookingOpen(true)}
                    size="lg"
                    className="bg-[#CCABDB] hover:bg-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3"
                >
                    <Plane className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">Book Your Session</span>
                </Button>
            </div>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                onSubmit={handleBookingSubmit}
            />
        </div>
    );
};

export default AbroadCounselling;