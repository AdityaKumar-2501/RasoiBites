const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1440px] mx-auto w-full">
    {children}
  </div>
);

export default Container;