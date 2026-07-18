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
    <div className="mt-8 rounded-2xl bg-yellow-500 px-5 py-7 text-center sm:px-6 sm:py-8 md:mt-10 md:flex md:items-center md:justify-between md:gap-8 md:px-10 md:text-left">
            <div>
              <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                Bạn đang chuẩn bị xây nhà?
              </h3>

              <p className="mt-2 text-sm leading-7 sm:text-base">
                Liên hệ Mộc Viên để được tư vấn công năng, kiến trúc và chi phí
                thiết kế phù hợp.
              </p>
            </div>

            <a
              href="tel:0354136968"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-red-500 px-5 text-sm font-bold transition hover:-translate-y-1 hover:bg-red-600 sm:w-auto sm:text-base md:mt-0 md:shrink-0"
            >
              Hotline: 035.413.6968
            </a>
          </div>
  );
}