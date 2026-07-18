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
    <section className="contact-section">
          <div className="container contact-box">
            <div className="contact-content">
              <span>Tư vấn thiết kế miễn phí</span>

              <h2>Bạn đang chuẩn bị xây nhà?</h2>

              <p>
                Liên hệ Mộc Viên để được tư vấn công năng, phong cách kiến trúc
                và dự toán chi phí phù hợp.
              </p>
            </div>

            <a href="tel:0354136968" className="contact-button">
              Hotline: 035.413.6968
            </a>
          </div>
        </section>
  );
}