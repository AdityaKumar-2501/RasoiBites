"use client"
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from "../Container";
import Card from "../ui/Card";

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll position and max scroll on mount and resize
  useEffect(() => {
    const updateScrollInfo = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setScrollPosition(scrollLeft);
        setMaxScroll(scrollWidth - clientWidth);
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const handleScroll = () => updateScrollInfo();
    const handleResize = () => updateScrollInfo();

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
      updateScrollInfo();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Calculate progress bar width
  const progressWidth = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <div id="product" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-30">
      <Container>
        <main className="mt-16 sm:mt-20 md:mt-24 lg:mt-30 
                         h-[60vh] sm:h-[70vh] md:h-[80vh] 
                         w-full 
                         p-4 sm:p-6 md:p-8 lg:p-10 
                         bg-amber-400 
                         rounded-[20px] sm:rounded-[30px] md:rounded-[40px] 
                         shadow-lg sm:shadow-xl md:shadow-2xl">
          <div className="relative h-full">
            {/* whole grid */}
            <div className="h-full px-2 sm:px-4 md:px-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase text-dark-brown section-title">
                  Namkeens for you
                </h1>
              </div>
              
              {/* Horizontal scrolling container */}
              <div className="mt-6 sm:mt-8 md:mt-10 relative">
                <div 
                  ref={scrollRef}
                  className="overflow-x-auto overflow-y-hidden scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  <div className="flex gap-3 sm:gap-4 md:gap-6 pb-4 min-w-max">
                    <Card />
                  </div>
                </div>
              </div>

              {/* Custom Progress Bar and Navigation */}
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6 flex items-center justify-between">
                {/* Progress Bar */}
                <div className="flex-1 mr-4 sm:mr-6 md:mr-8">
                  <div className="w-full h-1 bg-amber-600 bg-opacity-30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-800 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${Math.max(progressWidth, 10)}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-800 flex items-center justify-center transition-all duration-200 ${
                      canScrollLeft 
                        ? 'bg-transparent hover:bg-amber-800 hover:text-amber-400 text-amber-800' 
                        : 'bg-transparent text-amber-600 border-amber-600 cursor-not-allowed opacity-50'
                    }`}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" strokeWidth={2} />
                  </button>
                  
                  <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-800 flex items-center justify-center transition-all duration-200 ${
                      canScrollRight 
                        ? 'bg-transparent hover:bg-amber-800 hover:text-amber-400 text-amber-800' 
                        : 'bg-transparent text-amber-600 border-amber-600 cursor-not-allowed opacity-50'
                    }`}
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Products;