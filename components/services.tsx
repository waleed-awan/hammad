import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ServicesSection() {
  const services = [
    {
      title: "Airport Transportation",
      img: "/1.png",
      desc: "Enjoy seamless airport transfers with our punctual chauffeur-driven limousines ensuring a stress-free journey.",
    },
    {
      title: "Reasonable Chauffeur Services",
      img: "/2.png",
      desc: "We have chauffeurs with a clean driving record as we aim to provide 24/7 limousine service all over Illinois without inconvenience.",
    },
    {
      title: "Hourly Executive Transportation",
      img: "/3.png",
      desc: "Book hourly luxury rides for business meetings or special events, driven by our professional chauffeurs.",
    },
    {
      title: "Wedding Limo Services",
      img: "/4.png",
      desc: "Make your special day memorable with our elegant wedding limousine services for couples and guests.",
    },
    {
      title: "Interstate Service",
      img: "/5.png",
      desc: "Travel across states comfortably with our long-distance limousine and executive chauffeur services.",
    },
    {
      title: "Corporate Limo Transportation",
      img: "/6.png",
      desc: "Reliable and professional transportation solutions for corporate events, meetings, and executive transfers.",
    },
  ];

  return (
    <section className={`relative w-full bg-gray-900 ${poppins.className}`}>
      {/* GRID SECTION */}
      <div className="grid grid-cols-3 grid-rows-2 gap-0 min-h-screen">
        {services.map((service, i) => (
          <div key={i} className="relative group overflow-hidden cursor-pointer h-full">
            {/* IMAGE */}
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/70"></div>

            {/* TITLE + DESC */}
            <div className="absolute bottom-16 left-6 right-6 transition-all duration-500">
              <div className="bg-[#003d42]/70 text-white px-4 py-3 text-lg flex items-center justify-between">
                <span className="font-semibold">{service.title}</span>
                <span className="w-1 h-8 bg-yellow-400 ml-4 flex-shrink-0"></span>
              </div>
              <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3 rounded">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CENTER BOX (NARROWER WIDTH) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[380px] md:w-[520px] lg:w-[620px] px-10 py-5 text-center shadow-2xl rounded-sm z-10">
        <h2 className="text-3xl font-semibold text-[#003d42] mb-2">Our Services</h2>
        <p className="text-[#4a9ba6] text-sm">Affordable Transportation Services We Offer</p>
      </div>

      
    </section>
  );
}
