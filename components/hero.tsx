"use client";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  return (
    <section
      className={`relative w-full h-screen flex items-center bg-gray-900 ${poppins.className}`}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/hero.png"
        alt="Luxury Limousine"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-12">
        {/* HEADING */}
        <h1 className="text-white text-4xl md:text-4xl font-semibold leading-tight mb-4 border-b border-yellow-500 pb-4">
          Luxurious Limousine and Black Car
          <br /> Service Everyone Can Afford
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-200 text-base md:text-base mb-8">
          Spot Limo brings Black Sedans, Stretch limousines, Luxurious SUVs,
          and party bus rentals for every special occasion. You can experience
          the exquisite drive for all occasions and events at the most
          affordable hourly rates.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-4">
          {/* BOOK NOW */}
          <Link
            href="/book"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full flex items-center justify-center transition-transform hover:scale-105"
          >
            BOOK NOW →
          </Link>

          {/* OR */}
          <span className="text-white font-medium">Or</span>

          {/* TEXT/CALL */}
          <Link
            href="tel:6302901761"
            className="border border-yellow-400 text-yellow-400 font-medium px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300"
          >
            Text/Call : 630-290-1761
          </Link>
        </div>
      </div>
    </section>
  );
}
