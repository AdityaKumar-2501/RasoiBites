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
    
    // Responsive scroll amount based on screen size
    const screenWidth = window.innerWidth;
    let scrollAmount;
    
    if (screenWidth < 640) { // sm
      scrollAmount = scrollRef.current.clientWidth * 0.9; // Show one card at a time on mobile
    } else if (screenWidth < 1024) { // md
      scrollAmount = scrollRef.current.clientWidth * 0.7; // Show 1.5-2 cards
    } else {
      scrollAmount = scrollRef.current.clientWidth * 0.6; // Show 2-3 cards on desktop
    }
    
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
        <main className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 
                         min-h-[430px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[620px] xl:min-h-[640px]
                         w-full 
                         p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 
                         bg-amber-400 
                         rounded-[15px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px]
                         shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl">
          <div className="relative h-full">
            {/* Main content */}
            <div className="h-full px-1 sm:px-2 md:px-4 lg:px-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-5xl 2xl:text-6xl 
                               uppercase text-dark-brown section-title font-bold leading-tight
                               mb-2 sm:mb-0">
                  Namkeens for you
                </h1>
              </div>
              
              {/* Horizontal scrolling container */}
              <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 relative">
                <div 
                  ref={scrollRef}
                  className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-4"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 min-w-max p-4">
                    <Card />
                  </div>
                </div>
              </div>

              {/* Custom Progress Bar and Navigation */}
              <div className="absolute -bottom-5 sm:-bottom-14 md:-bottom-15 lg:-bottom-15 
                            left-1 sm:left-2 md:left-4 lg:left-6 
                            right-1 sm:right-2 md:right-4 lg:right-6 
                            flex items-center justify-between">
                {/* Progress Bar */}
                <div className="flex-1 mr-2 sm:mr-4 md:mr-6 lg:mr-8">
                  <div className="w-full h-0.5 sm:h-1 bg-amber-600 bg-opacity-30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-800 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${Math.max(progressWidth, 10)}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-1 sm:gap-2 md:gap-3">
                  <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                               rounded-full border border-amber-800 sm:border-2 
                               flex items-center justify-center transition-all duration-200 
                               ${canScrollLeft 
                                 ? 'bg-transparent hover:bg-amber-800 hover:text-amber-400 text-amber-800 active:scale-95' 
                                 : 'bg-transparent text-amber-600 border-amber-600 cursor-not-allowed opacity-50'
                               }`}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />
                  </button>
                  
                  <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                               rounded-full border border-amber-800 sm:border-2 
                               flex items-center justify-center transition-all duration-200 
                               ${canScrollRight 
                                 ? 'bg-transparent hover:bg-amber-800 hover:text-amber-400 text-amber-800 active:scale-95' 
                                 : 'bg-transparent text-amber-600 border-amber-600 cursor-not-allowed opacity-50'
                               }`}
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />
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