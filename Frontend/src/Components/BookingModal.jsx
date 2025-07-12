import { useState } from 'react';
import { User, Mail, MapPin, Calendar, Clock, Phone } from 'lucide-react';
import { Button } from '../../src/Components/UI/Button';
import { Input } from '../../src/Components/UI/Input';
import { Textarea } from '../../src/Components/UI/Textarea';
import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from '../../src/Components/UI/Select';

const BookingModal = ({ isOpen = true, onClose = () => { }, onSubmit = () => { } }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            location: '',
            service: '',
            preferredDate: '',
            preferredTime: '',
            message: ''
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-400 p-6 rounded-t-2xl relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl font-light w-8 h-8 flex items-center justify-center"
                    >
                        ×
                    </button>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Book Your Session
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                        Take the first step towards your personal growth journey
                    </p>
                </div>

                <div className="p-6 space-y-6">
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
                            />
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
                            />
                        </div>
                    </div>

                    {/* Phone and Location Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <MapPin className="w-4 h-4 inline mr-2" />
                                Location
                            </label>
                            <Input
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="Your city"
                            />
                        </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Selection *
                        </label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose a service" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                                <SelectItem value="personal-counselling" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Personal Counselling
                                </SelectItem>
                                <SelectItem value="couple-therapy" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Couple Therapy
                                </SelectItem>
                                <SelectItem value="family-therapy" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Family Therapy
                                </SelectItem>
                                <SelectItem value="group-therapy" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Group Therapy
                                </SelectItem>
                                <SelectItem value="career-counselling" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Career Counselling
                                </SelectItem>
                                <SelectItem value="stress-management" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Stress Management
                                </SelectItem>
                                <SelectItem value="anxiety-depression" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Anxiety & Depression
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Date and Time Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Calendar className="w-4 h-4 inline mr-2" />
                                Preferred Date *
                            </label>
                            <Input
                                type="date"
                                name="preferredDate"
                                value={formData.preferredDate}
                                onChange={handleInputChange}
                                required
                                min={new Date().toISOString().split('T')[0]}
                                placeholder="dd-mm-yyyy"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Clock className="w-4 h-4 inline mr-2" />
                                Preferred Time *
                            </label>
                            <Input
                                type="time"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleInputChange}
                                required
                                placeholder="--:--"
                            />
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Information (Optional)
                        </label>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Tell us more about what you'd like to achieve..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 hover:from-pink-500 hover:via-purple-500 hover:to-purple-600"
                        >
                            Book My Session
                        </Button>
                    </div>

                    {/* Footer Note */}
                    <p className="text-sm text-gray-500 text-center mt-4">
                        * Required fields. We'll contact you within 24 hours to confirm your appointment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;