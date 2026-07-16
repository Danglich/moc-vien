"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title:
      "Mẫu nhà cấp 4 mái bằng chữ L đẹp cuốn hút, ấn tượng nhất làng | MH04617",
    price: "1,4 tỷ",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/05/sieu-pham-nha-vuon-2-tang-mai-nhat-qua-dang-cap-voi-chi-phi-hop-ly-1.jpg",
  },
  {
    id: 2,
    title:
      "Siêu phẩm nhà vườn 2 tầng mái Nhật quá đẳng cấp với chi phí hợp lý | MH04813",
    price: "1,8 tỷ",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/05/sieu-pham-nha-vuon-2-tang-mai-nhat-qua-dang-cap-voi-chi-phi-hop-ly-1.jpg",
  },
  {
    id: 3,
    title:
      "Mẫu nhà phố mái Nhật 2 tầng đẹp hiện đại, hợp xu hướng | MH02998",
    price: "1,4 tỷ",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/05/sieu-pham-nha-vuon-2-tang-mai-nhat-qua-dang-cap-voi-chi-phi-hop-ly-1.jpg",
  },
  {
    id: 4,
    title:
      "Ý tưởng thiết kế nhà ống 3 tầng 5x17m đẹp, sang, tiết kiệm chi phí | MH04732",
    price: "1,3 tỷ",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/05/sieu-pham-nha-vuon-2-tang-mai-nhat-qua-dang-cap-voi-chi-phi-hop-ly-1.jpg",
  },
  {
    id: 5,
    title:
      "Nhà mái bằng 2 tầng 1 tum hiện đại đẹp ngút ngàn tại Bắc Giang | MH02640",
    price: "1,7 tỷ",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/05/sieu-pham-nha-vuon-2-tang-mai-nhat-qua-dang-cap-voi-chi-phi-hop-ly-1.jpg",
  },
  {
    id: 6,
    title:
      "Mẫu nhà 2 tầng hiện đại đẹp độc đáo, ai cũng mê | MH03782",
    price: "1,2 tỷ",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/05/sieu-pham-nha-vuon-2-tang-mai-nhat-qua-dang-cap-voi-chi-phi-hop-ly-1.jpg",
  },
];

export default function RelatedProjects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 uppercase">
        Dự án liên quan
      </h2>
      <div className="w-20 h-1 bg-primary mb-6" />

      {/* Mobile: slider */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden pb-2">
        {projects.map((item) => (
          <div
            key={item.id}
            className="min-w-[85%] snap-start bg-white"
          >
            <Card item={item} />
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {projects.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function Card({ item }) {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Price */}
        <span className="absolute top-2 right-3 text-red-600 font-bold text-xl">
          {item.price}
        </span>
      </div>

      {/* Title */}
      <p className="mt-3 text-gray-800 text-sm leading-relaxed line-clamp-3">
        {item.title}
      </p>
    </div>
  );
}