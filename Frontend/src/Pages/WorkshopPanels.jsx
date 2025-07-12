import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../Components/UI/Card';
import { Button } from '../Components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../Components/UI/Dialog';
import { Input } from '../Components/UI/Input';
import { Textarea } from '../Components/UI/Textarea';
import { Label } from '../Components/UI/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Components/UI/Select';
import {
  ArrowLeft,
  TreePine,
  Palette,
  Hammer,
  Users,
  Calendar,
  Clock
} from 'lucide-react';

const WorkshopPanels = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState('');

  const workshops = [
    {
      id: 'yoga',
      name: "Yoga Workshop",
      icon: <TreePine className="w-12 h-12" />,
      description: "Transform your life through traditional yoga practices, meditation, and breathing techniques.",
      duration: "4-8 weeks",
      sessions: "2-4 sessions/week",
      price: "₹3,000 - ₹8,000",
      color: "pale-green",
      features: ["Hatha & Vinyasa Yoga", "Meditation & Pranayama", "Flexibility & Strength", "Stress Management"]
    },
    {
      id: 'pottery',
      name: "Pottery Workshop",
      icon: <Hammer className="w-12 h-12" />,
      description: "Learn the ancient art of pottery making, from basic techniques to advanced ceramic creations.",
      duration: "6-10 weeks",
      sessions: "2-3 sessions/week",
      price: "₹4,000 - ₹12,000",
      color: "peach",
      features: ["Wheel Throwing", "Hand Building", "Glazing Techniques", "Kiln Operations"]
    },
    {
      id: 'arts',
      name: "Arts Workshop",
      icon: <Palette className="w-12 h-12" />,
      description: "Explore various art forms including painting, sketching, mixed media, and creative expression.",
      duration: "4-12 weeks",
      sessions: "2-3 sessions/week",
      price: "₹3,500 - ₹10,000",
      color: "lavender",
      features: ["Watercolor & Acrylic", "Sketching & Drawing", "Mixed Media Art", "Creative Composition"]
    }
  ];

  const handleEnroll = (workshopId) => {
    setSelectedWorkshop(workshopId);
    setIsBookModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Banner */}
      <section className="relative bg-gradient-to-r from-pale-green via-peach to-lavender py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold font-playfair text-white mb-6 animate-fade-up">
            Creative Workshop Panels
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Discover your creative potential through our comprehensive workshop programs in Yoga, Pottery, and Arts.
          </p>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair text-gray-800 mb-6">
              Available Workshop Panels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our expertly designed workshops to develop new skills and express your creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card
                key={workshop.id}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up border-none"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className={`w-20 h-20 bg-${workshop.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                    {workshop.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{workshop.name}</h3>
                  <p className="text-gray-600 mb-6">{workshop.description}</p>

                  <div className="space-y-3 mb-6 text-left">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <span className="text-gray-600">{workshop.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Sessions:</span>
                      <span className="text-gray-600">{workshop.sessions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Price:</span>
                      <span className="text-gray-600">{workshop.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">What You'll Learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {workshop.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className={`w-2 h-2 bg-${workshop.color} rounded-full mr-2`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleEnroll(workshop.id)}
                    className={`w-full bg-${workshop.color} hover:bg-${workshop.color}/90 text-white`}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-playfair text-gray-800 mb-6">
                Why Choose Our Workshop Panels?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our workshop panels are designed to provide comprehensive learning experiences with expert instructors,
                quality materials, and supportive learning environments.
              </p>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="w-8 h-8 text-pale-green mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Expert Instructors</h3>
                    <p className="text-sm text-gray-600">Certified professionals</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-peach mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Flexible Schedule</h3>
                    <p className="text-sm text-gray-600">Multiple time slots</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-lavender mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Small Groups</h3>
                    <p className="text-sm text-gray-600">Personalized attention</p>
                  </div>
                  <div className="text-center">
                    <Hammer className="w-8 h-8 text-mint-green mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Quality Materials</h3>
                    <p className="text-sm text-gray-600">Professional supplies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Enroll Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsBookModalOpen(true)}
          size="lg"
          className="bg-gradient-to-r from-pale-green to-lavender hover:from-pale-green/90 hover:to-lavender/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <TreePine className="w-5 h-5 mr-2" />
          Enroll in Workshop
        </Button>
      </div>

      {/* Enrollment Modal */}
      <Dialog open={isBookModalOpen} onOpenChange={setIsBookModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enroll in Workshop Panel</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            <div>
              <Label htmlFor="workshop">Select Workshop</Label>
              <Select value={selectedWorkshop} onValueChange={setSelectedWorkshop}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a workshop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yoga">Yoga Workshop</SelectItem>
                  <SelectItem value="pottery">Pottery Workshop</SelectItem>
                  <SelectItem value="arts">Arts Workshop</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="experience">Previous Experience</Label>
              <Input id="experience" placeholder="e.g., Beginner, Some experience" />
            </div>
            <div>
              <Label htmlFor="goals">Your Goals</Label>
              <Textarea id="goals" placeholder="What do you hope to achieve from this workshop?" />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-pale-green to-lavender hover:from-pale-green/90 hover:to-lavender/90">
              Submit Enrollment
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkshopPanels;
