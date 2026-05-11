// components/home/CategoryTabs.tsx
"use client";

import { useState } from "react";

const categories = [
  "Nhà 1 tầng",
  "Nhà 2 tầng",
  "Biệt thự",
  "Nhà mái Nhật",
  "Nhà hiện đại",
];

export default function CategoryTabs() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="py-10 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                active === item
                  ? "bg-red-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}