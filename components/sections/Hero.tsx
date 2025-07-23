import Container from "../Container";
import NavBar from "../ui/NavBar";

const Hero = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen items-center h-screen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, modi culpa deleniti ipsa magni accusamus illo iure itaque quasi labore minus veniam quae rerum nihil cum. Quos dolore libero assumenda!
          {/* Left: Tagline */}
          <aside >
            l
          </aside>

          {/* Right: Product Image */}
          <div>
            
          </div>
        </main>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen items-center h-screen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, modi culpa deleniti ipsa magni accusamus illo iure itaque quasi labore minus veniam quae rerum nihil cum. Quos dolore libero assumenda!
          {/* Left: Tagline */}
          <aside >
            l
          </aside>

          {/* Right: Product Image */}
          <div>
            
          </div>
        </main>

      </Container>
    </div>
  );
};

export default Hero;
