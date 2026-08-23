"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CertificateSection from "./components/CertificateSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { MenuIcon, XIcon } from "lucide-react";

interface NavItemsStruct {
  id: number;
  link: string;
  text: string;
}

const navItems: NavItemsStruct[] = [
  {
    id: 1,
    link: "#tentang",
    text: "Tentang",
  },
  {
    id: 2,
    link: "#skill",
    text: "Keahlian",
  },
  {
    id: 3,
    link: "#sertifikat",
    text: "Sertifikat",
  },
  {
    id: 4,
    link: "#proyek",
    text: "Proyek",
  },
  {
    id: 5,
    link: "#pendidikan",
    text: "Pendidikan",
  },
  {
    id: 6,
    link: "#blog",
    text: "Blog",
  },
  {
    id: 7,
    link: "#kontak",
    text: "Kontak",
  },
];

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-slate-50 font-montserrat text-slate-800">
      <nav className="w-full fixed left-0 top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 py-6 px-6 md:px-0 md:py-8 flex justify-between md:justify-around items-center transition-all duration-300">
        <h3 className="text-xl font-bold font-heading text-blue-700">
          <a href="#">Alvinnes</a>
        </h3>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 font-medium text-slate-600">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-600 after:block after:border-b-2 after:border-b-blue-600 after:-mt-0.5 after:scale-x-0 after:transition-all after:duration-500 hover:after:scale-x-100 after:origin-left"
            >
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-slate-700 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-slate-200 py-4 flex flex-col items-center gap-4 md:hidden">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={item.link} 
                className="font-medium text-slate-600 hover:text-blue-600 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
      </nav>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificateSection />
      <ProjectSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />

      <footer className="w-full h-50 border-t flex-col gap-3 border-[#808080]/20 flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <a
            target="_blank"
            className="transition-all duration-500 hover:-translate-y-1"
            href="https://www.instagram.com/alvinnes__"
          >
            <InstagramLogoIcon className="size-6" />
          </a>
          <a
            target="_blank"
            className="transition-all duration-500 hover:-translate-y-1"
            href="https://www.tiktok.com/@alvinnes_?_r=1&_t=ZS-997v4DhUHsQ"
          >
            <TiktokLogoIcon className="size-6" />
          </a>
          <a
            target="_blank"
            className="transition-all duration-500 hover:-translate-y-1"
            href="https://www.linkedin.com/in/alvinnes"
          >
            <LinkedinLogoIcon className="size-6" />
          </a>
          <a
            target="_blank"
            className="transition-all duration-500 hover:-translate-y-1"
            href="https://www.facebook.com/share/198k9i2WgB/"
          >
            <FacebookLogoIcon className="size-6" />
          </a>
          <a
            target="_blank"
            className="transition-all duration-500 hover:-translate-y-1"
            href="https://x.com/Erik_Niceboy"
          >
            <XLogoIcon className="size-6" />
          </a>
          <a
            target="_blank"
            className="transition-all duration-500 hover:-translate-y-1"
            href="https://github.com/alvinnes"
          >
            <GithubLogoIcon className="size-6" />
          </a>
        </div>
        <p className="text-sm">2026 Alvinnes. All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default page;
