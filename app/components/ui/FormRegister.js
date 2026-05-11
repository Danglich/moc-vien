"use client";

import { useState } from "react";

export default function FormRegister() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // TODO: gọi API ở đây
  };

  return (
    <div className="max-w-5xl mx-auto bg-primary border border-orange-200 rounded-lg p-5 md:p-6 md:text-[17px] mt-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Yêu cầu tư vấn
      </h2>

      <p className="text-sm md:text-base text-gray-600 mb-6 ">
        *Vui lòng để lại thông tin, nhân viên tư vấn sẽ liên hệ lại quý khách trong thời gian sớm nhất
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Họ tên */}
        <div>
          <label className="block mb-2 text-sm md:text-base font-medium">
            Họ và tên
          </label>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Bạn quan tâm */}
        <div>
          <label className="block mb-2 text-sm md:text-base font-medium">
            Bạn quan tâm
          </label>
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">Nhu cầu của bạn</option>
            <option value="buy">Mua sản phẩm</option>
            <option value="consult">Tư vấn</option>
            <option value="support">Hỗ trợ</option>
          </select>
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block mb-2 text-sm md:text-base font-medium">
            Số điện thoại
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Điện thoại"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Nội dung */}
        <div>
          <label className="block mb-2 text-sm md:text-base font-medium">
            Nội dung
          </label>
          <textarea
            name="message"
            placeholder="Mô tả yêu cầu của bạn"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Button */}
        <div className="md:col-span-2 flex justify-center mt-4 zoom-animation">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Yêu cầu tư vấn
          </button>
        </div>
      </form>
    </div>
  );
}