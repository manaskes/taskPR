import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    title: "Flutter App Development",
    content:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? ",
    link: "Let's get started today!",
  },
  {
    title: "UI/UX Design",
    content: "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? ",
    link: "Let's get started today!",
  },
  {
    title: "Customization & Integration",
    content: "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? ",
    link: "Let's get started today!",
  },
  {
    title: "Testing & Quality Assurance",
    content: "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? ",
    link: "Let's get started today!",
  },
  {
    title: "Maintenance & Support",
    content: "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? ",
    link: "Let's get started today!",
  },
  {
    title: "Consulting & Training",
    content: "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? ",
    link: "Let's get started today!",
  },
  {
    title: "Migration & Upgrades",
    content: "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? ",
    link: "Let's get started today!",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (idx) => {
    setActiveIndex(idx === activeIndex ? -1 : idx);
  };

  return (
    <section className="py-20 bg-[#0d0d0d] text-white px-4 lg:px-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our Dynamic Services Suite!</h2>
        <p className="text-gray-400 text-lg mt-2">
          Embrace Innovation: Let’s Create Together!
        </p>
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          Step into innovation! Explore our range of services and let’s create something extraordinary together. Your vision, our expertise. Let’s begin!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-start">
        {/* Left: Accordion */}
        <div className="flex-1 space-y-6">
          {services.map((service, idx) => (
            <div key={idx}>
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-700 pb-2"
                onClick={() => toggle(idx)}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                {activeIndex === idx ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </div>
              {activeIndex === idx && service.content && (
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  {service.content}
                  <a href="#" className="text-cyan-400 underline ml-1">
                    {service.link}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 lg:w-1/2">
          <img
            src="/service.jpg"
            alt="services"
            className="rounded-lg w-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
