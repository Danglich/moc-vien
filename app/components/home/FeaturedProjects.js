"use client";
import { useState } from "react";

export const houseData = {
  "Thiết kế nhà vườn": [
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
  ],
  "Mẫu nhà mái Thái": [],
  "Mẫu nhà mái Nhật": [],
  "Thiết kế nhà hiện đại": [],
  "Nhà cấp 4": [],
};

export default function HouseTabs() {
  const tabs = Object.keys(houseData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="container mx-auto py-6 md:py-10 px-4">
      <h2 className="uppercase text-xl md:text-3xl text-center font-bold mb-8">
        Các mẫu nhà hot 2026 <span className="text-primary">Mộc Viên</span> đã thực hiện
      </h2>

      {/* Tabs */}
      <div className="flex md:flex-wrap gap-4 md:gap-6 mb-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-5 py-3 text-[15px] md:text-[17px] font-semibold transition
              ${activeTab === tab
                ? "bg-black text-yellow-400"
                : "text-gray-700 hover:text-yellow-500"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ===== MOBILE SLIDER ===== */}
      <div className="md:hidden">
        {houseData[activeTab].length > 0 ? (
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {houseData[activeTab].map((item) => (
              <div
                key={item.id}
                className="min-w-[75%] snap-start flex-shrink-0 w-full"
              >
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg">
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

      {/* ===== DESKTOP GRID ===== */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {houseData[activeTab].length > 0 ? (
          houseData[activeTab].map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg relative">
                <div className="absolute w-10 h-10 bg-yellow-300 z-10 top-4 left-4 flex items-center justify-center rounded-xs">
                  <img src="/images/moc-vien-logo.png" />
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-[15px] font-medium text-gray-800 leading-snug group-hover:text-yellow-600 transition">
                {item.title}
              </h3>
            </div>
          ))
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