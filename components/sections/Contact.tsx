"use client"
import { User, Mail, Phone, Target, MessageCircle, Loader, Send, CheckCircle, PhoneCall, AtSign, MapPin } from 'lucide-react';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Phone number validation - only allow numbers
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove all non-digit characters
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const subjectOptions = [
    'General Inquiry',
    'Bulk Orders',
    'Franchise Opportunity',
    'Product Quality',
    'Custom Packaging',
    'Distribution Partnership',
    'Other'
  ];

  return (
    <div id="contact" className="scroll-mt-20 min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fffcfb' }}>
     

      <div className="max-w-4xl mx-auto body-text">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            {/* <span className="text-4xl">🍿</span> */}
            <h1 className="section-title text-5xl md:text-6xl bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            {/* <span className="text-4xl">🥜</span> */}
          </div>
          <p className="body-text text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have questions about our premium namkeen collection? Want to place a bulk order? 
            We&apos;d love to hear from you! Drop us a message and we&apos;ll get back to you faster than you can say &lsquo;extra spicy&rsquo;! 🌶️
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative">
          {/* Background Card with Gradient Border */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-transparent bg-clip-padding">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-sm opacity-20 -z-10"></div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          focusedField === 'name' 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 bg-gray-50'
                        } hover:border-orange-300`}
                        placeholder="Enter your full name"
                      />
                      <User className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          focusedField === 'email' 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 bg-gray-50'
                        } hover:border-orange-300`}
                        placeholder="your.email@example.com"
                      />
                      <Mail className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          focusedField === 'phone' 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 bg-gray-50'
                        } hover:border-orange-300`}
                        placeholder="+91 12345 67890"
                      />
                      <Phone className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none appearance-none cursor-pointer ${
                          focusedField === 'subject' 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 bg-gray-50'
                        } hover:border-orange-300`}
                      >
                        <option value="">Select a topic...</option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <Target className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows={6}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'message' 
                          ? 'border-yellow-400 bg-yellow-50' 
                          : 'border-gray-200 bg-gray-50'
                      } hover:border-orange-300`}
                      placeholder="Tell us about your inquiry, bulk order requirements, or any questions you have about our delicious namkeen products..."
                    ></textarea>
                    <MessageCircle className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      relative overflow-hidden px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 hover:scale-105 hover:shadow-xl'
                      }
                      text-white shadow-lg active:scale-95
                    `}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader className="animate-spin w-6 h-6" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-6 h-6" />
                        </>
                      )}
                    </span>
                    
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
                <h3 className="section-title text-3xl md:text-4xl text-green-600 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="body-text text-lg text-gray-700 mb-6">
                  Thank you for reaching out! We&apos;ve received your message and will get back to you within 24 hours. 
                  Meanwhile, why not check out our latest snack collections? 🍿
                </p>
                <div className="flex justify-center gap-2 text-4xl">
                  <span className="animate-bounce" style={{ animationDelay: '0s' }}>🥨</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🥜</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🍿</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🌶️</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🥨</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-400">
            <div className="text-center">
              <PhoneCall className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-lg text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9AM-7PM</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
            <div className="text-center">
              <AtSign className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <h4 className="font-bold text-lg text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-600">info@namkeen.com</p>
              <p className="text-sm text-gray-500 mt-1">We reply within 2 hours</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <h4 className="font-bold text-lg text-gray-800 mb-2">Visit Us</h4>
              <p className="text-gray-600">123 Snack Street</p>
              <p className="text-sm text-gray-500 mt-1">Food Junction, Delhi</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .section-title {
          font-family: 'Concert One', cursive;
        }

        .body-text {
          font-family: 'Poppins', sans-serif;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #fff5d6;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ffd944 0%, #ff9900 100%);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ffdd55 0%, #ffaa11 100%);
        }
      `}</style>
    </div>
  );
};

export default Contact;