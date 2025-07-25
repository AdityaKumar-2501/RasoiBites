"use client";
import { useEffect, useState } from "react";
import { NavLinks } from "@/constants";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const firstHalf = NavLinks.slice(0, Math.ceil(NavLinks.length / 2));
  const secondHalf = NavLinks.slice(Math.ceil(NavLinks.length / 2));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#FFFCFB] transition-all duration-100 
        ${isScrolled ? "shadow-md border-b border-gray-100" : ""}`}
    >
      <div className="flex items-center justify-between px-22 py-6 dark-brown font-bold">
        {/* Left Nav Links */}
        <ul className="flex gap-10 section-title text-xl text-maroon">
          {firstHalf.map((nav) => (
            <li key={nav.id}>
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a className="hero-heading text-6xl cursor-pointer logo-text text-dark-brown" href="#">
          RasoiBites
        </a>

        {/* Right Nav Links */}
        <ul className="flex gap-10 section-title text-xl text-maroon">
          {secondHalf.map((nav) => (
            <li key={nav.id}>
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
