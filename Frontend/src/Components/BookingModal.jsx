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
        preferredTime: [],
        message: ''
    });

    const [errors, setErrors] = useState({});

    // Generate time slots from 11:00 AM to 8:00 PM with 30-minute intervals
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 11; hour <= 20; hour++) {
            const time12Hour = hour > 12 ? hour - 12 : hour;
            const period = hour < 12 ? 'AM' : 'PM';

            // Add :00 slot
            slots.push({
                value: `${hour.toString().padStart(2, '0')}:00`,
                label: `${time12Hour}:00 ${period}`
            });

            // Add :30 slot (except for 8:00 PM which would be 8:30 PM)
            if (hour < 20) {
                slots.push({
                    value: `${hour.toString().padStart(2, '0')}:30`,
                    label: `${time12Hour}:30 ${period}`
                });
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleTimeCheckboxChange = (timeValue) => {
        setFormData(prev => {
            const currentTimes = prev.preferredTime;
            const updatedTimes = currentTimes.includes(timeValue)
                ? currentTimes.filter(time => time !== timeValue)
                : [...currentTimes, timeValue];

            return { ...prev, preferredTime: updatedTimes };
        });

        // Clear error when user selects a time
        if (errors.preferredTime) {
            setErrors(prev => ({ ...prev, preferredTime: '' }));
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

        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        if (!formData.preferredDate) {
            newErrors.preferredDate = 'Preferred date is required';
        } else {
            const selectedDate = new Date(formData.preferredDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                newErrors.preferredDate = 'Please select a future date';
            }
        }

        if (!formData.preferredTime || formData.preferredTime.length === 0) {
            newErrors.preferredTime = 'Please select at least one preferred time';
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

        const { name, email, phone, location, service, preferredDate, preferredTime, message } = formData;

        // Format preferred times for display
        const formattedTimes = preferredTime
            .sort()
            .map(time => {
                const slot = timeSlots.find(slot => slot.value === time);
                return slot ? slot.label : time;
            })
            .join(', ');

        // Build WhatsApp message, excluding additional info if empty
        let whatsappMessage = `Hello! I would like to book a session.\n\nName: ${name}\nEmail: ${email}`;

        if (phone) {
            whatsappMessage += `\nPhone: ${phone}`;
        }

        if (location) {
            whatsappMessage += `\nLocation: ${location}`;
        }

        whatsappMessage += `\nService: ${service}\nPreferred Date: ${preferredDate}\nPreferred Times: ${formattedTimes}`;

        if (message && message.trim()) {
            whatsappMessage += `\nAdditional Info: ${message}`;
        }

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Construct WhatsApp URL
        const whatsappUrl = `https://wa.me/918779498158?text=${encodedMessage}`;

        // Call the onSubmit callback
        onSubmit(formData);

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            location: '',
            service: '',
            preferredDate: '',
            preferredTime: [],
            message: ''
        });

        // Clear errors
        setErrors({});

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-[#86E3CE] to-[#CCABDB] p-6 rounded-t-2xl relative">
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
                                className={errors.name ? 'border-red-500' : ' border border-gray-300'}
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
                                className={errors.email ? 'border-red-500' : ' border border-gray-300'}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                                className=" border border-gray-300"
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
                                className=" border border-gray-300"
                            />
                        </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Selection *
                        </label>
                        <Select onValueChange={(value) => {
                            setFormData(prev => ({ ...prev, service: value }));
                            if (errors.service) {
                                setErrors(prev => ({ ...prev, service: '' }));
                            }
                        }}>
                            <SelectTrigger className={`w-full ${errors.service ? 'border-red-500' : ' border border-gray-300'}`}>
                                <SelectValue placeholder="Choose a service" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                                <SelectItem value="personal-counselling" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Personal Counselling
                                </SelectItem>
                                <SelectItem value="career-counselling" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Career Counselling
                                </SelectItem>
                                <SelectItem value="abroad-counselling" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Abroad Counselling
                                </SelectItem>
                                <SelectItem value="workshop-panels" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Workshop Panels
                                </SelectItem>
                                <SelectItem value="internship-programs" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Internship Programs
                                </SelectItem>
                                <SelectItem value="personality-assessment" className="hover:bg-gray-50 px-4 py-2 cursor-pointer border-none">
                                    Personality and EQ Assessment
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </div>

                    {/* Date and Time Row */}
                    <div className="grid grid-cols-1 gap-4">
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
                                className={errors.preferredDate ? 'border-red-500' : ' border border-gray-300'}
                            />
                            {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Clock className="w-4 h-4 inline mr-2" />
                                Preferred Time Slots * (Select multiple if flexible)
                            </label>
                            <div className={`border rounded-lg ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'} bg-gray-50`}>
                                <div className="p-3 bg-white rounded-t-lg border-b border-gray-200">
                                    <span className="text-sm text-gray-600">
                                        {formData.preferredTime.length > 0
                                            ? `${formData.preferredTime.length} slot${formData.preferredTime.length > 1 ? 's' : ''} selected`
                                            : 'Select your preferred time slots'}
                                    </span>
                                </div>
                                <div className="max-h-48 overflow-y-auto">
                                    {timeSlots.map((slot) => (
                                        <label
                                            key={slot.value}
                                            className="flex items-center justify-between p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                                        >
                                            <span className="text-sm text-gray-700 font-medium">{slot.label}</span>
                                            <input
                                                type="checkbox"
                                                checked={formData.preferredTime.includes(slot.value)}
                                                onChange={() => handleTimeCheckboxChange(slot.value)}
                                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                                            />
                                        </label>
                                    ))}
                                </div>
                                {formData.preferredTime.length > 0 && (
                                    <div className="p-3 bg-blue-50 rounded-b-lg">
                                        <div className="flex flex-wrap gap-1">
                                            {formData.preferredTime.sort().map(time => {
                                                const slot = timeSlots.find(s => s.value === time);
                                                return (
                                                    <span
                                                        key={time}
                                                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                                                    >
                                                        {slot?.label}
                                                        <button
                                                            type="button"
                                                            onClick={() => handleTimeCheckboxChange(time)}
                                                            className="ml-1 text-blue-600 hover:text-blue-800"
                                                        >
                                                            ×
                                                        </button>
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
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
                            className=" border border-gray-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full py-4 text-lg text-white font-semibold bg-gradient-to-r from-[#FA8978] to-[#CCABDB] hover:from-pink-500 hover:via-purple-500 hover:to-purple-600"
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