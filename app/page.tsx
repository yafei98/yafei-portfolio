"use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 font-sans">
      <div
        role="tablist"
        className={`w-full h-12 flex justify-end right-0 tabs tabs-border fixed z-50
       ${scrolled ? "bg-base-100 shadow" : "bg-transparent"}
       `}
      >
        <a role="tab" className="tab">
          Home
        </a>
        <a role="tab" className="tab tab-active">
          Skills
        </a>
        <a role="tab" className="tab">
          About
        </a>
        <a role="tab" className="tab">
          Contact
        </a>
      </div>
      <section className="h-screen flex items-center justify-center bg-white/60 backdrop-blur-md shadow-lg">
        <div
          // initial={{ opacity: 0, y: 40 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Yafei</h1>
          <p className="text-xl mb-6">
            A Front-End Developer passionate about building elegant web
            experiences.
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-900 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind",
            "Git",
            "Figma",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 py-4 px-2 rounded-xl shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white/50 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-12">About</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p>Frontend Developer at Example Inc. (2020 - 2023)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <ul className="list-disc pl-5">
              <li>
                Budget Buddy - A personal finance tracker using React + Ant
                Design.
              </li>
              <li>
                Weather App - Real-time weather display using OpenWeather API.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>MSc in Software Engineering, TUS (2024 - 2025)</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="text-center space-y-4">
          <p>Email: yafei.dev@gmail.com</p>
          <p>GitHub: github.com/yafei</p>
          <p>LinkedIn: linkedin.com/in/yafei</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 Yafei. All rights reserved.
      </footer>
    </main>
  );
}
