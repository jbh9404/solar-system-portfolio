"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Universe", path: "/" },
    { name: "About me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[110] flex items-center justify-between px-6 md:px-12 py-4 pointer-events-auto transition-all duration-300 ${
          scrolled && !isOpen
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-white text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2 drop-shadow-lg z-50 hover:scale-105 transition-transform"
        >
          <span>BYUNGHOON JUN</span>
          <span className="w-2 h-2 rounded-full bg-[#4facf7] animate-pulse"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 items-center bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10 shadow-lg">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 z-[110] relative focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-8 items-center text-center">
          {links.map((link, i) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-white scale-110"
                    : "text-gray-500 hover:text-white"
                }`}
                style={{
                  transitionDelay: `${isOpen ? i * 50 : 0}ms`,
                  transform: isOpen
                    ? isActive
                      ? "scale(1.1) translateY(0)"
                      : "translateY(0)"
                    : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
