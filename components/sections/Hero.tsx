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
          className="mt-30 h-[80vh] w-full p-10 bg-amber-400 rounded-[40px] shadow-2xl"
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