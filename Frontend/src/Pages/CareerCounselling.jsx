import React, { useState } from "react";
import { ArrowLeft, Target, TrendingUp, Users, Award, Calendar } from "lucide-react";
import { Button } from "../../src/Components/UI/Button";
import { Card, CardContent } from "../../src/Components/UI/Card";
import BookingModal from "../Components/BookingModal";
import { useToast } from "../hooks/use-toast";

const CareerCounselling = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const { toast } = useToast();
    const handleBookingSubmit = (formData) => {
        toast({
            title: "Session Booked Successfully!",
            description: "We'll contact you within 24 hours to confirm your appointment.",
        });
        setIsBookingOpen(false);
    };

    const benefits = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Career Goal Setting",
            description: "Define clear, achievable career objectives aligned with your passions and skills.",
            color: 'bg-[#FFDD94]'
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Skills Development",
            description: "Identify key skills needed for your dream career and create a development plan.",
            color: 'bg-[#FFDD94]'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Industry Insights",
            description: "Get insider knowledge about different industries and career paths.",
            color: 'bg-[#FFDD94]'
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Professional Growth",
            description: "Accelerate your career progression with strategic guidance and mentorship.",
            color: 'bg-[#FFDD94]'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-poppins">
            <section className="relative bg-gradient-to-r from-[#FFDD94] to-[#FA897B] py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold font-playfair text-white mb-6 animate-fade-up">
                        Shape Your Professional Future
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        Expert career guidance to help you make informed decisions and achieve your professional goals.
                    </p>
                    <Button
                        onClick={() => setIsBookingOpen(true)}
                        size="lg"
                        className="bg-white text-gray-800 hover:bg-gray-100 font-bold px-8 py-4 rounded-full animate-fade-up"
                        style={{ animationDelay: '0.4s' }}
                    >
                        Book Career Consultation
                    </Button>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-up">
                            <h2 className="text-4xl font-bold font-playfair text-gray-800 mb-6">
                                Professional Career Guidance
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our career counselling service is designed to help individuals at all stages of their professional journey. Whether you're a fresh graduate, mid-career professional, or considering a career change, we provide personalized guidance to help you succeed.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                We help you identify your strengths, explore career options, develop necessary skills, and create actionable plans to achieve your professional aspirations.
                            </p>
                        </div>
                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Who Should Consider Career Counselling?</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#FFDD94] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Recent graduates entering the job market
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#FA897B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Professionals seeking career advancement
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#FFDD94] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Individuals considering career transitions
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#FA897B] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Entrepreneurs planning to start their own business
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-playfair text-gray-800 mb-6">
                            Career Counselling Benefits
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover how our professional guidance can transform your career trajectory
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up border-none"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-8 text-center">
                                    <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 text-gray-700`}>
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-playfair text-gray-800 mb-6">
                            Our Career Counselling Process
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "1", title: "Career Assessment", description: "Comprehensive evaluation of your skills, interests, and career goals", color: 'bg-[#FA897B]' },
                            { step: "2", title: "Strategy Development", description: "Create a personalized career plan with actionable steps", color: 'bg-[#FA897B]' },
                            { step: "3", title: "Ongoing Support", description: "Regular follow-ups and guidance to ensure your success", color: 'bg-[#FA897B]' }
                        ].map((item, index) => (
                            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className={`w-16 h-16 bg-peach ${item.color} text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold`}>
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-[#FA897B] to-[#FFDD94]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-3xl sm:text-4xl font-playfair italic text-white mb-6">
                        "The future belongs to those who believe in the beauty of their dreams and work strategically to achieve them."
                    </blockquote>
                    <p className="text-white/80 text-lg">- Career Success Philosophy</p>
                </div>
            </section>

            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={() => setIsBookingOpen(true)}
                    size="lg"
                    className="bg-[#FA897B] hover:bg-[#FA897B]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Session
                </Button>
            </div>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                onSubmit={handleBookingSubmit}
            />
        </div>
    );
};

export default CareerCounselling;