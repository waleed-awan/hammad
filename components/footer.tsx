"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <footer className={`bg-gradient-to-b from-teal-900 to-teal-950 text-white relative ${poppins.className}`}>
      {/* Logo Line */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex justify-start">
        <Image
          src="/footer-logo.png"
          alt="SpotLimo Logo"
          width={70}
          height={80}
          className="w-auto h-auto"
        />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6  py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="flex flex-col">
          <p className="text-[#E4E4E4] text-[15px] leading-relaxed">
            Spot Limo introduces the top-rated limousine and car service in
            Illinois and its suburban areas. We make your transportation secure
            with professional and licensed drivers. Whether you are traveling to
            a nearby state, an airport, or a wedding hall, we try to make your
            drive memorable with reasonable rates. With an extensive network of
            affiliates and prompt response time, we prioritize customer
            satisfaction over anything else.
          </p>

          <div className="mt-7">
            <h3 className="text-[#D5B95B] text-2xl font-semibold mb-3">
              Social Links
            </h3>
            <div className="flex items-center space-x-5 text-[#D5B95B] text-2xl">
              <Link href="#" className="hover:text-white transition-colors">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaLinkedinIn />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaTwitter />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-[#D5B95B] text-2xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[16px] text-[#E4E4E4]">
            <li>
              <Link href="/" className="hover:text-[#D5B95B] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#D5B95B] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#D5B95B] transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/vehicles"
                className="hover:text-[#D5B95B] transition-colors"
              >
                Our Vehicles
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-[#D5B95B] transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#D5B95B] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-[#D5B95B] text-2xl font-semibold mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-[#E4E4E4] text-[16px]">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#D5B95B] mt-1" />
              <span>1 Mid America Plaza Oakbrook Terrace, IL 60181</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#D5B95B]" />
              <Link
                href="tel:6302901761"
                className="hover:text-[#D5B95B] transition-colors"
              >
                630-290-1761
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#D5B95B]" />
              <Link
                href="mailto:info@spotlimo.com"
                className="hover:text-[#D5B95B] transition-colors"
              >
                info@spotlimo.com
              </Link>
            </li>
          </ul>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="  py-4 px-4 text-center flex justify-between max-w-7xl mx-auto text-gray-300 text-sm border-t border-[#051313]">
        <p>
          <span className="italic text-white">Spotlimo.com</span> All Rights
          Reserved. Copyright © 2025.
        </p>
        <p className="text-xs mt-1">
          Developed By, <span className="italic text-white">mosora.ai</span>
        </p>
      </div>

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/16302901761"
        target="_blank"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </Link>
    </footer>
  );
};

export default Footer;
