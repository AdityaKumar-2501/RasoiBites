"use client"
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle, MapPin, Phone, Mail, Truck, RotateCcw, Star, Target, ArrowUp, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    'Traditional Mix',
    'Spicy Snacks',
    'Sweet Treats',
    'Healthy Options',
    'Festival Specials',
    'Bulk Packages'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
    { name: 'Bulk Orders', href: '#bulk' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Blog', href: '#blog' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'WhatsApp', icon: MessageCircle, href: '#' }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#fffcfb' }}>
      {/* Floating Snack Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-16 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full floating-animation opacity-15"></div>
        <div className="absolute top-32 right-24 w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full floating-animation opacity-15" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-20 left-1/3 w-5 h-5 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full floating-animation opacity-15" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-32 right-16 w-7 h-7 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full floating-animation opacity-15" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-16 left-1/4 w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-full floating-animation opacity-15" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-1/3 w-4 h-4 bg-gradient-to-br from-red-300 to-orange-300 rounded-full floating-animation opacity-15" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section with Gradient Border */}
        <div className="border-t-4 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-border">
          <div className="bg-white mx-1 mt-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* Brand Section */}
                <div className="lg:col-span-1">
                  <div className="mb-6">
                    <h3 className="logo-text text-3xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                      RasoiBites
                    </h3>
                    <div className="flex gap-1 mb-4">
                      <span className="text-2xl">🍿</span>
                      <span className="text-2xl">🥜</span>
                      <span className="text-2xl">🌶️</span>
                      <span className="text-2xl">🥨</span>
                    </div>
                  </div>
                  <p className="body-text text-gray-700 mb-6 leading-relaxed">
                    Crafting authentic Indian namkeen with traditional recipes and premium ingredients. 
                    Taste the heritage in every bite! 🎯
                  </p>
                  
                  {/* Newsletter Signup */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Stay Updated! 📬</h4>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Your email..."
                        className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                      />
                      <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Products Section */}
                <div>
                  <h4 className="section-title text-xl font-bold text-gray-800 mb-6 relative">
                    Our Products
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  </h4>
                  <ul className="space-y-3">
                    {productCategories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="body-text text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></span>
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links Section */}
                <div>
                  <h4 className="section-title text-xl font-bold text-gray-800 mb-6 relative">
                    Quick Links
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                  </h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="body-text text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-red-500 transition-colors duration-300"></span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="section-title text-xl font-bold text-gray-800 mb-6 relative">
                    Get In Touch
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-red-400 to-yellow-500 rounded-full"></div>
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="body-text text-gray-700 font-medium">Visit Our Store</p>
                        <p className="body-text text-gray-600 text-sm">123 Snack Street, Food Junction<br />New Delhi, India 110001</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="body-text text-gray-700 font-medium">Call Us</p>
                        <p className="body-text text-gray-600 text-sm">+91 98765 43210<br />Mon-Sat, 9AM-7PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="body-text text-gray-700 font-medium">Email Us</p>
                        <p className="body-text text-gray-600 text-sm">info@namkeenpalace.com<br />orders@namkeenpalace.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Social & Features */}
        <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Social Media */}
              <div className="text-center lg:text-left">
                <h4 className="section-title text-2xl font-bold text-gray-800 mb-6">
                  Follow Our Snack Journey! 🚀
                </h4>
                <div className="flex justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="group relative w-14 h-14 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center border-2 border-transparent hover:border-yellow-400"
                      >
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-yellow-500 group-hover:scale-125 transition-all duration-300" />
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.name}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Truck className="w-8 h-8 text-yellow-500 mb-2" />
                  <h5 className="font-semibold text-gray-800 mb-1">Free Delivery</h5>
                  <p className="text-gray-600 text-sm">Orders above ₹500</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <RotateCcw className="w-8 h-8 text-orange-500 mb-2" />
                  <h5 className="font-semibold text-gray-800 mb-1">Easy Returns</h5>
                  <p className="text-gray-600 text-sm">7-day return policy</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Star className="w-8 h-8 text-red-500 mb-2" />
                  <h5 className="font-semibold text-gray-800 mb-1">Premium Quality</h5>
                  <p className="text-gray-600 text-sm">Fresh & authentic</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Target className="w-8 h-8 text-yellow-600 mb-2" />
                  <h5 className="font-semibold text-gray-800 mb-1">Custom Orders</h5>
                  <p className="text-gray-600 text-sm">Bulk & personalized</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-white font-medium">
                  © {currentYear} RasoiBites. All rights reserved.
                </p>
                <p className="text-yellow-100 text-sm mt-1">
                  Made with ❤️ and lots of spices in India
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-yellow-100 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>

              {/* Back to Top */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="body-text bg-white bg-opacity-20 hover:bg-opacity-30 text-black px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-5 h-5" />
              </button>
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

        .logo-text {
          font-family: 'Akaya Kanadaka', cursive;
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
    </footer>
  );
};

export default Footer;