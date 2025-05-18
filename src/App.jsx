import React, { useEffect } from "react";
import { gsap } from "gsap";
import headshot from './assets/homepage/headshot.png';

<img src={headshot} alt="My Headshot" />

// Tailwind CSS + GSAP Animation
const App = () => {
  useEffect(() => {
    // GSAP Animation for Hero Section
    gsap.from(".hero-content", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.out",
    });

    // Animation for project cards
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power4.out",
    });

    // Animation for Footer
    gsap.from("footer p", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-indigo-900 text-white p-5">
        <div className="text-3xl">YW</div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#projects" className="hover:text-indigo-300">Projects</a></li>
            <li><a href="#about" className="hover:text-indigo-300">About</a></li>
            <li><a href="#playground" className="hover:text-indigo-300">Playground</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-200 text-center py-20">
        <div className="hero-content max-w-4xl mx-auto text-xl">
          <h2 className="text-4xl font-semibold mb-4">Passionate game producer creating changes with fun.</h2>
          <p className="mb-6">@2025 Ye Wang</p>
          <div className="social-links space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-500">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:text-blue-500">Behance</a>
            <a href="#" className="text-blue-600 hover:text-blue-500">Dribbble</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-10">Selected Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="project-card bg-white shadow-md rounded-lg p-6">
            <img src="https://via.placeholder.com/300" alt="Project" className="rounded-md mb-4" />
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 mt-3 block">→</a>
          </div>
          <div className="project-card bg-white shadow-md rounded-lg p-6">
            <img src="https://via.placeholder.com/300" alt="Project" className="rounded-md mb-4" />
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 mt-3 block">→</a>
          </div>
          <div className="project-card bg-white shadow-md rounded-lg p-6">
            <img src="https://via.placeholder.com/300" alt="Project" className="rounded-md mb-4" />
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-indigo-600 mt-3 block">→</a>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800">View All Projects</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-6 text-center">
        <p className="text-lg">Design and Developed with Love by Ye Wang</p>
        <p>&copy; 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
