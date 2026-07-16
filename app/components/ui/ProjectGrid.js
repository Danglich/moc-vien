"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectGrid({
  title = "Dự án",
  projects = [],
  pageSize = 9,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / pageSize);

  const start = (currentPage - 1) * pageSize;
  const currentProjects = projects.slice(start, start + pageSize);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase">
        {title}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProjects.map((item) => (
          <Link
            key={item.id}
            className="group cursor-pointer block"
            href={`/du-an/${item.slug}`}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>

            {/* Title */}
            <p className="mt-3 text-sm font-medium text-center leading-snug">
              {item.title}
            </p>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 border text-sm cursor-pointer ${
                currentPage === page
                  ? "bg-yellow-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}