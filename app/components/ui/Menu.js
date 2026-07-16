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
      { label: "Mẫu nhà mái Thái", url: "/mau-nha-mai-thai" },
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
    url: "/dang-thi-cong",
  },
  {
    label: "NỘI THẤT",
    url: "/noi-that",
  },
];

export default function Menu() {
  return (
    <nav className="w-full bg-gray-100 sticky top-0">
      <ul className="mx-auto flex items-center justify-center">
        {menuData.map((item, index) => (
          <li key={index} className="relative group">
            
            {/* Parent */}
            <Link
              href={item.url}
              className={`block px-7 py-3 text-lg font-semibold transition hover:bg-primary hover:text-white`}
            >
              {item.label}
            </Link>

            {/* Dropdown */}
            {item.children && (
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md min-w-[260px] z-50">
                {item.children.map((child, i) => (
                  <li key={i}>
                    <Link
                      href={child.url}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
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