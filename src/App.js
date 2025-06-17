import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import HomeSection from "./components/HomeSection";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);


  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen relative">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Dark overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="lg:ml-56">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="px-6 pt-24">
          <HomeSection />

          <section className="py-16 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Column */}
            <div className="flex-shrink-0 text-left lg:w-1/4">
              <h2 className="text-4xl font-bold leading-snug">Flutter's Dawn</h2>
              <p className="text-gray-400 mt-2">History of flutter</p>
            </div>

            {/* Center Column */}
            <div className="lg:w-2/4 text-gray-300 text-md leading-relaxed">
              <p>
                Uncover the fascinating story of Flutter in <strong>‘Flutter’s Dawn: History of Flutter’</strong>.
                From humble origins to global acclaim, delve into its captivating narrative.
                Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind,
                join us on this captivating journey!{" "}
                <span className="text-blue-400 underline cursor-pointer hover:text-blue-300">Click to begin!</span>
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/4 text-center lg:text-right">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:brightness-110">
                BEGIN <span className="text-lg">↗</span>
              </button>
            </div>
          </section>

          <ServicesSection />

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
