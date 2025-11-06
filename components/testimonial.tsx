// components/Testimonials.tsx
"use client";
import React, { useState, useRef } from "react";
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

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleNext = () => {
    setTransition(true);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setTransition(true);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // --- Touch swipe logic ---
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
    setTransition(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || startX.current === null) return;
    const currentX = e.touches[0].clientX;
    const distance = currentX - startX.current;
    setOffset(distance);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    setTransition(true);

    if (offset < -80) handleNext();
    else if (offset > 80) handlePrev();

    setOffset(0);
    isDragging.current = false;
    startX.current = null;
  };

  return (
    <section className="relative bg-gradient-to-b from-teal-900 to-teal-950 py-16 md:py-24 flex justify-center items-center overflow-hidden px-4">
      <div className="relative w-full max-w-6xl mx-auto bg-[#00464D]/85 rounded-2xl shadow-2xl p-6 md:p-12 backdrop-blur-lg overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden rounded-2xl opacity-40">
          <Image
            src="/testi.png"
            alt="Limo Service Background"
            fill
            className="object-cover scale-105"
          />
        </div>

        {/* Section Header */}
        <div className="text-center text-white mb-8">
          <p className="tracking-[0.3em] text-xs md:text-sm uppercase font-medium">
            TESTIMONIALS
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-[#F6CD46]">
            What Our Clients Say
          </h2>
          <div className="w-20 h-[3px] bg-[#F6CD46] mx-auto mt-2"></div>
        </div>

        {/* Swipe Container */}
        <div
          className="relative w-full overflow-hidden select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex transition-transform ${
              transition ? "duration-500 ease-[cubic-bezier(0.55,0.03,0.26,0.97)]" : ""
            }`}
            style={{
              transform: `translateX(calc(-${index * 100}% + ${offset}px))`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-full flex flex-col justify-center items-center px-4 text-center"
              >
                <p className="text-base md:text-xl font-light leading-relaxed italic text-white">
                  {item.text}
                </p>
                <span className="text-3xl md:text-4xl mt-4 block text-[#F6CD46]">“”</span>
                <div className="mt-2">
                  <p className="font-semibold text-lg md:text-xl text-white">{item.name}</p>
                  <p className="text-xs md:text-sm opacity-80 text-gray-200">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`cursor-pointer w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-[#F6CD46] transition-all ${
                i === index ? "bg-[#F6CD46] scale-110" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
