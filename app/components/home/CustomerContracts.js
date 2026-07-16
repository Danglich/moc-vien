"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const contractImages = [
  {
    id: 1,
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/1784194685035_8626806511859904338_8626806511859904338_5eff1534cf2066a2a398e7ad972e91b9.jpg",
    title: "Ký hợp đồng thiết kế nhà mái Nhật",
    location: "Khách hàng tại Nghệ An",
  },
  {
    id: 2,
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/IMG_20260608_113021.jpg",
    title: "Ký hợp đồng thiết kế nhà phố",
    location: "Khách hàng tại TP. Vinh",
  },
  {
    id: 3,
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/IMG_20260624_111919.jpg",
    title: "Ký hợp đồng thiết kế nhà vườn",
    location: "Khách hàng tại Hà Tĩnh",
  },
  {
    id: 4,
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/VID_20260605_103553.jpg",
    title: "Ký hợp đồng thiết kế biệt thự",
    location: "Khách hàng tại Diễn Châu",
  },
  {
    id: 5,
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/VID_20260512_094902.jpg",
    title: "Ký hợp đồng thiết kế và thi công",
    location: "Khách hàng tại Nam Đàn",
  },
  {
    id: 6,
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/VID_20260605_103553.jpg",
    title: "Ký hợp đồng thiết kế nhà 2 tầng",
    location: "Khách hàng tại Cửa Lò",
  },
];

export default function CustomerContracts() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [selectedImage]);

  return (
    <>
      <section className="overflow-hidden bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Tiêu đề */}
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                Niềm tin của khách hàng
              </span>

              <h2 className="border-l-4 border-yellow-500 pl-5 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Cảm ơn khách hàng đã tin tưởng Mộc Viên
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-gray-600">
                Mỗi hợp đồng được ký kết là một sự tin tưởng quý giá và cũng là
                trách nhiệm để Mộc Viên mang đến những công trình chỉn chu,
                thẩm mỹ và phù hợp với từng gia đình.
              </p>
            </div>

            <Link
              href="/bao-gia-thiet-ke"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-gray-800 transition hover:text-yellow-600"
            >
              Xem bảng giá thiết kế

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* Mobile slider */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden">
            {contractImages.map((item) => (
              <div
                key={item.id}
                className="min-w-[84%] snap-start"
              >
                <ContractCard
                  item={item}
                  onOpen={() => setSelectedImage(item)}
                />
              </div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-3">
            {contractImages.map((item) => (
              <ContractCard
                key={item.id}
                item={item}
                onOpen={() => setSelectedImage(item)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-gray-950 px-6 py-8 text-center md:flex md:items-center md:justify-between md:px-10 md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Bạn đang chuẩn bị xây nhà?
              </h3>

              <p className="mt-2 leading-7 text-gray-400">
                Liên hệ Mộc Viên để được tư vấn công năng, kiến trúc và chi phí
                thiết kế phù hợp.
              </p>
            </div>

            <a
              href="tel:0354136968"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-500 px-6 font-bold text-gray-950 transition hover:-translate-y-1 hover:bg-yellow-600 md:mt-0"
            >
              Hotline: 035.413.6968
            </a>
          </div>
        </div>
      </section>

      {/* Modal xem ảnh */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-white p-2 shadow-2xl md:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-gray-950 shadow-lg transition hover:bg-yellow-600"
              aria-label="Đóng ảnh"
            >
              ×
            </button>

            <div className="relative h-[75vh] w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <div className="px-3 py-4">
              <h3 className="font-bold text-gray-900">
                {selectedImage.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ContractCard({ item, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`Xem ảnh ${item.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 84vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-bold text-gray-950 shadow">
            Đã ký hợp đồng
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="line-clamp-2 font-bold leading-6 text-white">
              {item.title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              {item.location}
            </div>
          </div>

          <span className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-yellow-500 text-gray-950 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
              <path d="M11 8v6" />
              <path d="M8 11h6" />
            </svg>
          </span>
        </div>
      </button>
    </article>
  );
}