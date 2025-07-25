const Marquee = () => {
  return (
    <div>
      <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-14 relative">
        <div className="flex animate-marquee">
          <div className="flex shrink-0">
            <span className="uppercase hero-heading text-8xl text-primary-yellow">
              Better For You — Better For You — Better For You — 
            </span>
            <span className="uppercase hero-heading text-8xl text-primary-yellow">
              Better For You — Better For You — Better For You — 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;