import { useState } from 'react';
import { ArrowLeft, Heart, Brain, MessageCircle, Shield, Calendar, User, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../src/Components/UI/Button';
import { Card, CardContent } from '../../src/Components/UI/Card';
import { useToast } from '../hooks/use-toast';
import BookingModal from '../Components/BookingModal';

const PersonalCounselling = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const { toast } = useToast();

    const benefits = [
        {
            icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Improve Mental Clarity",
            description: "Gain clear perspective on life challenges and decisions",
            color: "bg-yellow-400/20",
            hovercolor: "bg-yellow-400/30",
            iconcolor: "bg-yellow-400/40"
        },
        {
            icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Manage Stress & Anxiety",
            description: "Learn effective coping strategies for daily pressures",
            color: "bg-purple-400/20",
            hovercolor: "bg-purple-400/30",
            iconcolor: "bg-purple-400/40"
        },
        {
            icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Build Emotional Strength",
            description: "Develop resilience and emotional intelligence",
            color: "bg-pink-400/20",
            hovercolor: "bg-pink-400/30",
            iconcolor: "bg-pink-400/40"
        },
        {
            icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Trusted & Confidential",
            description: "Safe space with professional confidentiality guaranteed",
            color: "bg-green-400/20",
            hovercolor: "bg-green-400/30",
            iconcolor: "bg-green-400/40"
        }
    ];

    const steps = [
        {
            number: "1",
            title: "Book an Appointment",
            description: "Choose your preferred date and time for the session"
        },
        {
            number: "2",
            title: "Meet Our Counsellor",
            description: "Connect with our expert counsellor online or offline"
        },
        {
            number: "3",
            title: "Begin Your Journey",
            description: "Start your personal growth and healing journey"
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
        <div className="min-h-screen bg-white font-poppins">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
                        alt="Personal counselling session"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-emerald-500/30"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl animate-fade-up">
                        Discover Inner Peace with
                        <br />
                        <span className="text-yellow-400">Personal Counselling</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light drop-shadow-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
                        Talk. Heal. Grow.
                    </p>
                </div>
            </section>

            {/* Service Description Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="animate-slide-in-right order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                                alt="Counselling illustration"
                                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 object-cover"
                            />
                        </div>

                        <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4 sm:mb-6">
                                What is Personal Counselling?
                            </h2>

                            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600">
                                <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                                    Personal counselling is a safe, confidential space where you can explore your thoughts,
                                    feelings, and experiences with a trained professional who provides support and guidance.
                                </p>

                                <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                                    <strong>Who should consider it?</strong> Anyone dealing with stress, anxiety, relationship issues,
                                    life transitions, or simply wanting to understand themselves better.
                                </p>

                                <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                                    <strong>How it helps:</strong> Build confidence, develop coping strategies, improve relationships,
                                    and gain clarity on your life's direction in a supportive environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-center text-gray-800 mb-12 sm:mb-16">
                        Benefits of Personal Counselling
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className={`${benefit.color} hover:${benefit.hovercolor} transition-all duration-300 hover:scale-105 animate-bounce-in border-none shadow-lg`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${benefit.iconcolor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white`}>
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-center text-gray-800 mb-12 sm:mb-16">
                        How It Works
                    </h2>

                    <div className="space-y-6 sm:space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#86e3c3] rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-lg">
                                        {step.number}
                                    </div>
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calm Quote Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-[rgba(204,171,219,0.3)]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <i>
                        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-playfair italic text-gray-800 animate-fade-in leading-relaxed">
                            "It's okay to not be okay. Talking helps heal the heart and mind."
                        </blockquote>
                    </i>
                    <p className="text-gray-600 mt-3 sm:mt-4 animate-fade-in text-sm sm:text-base" style={{ animationDelay: '0.3s' }}>
                        — Words of Wisdom
                    </p>
                </div>
            </section>

            {/* Sticky CTA Button */}
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
                <Button
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">Book Your Session</span>
                    <span className="sm:hidden">Book</span>
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

export default PersonalCounselling;