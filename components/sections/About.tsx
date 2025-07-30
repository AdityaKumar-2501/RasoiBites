"use client"
import React, { useState, useEffect, useRef } from 'react';
import { AboutDetails } from '@/constants';


// Mock Container component
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            AboutDetails.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      id="why" 
      ref={sectionRef}
      className=" scroll-mt-40 py-20 body-text relative overflow-hidden" 
      style={{ backgroundColor: '#fffcfb' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-10 animate-float"
          style={{ backgroundColor: '#ffd944' }}
        />
        <div 
          className="absolute top-1/2 right-20 w-16 h-16 rounded-full opacity-10 animate-float-delayed"
          style={{ backgroundColor: '#ff9900' }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full opacity-10 animate-float-slow"
          style={{ backgroundColor: '#f44369' }}
        />
      </div>

      <Container>
        {/* Section Header */}
        <div className=" text-center mb-16">
          <div className="inline-block relative">
            <h2 
              className="section-title text-5xl md:text-6xl font-black mb-4 relative z-10"
              style={{ color: '#4a2e19' }}
            >
              Why Choose Us?
            </h2>
            <div 
              className="absolute -bottom-2 left-0 right-0 h-4 -rotate-1 opacity-80"
              style={{ backgroundColor: '#ffd944' }}
            />
          </div>
          <p 
            className="text-lg mt-6 max-w-2xl mx-auto opacity-80"
            style={{ color: '#5e2c1c' }}
          >
            Discover what makes our snacks extraordinary
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {AboutDetails.map((detail, index) => (
            <div
              key={detail.id}
              className={`group relative transform transition-all duration-700 ${
                visibleCards[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              onMouseEnter={() => setHoveredCard(detail.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Background Card */}
                <div 
                  className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                    hoveredCard === detail.id 
                      ? 'transform rotate-2 scale-105' 
                      : 'transform rotate-0 scale-100'
                  }`}
                  style={{ 
                    background: hoveredCard === detail.id 
                      ? 'linear-gradient(135deg, #ffd944 0%, #ff9900 50%, #f44369 100%)'
                      : '#fff5d6'
                  }}
                />
                
                {/* Main Card */}
                <div 
                  className={`relative bg-white rounded-3xl p-8 h-full transition-all duration-500 ${
                    hoveredCard === detail.id 
                      ? 'transform -translate-y-2 shadow-2xl' 
                      : 'shadow-lg'
                  }`}
                  style={{ 
                    boxShadow: hoveredCard === detail.id 
                      ? '0 25px 50px rgba(74, 46, 25, 0.25)' 
                      : '0 10px 30px rgba(74, 46, 25, 0.1)'
                  }}
                >
                  {/* Icon Container */}
                  <div className="mb-8 flex justify-center">
                    <div 
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === detail.id 
                          ? 'transform scale-110 animate-bounce' 
                          : 'transform scale-100'
                      }`}
                      style={{ 
                        background: hoveredCard === detail.id
                          ? 'linear-gradient(135deg, #ffd944, #ff9900)'
                          : '#fff5d6'
                      }}
                    >
                      <div 
                        className={`text-5xl transition-all duration-300 ${
                          hoveredCard === detail.id ? 'animate-pulse' : ''
                        }`}
                      >
                        {detail.img}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 
                      className={`section-title text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide transition-all duration-300 ${
                        hoveredCard === detail.id ? 'transform scale-105' : ''
                      }`}
                      style={{ color: '#4a2e19' }}
                    >
                      {detail.title}
                    </h3>
                    <p 
                      className="text-base leading-relaxed transition-all duration-300"
                      style={{ 
                        color: hoveredCard === detail.id ? '#5e2c1c' : '#4a2e19'
                      }}
                    >
                      {detail.body}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  {hoveredCard === detail.id && (
                    <div className="absolute inset-0 rounded-3xl animate-shimmer pointer-events-none" />
                  )}
                </div>

                {/* Floating Particles on Hover */}
                {hoveredCard === detail.id && (
                  <>
                    <div 
                      className="absolute -top-2 -right-2 w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: '#ffd944' }}
                    />
                    <div 
                      className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full animate-ping"
                      style={{ backgroundColor: '#ff9900', animationDelay: '0.5s' }}
                    />
                    <div 
                      className="absolute top-1/2 -right-3 w-2 h-2 rounded-full animate-ping"
                      style={{ backgroundColor: '#f44369', animationDelay: '1s' }}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <button 
            className="group relative inline-flex items-center px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50"
            style={{ 
              background: 'linear-gradient(135deg, #ffd944 0%, #ff9900 50%, #f44369 100%)',
              focusRingColor: '#ffd944'
            }}
          >
            <span className="relative z-10">Experience the Difference</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
            <svg 
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> */}
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }

        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(-3deg); 
          }
        }

        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(2deg); 
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default About;