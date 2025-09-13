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
    const section = document.getElementById("product");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    console.log("Navigating to shop...");
  };

  return (
    <div className="relative h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 h-full px-4 sm:px-6">
        {/* Text Content */}
        <div
          className={`flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-start transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="uppercase hero-heading text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter">
            <span
              className={`text-white font-bold inline-block transition-all duration-700 ${
                titleAnimation ? "scale-100 rotate-0" : "scale-95 -rotate-2"
              } ${
                hoveredElement === "title" ? "scale-105 text-yellow-100" : ""
              }`}
              onMouseEnter={() => setHoveredElement("title")}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {heroData.title.primary}
            </span>
            <br />
            <span
              className={`text-maroon inline-block transition-all duration-700 delay-200 ${
                titleAnimation ? "scale-100 rotate-0" : "scale-95 rotate-2"
              } ${
                hoveredElement === "subtitle-title"
                  ? "scale-105 text-red-800"
                  : ""
              }`}
              onMouseEnter={() => setHoveredElement("subtitle-title")}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {heroData.title.secondary}
            </span>
          </div>

          <div
            className={`body-text dark-brown font-bold text-base sm:text-lg md:text-lg lg:text-xl transition-all duration-500 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } ${hoveredElement === "subtitle" ? "scale-105" : ""}`}
            onMouseEnter={() => setHoveredElement("subtitle")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            {heroData.subtitle}
          </div>

          <div
            className={`transition-all duration-500 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              text={heroData.buttonText}
              className={`text-white bg-[#5e2c1c] text-sm sm:text-base transition-all duration-300 hover:bg-[#4a1f14] hover:scale-105 hover:shadow-xl ${
                hoveredElement === "button" ? "transform -translate-y-1" : ""
              }`}
              onClick={handleShopClick}
              onMouseEnter={() => setHoveredElement("button")}
              onMouseLeave={() => setHoveredElement(null)}
            />
          </div>
        </div>

        {/* Image Content */}
        <div
          className={`hidden sm:flex md:flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center mt-8 sm:mt-0 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div
            className={`relative transition-all duration-500 ${
              hoveredElement === "image"
                ? "scale-110 rotate-2"
                : "scale-100 rotate-0"
            }`}
            onMouseEnter={() => setHoveredElement("image")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <Image
              src={heroData.imageUrl}
              alt={heroData.imageAlt}
              width={300}
              height={400}
              className="rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-300
                         w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[400px]
                         object-cover"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
            />

            {/* Floating animation effect */}
            <div
              className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-300 rounded-full transition-all duration-1000 ${
                isLoaded ? "opacity-70 animate-bounce" : "opacity-0"
              }`}
              style={{ animationDelay: "1s" }}
            />
            <div
              className={`absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full transition-all duration-1000 ${
                isLoaded ? "opacity-60 animate-pulse" : "opacity-0"
              }`}
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-20 md:h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-10 h-10 md:w-16 md:h-16 bg-orange-300/20 rounded-full blur-lg animate-bounce" />
    </div>
  );
};

export default HeroClient;
