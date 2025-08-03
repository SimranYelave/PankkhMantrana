import { useState } from 'react';
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
  Clock,
  User,
  Mail,
  Phone
} from 'lucide-react';

const WorkshopPanels = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: '',
    experience: '',
    goals: ''
  });
  const [errors, setErrors] = useState({});

  const workshops = [
    {
      id: 'yoga',
      name: "Yoga Workshop",
      icon: <TreePine className="w-12 h-12" />,
      description: "Transform your life through traditional yoga practices, meditation, and breathing techniques.",
      // duration: "4-8 weeks",
      // sessions: "2-4 sessions/week",
      // price: "₹3,000 - ₹8,000",
      color: "bg-[#D0E6A5]",
      features: ["Hatha & Vinyasa Yoga", "Meditation & Pranayama", "Flexibility & Strength", "Stress Management"]
    },
    {
      id: 'pottery',
      name: "Pottery Workshop",
      icon: <Hammer className="w-12 h-12" />,
      description: "Learn the ancient art of pottery making, from basic techniques to advanced ceramic creations.",
      // duration: "6-10 weeks",
      // sessions: "2-3 sessions/week",
      // price: "₹4,000 - ₹12,000",
      color: "bg-[#FA897B]",
      features: ["Wheel Throwing", "Hand Building", "Glazing Techniques", "Kiln Operations"]
    },
    {
      id: 'arts',
      name: "Arts Workshop",
      icon: <Palette className="w-12 h-12" />,
      description: "Explore various art forms including painting, sketching, mixed media, and creative expression.",
      // duration: "4-12 weeks",
      // sessions: "2-3 sessions/week",
      // price: "₹3,500 - ₹10,000",
      color: "bg-[#CCABDB]",
      features: ["Watercolor & Acrylic", "Sketching & Drawing", "Mixed Media Art", "Creative Composition"]
    }
  ];

  const handleEnroll = (workshopId) => {
    setSelectedWorkshop(workshopId);
    setFormData(prev => ({ ...prev, workshop: workshopId }));
    setIsBookModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.workshop) {
      newErrors.workshop = 'Please select a workshop';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    const { name, email, phone, workshop, experience, goals } = formData;

    // Get workshop display name
    const workshopName = workshops.find(w => w.id === workshop)?.name || workshop;

    const whatsappMessage = `Hello! I would like to enroll in a workshop.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nWorkshop: ${workshopName}\nPrevious Experience: ${experience}\nGoals: ${goals}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/918779498158?text=${encodedMessage}`;

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      workshop: '',
      experience: '',
      goals: ''
    });

    // Clear errors
    setErrors({});

    // Close modal
    setIsBookModalOpen(false);
    setSelectedWorkshop('');

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Banner with <img> */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/d5/90/f7/d590f759c4288b553a28dcefedd92bff.jpg"
          alt="Workshop Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                  <div className={`w-20 h-20 ${workshop.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                    {workshop.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{workshop.name}</h3>
                  <p className="text-gray-600 mb-6">{workshop.description}</p>

                  {/* Upcoming Soon Badge */}
                  <div className="mb-6">
                    <span className={`inline-block ${workshop.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      Coming Soon
                    </span>
                  </div>

                  {/* Commented out duration, sessions, price */}
                  {/*
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
                  */}

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">What You'll Learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {workshop.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleEnroll(workshop.id)}
                    className={`w-full ${workshop.color} hover:opacity-90 text-white`}
                  >
                    Register Interest
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
                    <Users className="w-8 h-8 text-[#D0E6A5] mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Expert Instructors</h3>
                    <p className="text-sm text-gray-600">Certified professionals</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-[#FA897B] mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Flexible Schedule</h3>
                    <p className="text-sm text-gray-600">Multiple time slots</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-[#CCABDB] mx-auto mb-2" />
                    <h3 className="font-bold text-gray-800">Small Groups</h3>
                    <p className="text-sm text-gray-600">Personalized attention</p>
                  </div>
                  <div className="text-center">
                    <Hammer className="w-8 h-8 text-[#86E3CE] mx-auto mb-2" />
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
          className="bg-gradient-to-r from-[#D0E6A5] to-[#CCABDB] hover:from-[#D0E6A5]/90 hover:to-[#CCABDB]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <TreePine className="w-5 h-5 mr-2" />
          Register Interest
        </Button>
      </div>

      {/* Updated Enrollment Modal with WhatsApp functionality */}
      {isBookModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-[#D0E6A5] to-[#CCABDB] p-6 rounded-t-2xl relative">
              <button
                onClick={() => {
                  setIsBookModalOpen(false);
                  setSelectedWorkshop('');
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    workshop: '',
                    experience: '',
                    goals: ''
                  });
                  setErrors({});
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl font-light w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Register Your Interest
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Be the first to know when our workshops launch
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className={errors.name ? 'border-red-500' : 'border border-gray-300'}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className={errors.email ? 'border-red-500' : 'border border-gray-300'}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="border border-gray-300"
                  />
                </div>

                {/* Workshop Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Workshop *
                  </label>
                  <Select
                    value={formData.workshop}
                    onValueChange={(value) => {
                      setFormData(prev => ({ ...prev, workshop: value }));
                      if (errors.workshop) {
                        setErrors(prev => ({ ...prev, workshop: '' }));
                      }
                    }}
                  >
                    <SelectTrigger className={`w-full ${errors.workshop ? 'border-red-500' : 'border border-gray-300'} bg-white`}>
                      <SelectValue placeholder="Choose a workshop" />
                    </SelectTrigger>
                    <SelectContent className="border border-gray-300 bg-white">
                      <SelectItem value="yoga">Yoga Workshop</SelectItem>
                      <SelectItem value="pottery">Pottery Workshop</SelectItem>
                      <SelectItem value="arts">Arts Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.workshop && <p className="text-red-500 text-sm mt-1">{errors.workshop}</p>}
                </div>

                {/* Previous Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Experience
                  </label>
                  <Input
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., Beginner, Some experience"
                    className="border border-gray-300"
                  />
                </div>

                {/* Goals */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Goals (Optional)
                  </label>
                  <Textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="What do you hope to achieve from this workshop?"
                    className="border border-gray-300"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full py-4 text-lg text-white font-semibold bg-gradient-to-r from-[#D0E6A5] to-[#CCABDB] hover:from-[#D0E6A5]/90 hover:to-[#CCABDB]/90"
                  >
                    Submit Interest
                  </Button>
                </div>

                {/* Footer Note */}
                <p className="text-sm text-gray-500 text-center mt-4">
                  * Required fields. We'll notify you as soon as the workshops are available.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopPanels;