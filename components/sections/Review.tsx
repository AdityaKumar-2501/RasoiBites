'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { JSX } from 'react/jsx-runtime';
import Container from '../Container';
import { type Review } from '@/constants';
import { Reviews } from '@/constants';



const Review: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right'): void => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Container>
      <div className="py-8 sm:py-12 md:py-16 body-text flex flex-col justify-center items-center scroll-mt-30" id="review">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 sm:mb-8 md:mb-10 section-title">
            What Our Customers Say
          </h2>
          <p className="text-amber-700 text-base sm:text-lg max-w-2xl mx-auto hero-heading">
            Don&apos;t just take our word for it - hear from snack lovers across India who&apos;ve made us part of their daily cravings!
          </p>
        </div>

        {/* Reviews Container */}
        <div className="relative overflow-hidden w-full max-w-[80rem] justify-center px-4 sm:px-8 md:px-12 lg:px-26">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden sm:block cursor-pointer absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-amber-50 transition-colors duration-200 hover:shadow-xl"
            aria-label="Previous reviews"
            type="button"
          >
            <ChevronLeft className="text-amber-700" size={20} md-size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="hidden sm:block cursor-pointer absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-amber-50 transition-colors duration-200 hover:shadow-xl"
            aria-label="Next reviews"
            type="button"
          >
            <ChevronRight className="text-amber-700" size={20} md-size={24} />
          </button>

          {/* Scrollable Reviews */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-8 md:px-12 lg:px-20 py-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {Reviews.map((review: Review) => (
              <div
                key={review.id}
                className="flex-none w-72 sm:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-amber-100"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 text-base sm:text-lg">
                      {review.name}
                    </h4>
                    <p className="text-amber-600 text-xs sm:text-sm">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-amber-700 font-medium text-xs sm:text-sm">
                    {review.rating}/5
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
                  &quot;{review.review}&quot;
                </p>

                {/* Product Tag */}
                <div className="pt-4 border-t border-amber-100">
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                    {review.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(Reviews.length / 3) }, (_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-amber-300 opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Review;