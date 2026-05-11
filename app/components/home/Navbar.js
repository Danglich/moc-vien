"use client";
import Link from 'next/link';
import { Phone, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black text-blue-900">
          MAX<span className="text-yellow-500">HOME</span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-900">TRANG CHỦ</Link>
          <Link href="#" className="hover:text-blue-900">GIỚI THIỆU</Link>
          <Link href="#" className="hover:text-blue-900">MẪU NHÀ ĐẸP</Link>
          <Link href="#" className="hover:text-blue-900">TIN TỨC</Link>
          <Link href="#" className="hover:text-blue-900">LIÊN HỆ</Link>
        </div>

        {/* Hotline & Search */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center text-blue-900 font-bold">
            <Phone size={20} className="mr-2" />
            <span>1900 6282</span>
          </div>
          <Search size={20} className="cursor-pointer text-gray-600" />
          <Menu size={24} className="md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}