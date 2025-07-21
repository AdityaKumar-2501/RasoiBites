import Container from "../Container";
import NavBar from "../ui/NavBar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-concentric h-screen">
      <Container>
        <NavBar />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen items-center">
          {/* Left: Tagline */}
          <aside className="flex flex-col justify-center items-start gap-10 text-white p-4">
            <h1 className="hero-heading outlined-text text-[8rem] text-base/24">
              Snack <br /> With No <br /> Limits
            </h1>
            <p className="body-text text-lg max-w-xl">
              When you&apos;re on the go and don&apos;t have time to cook, snacks are the
              perfect solution. Always be prepared for the mid-day hunger.
            </p>
          </aside>

          {/* Right: Product Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/hero-img.jpg"
              width={300}
              height={400}
              alt="Hero Image"
              className="rotate-15 floating-animation translate-x-6 translate-y-2 "
            />
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Hero;
