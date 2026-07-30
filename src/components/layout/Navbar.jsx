"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `relative transition duration-300 ${
      active === id
        ? "text-blue-600 font-semibold"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Accredian
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#home" className={linkClass("home")}>
            Home
          </a>

          <a href="#why-accredian" className={linkClass("why-accredian")}>
            Why Accredian
          </a>

          <a href="#partners" className={linkClass("partners")}>
            Partners
          </a>

          <a href="#how-it-works" className={linkClass("how-it-works")}>
            How It Works
          </a>

          <a href="#referral" className={linkClass("referral")}>
            Referral
          </a>

          <a href="#faq" className={linkClass("faq")}>
            FAQ
          </a>

          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition hover:scale-105">
            Apply Now
          </button>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-5 gap-5">

            <a
              href="#home"
              className={linkClass("home")}
              onClick={() => setOpen(false)}
            >
              Home
            </a>

            <a
              href="#why-accredian"
              className={linkClass("why-accredian")}
              onClick={() => setOpen(false)}
            >
              Why Accredian
            </a>

            <a
              href="#partners"
              className={linkClass("partners")}
              onClick={() => setOpen(false)}
            >
              Partners
            </a>

            <a
              href="#how-it-works"
              className={linkClass("how-it-works")}
              onClick={() => setOpen(false)}
            >
              How It Works
            </a>

            <a
              href="#referral"
              className={linkClass("referral")}
              onClick={() => setOpen(false)}
            >
              Referral
            </a>

            <a
              href="#faq"
              className={linkClass("faq")}
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>

            <a
              href="#contact"
              className={linkClass("contact")}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>

            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}