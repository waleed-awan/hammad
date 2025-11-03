// components/Testimonials.tsx
"use client";
import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text:
        "SpotLimo's black car service in Chicago is the epitome of class and style. The chauffeur was friendly and the vehicle was a pristine luxury SUV. I will definitely be using SpotLimo for all my future transportation needs.",
      name: "Lopez Holland",
      date: "7/12/2023",
    },
    {
      text:
        "Absolutely outstanding service! Professional driver, spotless vehicle, and punctual pickup — truly luxury transportation.",
      name: "Sarah Mitchell",
      date: "8/22/2023",
    },
    {
      text:
        "Reliable, elegant, and comfortable. SpotLimo exceeded every expectation. Highly recommended!",
      name: "James Carter",
      date: "9/05/2023",
    },
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <section className="relative bg-gradient-to-b from-teal-900 to-teal-950 py-16 md:py-24 flex justify-center items-center overflow-hidden px-4">
      {/* Outer frame */}

      <div className="relative w-full max-w-6xl mx-auto bg-[#00464D]/85 rounded-2xl shadow-2xl p-6 md:p-12 backdrop-blur-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden rounded-2xl opacity-40">
          <Image src="/testi.png" alt="Limo Service Background" fill className="object-cover scale-105" />
        </div>

        {/* Section Header */}
        <div className="text-center text-white mb-8">
          <p className="tracking-[0.3em] text-xs md:text-sm uppercase font-medium">TESTIMONIALS</p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-[#F6CD46]">What Our Clients Say</h2>
          <div className="w-20 h-[3px] bg-[#F6CD46] mx-auto mt-2"></div>
        </div>

        {/* Slider Wrapper */}
        <div className="relative min-h-[220px] md:min-h-[250px] flex justify-center items-center text-center px-2">
          <div
            key={index}
            className="w-full max-w-3xl mx-auto flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.55,0.03,0.26,0.97)] opacity-100 translate-y-0"
          >
            <p className="text-base md:text-xl font-light leading-relaxed italic text-white">
              {current.text}
            </p>
            <span className="text-3xl md:text-4xl mt-4 block text-[#F6CD46]">“”</span>
            <div className="mt-2">
              <p className="font-semibold text-lg md:text-xl text-white">{current.name}</p>
              <p className="text-xs md:text-sm opacity-80 text-gray-200">{current.date}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`cursor-pointer w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-[#F6CD46] transition-all ${i === index ? 'bg-[#F6CD46] scale-110' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}