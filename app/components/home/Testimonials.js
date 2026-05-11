"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const reviews = [
  {
    id: 1,
    name: "Anh Vũ",
    avatar: "https://i.pravatar.cc/100?img=12",
    message:
      "Tôi giờ phút này cảm nhận quyết định đúng vì đã chọn bên em.",
    chatImage: "https://www.lanha.vn/wp-content/uploads/2024/10/anh-vu-fb.png.webp",
  },
  {
    id: 2,
    name: "Chị Hue Luong",
    avatar: "https://i.pravatar.cc/100?img=32",
    message:
      "Chị gửi lời cảm ơn đến đội ngũ Nội thất La Nhà, cả nhà chị đều hài lòng với tư vấn thiết kế cũng như đội ngũ thi công.",
    chatImage: "https://www.lanha.vn/wp-content/uploads/2024/10/anh-vu-fb.png.webp",
  },
  {
    id: 3,
    name: "Chị Rena Ngọc Thùy",
    avatar: "https://i.pravatar.cc/100?img=45",
    message:
      "Cảm ơn đội ngũ đã đem đến sản phẩm hoàn mỹ về chất lượng, giá cả, mẫu mã và thái độ làm việc rất tích cực.",
    chatImage: "https://www.lanha.vn/wp-content/uploads/2024/10/anh-vu-fb.png.webp",
  },
  {
    id: 4,
    name: "Anh Minh",
    avatar: "https://i.pravatar.cc/100?img=5",
    message:
      "Dịch vụ rất chuyên nghiệp, mình sẽ giới thiệu thêm bạn bè.",
    chatImage: "https://www.lanha.vn/wp-content/uploads/2024/10/anh-vu-fb.png.webp",
  },
  {
    id: 5,
    name: "Anh Minh",
    avatar: "https://i.pravatar.cc/100?img=5",
    message:
      "Dịch vụ rất chuyên nghiệp, mình sẽ giới thiệu thêm bạn bè.",
    chatImage: "https://www.lanha.vn/wp-content/uploads/2024/10/anh-vu-fb.png.webp",
  },

  {
    id: 6,
    name: "Anh Minh",
    avatar: "https://i.pravatar.cc/100?img=5",
    message:
      "Dịch vụ rất chuyên nghiệp, mình sẽ giới thiệu thêm bạn bè.",
    chatImage: "https://www.lanha.vn/wp-content/uploads/2024/10/anh-vu-fb.png.webp",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  // 👉 Auto slide
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-6 md:py-12 bg-gray-100">
      <div className="container mx-auto px-3 md:p-0">
        <h2 className="text-xl md:text-4xl font-bold border-l-5 border-pm pl-4 mb-5 md:mb-8">
          Khách hàng đánh giá về <span className="text-primary">Mộc Viên</span>
        </h2>
        <div className="px-4 relative">

          {/* Slider */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="
        flex-[0_0_100%] 
        md:flex-[0_0_calc((100%-48px)/3)]
        md:pl-4
      "
                >
                  <div className="bg-white rounded-lg shadow p-6 relative h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-semibold">{review.name}</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {review.message}
                    </p>

                    <img
                      src={review.chatImage}
                      alt="chat"
                      className="w-full h-[120px] object-cover rounded-lg mb-4"
                    />

                    <div className="absolute bottom-4 right-6 text-primary text-5xl font-bold">
                      ”
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 👉 Nút điều hướng */}
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full w-10 h-10"
          >
            ←
          </button>

          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full w-10 h-10"
          >
            →
          </button>
        </div>
      </div>

    </section>
  );
}