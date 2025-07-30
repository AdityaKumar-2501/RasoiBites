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
    <div id="product" className="scroll-mt-30">
      <Container>
        <main className="mt-30 h-[80vh] w-full p-10 bg-amber-400 rounded-[40px] shadow-2xl">
          <div className="relative h-full">
            {/* whole grid */}
            <div className="h-full px-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-6xl uppercase text-dark-brown section-title">Namkeens for you</h1>
              </div>
              
              {/* Horizontal scrolling container */}
              <div className="mt-10 relative ">
                <div 
                  ref={scrollRef}
                  className="overflow-x-auto overflow-y-hidden scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  <div className="flex gap-6 pb-4 min-w-max">
                    <Card />
                  </div>
                </div>
              </div>

              {/* Custom Progress Bar and Navigation */}
              <div className="absolute -bottom-4 left-6 right-6 flex items-center justify-between">
                {/* Progress Bar */}
                <div className="flex-1 mr-8">
                  <div className="w-full h-1 bg-amber-600 bg-opacity-30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-800 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${Math.max(progressWidth, 10)}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={` cursor-pointer w-12 h-12 rounded-full border-2 border-amber-800 flex items-center justify-center transition-all duration-200 ${
                      canScrollLeft 
                        ? 'bg-transparent hover:bg-amber-800 hover:text-amber-400 text-amber-800' 
                        : 'bg-transparent text-amber-600 border-amber-600 cursor-not-allowed opacity-50'
                    }`}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={20} strokeWidth={2} />
                  </button>
                  
                  <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`cursor-pointer w-12 h-12 rounded-full border-2 border-amber-800 flex items-center justify-center transition-all duration-200 ${
                      canScrollRight 
                        ? 'bg-transparent hover:bg-amber-800 hover:text-amber-400 text-amber-800' 
                        : 'bg-transparent text-amber-600 border-amber-600 cursor-not-allowed opacity-50'
                    }`}
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={20} strokeWidth={2} />
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