import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Products from "./sections/Products"
import Review from "./sections/Review"
import Marquee from "./ui/Marquee"

const RasoiBites = () => {
  return (
    <div className="w-full">
      <Hero />
      <Products />
      <Marquee />
      <About />
      <Review />
      <Contact />
      <Footer />
    </div>
  )
}

export default RasoiBites