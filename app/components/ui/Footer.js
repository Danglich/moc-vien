"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaYoutube,
    FaTiktok,
    FaFacebook,
    FaMapMarkerAlt,
} from "react-icons/fa";

const aboutLinks = [
    "Giới thiệu MAXHOME",
    "Tuyển dụng",
    "Chính sách bảo mật",
    "Liên hệ",
];

const branches = [
    {
        title: "MAXHOME MIỀN BẮC",
        items: [
            "Hội sở Hà Nội",
            "180 Vạn Phúc, Hà Đông, Hà Nội",
            "Tầng 25, Vinaconex Diamond, 459C Bạch Mai, Hà Nội",
        ],
    },
    {
        title: "MAXHOME MIỀN TRUNG",
        items: [
            "Maxhome Thanh Hóa: Số 115 QL 47, Triệu Sơn, Thanh Hóa",
            "Maxhome Đà Nẵng: 161 Phạm Văn, Sơn Trà, Đà Nẵng",
            "Maxhome Hà Tĩnh: 28 Hà Hoàng, Thạch Trung, Hà Tĩnh",
        ],
    },
    {
        title: "MAXHOME TÂY NGUYÊN",
        items: [
            "Đắk Lắk: 34QL14, Hoà Khánh, TP. Buôn Ma Thuột",
        ],
    },
];

export default function Footer() {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 50) {
                setShowSticky(true); // đã scroll
            } else {
                setShowSticky(false); // ở top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <footer className="bg-[#1f1f1f] text-white pt-12 pb-6">
            <div className="container mx-auto px-4">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* CỘT 1 */}
                    <div>
                        <h3 className="text-yellow-400 font-bold text-lg mb-4 border-b border-yellow-400 pb-2">
                            VỀ Mộc Viên
                        </h3>

                        <ul className="space-y-2 mb-6">
                            {aboutLinks.map((item, i) => (
                                <li
                                    key={i}
                                    className="hover:text-yellow-400 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Contact */}
                        <div className="space-y-3 text-sm">
                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="text-yellow-400" />
                                Hotline: 092.774.8888
                            </p>
                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="text-yellow-400" />
                                Hotline: 092.924.5555
                            </p>
                            <p className="flex items-center gap-2">
                                <FaEnvelope className="text-yellow-400" />
                                info@maxhomegroup.vn
                            </p>
                        </div>

                        {/* Social */}
                        <div className="mt-6 space-y-3">
                            <p className="flex items-center gap-2">
                                <FaYoutube className="text-red-500 text-xl" />
                                Youtube MAXHOMETV
                            </p>
                            <p className="flex items-center gap-2">
                                <FaTiktok className="text-white text-xl" />
                                TikTok nhadepmaxhome1
                            </p>
                            <p className="flex items-center gap-2">
                                <FaFacebook className="text-blue-400 text-xl" />
                                Facebook Maxhome
                            </p>
                        </div>
                    </div>

                    {/* CỘT 2 */}
                    <div>
                        <h3 className="text-yellow-400 font-bold text-lg mb-4 border-b border-yellow-400 pb-2">
                            TRỤ SỞ VÀ CHI NHÁNH
                        </h3>

                        {branches.map((branch, i) => (
                            <div key={i} className="mb-6">
                                <h4 className="text-yellow-400 font-semibold mb-2">
                                    {branch.title}
                                </h4>

                                <ul className="space-y-2 text-sm text-gray-200">
                                    {branch.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CỘT 3 */}
                    <div>
                        <h3 className="text-yellow-400 font-bold text-lg mb-4 border-b border-yellow-400 pb-2">
                            TRUNG TÂM HỖ TRỢ KHÁCH HÀNG
                        </h3>

                        <div className="space-y-4 text-sm">
                            <p>
                                <span className="text-yellow-400">Kỹ thuật:</span>{" "}
                                08281.33333 (7:30 – 22:00)
                            </p>
                            <p>
                                <span className="text-yellow-400">Khiếu nại:</span>{" "}
                                09240.99999 (7:30 – 22:00)
                            </p>
                            <p>
                                <span className="text-yellow-400">Bảo hành:</span>{" "}
                                09240.99999 (8:00 – 21:00)
                            </p>
                        </div>
                    </div>

                </div>

                {/* bottom */}
                <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-700 pt-4">
                    © 2026 Mộc Viên. All rights reserved.
                </div>
            </div>
            <div
                id="stickyContact"
                className={`fixed left-0 w-full bg-[#0d5c91] flex justify-center gap-4 py-3 transition-all duration-300 z-50 bottom-0`}
            >
                <div className="bg-yellow-400 px-4 py-2 rounded font-semibold flex items-center gap-3">
                    <span>092.774.8888</span>
                    <div className="">
                        <Image
                            src="/images/zalo-icon.png"
                            alt="banner"
                            width={32}
                            height={32}
                            className="zoom-animation"
                        />
                    </div>
                </div>

                <div className="bg-yellow-400 px-5 py-2 rounded font-semibold">
                    092.924.5555
                </div>

                <div className="bg-yellow-400 px-5 py-2 rounded font-semibold">
                    092.405.3333
                </div>
            </div>
        </footer>
    );
}