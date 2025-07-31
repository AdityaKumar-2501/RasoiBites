import Container from "../Container";
import NavBar from "../ui/NavBar";
import HeroClient from "../ui//HeroClient";

// Server Component for SSR and SEO
const Hero = () => {
  // Static data that should be available for SSR/SEO
  const heroData = {
    title: {
      primary: "Flavor",
      secondary: "your mind"
    },
    subtitle: "Changing snacks one packet at a time.",
    buttonText: "Shop RasoiBites",
    imageUrl: "/hero-img.jpg",
    imageAlt: "RasoiBites premium snacks collection"
  };

  return (
    <div>
      <NavBar />
      <Container>
        <main 
          id="hero" 
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-30 
                     h-[60vh] sm:h-[70vh] md:h-[80vh] 
                     w-full 
                     p-4 sm:p-6 md:p-8 lg:p-10 
                     bg-amber-400 
                     rounded-[20px] sm:rounded-[30px] md:rounded-[40px] 
                     shadow-lg sm:shadow-xl md:shadow-2xl"
        >
          {/* SEO-friendly content that renders on server */}
          <div className="sr-only">
            <h1>{heroData.title.primary} {heroData.title.secondary}</h1>
            <p>{heroData.subtitle}</p>
            <button>{heroData.buttonText}</button>
          </div>

          {/* Client-side interactive component */}
          <HeroClient heroData={heroData} />
        </main>
      </Container>
    </div>
  );
};

export default Hero;