"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const contractImages = [
  {
    id: 1,
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/1784194685035_8626806511859904338_8626806511859904338_5eff1534cf2066a2a398e7ad972e91b9.jpg",
    title: "Ký hợp đồng thiết kế nhà mái Nhật",
    location: "Khách hàng tại Nghệ An",
  },
  {
    id: 2,
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/IMG_20260608_113021.jpg",
    title: "Ký hợp đồng thiết kế nhà phố",
    location: "Khách hàng tại TP. Vinh",
  },
  {
    id: 3,
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/IMG_20260624_111919.jpg",
    title: "Ký hợp đồng thiết kế nhà vườn",
    location: "Khách hàng tại Hà Tĩnh",
  },
  {
    id: 4,
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/VID_20260605_103553.jpg",
    title: "Ký hợp đồng thiết kế biệt thự",
    location: "Khách hàng tại Diễn Châu",
  },
  {
    id: 5,
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/VID_20260512_094902.jpg",
    title: "Ký hợp đồng thiết kế và thi công",
    location: "Khách hàng tại Nam Đàn",
  },
  {
    id: 6,
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/hop-dong/VID_20260605_103553.jpg",
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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <>
      <section className="overflow-hidden bg-white py-10 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Tiêu đề */}
          <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="max-w-3xl">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-yellow-500 sm:mb-3 sm:text-sm">
                Niềm tin của khách hàng
              </span>

              <h2 className="border-l-4 border-yellow-500 pl-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:pl-5 md:text-4xl">
                Cảm ơn khách hàng đã tin tưởng Mộc Viên
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:mt-5">
                Mỗi hợp đồng được ký kết là một sự tin tưởng quý giá và cũng là
                trách nhiệm để Mộc Viên mang đến những công trình chỉn chu,
                thẩm mỹ và phù hợp với từng gia đình.
              </p>
            </div>

            <Link
              href="/bao-gia-thiet-ke"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-800 transition hover:text-yellow-600 sm:text-base"
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
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 scrollbar-none md:hidden">
            {contractImages.map((item) => (
              <div
                key={item.id}
                className="min-w-[88%] snap-center sm:min-w-[72%]"
              >
                <ContractCard
                  item={item}
                  onOpen={() => setSelectedImage(item)}
                />
              </div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden grid-cols-2 gap-5 md:grid lg:grid-cols-3 lg:gap-6">
            {contractImages.map((item) => (
              <ContractCard
                key={item.id}
                item={item}
                onOpen={() => setSelectedImage(item)}
              />
            ))}
          </div>

          {/* Gợi ý vuốt trên mobile */}
          <div className="mt-1 flex items-center justify-center gap-2 text-xs text-gray-400 md:hidden">
            <span className="h-1.5 w-8 rounded-full bg-yellow-500" />
            Vuốt ngang để xem thêm
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-gray-950 px-5 py-7 text-center sm:px-6 sm:py-8 md:mt-10 md:flex md:items-center md:justify-between md:gap-8 md:px-10 md:text-left">
            <div>
              <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                Bạn đang chuẩn bị xây nhà?
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base">
                Liên hệ Mộc Viên để được tư vấn công năng, kiến trúc và chi phí
                thiết kế phù hợp.
              </p>
            </div>

            <a
              href="tel:0354136968"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-yellow-500 px-5 text-sm font-bold text-gray-950 transition hover:-translate-y-1 hover:bg-yellow-600 sm:w-auto sm:text-base md:mt-0 md:shrink-0"
            >
              Hotline: 035.413.6968
            </a>
          </div>
        </div>
      </section>

      {/* Modal xem ảnh */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-2 backdrop-blur-sm sm:p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white p-2 shadow-2xl sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-gray-950 shadow-lg transition hover:bg-yellow-600 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
              aria-label="Đóng ảnh"
            >
              ×
            </button>

            <div className="relative h-[68vh] w-full overflow-hidden rounded-lg bg-gray-100 sm:h-[75vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="px-2 py-3 sm:px-3 sm:py-4">
              <h3 className="pr-10 text-sm font-bold leading-6 text-gray-900 sm:text-base">
                {selectedImage.title}
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
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
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 md:hover:-translate-y-2 md:hover:shadow-xl">
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
            sizes="(max-width: 640px) 88vw, (max-width: 768px) 72vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 md:group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          <div className="absolute left-3 top-3 rounded-full bg-yellow-500 px-2.5 py-1 text-[11px] font-bold text-gray-950 shadow sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
            Đã ký hợp đồng
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 pr-14 sm:p-5 sm:pr-16">
            <h3 className="line-clamp-2 text-sm font-bold leading-6 text-white sm:text-base">
              {item.title}
            </h3>

            <div className="mt-1.5 flex items-center gap-2 text-xs text-gray-200 sm:mt-2 sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-yellow-400"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <span className="line-clamp-1">{item.location}</span>
            </div>
          </div>

          <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-gray-950 shadow-lg sm:h-10 sm:w-10 md:translate-y-3 md:opacity-0 md:transition md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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