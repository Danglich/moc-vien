"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

// Chỉ hiển thị các type này
const DISPLAY_TYPES = [
  "Thiết kế nhà vườn",
  "Mẫu nhà mái Thái",
  "Mẫu nhà mái Nhật",
  "Thiết kế nhà hiện đại",
  "Nhà cấp 4",
];

export default function HouseTabs() {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState(DISPLAY_TYPES[0]);
  const [loading, setLoading] = useState(true);

  // fetch projects
  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);

      const { data, error } = await supabase
        .from("projects")
        .select(`
          id,
          name,
          slug,
          types,
          thumbnail,
          created_at
        `)
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    }

    fetchProjects();
  }, []);

  // lọc project theo type + giới hạn 6 item
  const filteredProjects = useMemo(() => {
    return projects
      .filter((item) =>
        (item.types || []).includes(activeTab)
      )
      .slice(0, 6);
  }, [projects, activeTab]);

  if (loading) {
    return (
      <div className="container mx-auto py-6 md:py-10 px-4">
        <p className="text-gray-500">Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 md:py-10 px-4">
      <h2 className="uppercase text-xl md:text-3xl text-center font-bold mb-8">
        Các mẫu nhà hot 2026{" "}
        <span className="text-primary">Mộc Viên</span> đã thực hiện
      </h2>

      {/* Tabs */}
      <div className="flex md:flex-wrap gap-4 md:gap-6 mb-8 overflow-x-auto no-scrollbar">
        {DISPLAY_TYPES.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-5 py-3 text-[15px] md:text-[17px] font-semibold transition
              ${
                activeTab === tab
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
        {filteredProjects.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {filteredProjects.map((item) => (
              <Link
                href={`/du-an/${item.slug}`}
                key={item.id}
                className="min-w-[75%] snap-start flex-shrink-0 w-full"
              >
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>

                  <h3 className="mt-3 text-[14px] font-medium text-gray-800 leading-snug">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Chưa có dữ liệu</p>
        )}
      </div>

      {/* ===== DESKTOP GRID ===== */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) => (
            <Link
              href={`/du-an/${item.slug}`}
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg relative">
                <div className="absolute w-10 h-10 bg-yellow-300 z-10 top-4 left-4 flex items-center justify-center rounded-xs">
                  <img
                    src="/images/moc-vien-logo.png"
                    alt="logo"
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-[15px] font-medium text-gray-800 leading-snug group-hover:text-yellow-600 transition">
                {item.name}
              </h3>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">Chưa có dữ liệu</p>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-5">
        <Link href={`/du-an?type=${encodeURIComponent(activeTab)}`}>
          <button className="border md:text-black px-6 py-2 md:py-3 rounded-[30px] font-medium hover:bg-black hover:text-white cursor-pointer transition">
            Xem thêm
          </button>
        </Link>
      </div>
    </div>
  );
}