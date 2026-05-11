import { Mail, MapPin, Phone, Facebook, Youtube, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#002855] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Cột 1: Thông tin tập đoàn */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold border-l-4 border-yellow-500 pl-3">
            MAXHOME GROUP
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Tập đoàn thiết kế và thi công trọn gói hàng đầu Việt Nam. Chúng tôi mang đến giải pháp tối ưu cho không gian sống của bạn với quy trình chuyên nghiệp và minh bạch.
          </p>
          <div className="flex space-x-4 pt-2">
            <Facebook className="hover:text-yellow-500 cursor-pointer transition" />
            <Youtube className="hover:text-yellow-500 cursor-pointer transition" />
            <Globe className="hover:text-yellow-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Cột 2: Dịch vụ chính */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold border-l-4 border-yellow-500 pl-3">DỊCH VỤ</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-yellow-500 transition"><Link href="#">Thiết kế kiến trúc</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Thi công trọn gói</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Thiết kế nội thất</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Sản xuất đồ gỗ</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Vật liệu xây dựng</Link></li>
          </ul>
        </div>

        {/* Cột 3: Liên kết nhanh */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold border-l-4 border-yellow-500 pl-3">HỖ TRỢ</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-yellow-500 transition"><Link href="#">Quy trình làm việc</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Báo giá xây dựng</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Chính sách bảo hành</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Tuyển dụng kiến trúc sư</Link></li>
            <li className="hover:text-yellow-500 transition"><Link href="#">Tin tức sự kiện</Link></li>
          </ul>
        </div>

        {/* Cột 4: Liên hệ trụ sở */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold border-l-4 border-yellow-500 pl-3">LIÊN HỆ</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start">
              <MapPin size={20} className="mr-3 text-yellow-500 flex-shrink-0" />
              <span>Tòa nhà Maxhome, 180 Cao Lỗ, Quận 8, TP.HCM</span>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-3 text-yellow-500 flex-shrink-0" />
              <span>Hotline: 1900 6282</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="mr-3 text-yellow-500 flex-shrink-0" />
              <span>Email: maxhomegroup@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Dòng bản quyền phía dưới cùng */}
      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-sm">
        <p>© 2026 Maxhome Group. All rights reserved. Designed with ❤️ by Gemini.</p>
      </div>
    </footer>
  );
}