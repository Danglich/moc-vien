"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const contractImages = [
  {
    id: 1,
    title: "Hợp đồng thiết kế nhà mái Nhật",
    customer: "Khách hàng tại Nghệ An",
    image: "/images/hop-dong/hop-dong-01.jpg",
  },
  {
    id: 2,
    title: "Hợp đồng thiết kế nhà phố",
    customer: "Khách hàng tại Hà Tĩnh",
    image: "/images/hop-dong/hop-dong-02.jpg",
  },
  {
    id: 3,
    title: "Hợp đồng thiết kế nhà vườn",
    customer: "Khách hàng tại TP. Vinh",
    image: "/images/hop-dong/hop-dong-03.jpg",
  },
  {
    id: 4,
    title: "Hợp đồng thiết kế biệt thự",
    customer: "Khách hàng tại Diễn Châu",
    image: "/images/hop-dong/hop-dong-04.jpg",
  },
  {
    id: 5,
    title: "Hợp đồng thiết kế nhà 2 tầng",
    customer: "Khách hàng tại Cửa Lò",
    image: "/images/hop-dong/hop-dong-05.jpg",
  },
  {
    id: 6,
    title: "Hợp đồng thiết kế và giám sát",
    customer: "Khách hàng tại Nam Đàn",
    image: "/images/hop-dong/hop-dong-06.jpg",
  },
];

export default function DesignPricePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <main className="price-page">
        <section className="hero-section">
          <div className="container hero-container">
            <span className="sub-title">Mộc Viên Group</span>

            <h1>Bảng giá thiết kế nhà ở</h1>

            <p>
              Mộc Viên cung cấp dịch vụ thiết kế kiến trúc, kết cấu, điện nước,
              nội thất và phong thủy phù hợp với nhu cầu của từng gia đình.
            </p>

            <div className="hero-actions">
              <a href="tel:0354136968" className="primary-button">
                Gọi tư vấn: 035.413.6968
              </a>

              <a href="#bang-gia" className="secondary-button">
                Xem bảng giá
              </a>
            </div>
          </div>
        </section>

        <section id="bang-gia" className="price-section">
          <div className="container">
            <div className="section-heading">
              <span>Bảng giá dịch vụ</span>
              <h2>Chi phí thiết kế tại Mộc Viên</h2>
              <p>
                Chi phí thực tế có thể thay đổi tùy theo diện tích, phong cách
                kiến trúc và yêu cầu chi tiết của công trình.
              </p>
            </div>

            <div
              className="price-image-wrapper"
              onClick={() =>
                setSelectedImage({
                  title: "Bảng giá thiết kế Mộc Viên",
                  image: "/images/bang-gia-thiet-ke.png",
                })
              }
            >
              <Image
                src="/images/bang-gia-thiet-ke.png"
                alt="Bảng giá thiết kế kiến trúc Mộc Viên Group"
                width={973}
                height={797}
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="price-image"
              />

              <div className="zoom-note">Bấm vào ảnh để xem rõ hơn</div>
            </div>

            <div className="price-note">
              <div className="note-icon">!</div>

              <div>
                <h3>Lưu ý về bảng giá</h3>
                <p>
                  Báo giá trên mang tính tham khảo. Mộc Viên sẽ khảo sát, tiếp
                  nhận nhu cầu và gửi báo giá chi tiết trước khi ký hợp đồng.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contracts-section">
          <div className="container">
            <div className="section-heading">
              <span>Khách hàng tin tưởng</span>
              <h2>Một số hợp đồng đã ký kết</h2>
              <p>
                Hình ảnh các hợp đồng thiết kế và thi công đã được Mộc Viên ký
                kết với khách hàng.
              </p>
            </div>

            <div className="contract-grid">
              {contractImages.map((item) => (
                <article className="contract-card" key={item.id}>
                  <button
                    type="button"
                    className="contract-image"
                    onClick={() => setSelectedImage(item)}
                    aria-label={`Xem ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <span className="view-image">Xem ảnh</span>
                  </button>

                  <div className="contract-content">
                    <h3>{item.title}</h3>
                    <p>{item.customer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-box">
            <div>
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
      </main>

      {selectedImage && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Đóng ảnh"
            >
              ×
            </button>

            <div className="modal-image">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="95vw"
                priority
              />
            </div>

            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
        }

        .price-page {
          background: #ffffff;
          color: #1f2937;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0;
          text-align: center;
          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.18),
              transparent 35%
            ),
            linear-gradient(135deg, #fffaf0 0%, #ffffff 55%, #fdf2f2 100%);
        }

        .hero-section::before,
        .hero-section::after {
          position: absolute;
          border-radius: 999px;
          content: "";
        }

        .hero-section::before {
          top: -120px;
          right: -100px;
          width: 320px;
          height: 320px;
          background: rgba(185, 28, 28, 0.07);
        }

        .hero-section::after {
          bottom: -140px;
          left: -100px;
          width: 300px;
          height: 300px;
          background: rgba(245, 158, 11, 0.1);
        }

        .hero-container {
          position: relative;
          z-index: 1;
          max-width: 850px;
        }

        .sub-title,
        .section-heading span,
        .contact-box span {
          display: block;
          margin-bottom: 12px;
          color: #b91c1c;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .hero-section h1 {
          margin: 0;
          color: #7f1d1d;
          font-size: clamp(36px, 6vw, 62px);
          line-height: 1.12;
        }

        .hero-section p {
          max-width: 720px;
          margin: 24px auto 0;
          color: #4b5563;
          font-size: 18px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }

        .primary-button,
        .secondary-button,
        .contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 25px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .primary-button {
          color: #ffffff;
          background: #b91c1c;
          box-shadow: 0 12px 30px rgba(185, 28, 28, 0.22);
        }

        .secondary-button {
          border: 1px solid #b91c1c;
          color: #b91c1c;
          background: #ffffff;
        }

        .primary-button:hover,
        .secondary-button:hover,
        .contact-button:hover {
          transform: translateY(-3px);
        }

        .price-section,
        .contracts-section {
          padding: 80px 0;
        }

        .contracts-section {
          background: #fafafa;
        }

        .section-heading {
          max-width: 730px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 0;
          color: #111827;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.25;
        }

        .section-heading p {
          margin: 16px 0 0;
          color: #6b7280;
          font-size: 16px;
          line-height: 1.75;
        }

        .price-image-wrapper {
          position: relative;
          overflow: hidden;
          padding: 12px;
          border: 1px solid #ead7b8;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 20px 60px rgba(79, 47, 20, 0.12);
          cursor: zoom-in;
        }

        .price-image-wrapper :global(.price-image) {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 9px;
        }

        .zoom-note {
          position: absolute;
          right: 25px;
          bottom: 25px;
          padding: 10px 15px;
          border-radius: 999px;
          color: #ffffff;
          background: rgba(17, 24, 39, 0.78);
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(8px);
        }

        .price-note {
          display: flex;
          gap: 16px;
          margin-top: 25px;
          padding: 22px;
          border-left: 4px solid #f59e0b;
          border-radius: 10px;
          background: #fffbeb;
        }

        .note-icon {
          display: flex;
          flex: 0 0 34px;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: #ffffff;
          background: #f59e0b;
          font-weight: 800;
        }

        .price-note h3 {
          margin: 0 0 6px;
          color: #92400e;
          font-size: 17px;
        }

        .price-note p {
          margin: 0;
          color: #78350f;
          line-height: 1.7;
        }

        .contract-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .contract-card {
          overflow: hidden;
          border: 1px solid #eeeeee;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 12px 35px rgba(17, 24, 39, 0.07);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contract-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(17, 24, 39, 0.12);
        }

        .contract-image {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          padding: 0;
          border: 0;
          background: #f3f4f6;
          cursor: pointer;
        }

        .contract-image :global(img) {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .contract-card:hover .contract-image :global(img) {
          transform: scale(1.05);
        }

        .view-image {
          position: absolute;
          right: 15px;
          bottom: 15px;
          z-index: 1;
          padding: 9px 14px;
          border-radius: 999px;
          color: #ffffff;
          background: rgba(185, 28, 28, 0.9);
          font-size: 13px;
          font-weight: 700;
        }

        .contract-content {
          padding: 20px;
        }

        .contract-content h3 {
          margin: 0 0 8px;
          color: #111827;
          font-size: 18px;
          line-height: 1.45;
        }

        .contract-content p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
        }

        .contact-section {
          padding: 30px 0 80px;
          background: #fafafa;
        }

        .contact-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 45px 50px;
          border-radius: 18px;
          color: #ffffff;
          background:
            linear-gradient(
              120deg,
              rgba(127, 29, 29, 0.98),
              rgba(185, 28, 28, 0.94)
            ),
            #b91c1c;
          box-shadow: 0 20px 50px rgba(127, 29, 29, 0.2);
        }

        .contact-box span {
          color: #fde68a;
        }

        .contact-box h2 {
          margin: 0;
          font-size: clamp(26px, 4vw, 38px);
        }

        .contact-box p {
          max-width: 680px;
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
        }

        .contact-button {
          flex-shrink: 0;
          color: #7f1d1d;
          background: #ffffff;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(5px);
        }

        .modal-content {
          position: relative;
          width: min(1200px, 96vw);
          padding: 15px;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .modal-image {
          position: relative;
          width: 100%;
          height: min(78vh, 850px);
          overflow: hidden;
          border-radius: 9px;
          background: #eeeeee;
        }

        .modal-image :global(img) {
          object-fit: contain;
        }

        .modal-content h3 {
          margin: 14px 45px 3px 5px;
          color: #111827;
          font-size: 17px;
        }

        .modal-close {
          position: absolute;
          top: -16px;
          right: -16px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          color: #ffffff;
          background: #b91c1c;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .contract-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-box {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .hero-section {
            padding: 65px 0;
          }

          .hero-section p {
            font-size: 16px;
          }

          .hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .price-section,
          .contracts-section {
            padding: 60px 0;
          }

          .section-heading {
            margin-bottom: 30px;
          }

          .price-image-wrapper {
            padding: 6px;
            border-radius: 10px;
          }

          .zoom-note {
            display: none;
          }

          .price-note {
            padding: 17px;
          }

          .contract-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .contact-section {
            padding-bottom: 60px;
          }

          .contact-box {
            padding: 30px 22px;
          }

          .contact-button {
            width: 100%;
          }

          .modal-overlay {
            padding: 10px;
          }

          .modal-content {
            width: 100%;
            padding: 8px;
          }

          .modal-image {
            height: 75vh;
          }

          .modal-close {
            top: 5px;
            right: 5px;
            width: 38px;
            height: 38px;
            border: 0;
          }
        }
      `}</style>
    </>
  );
}