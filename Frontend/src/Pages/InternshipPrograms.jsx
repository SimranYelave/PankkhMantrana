import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../Components/UI/Card';
import { Button } from '../Components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../Components/UI/Dialog';
// import { Input } from '../Components/UI/Input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Checkbox } from '@/components/ui/checkbox';
import {
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Heart,
  Building,
  Factory
} from 'lucide-react';

const InternshipPrograms = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const internshipTypes = [
    {
      id: 'counselling',
      name: "Counselling Internship",
      icon: <Heart className="w-8 h-8 sm:w-12 sm:h-12" />,
      description: "Gain hands-on experience in personal, career, and therapeutic counselling practices.",
      duration: "3-6 months",
      qualifications: ["3rd/4th Year Graduate", "Masters 1st/2nd Year"],
      color: "bg-[#86E3CE]"
    },
    {
      id: 'clinical',
      name: "Clinical Internship",
      icon: <Users className="w-8 h-8 sm:w-12 sm:h-12" />,
      description: "Work alongside healthcare professionals in clinical settings and patient care.",
      duration: "4-8 months",
      qualifications: ["3rd/4th Year Graduate", "Masters 1st/2nd Year"],
      color: "bg-[#CCABDB]"
    },
    {
      id: 'industrial',
      name: "Industrial Internship",
      icon: <Factory className="w-8 h-8 sm:w-12 sm:h-12" />,
      description: "Experience real-world industrial operations, management, and business processes.",
      duration: "3-6 months",
      qualifications: ["3rd/4th Year Graduate", "Masters 1st/2nd Year"],
      color: "bg-[#FA897B]"
    },
    {
      id: 'marketing',
      name: "Marketing Internship",
      icon: <Briefcase className="w-8 h-8 sm:w-12 sm:h-12" />,
      description: "Learn digital marketing, brand management, and business development strategies.",
      duration: "2-4 months",
      qualifications: ["12th Pass", "BMM/B.Com/BA Students", "Degree College Students"],
      color: "bg-[#CCABDB]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}

      {/* Banner with image */}
      <section className="relative py-40 overflow-hidden text-center">
        <img
          src="https://cdn-media-1.freecodecamp.org/images/0*GPNSIPFmDzmkwhka"
          alt="Internship Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Internship Programs</h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Launch your career with specialized internship opportunities across multiple domains.
          </p>
          {/* <Button
            onClick={() => setIsApplicationOpen(true)}
            className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full"
          >
            Apply for Internship
          </Button> */}
        </div>
      </section>

      {/* Internship Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 playfair">Available Internship Programs</h2>
          <p className="text-gray-600">
            Choose from our specialized internship programs designed for different educational backgrounds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-20">
          {internshipTypes.map((internship) => (
            <Card
              key={internship.id}
              className="hover:shadow-lg transition-transform transform hover:scale-105 border-gray-300"
            >
              <CardContent className="p-6">
                <div className={`${internship.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white`}>
                  {internship.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{internship.name}</h3>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Duration:</strong> {internship.duration}
                </p>
                <p className="text-sm text-gray-700"><strong>Eligible:</strong></p>
                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  {internship.qualifications.map((qual, idx) => (
                    <li key={idx}>{qual}</li>
                  ))}
                </ul>
                <Button
                  onClick={() => setIsApplicationOpen(true)}
                  className={`w-full ${internship.color} text-gray-800 hover:opacity-90`}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 playfair">Why Choose Our Internship Programs?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Award className="w-6 h-6" />, title: "Certification", description: "Official completion certificates" },
            { icon: <Users className="w-6 h-6" />, title: "Mentorship", description: "Expert guidance throughout" },
            { icon: <Building className="w-6 h-6" />, title: "Real Experience", description: "Hands-on professional work" },
            { icon: <GraduationCap className="w-6 h-6" />, title: "Career Growth", description: "Enhanced employability" }
          ].map((benefit, index) => (
            <Card key={index} className="text-center p-4 border-gray-300">
              <CardContent>
                <div className="bg-[#FA897B] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Floating Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsApplicationOpen(true)}
          className="bg-[#FA897B] hover:bg-[#FA897B] text-white px-6 py-3 rounded-full shadow-md"
        >
          <GraduationCap className="w-5 h-5 mr-2" /> Apply Now
        </Button>
      </div> */}

      {/* Dialog Form */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Internship Application Form</DialogTitle>
          </DialogHeader>
          {/* Form structure placeholder */}
          <form className="space-y-6 px-1">
            <p className="text-sm text-gray-500">(Form fields go here...)</p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InternshipPrograms;
