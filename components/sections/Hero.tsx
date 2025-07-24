import Image from "next/image";
import Container from "../Container";
import Button from "../ui/Button";
import NavBar from "../ui/NavBar";

const Hero = () => {
  return (
    <div>
        <NavBar />
      <Container>
        <main id="#" className="mt-30 h-[80vh] w-full p-10 bg-amber-400 rounded-[40px]">
          <div className="relative h-full">
            <div className="grid grid-cols-2 gap-4 h-full px-6">
              <div className='flex flex-col gap-8 justify-center items-start  '>
                <div className="uppercase hero-heading text-8xl tracking-tighter">
                  <span className="text-white font-bold">Flavor</span>
                  <br />
                  <span className="maroon">your mind</span>
                </div>
                <div className="body-text dark-brown font-bold">
                    Changing snackes one packet at a time.
                </div>
                <div>
                  <Button text="Shop RasoiBites" className="text-white bg-[#5e2c1c]"/>
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center items-center  ">
                <Image src={'/hero-img.jpg'} alt="hero-img" width={300} height={400}/>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Hero;
