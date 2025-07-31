"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLinks } from "@/constants";


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const firstHalf = NavLinks.slice(0, Math.ceil(NavLinks.length / 2));
  const secondHalf = NavLinks.slice(Math.ceil(NavLinks.length / 2));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#FFFCFB] transition-all duration-100 
        ${isScrolled ? "shadow-md border-b border-gray-100" : ""}`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between px-4 xl:px-22 py-6 dark-brown font-bold">
        {/* Left Nav Links */}
        <ul className="flex gap-6 xl:gap-10 section-title text-lg xl:text-xl text-maroon">
          {firstHalf.map((nav) => (
            <li key={nav.id}>
              <a href={nav.link} className="hover:opacity-70 transition-opacity">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a className="hero-heading text-4xl xl:text-6xl cursor-pointer logo-text text-dark-brown" href="#">
          RasoiBites
        </a>

        {/* Right Nav Links */}
        <ul className="flex gap-6 xl:gap-10 section-title text-lg xl:text-xl text-maroon">
          {secondHalf.map((nav) => (
            <li key={nav.id}>
              <a href={nav.link} className="hover:opacity-70 transition-opacity">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4 dark-brown font-bold">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-maroon p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo - Centered */}
        <a className="hero-heading text-3xl sm:text-4xl cursor-pointer logo-text text-dark-brown absolute left-1/2 transform -translate-x-1/2" href="#">
          RasoiBites
        </a>

        {/* Spacer for balance */}
        <div className="w-10"></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFCFB] border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col py-4">
            {NavLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={nav.link}
                  onClick={closeMobileMenu}
                  className="block px-6 py-3 section-title text-lg text-maroon hover:bg-gray-50 transition-colors"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;