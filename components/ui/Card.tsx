import Image from "next/image";
import { CardDetails } from "@/constants";

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
  const getColorIndex = (id:number) => {
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
            className={`flex flex-col ${bgColor} w-[250px] h-[350px] rounded-2xl overflow-hidden relative shadow-lg flex-shrink-0`}
          >
            {/* Pack count badge */}
            {/* {card.packCount && (
              <div className="absolute top-4 left-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium z-10">
                {card.packCount}
              </div>
            )} */}

            {/* Best seller leaf badge */}
            {card.isBestSeller && (
              <div className="absolute top-2 right-2 z-10">
                <div className="relative bg-amber-700 text-white px-4 py-3 text-xs font-bold leading-tight" 
                     style={{
                       clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 85% 70%, 60% 90%, 50% 100%, 40% 90%, 15% 70%, 0% 35%, 20% 10%)',
                       width: '80px',
                       height: '80px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}>
                  <span className="text-center whitespace-pre-line">
                    BEST{'\n'}SELLER
                  </span>
                </div>
              </div>
            )}

            {/* Product Image Container */}
            <div className="flex-1 flex justify-center items-center p-8">
              <div className="relative">
                <Image
                  src={card.src}
                  width={140}
                  height={180}
                  alt="Product image"
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white px-4 py-4 body-text">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium text-base mb-1 text-dark-brown">
                    {card.type}
                  </h3>
                  <p className={`${nameColor} text-sm font-medium`}>
                    {card.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-bold text-lg">₹{card.price}</p>
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