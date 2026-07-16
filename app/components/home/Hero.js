"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const bannerData = [
  {
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/banners/banner_2.png",
    title: "",
    subtitle: "",
  },
  {
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/banners/banner4.png",
    title: "",
    subtitle: "",
  },
  {
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/banners/banner1.png",
    title: "",
    subtitle: "",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrent((prev) =>
      prev === 0 ? bannerData.length - 1 : prev - 1
    );
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) =>
      prev === bannerData.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    if (bannerData.length <= 1) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      {/* Chiều cao responsive */}
      <div className="relative h-[220px] w-full sm:h-[320px] md:h-[430px] lg:h-[calc(100vh-260px)] lg:min-h-[480px] lg:max-h-[760px]">
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {bannerData.map((slide, index) => (
            <article
              key={slide.image}
              className="relative h-full w-full flex-shrink-0"
              aria-hidden={current !== index}
            >
              <img
                src={slide.image}
                alt={slide.title || `Banner Mộc Viên ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="h-full w-full object-cover"
              />

              {/* Overlay nhẹ để nội dung dễ đọc */}
              {(slide.title || slide.subtitle) && (
                <div className="absolute inset-0 bg-black/20" />
              )}

              {/* Nội dung banner */}
              {(slide.title || slide.subtitle) && (
                <div className="absolute inset-0 flex items-center justify-center px-12 text-center text-white sm:px-16 md:px-20">
                  <div className="max-w-4xl">
                    {slide.title && (
                      <h2 className="text-2xl font-bold leading-tight drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
                        {slide.title}
                      </h2>
                    )}

                    {slide.subtitle && (
                      <p className="mt-2 text-sm leading-6 drop-shadow-md sm:text-base md:mt-4 md:text-lg lg:text-xl">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Mũi tên trái */}
        {bannerData.length > 1 && (
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Xem banner trước"
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/75 text-gray-900 shadow-md backdrop-blur-sm transition hover:bg-white sm:left-4 sm:h-11 sm:w-11 md:left-6"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        {/* Mũi tên phải */}
        {bannerData.length > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Xem banner tiếp theo"
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/75 text-gray-900 shadow-md backdrop-blur-sm transition hover:bg-white sm:right-4 sm:h-11 sm:w-11 md:right-6"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        {/* Dots */}
        {bannerData.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/15 px-3 py-2 backdrop-blur-sm sm:bottom-4">
            {bannerData.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Chuyển đến banner ${index + 1}`}
                aria-current={current === index ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  current === index
                    ? "h-2.5 w-7 bg-yellow-500"
                    : "h-2.5 w-2.5 bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}