"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";

interface HeroData {
  title: {
    primary: string;
    secondary: string;
  };
  subtitle: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
}

interface HeroClientProps {
  heroData: HeroData;
}

const HeroClient = ({ heroData }: HeroClientProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [titleAnimation, setTitleAnimation] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setTitleAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleShopClick = () => {
    // Add your shop navigation logic here
    console.log("Navigating to shop...");
  };

  return (
    <div className="relative h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full px-6">
        {/* Text Content */}
        <div 
          className={`flex flex-col gap-8 justify-center items-start transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="uppercase hero-heading text-4xl md:text-8xl tracking-tighter">
            <span 
              className={`text-white font-bold inline-block transition-all duration-700 ${
                titleAnimation ? 'scale-100 rotate-0' : 'scale-95 -rotate-2'
              } ${hoveredElement === 'title' ? 'scale-105 text-yellow-100' : ''}`}
              onMouseEnter={() => setHoveredElement('title')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {heroData.title.primary}
            </span>
            <br />
            <span 
              className={`text-maroon inline-block transition-all duration-700 delay-200 ${
                titleAnimation ? 'scale-100 rotate-0' : 'scale-95 rotate-2'
              } ${hoveredElement === 'subtitle-title' ? 'scale-105 text-red-800' : ''}`}
              onMouseEnter={() => setHoveredElement('subtitle-title')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {heroData.title.secondary}
            </span>
          </div>
          
          <div 
            className={`body-text dark-brown font-bold transition-all duration-500 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } ${hoveredElement === 'subtitle' ? 'scale-105' : ''}`}
            onMouseEnter={() => setHoveredElement('subtitle')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            {heroData.subtitle}
          </div>
          
          <div 
            className={`transition-all duration-500 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button 
              text={heroData.buttonText} 
              className={`text-white bg-[#5e2c1c] transition-all duration-300 hover:bg-[#4a1f14] hover:scale-105 hover:shadow-xl ${
                hoveredElement === 'button' ? 'transform -translate-y-1' : ''
              }`}
              onClick={handleShopClick}
              onMouseEnter={() => setHoveredElement('button')}
              onMouseLeave={() => setHoveredElement(null)}
            />
          </div>
        </div>

        {/* Image Content */}
        <div 
          className={`flex flex-col gap-8 justify-center items-center transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div 
            className={`relative transition-all duration-500 ${
              hoveredElement === 'image' ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
            }`}
            onMouseEnter={() => setHoveredElement('image')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <Image 
              src={heroData.imageUrl} 
              alt={heroData.imageAlt} 
              width={300} 
              height={400}
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              priority
            />
            
            {/* Floating animation effect */}
            <div 
              className={`absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full transition-all duration-1000 ${
                isLoaded ? 'opacity-70 animate-bounce' : 'opacity-0'
              }`}
              style={{ animationDelay: '1s' }}
            />
            <div 
              className={`absolute -bottom-3 -left-3 w-4 h-4 bg-orange-400 rounded-full transition-all duration-1000 ${
                isLoaded ? 'opacity-60 animate-pulse' : 'opacity-0'
              }`}
              style={{ animationDelay: '1.5s' }}
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-orange-300/20 rounded-full blur-lg animate-bounce" />
    </div>
  );
};

export default HeroClient;