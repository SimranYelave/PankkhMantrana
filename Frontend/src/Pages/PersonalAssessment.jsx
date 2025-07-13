import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Brain,
    Target,
    Users,
    Award,
    CheckCircle
} from "lucide-react";
import { Button } from '../Components/UI/Button'
import { Card, CardContent } from "../Components/UI/Card";
import { useToast } from "../hooks/use-toast";
import BookingModal from "../Components/BookingModal";

const PersonalityAssessment = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const { toast } = useToast();

    const benefits = [
        {
            icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Self-Discovery",
            description:
                "Gain deep insights into your personality traits, strengths, and behavioral patterns."
        },
        {
            icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Career Alignment",
            description:
                "Discover career paths that match your personality type and natural preferences."
        },
        {
            icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Relationship Insights",
            description:
                "Understand how you interact with others and improve your relationships."
        },
        {
            icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Personal Growth",
            description:
                "Identify areas for development and create a personalized growth plan."
        }
    ];

    const assessments = [
        {
            name: "Emotional Quotient (EQ)",
            duration: "30-45 minutes",
            description:
                "The Emotional Quotient assessment evaluates your ability to perceive, understand, manage, and regulate emotions—both your own and others’",
            features: [
                "Personalized emotional intelligence score and detailed analysis",
                "Insights into emotional triggers and behavioral patterns",
                "Recommendations for improving interpersonal effectiveness",
                "Practical strategies for emotional growth and leadership readiness"
            ],
            websiteLink: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MjYx/as124"
        },
        {
            name: "Big Five Personality Test",
            duration: "20-30 minutes",
            description:
                "Scientific assessment measuring five major personality traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.",
            features: [
                "Research-based",
                "Percentile scoring",
                "Trait comparisons",
                "Behavioral predictions"
            ],
            websiteLink: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MjYx/hba2"
        },
        {
            name: "Personality + Interest + EQ Assessment",
            duration: "15-25 minutes",
            description: "A compact test combining personality, career interests, and emotional intelligence for better self and career understanding.",
            features: [
                "Integrated personality, interest & EQ profiling",
                "Career path alignment based on interests & strengths",
                "Emotional awareness and relationship insights",
                "Actionable development areas for self-growth"
            ],
            websiteLink: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MjYx/my341"
        },
        {
            name: "Career Interest Profiler",
            duration: "25-35 minutes",
            description:
                "Comprehensive assessment combining personality traits with career interests and aptitudes.",
            features: [
                "Career matching",
                "Industry recommendations",
                "Skill assessments",
                "Growth opportunities"
            ],
            websiteLink: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/MjYx/as204"
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
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Banner Section */}
                <section className="relative bg-gradient-to-r from-[#86E3CE] to-[#CCABDB] py-12 sm:py-16 lg:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold playfair text-white mb-4 sm:mb-6 animate-fade-up leading-tight">
                            Discover Your True Self
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-up px-4" style={{ animationDelay: '0.2s' }}>
                            Unlock your potential with comprehensive personality assessments and expert guidance for personal and professional growth.
                        </p>
                        <Button
                            onClick={() => setIsBookingOpen(true)}
                            size="lg"
                            className="bg-white text-gray-800 hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full animate-fade-up text-sm sm:text-base"
                            style={{ animationDelay: '0.4s' }}
                        >
                            Take Assessment
                        </Button>
                    </div>
                </section>

                {/* Service Description */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div className="animate-fade-up order-2 lg:order-1">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-gray-800 mb-4 sm:mb-6">
                                    Scientific Personality Assessment
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                                    Our personality assessment services use scientifically validated tools to provide deep insights
                                    into your character, preferences, and behavioral patterns. These assessments help you understand
                                    yourself better and make informed decisions about your career and relationships.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                                    Combined with expert interpretation and personalized guidance, our assessments provide actionable
                                    insights for personal and professional development.
                                </p>
                            </div>
                            <div className="animate-fade-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
                                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Who Should Take These Assessments?</h3>
                                    <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#86E3CE] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Students planning their career path
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#CCABDB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Professionals seeking career change
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#86E3CE] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Individuals wanting self-improvement
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#CCABDB] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            Teams looking to improve collaboration
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold playfair text-gray-800 mb-4 sm:mb-6">
                                Assessment Benefits
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                                Discover the transformative power of understanding your personality
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
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#86E3CE] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{benefit.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Assessments Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-gray-800 mb-4 sm:mb-6">
                                Available Assessments
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 px-4">
                                Choose from our scientifically validated personality assessments
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                            {assessments.map((assessment, index) => (
                                <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-up border-none">
                                    <CardContent className="p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{assessment.name}</h3>
                                        <p className="text-[#CCABDB] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{assessment.duration}</p>
                                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{assessment.description}</p>
                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">What you'll get:</h4>
                                            <ul className="space-y-2">
                                                {assessment.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-gray-600 text-sm sm:text-base">
                                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#86E3CE] mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button
                                            onClick={() => window.open(assessment.websiteLink, '_blank')}
                                            className="w-full bg-[#86E3CE] hover:bg-[#86E3CE]/90 text-white text-sm sm:text-base"
                                        >
                                            Take Assessment
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold playfair text-gray-800 mb-4 sm:mb-6">
                                Assessment Process
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { step: "1", title: "Choose Assessment", description: "Select the personality assessment that suits your needs" },
                                { step: "2", title: "Complete Test", description: "Answer questions honestly in a comfortable environment" },
                                { step: "3", title: "Get Results", description: "Receive detailed report with insights and recommendations" },
                                { step: "4", title: "Expert Consultation", description: "Discuss results with our psychology experts" }
                            ].map((item, index) => (
                                <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#CCABDB] text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#CCABDB] to-[#86E3CE]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <blockquote className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl playfair italic text-white mb-4 sm:mb-6 leading-relaxed">
                            "Knowing yourself is the beginning of all wisdom."
                        </blockquote>
                        <p className="text-white/80 text-base sm:text-lg">- Aristotle</p>
                    </div>
                </section>

                {/* Sticky Book Button */}
                <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
                    <Button
                        onClick={() => setIsBookingOpen(true)}
                        size="lg"
                        className="bg-[#CCABDB] hover:bg-[#CCABDB]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base px-4 sm:px-6"
                    >
                        <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="hidden sm:inline">Start Assessment</span>
                        <span className="sm:hidden">Start</span>
                    </Button>
                </div>

                {/* Booking Modal */}
                <BookingModal
                    isOpen={isBookingOpen}
                    onClose={() => setIsBookingOpen(false)}
                    onSubmit={handleBookingSubmit}
                />
            </div>
        </>
    )
};

export default PersonalityAssessment;