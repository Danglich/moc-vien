"use client";

import Link from "next/link";

export const menuData = [
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
      { label: "Thiết kế nhà vườn", url: "/thiet-ke-nha-vuon" },
      { label: "Mẫu nhà mái Nhật", url: "/mau-nha-mai-nhat" },
      { label: "Nhà cấp 4", url: "/nha-cap-4" },
      { label: "Mẫu nhà ống đẹp", url: "/nha-ong-dep" },
      { label: "Thiết kế nhà hiện đại", url: "/thiet-ke-hien-dai" },
      { label: "Thiết kế biệt thự", url: "/biet-thu" },
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

export default function Menu() {
  return (
    <nav className="sticky top-0 z-[9999] w-full overflow-visible bg-gray-100">
      <ul className="mx-auto flex items-center justify-center overflow-visible">
        {menuData.map((item) => (
          <li key={item.url} className="group relative">
            <Link
              href={item.url}
              className="block px-7 py-3 text-lg font-semibold transition hover:bg-primary hover:text-white"
            >
              {item.label}
            </Link>

            {item.children && (
              <ul className="invisible absolute left-0 top-full z-[10000] min-w-[260px] translate-y-2 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {item.children.map((child) => (
                  <li key={child.url}>
                    <Link
                      href={child.url}
                      className="block whitespace-nowrap px-5 py-3 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}