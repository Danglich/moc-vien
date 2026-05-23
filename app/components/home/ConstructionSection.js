"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

export default function ConstructionSection() {
  const [projects, setProjects] = useState([]);
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
          thumbnail,
          types,
          created_at
        `)
        .contains("types", ["Công trình đang thi công"])
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) {
        console.log(error);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto py-5 md:py-10 px-4">
      <div>
        <h2 className="uppercase text-[17px] md:text-3xl text-center font-bold mb-5 md:mb-8">
          Công trình thực tế đang thi công
        </h2>
      </div>

      {/* ===== DESKTOP GRID ===== */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {loading ? (
          [...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              {/* Image Skeleton */}
              <div className="w-full h-[230px] bg-gray-200 rounded-xl" />

              {/* Text Skeleton */}
              <div className="mt-4 h-5 bg-gray-200 rounded w-[90%]" />
              <div className="mt-2 h-5 bg-gray-200 rounded w-[70%]" />
            </div>
          ))
        ) : projects.length > 0 ? (
          projects.map((item) => (
            <Link
              href={`/du-an/${item.slug}`}
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-[230px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[15px] font-medium text-gray-800 leading-snug group-hover:text-yellow-600 transition">
                {item.name}
              </h3>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">Chưa có dữ liệu</p>
        )}
      </div>

      {/* ===== MOBILE SLIDER ===== */}
      <div className="md:hidden">
        {loading ? (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="min-w-[75%] flex-shrink-0 animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="w-full h-[220px] bg-gray-200 rounded-xl" />

                {/* Text Skeleton */}
                <div className="mt-3 h-4 bg-gray-200 rounded w-[90%]" />
                <div className="mt-2 h-4 bg-gray-200 rounded w-[70%]" />
              </div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {projects.map((item) => (
              <Link
                href={`/du-an/${item.slug}`}
                key={item.id}
                className="min-w-[75%] snap-start flex-shrink-0 w-full"
              >
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl">
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

      {/* Button */}
      {!loading && projects.length > 0 && (
        <div className="flex justify-center mt-5">
          <Link
            href={`/du-an?type=${encodeURIComponent(
              "Công trình đang thi công"
            )}`}
          >
            <button className="border md:text-black px-6 py-2 md:py-3 rounded-[30px] font-medium hover:bg-black hover:text-white cursor-pointer">
              Xem thêm
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}