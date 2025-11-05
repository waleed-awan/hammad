"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
  buttonText?: string
  hasButton?: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Develop",
    description: "Comprehensive\nArchitecture",
    image: "/1.png",
    buttonText: "Explore",
    hasButton: true,
  },
  {
    id: 2,
    title: "Work With",
    description: "Energetic Team\nBuilder",
    image: "/2.png",
    buttonText: "Learn More",
    hasButton: true,
  },
  {
    id: 3,
    title: "Develop",
    description: "Comprehensive\nSpotswood, NJ",
    image: "/3.png",
    buttonText: "Explore Project",
    hasButton: true,
  },
  {
    id: 4,
    title: "Maked-User",
    description: "Development\nBuilder",
    image: "/4.png",
    buttonText: "View",
    hasButton: true,
  },
  {
    id: 5,
    title: "Premier Office",
    description: "Tower\nBuilder",
    image: "/5.png",
    buttonText: "Discover",
    hasButton: true,
  },
  {
    id: 6,
    title: "Greenviews",
    description: "Apartments\nBuilder",
    image: "/6.png",
    buttonText: "Explore",
    hasButton: true,
  },
]

export default function ExpandableGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="w-full bg-gradient-to-b from-teal-950 to-teal-900 text-white">
      {/* Heading Section */}
      <div className="text-center pt-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          How It Works
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the process and discover how we bring innovation, collaboration, 
          and creativity together to deliver remarkable results.
        </p>
      </div>

      {/* Mobile layout (<768px) */}
      <div className="md:hidden w-full min-h-screen px-3 pb-8 sm:px-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer rounded-2xl overflow-hidden h-64 sm:h-72 transition-all duration-300"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 text-white">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.id === 3 && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs font-medium">Builder</span>
                      <span className="text-xs font-medium ml-4">Spotswood, NJ</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <h2 className="font-bold text-2xl sm:text-3xl leading-tight tracking-tight">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed whitespace-pre-line mt-1">
                      {item.description}
                    </p>
                  </div>

                  {item.hasButton && (
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 sm:px-5 py-1.5 sm:py-2 flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors duration-300 w-fit shadow-lg hover:shadow-xl">
                      {item.buttonText}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet layout (768px - 1024px) */}
      <div className="hidden md:flex lg:hidden w-full min-h-screen items-center justify-center px-4 py-8">
        <div className="flex gap-4 h-80 w-full max-w-5xl">
          {galleryItems.map((item) => {
            const isHovered = hoveredId === item.id
            const isOther = hoveredId !== null && hoveredId !== item.id

            return (
              <div
                key={item.id}
                className="relative group cursor-pointer flex-1 rounded-2xl overflow-hidden transition-all duration-500 ease-out"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  flexGrow: isHovered ? 2 : isOther ? 0.7 : 1,
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.id === 3 && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-xs font-medium">Builder</span>
                        <span className="text-xs font-medium ml-2">Spotswood, NJ</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <h2
                        className={`font-bold tracking-tight transition-all duration-500 ${
                          isHovered ? "text-2xl leading-tight" : "text-lg"
                        }`}
                      >
                        {item.title}
                      </h2>
                      <p
                        className={`transition-all duration-500 whitespace-pre-line font-medium ${
                          isHovered ? "text-xs opacity-100 leading-relaxed" : "text-xs opacity-75"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {isHovered && item.hasButton && (
                      <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-1.5 flex items-center gap-2 text-xs font-semibold transition-colors duration-300 w-fit shadow-lg hover:shadow-xl">
                        {item.buttonText}
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop layout (1024px+) */}
      <div className="hidden lg:flex w-full items-center justify-center px-6 py-20">
        <div className="flex gap-4 h-96 w-full max-w-7xl">
          {galleryItems.map((item) => {
            const isHovered = hoveredId === item.id
            const isOther = hoveredId !== null && hoveredId !== item.id

            return (
              <div
                key={item.id}
                className="relative group cursor-pointer flex-1 rounded-2xl overflow-hidden transition-all duration-500 ease-out"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  flexGrow: isHovered ? 2.5 : isOther ? 0.6 : 1,
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.id === 3 && (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <span className="text-xs font-medium">Builder</span>
                        <span className="text-xs font-medium ml-8">Spotswood, NJ</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h2
                        className={`font-bold tracking-tight transition-all duration-500 ${
                          isHovered ? "text-5xl leading-tight" : "text-2xl"
                        }`}
                      >
                        {item.title}
                      </h2>
                      <p
                        className={`transition-all duration-500 whitespace-pre-line font-medium ${
                          isHovered ? "text-lg opacity-100 leading-relaxed" : "text-sm opacity-75"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {isHovered && item.hasButton && (
                      <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2.5 flex items-center gap-2 text-sm font-semibold transition-colors duration-300 whitespace-nowrap shadow-lg hover:shadow-xl">
                          {item.buttonText}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
