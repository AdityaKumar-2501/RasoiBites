import Image from "next/image";
import { CardDetails } from "@/constants";
import { Star, Sparkles, Crown } from "lucide-react";

const Card = () => {
  // Array of background colors matching the HIPPEAS card theme
  const backgroundColors = [
    'bg-teal-400',       // Turquoise/teal (first card)
    'bg-orange-400',     // Orange (second card)
    'bg-red-500',        // Red (third card)
    'bg-red-800',        // Dark red/maroon (fourth card)
    'bg-teal-500',       // Alternate teal
    'bg-amber-500',      // Amber variation
    'bg-rose-600',       // Rose variation
    'bg-orange-600',     // Darker orange
  ];

  // Array of corresponding text colors for the product name
  const textColors = [
    'text-teal-600',
    'text-orange-600',
    'text-red-600',
    'text-red-700',
    'text-teal-700',
    'text-amber-600',
    'text-rose-700',
    'text-orange-700',
  ];

  // Function to get consistent color based on card id
  const getColorIndex = (id: number) => {
    return id % backgroundColors.length;
  };

  return (
    <>
      {CardDetails.map((card) => {
        const colorIndex = getColorIndex(card.id);
        const bgColor = backgroundColors[colorIndex];
        const nameColor = textColors[colorIndex];
        
        return (
          <div 
            key={card.id} 
            className={`flex flex-col ${bgColor} 
                       w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]
                       h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px]
                       rounded-xl sm:rounded-2xl overflow-hidden relative shadow-md sm:shadow-lg 
                       flex-shrink-0 transition-transform duration-200 hover:scale-105`}
          >
            {/* Modern Best Seller Badge */}
            {card.isBestSeller && (
              <div className="absolute top-2 right-2 z-20">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
                               rounded-full blur-sm opacity-75 animate-pulse"></div>
                
                {/* Main badge container */}
                <div className="relative bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 
                               w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[70px] md:h-[70px]
                               rounded-full shadow-lg shadow-amber-500/50 
                               flex flex-col items-center justify-center
                               border-2 border-white
                               hover:scale-110 hover:rotate-12 transition-all duration-300 ease-out
                               cursor-pointer group">
                  
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -left-1 text-white animate-ping">
                    <Sparkles size={8} className="sm:w-3 sm:h-3" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 text-white animate-ping animation-delay-300">
                    <Sparkles size={6} className="sm:w-2 sm:h-2" />
                  </div>
                  
                  {/* Crown icon */}
                  <Crown size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mb-0.5 
                                            group-hover:animate-bounce" />
                  
                  {/* Star rating */}
                  <div className="flex gap-0.5 mb-0.5">
                    <Star size={4} className="sm:w-1.5 sm:h-1.5 text-white fill-white" />
                    <Star size={4} className="sm:w-1.5 sm:h-1.5 text-white fill-white" />
                    <Star size={4} className="sm:w-1.5 sm:h-1.5 text-white fill-white" />
                  </div>
                  
                  {/* Text */}
                  <span className="text-white font-black text-[6px] sm:text-[7px] md:text-[8px] 
                                 leading-none text-center tracking-wider body-text">
                    BEST<br/>SELLER
                  </span>
                  
                  {/* Rotating border effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/50 
                                animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Secondary glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-400 
                               rounded-full blur-md opacity-30 animate-pulse animation-delay-500
                               scale-125"></div>
              </div>
            )}

            {/* Product Image Container */}
            <div className="flex-1 flex justify-center items-center p-4 sm:p-6 md:p-8">
              <div className="relative">
                <Image
                  src={card.src}
                  width={100}
                  height={130}
                  alt={`${card.name} product image`}
                  className="object-contain drop-shadow-lg 
                           w-[80px] h-[100px] 
                           sm:w-[100px] sm:h-[130px] 
                           md:w-[120px] md:h-[150px] 
                           lg:w-[140px] lg:h-[170px] 
                           xl:w-[150px] xl:h-[180px]"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white px-3 sm:px-4 py-3 sm:py-4 body-text">
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-800 font-medium text-sm sm:text-base mb-1 text-dark-brown 
                               truncate">
                    {card.type}
                  </h3>
                  <p className={`${nameColor} text-xs sm:text-sm font-medium leading-tight 
                                line-clamp-2`}>
                    {card.name}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-800 font-bold text-sm sm:text-base md:text-lg">
                    ₹{card.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;