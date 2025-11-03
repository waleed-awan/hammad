"use client";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useState } from "react";

type Vehicle = {
  id: number;
  name: string;
  img: string;
  seats: number;
  bags: number;
};

export default function VehicleSelector() {
  const vehicles: Vehicle[] = [
    { id: 1, name: "SUV", img: "/car.png", seats: 7, bags: 6 },
    { id: 2, name: "Executive Van", img: "/car.png", seats: 15, bags: 14 },
    { id: 3, name: "Stretch Limo", img: "/car.png", seats: 10, bags: 8 },
    { id: 4, name: "Luxury Sedan", img: "/car.png", seats: 3, bags: 3 },
    { id: 5, name: "Mini Bus", img: "/car.png", seats: 20, bags: 15 },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(vehicles[0]);
  const [selectedCars, setSelectedCars] = useState<string | null>(null);
  const [carType, setCarType] = useState<string | null>(null);
  const [mode, setMode] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);

  return (
    <section className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#001a1d]/70 to-[#002f31]/90 backdrop-blur-sm text-white">
      <div className="relative w-full max-w-5xl mx-auto px-6 py-10 rounded-3xl border border-[#D1FF00]/40 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(209,255,0,0.1)] -mt-32 md:-mt-40 ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-16 text-center">
          Please choose Vehicle and Date/Time
        </h2>

        <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center mx-auto mb-16">
          <div className="absolute inset-0 rounded-full animate-[pulse_4s_ease-in-out_infinite] "></div>

          <div className="relative w-48 h-48 md:w-60 md:h-60 bg-gradient-to-b from-[#001a1d]/70 to-[#002f31]/90 backdrop-blur-sm rounded-full shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-center transition-all duration-500 border border-[#D1FF00]/30 hover:shadow-[0_0_60px_#D1FF00]/20">
            <img
              src={selectedVehicle.img}
              alt={selectedVehicle.name}
              className="w-32 h-16 object-contain mb-2 drop-shadow-[0_0_15px_rgba(209,255,0,0.3)]"
            />
            <p className="text-lg font-semibold text-[#D1FF00]">
              {selectedVehicle.name}
            </p>
            <div className="flex items-center justify-center gap-4 mt-1 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <span>👤</span> {selectedVehicle.seats}
              </div>
              <div className="flex items-center gap-1">
                <span>💼</span> {selectedVehicle.bags}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center animate-[spin_30s_linear_infinite]">
            {vehicles.map((v, index) => {
              const angle = (index / vehicles.length) * 2 * Math.PI;
              const x = Math.cos(angle) * 150;
              const y = Math.sin(angle) * 150;
              const isActive = selectedVehicle.id === v.id;

              return (
                <div
                  key={v.id}
                  onClick={() => setSelectedVehicle(v)}
                  className={`absolute w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-white/90 opacity-70 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "ring-4 ring-[#D1FF00] scale-110 shadow-[0_0_25px_#D1FF00]/40"
                      : "hover:ring-2 hover:ring-[#D1FF00]/50 hover:scale-105"
                  }`}
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(-${
                      (index / vehicles.length) * 360
                    }deg)`,
                  }}
                >
                  <img
                    src={v.img}
                    alt={v.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="relative border border-[#D1FF00]/30 rounded-2xl max-w-3xl w-full mx-auto p-8 shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/bg-form.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#001a1d]/80 to-[#002f31]/90 backdrop-blur-md"></div>

          <div className="relative z-10">
            {/* Car Count */}
            <div className="mb-6">
              <h2 className="font-semibold mb-3">How many cars?</h2>
              <div className="flex gap-3">
                {["1", "2", "3+"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedCars(opt)}
                    className={`flex-1 py-2 rounded-md border transition-all ${
                      selectedCars === opt
                        ? "bg-[#D1FF00] text-black border-[#D1FF00]"
                        : "border-gray-600 hover:border-[#D1FF00]/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-3">Car type</h2>
              <div className="flex gap-3 flex-wrap">
                {["Sedan", "SUV", "Other"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setCarType(type)}
                    className={`flex-1 min-w-[100px] py-2 rounded-md border transition-all ${
                      carType === type
                        ? "bg-[#D1FF00] text-black border-[#D1FF00]"
                        : "border-gray-600 hover:border-[#D1FF00]/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm mb-1 block">Pickup State (USA)</label>
                <div className="flex items-center border border-gray-600 rounded-md px-3">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="bg-transparent w-full py-2 focus:outline-none">
                    <option value="">Select pickup state</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>Florida</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm mb-1 block">Drop-off City (KSA)</label>
                <div className="flex items-center border border-gray-600 rounded-md px-3">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="bg-transparent w-full py-2 focus:outline-none">
                    <option value="Riyadh">Riyadh</option>
                    <option value="Jeddah">Jeddah</option>
                    <option value="Dammam">Dammam</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-3">Mode</h2>
              <div className="flex gap-3 flex-wrap">
                {["Sea", "Air", "Not Sure"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 min-w-[100px] py-2 rounded-md border transition-all ${
                      mode === m
                        ? "bg-[#D1FF00] text-black border-[#D1FF00]"
                        : "border-gray-600 hover:border-[#D1FF00]/40"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-3">Timeline</h2>
              <div className="flex gap-3 flex-wrap">
                {["This month", "Next month", "Not Sure"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`flex-1 min-w-[120px] py-2 rounded-md border transition-all ${
                      timeline === t
                        ? "bg-[#D1FF00] text-black border-[#D1FF00]"
                        : "border-gray-600 hover:border-[#D1FF00]/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm mb-1 block">Full Name *</label>
                <div className="flex items-center border border-gray-600 rounded-md px-3">
                  <User className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-transparent w-full py-2 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm mb-1 block">Email *</label>
                <div className="flex items-center border border-gray-600 rounded-md px-3">
                  <Mail className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent w-full py-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm mb-1 block">WhatsApp</label>
              <div className="flex items-center border border-gray-600 rounded-md px-3">
                <Phone className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="+1 234 567 8900"
                  className="bg-transparent w-full py-2 focus:outline-none"
                />
              </div>
            </div>

            <button className="w-full md:w-auto bg-[#D1FF00] text-black font-semibold py-2 px-8 rounded-md hover:bg-[#C2F000] transition-all flex items-center justify-center gap-2">
              Submit <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
