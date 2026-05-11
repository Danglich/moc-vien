"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import Image from "next/image";

const menuData = [
    { title: "BÁO GIÁ THIẾT KẾ NHÀ" },
    { title: "THIẾT KẾ NHÀ" },
    {
        title: "MẪU NHÀ ĐẸP",
        children: ["Nhà cấp 4", "Nhà phố", "Biệt thự"],
    },
    { title: "CÔNG TRÌNH THỰC TẾ CỦA KHÁCH HÀNG" },
    { title: "ĐANG THI CÔNG" },
    {
        title: "NỘI THẤT",
        children: ["Phòng khách", "Phòng ngủ", "Nhà bếp"],
    },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="flex items-center justify-between">
            <Image
                src="/images/moc-vien-logo.png"
                alt="banner"
                width={100}
                height={80}
                className=""
            />
            <div>
                {/* Button mở menu */}
                <button
                    onClick={() => setOpen(true)}
                    className="p-2 text-black"
                >
                    <Menu size={28} />
                </button>

                {/* Overlay */}
                {open && (
                    <div
                        className="fixed inset-0 bg-black/80 z-40"
                        onClick={() => setOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-[80%] bg-yellow-500 z-50 transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4">
                        <div className="flex-1 flex items-center bg-white rounded-full overflow-hidden border border-pm">
                            <input
                                type="text"
                                placeholder="Tìm kiếm ..."
                                className="w-full rounded-full px-4 py-2 pr-10 outline-none bg-white"
                            />
                            <button className="bg-yellow-500 px-4 py-3 flex items-center justify-center cursor-pointer">
                                <Search className="text-white w-5 h-5" />
                            </button>
                        </div>

                        <button onClick={() => setOpen(false)} className="ml-3">
                            <X />
                        </button>
                    </div>

                    {/* Menu */}
                    <div className="px-4 text-white">
                        {menuData.map((item, index) => (
                            <div key={index} className="border-b border-yellow-300">
                                <div
                                    className="flex justify-between items-center py-4 cursor-pointer font-semibold"
                                    onClick={() =>
                                        item.children
                                            ? toggleDropdown(index)
                                            : console.log(item.title)
                                    }
                                >
                                    <span>{item.title}</span>
                                    {item.children && (
                                        <ChevronDown
                                            className={`transition-transform ${openDropdown === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </div>

                                {/* Dropdown */}
                                {item.children && openDropdown === index && (
                                    <div className="pb-3 pl-3 text-sm">
                                        {item.children.map((child, i) => (
                                            <div key={i} className="py-1 opacity-90">
                                                {child}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Nút đóng */}
                        <div className="mt-6">
                            <button
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 bg-white text-yellow-600 px-4 py-2 rounded"
                            >
                                <span>✖</span> ĐÓNG DANH MỤC
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}