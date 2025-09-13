export const NavLinks = [
  {
    id: 1,
    name: "Product",
    link: "#product",
  },
  {
    id: 2,
    name: "Why RasoiBites",
    link: "#why",
  },
  {
    id: 3,
    name: "Review",
    link: "#review",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

export const CardDetails = [
  {
    id: 1,
    src: "/ratlami_sev.jpg",
    type: "Namkeen",
    name: "Ratlami Sev",
    price: "49.99",
    isBestSeller: true,
    packCount: "6 packs",
  },
  {
    id: 2,
    src: "/khamand_sev.jpg",
    type: "Namkeen",
    name: "Khamand Sev",
    price: "49.99",

    isBestSeller: false,
    packCount: "6 packs",
  },
  {
    id: 3,
    src: "/mixed_namkeen.jpg",
    type: "Namkeen",
    name: "Mixed Namkeen",
    price: "49.99",

    isBestSeller: false,
    packCount: "6 packs",
  },

  {
    id: 4,
    src: "/khata_mitha_mixture.jpg",
    type: "Namkeen",
    name: "Khatta Mitha Mixture",
    price: "49.99",

    isBestSeller: false,
    packCount: "6 packs",
  },
  {
    id: 5,
    src: "/khamand_sev_2.jpg",
    type: "Namkeen",
    name: "Khamand Sev",
    price: "49.99",

    isBestSeller: false,
    packCount: "6 packs",
  },
  // {
  //   id: 6,
  //   src: "/hero-img.jpg",
  //   type: "Namkeen",
  //   name: "Khatta Mitha",
  //   price: "49.99",

  //   isBestSeller: false,
  //   packCount: "6 packs",
  // },
];


export const AboutDetails = [
  {
    id: 1,
    img: "🌾",
    title: "ROOTED IN TRADITION",
    body: "Our namkeens are crafted with care, using time-tested recipes and ingredients that celebrate the rich culinary heritage of India. Every bite brings you closer to home, with authentic flavors passed down through generations",
  },
  {
    id: 2,
    img: "💪",
    title: "CRUNCH WITH A PURPOSE",
    body: "Not just tasty—our namkeens are full of real ingredients like lentils, rice flakes, nuts, and spices that bring you crunch, energy, and satisfaction in every handful. No fluff, just flavorful fuel.",
  },
  {
    id: 3,
    img: "🎉",
    title: "BURSTING WITH DESI FLAVOR",
    body: "Forget boring snacks! Our namkeens are loaded with bold, spicy, tangy flavors that make your taste buds dance. From the classic to the adventurous, we’ve got something for every craving—without the compromise.",
  },
]


// TypeScript interfaces
export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  product: string;
}
// Sample review data
export const Reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "Absolutely love these namkeens! The traditional flavors remind me of my grandmother's cooking. Perfect crunch and authentic taste in every bite.",
    avatar: "👩‍🦱",
    product: "Classic Mixture"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    review: "Finally found healthy snacks that don't compromise on taste! My kids love them too. The spice level is just perfect - not too mild, not too hot.",
    avatar: "👨‍💼",
    product: "Spicy Bhujia"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad",
    rating: 4,
    review: "Great quality ingredients and packaging. You can really taste the difference. Will definitely order again for our family gatherings.",
    avatar: "👩‍🍳",
    product: "Masala Peanuts"
  },
  {
    id: 4,
    name: "Vikash Singh",
    location: "Bangalore",
    rating: 5,
    review: "Best office snacks ever! No more boring chips for me. These namkeens keep me energized throughout the day. Highly recommended!",
    avatar: "👨‍💻",
    product: "Chana Dal Mix"
  },
  {
    id: 5,
    name: "Meera Joshi",
    location: "Pune",
    rating: 5,
    review: "Love the variety pack! Each flavor is unique and delicious. Perfect for entertaining guests or just enjoying with evening tea.",
    avatar: "👩‍🎓",
    product: "Variety Pack"
  },
  {
    id: 6,
    name: "Arjun Reddy",
    location: "Hyderabad",
    rating: 4,
    review: "Authentic taste that takes me back to my childhood. Great texture and freshness. The packaging keeps them crispy for days!",
    avatar: "👨‍🎨",
    product: "Sev Mixture"
  }
];
