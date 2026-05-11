"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const bannerData = [
  {
    image: "https://maxhomegroup.vn/wp-content/uploads/2025/04/ung-dung-cong-nghe-moi.png",
  },
  {
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/04/banner-kien-truc-maxhome-2026.png",
  },
  {
    image: "https://maxhomegroup.vn/wp-content/uploads/2024/04/anh-banner-giam-sat-thanh-tra-1920x680.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[calc(100vh-260px)] overflow-hidden">
      
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerData.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[calc(100vh-260px)] object-cover"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-3xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-lg">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-yellow-500" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}