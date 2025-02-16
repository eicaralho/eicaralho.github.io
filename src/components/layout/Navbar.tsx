"use client"

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark/80 backdrop-blur-md py-4" : "py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-accent">&lt;/&gt;</span> Dreon Portfolio's
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="nav-link">Home</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="/blog" className="nav-link">Blog</a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full w-full bg-dark/95 backdrop-blur-md py-4">
          <div className="container mx-auto px-6 flex flex-col gap-4">
            <a href="/" className="nav-link">Home</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="/blog" className="nav-link">Blog</a>
          </div>
        </div>
      )}
    </nav>
  );
}