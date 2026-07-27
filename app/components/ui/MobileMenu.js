"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const menuData = [
  {
    label: "BÁO GIÁ THIẾT KẾ NHÀ",
    url: "/bao-gia-thiet-ke",
  },
  {
    label: "THIẾT KẾ NHÀ",
    url: "/thiet-ke-nha",
  },
  {
    label: "MẪU NHÀ ĐẸP",
    url: "/mau-nha-dep",
    children: [
      {
        label: "Thiết kế nhà vườn",
        url: "/thiet-ke-nha-vuon",
      },
      {
        label: "Mẫu nhà mái Nhật",
        url: "/mau-nha-mai-nhat",
      },
      {
        label: "Nhà cấp 4",
        url: "/mau-nha-cap-4",
      },
      {
        label: "Mẫu nhà phố",
        url: "/nha-pho",
      },
      {
        label: "Mẫu nhà hiện đại",
        url: "/mau-nha-hien-dai",
      },
      {
        label: "Thiết kế biệt thự",
        url: "/mau-biet-thu",
      },
      {
        label: "Mẫu villa",
        url: "/mau-villa",
      },
    ],
  },
  {
    label: "CÔNG TRÌNH THỰC TẾ CỦA KHÁCH HÀNG",
    url: "/cong-trinh-thuc-te",
  },
  {
    label: "ĐANG THI CÔNG",
    url: "/cong-trinh-dang-thi-cong",
  },
  {
    label: "NỘI THẤT",
    url: "/noi-that",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const toggleDropdown = (index) => {
    setOpenDropdown((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const keyword = searchValue.trim();

    if (!keyword) {
      return;
    }

    closeMenu();

    window.location.href = `/tim-kiem?q=${encodeURIComponent(keyword)}`;
  };

  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" onClick={closeMenu}>
        <Image
          src="/images/moc-vien-logo.png"
          alt="Logo Mộc Viên Group"
          width={100}
          height={80}
          priority
          className="h-auto w-[100px] object-contain"
        />
      </Link>

      <div>
        {/* Nút mở menu */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="p-2 text-black"
          aria-label="Mở danh mục"
          aria-expanded={open}
        >
          <Menu size={28} />
        </button>

        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
            open
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }`}
        />

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-50 h-dvh w-[85%] max-w-[380px] transform overflow-y-auto bg-yellow-500 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-yellow-400 bg-yellow-500 p-4">
            <form
              onSubmit={handleSearch}
              className="flex flex-1 items-center overflow-hidden rounded-full border border-yellow-600 bg-white"
            >
              <input
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Tìm kiếm..."
                className="w-full bg-white px-4 py-2.5 text-sm text-gray-800 outline-none"
              />

              <button
                type="submit"
                className="flex items-center justify-center bg-yellow-600 px-4 py-3 text-white transition hover:bg-yellow-700"
                aria-label="Tìm kiếm"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white hover:text-yellow-600"
              aria-label="Đóng danh mục"
            >
              <X size={24} />
            </button>
          </div>

          {/* Danh sách menu */}
          <nav className="px-4 pb-8 text-white">
            {menuData.map((item, index) => (
              <div
                key={item.url}
                className="border-b border-yellow-300/70"
              >
                <div className="flex items-center">
                  {/* Link danh mục chính */}
                  <Link
                    href={item.url}
                    onClick={closeMenu}
                    className="flex-1 py-4 pr-3 text-sm font-semibold leading-6 transition hover:text-yellow-100"
                  >
                    {item.label}
                  </Link>

                  {/* Nút mở danh mục con */}
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      className="flex h-12 w-12 shrink-0 items-center justify-center"
                      aria-label={`Mở danh mục con ${item.label}`}
                      aria-expanded={openDropdown === index}
                    >
                      <ChevronDown
                        size={22}
                        className={`transition-transform duration-300 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      openDropdown === index
                        ? "grid-rows-[1fr] pb-3"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="overflow-hidden rounded-xl bg-yellow-600/60">
                        {item.children.map((child) => (
                          <Link
                            key={child.url}
                            href={child.url}
                            onClick={closeMenu}
                            className="block border-b border-yellow-400/40 px-5 py-3 text-sm text-white transition last:border-b-0 hover:bg-white hover:text-yellow-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Nút đóng */}
            <div className="mt-6">
              <button
                type="button"
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-semibold text-yellow-600 shadow-sm transition hover:bg-yellow-50"
              >
                <X size={18} />
                ĐÓNG DANH MỤC
              </button>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
}