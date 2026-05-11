"use client";
import { useState } from "react";

export const houseData = [
  {
    id: 1,
    title: "Mẫu nhà phố 2 tầng 1 tum hiện đại sang trọng tại Đà Nẵng | MH46494",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/06/7-2-705x1200.png",
  },
  {
    id: 2,
    title: "Bản vẽ 2 tầng mái Nhật đơn giản, đầy đủ công năng | MH46186",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/06/7-2-705x1200.png",
  },
  {
    id: 3,
    title: "Mẫu nhà phố 2 tầng hiện đại, sang trọng tại Phú Thọ | MH46359",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/06/7-2-705x1200.png",
  },
  {
    id: 4,
    title: "Siêu phẩm nhà mái Nhật 2 tầng Tân Cổ Điển tại Hải Phòng | MH46364",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/06/7-2-705x1200.png",
  },
  {
    id: 5,
    title: "Mẫu nhà cấp 4 mái nhật phong cách tân cổ điển | MH46124",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/06/7-2-705x1200.png",
  },
  {
    id: 6,
    title: "Siêu phẩm mẫu nhà mái thái tân cổ sang trọng 2026 | MH46423",
    image: "https://mocviengroup.vn/wp-content/uploads/2025/06/7-2-705x1200.png",
  },
];

export default function ConstructionSection() {

  return (
    <div className="container mx-auto py-5 md:py-10 px-4">
      <div>
        <h2 className="uppercase text-[17px] md:text-3xl text-center font-bold mb-5 md:mb-8">Công trình thực tế đang thi công</h2>
      </div>

      {/* Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {houseData.length > 0 ? (
          houseData.map((item) => (
            <div key={item.id} className="group cursor-pointer">

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[230px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[15px] font-medium text-gray-800 leading-snug group-hover:text-yellow-600 transition">
                {item.title}
              </h3>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Chưa có dữ liệu</p>
        )}
      </div>
      {/* ===== MOBILE SLIDER ===== */}
      <div className="md:hidden">
        {houseData.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {houseData.map((item) => (
              <div
                key={item.id}
                className="min-w-[75%] snap-start flex-shrink-0 w-full"
              >
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>

                  <h3 className="mt-3 text-[14px] font-medium text-gray-800 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Chưa có dữ liệu</p>
        )}
      </div>

      <div className="flex justify-center mt-5">
        <button className="border md:text-black px-6 py-2 md:py-3 rounded-[30px] font-medium hover:bg-black hover:text-white cursor-pointer">
          Xem thêm
        </button>
      </div>
    </div>
  );
}