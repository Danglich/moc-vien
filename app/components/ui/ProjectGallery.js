"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectGallery({
  images = [],
  title,
  autoPlay = true,
  interval = 3000,
}) {
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const total = images.length;

  // 👉 Next
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % total);
  };

  // 👉 Prev
  const prevSlide = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  // 👉 Auto slide
  useEffect(() => {
    if (!autoPlay || isHover || total <= 1) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isHover, total, interval]);

  if (!images.length) return null;

  return (
    <div
      className="mb-6"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* ===== IMAGE ===== */}
      <div className="relative mb-3">
        <img
          src={images[active]}
          alt={title}
          width={800}
          height={500}
          className="rounded w-full h-auto object-cover"
        />

        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded hover:bg-black/70 cursor-pointer text-xl"
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded hover:bg-black/70 cursor-pointer text-xl"
        >
          ›
        </button>

        {/* Indicator */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {active + 1} / {total}
        </div>
      </div>

      {/* ===== THUMBNAIL ===== */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-pointer border-2 rounded ${
              i === active
                ? "border-yellow-500"
                : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt=""
              width={100}
              height={80}
              className="rounded object-cover hover:opacity-80 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}