import Container from "../Container";

const Marquee = () => {
  return (
    <Container>
      <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-14 relative">
      <div className="flex animate-marquee gap-10">
        <span className="uppercase hero-heading text-8xl text-primary-yellow">
          Better For You — Better For You — Better For You —
        </span>
        <span className="uppercase hero-heading text-8xl text-primary-yellow">
          Better For You — Better For You — Better For You —
        </span>
      </div>
    </div>
    </Container>
  );
};

export default Marquee;
