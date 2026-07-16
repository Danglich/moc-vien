"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const posts = [
  {
    id: 1,
    title:
      "Vì sao xây nhà hay phát sinh chi phí? 7 nguyên nhân gia chủ cần biết",
    image:
      "https://mocviengroup.vn/wp-content/uploads/2026/03/thiet-ke-nha-2-tang-mat-bao-lau-1024x576.jpg",
  },
  {
    id: 2,
    title:
      "7 Cách thiết kế nhà đẹp mà vẫn tiết kiệm 30% chi phí",
    image:
      "https://mocviengroup.vn/wp-content/uploads/2026/03/thiet-ke-nha-2-tang-mat-bao-lau-1024x576.jpg",
  },
  {
    id: 3,
    title:
      "Thiết kế điện nước mất bao lâu? Quy trình và những hạng mục cần biết",
    image:
      "https://mocviengroup.vn/wp-content/uploads/2026/03/thiet-ke-nha-2-tang-mat-bao-lau-1024x576.jpg",
  },
  {
    id: 4,
    title:
      "Kinh nghiệm chọn vật liệu xây dựng tiết kiệm và bền đẹp",
    image:
      "https://mocviengroup.vn/wp-content/uploads/2026/03/thiet-ke-nha-2-tang-mat-bao-lau-1024x576.jpg",
  },
  {
    id: 5,
    title:
      "Top 5 mẫu nhà hiện đại được ưa chuộng nhất 2025",
    image:
      "https://mocviengroup.vn/wp-content/uploads/2026/03/thiet-ke-nha-2-tang-mat-bao-lau-1024x576.jpg",
  },
];

export default function BlogSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // 👉 setup dots
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <div className="flex items-center gap-3 mb-6 justify-between">
          <h2 className="text-4xl font-bold border-l-4 border-pm pl-5">
            Kinh nghiệm làm nhà
          </h2>
          <a className="flex items-center justify-center py-3 font-medium hover:text-primary cursor-pointer">
            Xem thêm
          </a>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex-[0_0_100%] md:flex-[0_0_calc((100%-48px)/3)] ml-4 shadow"
              >
                <div className="cursor-pointer group">
                  
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[240px] object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 👉 DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === selectedIndex
                  ? "bg-primary"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}