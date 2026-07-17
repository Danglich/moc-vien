import Image from "next/image";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "Cam kết Mộc Viên | Thiết kế & thi công nhà ở",
  description:
    "Mộc Viên cam kết mang đến giải pháp thiết kế và thi công nhà ở chất lượng, minh bạch, tối ưu và phù hợp với từng khách hàng.",

  openGraph: {
    title: "Cam kết Mộc Viên",
    description:
      "Chất lượng – Minh bạch – Hiệu quả là những giá trị cốt lõi Mộc Viên cam kết với khách hàng.",
    url: "/cam-ket",
    images: ["/images/cam-ket.jpg"],
  },

  alternates: {
    canonical: "/cam-ket",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://yourdomain.com/cam-ket",
  name: "Cam kết Mộc Viên",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: "https://yourdomain.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cam kết Mộc Viên",
      item: "https://yourdomain.com/cam-ket",
    },
  ],
};

export default function CamKetPage() {
  return (
    <div className="container md:text-lg mx-auto px-4 py-8">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-black">
          Trang chủ
        </Link>{" "}
        / <span className="text-black">Cam kết Mộc Viên</span>
      </nav>

      {/* Title */}
      <div className="border-b mb-6">
        <h1 className="text-3xl font-bold pb-2 inline-block border-b border-b-[3px] border-pm">
            Mộc Viên cam kết
        </h1>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        Tại <strong>Mộc Viên</strong>, chúng tôi đặt chất lượng thiết kế và sự hài
        lòng của khách hàng làm trọng tâm. Với định hướng tập trung hoàn toàn vào
        dịch vụ thiết kế chuyên nghiệp, Mộc Viên cam kết mang đến những sản phẩm
        chỉn chu, chính xác và phù hợp nhất cho từng gia đình.
      </p>

      {/* Banner */}
      <div className="mb-8">
        <img
          src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/cam_ket.png"
          alt="Cam kết Mộc Viên"
          width={1000}
          height={700}
          className="rounded-lg w-full lg:w-[80%] mx-auto h-auto"
        />
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <div>
          <h2 className="font-semibold text-lg">
            ▶ Đội ngũ chuyên môn giàu kinh nghiệm
          </h2>
          <p>
            Hơn 200 kiến trúc sư và kỹ sư trên toàn quốc trực tiếp tham gia thực
            hiện và kiểm soát từng hồ sơ. Mỗi bản thiết kế được xây dựng dựa trên
            chuyên môn vững vàng, hiểu biết thực tế và quy chuẩn kỹ thuật.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            ▶ Tư vấn phong thủy chuyên sâu
          </h2>
          <p>
            Phương án thiết kế được cân nhắc kỹ lưỡng theo phong thủy nhà ở, dựa
            trên tuổi, hướng đất và nhu cầu riêng của từng khách hàng nhằm đảm
            bảo sự hài hòa và thuận lợi lâu dài.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            ▶ Dự toán minh bạch từng hạng mục
          </h2>
          <p>
            Chúng tôi cung cấp bảng dự toán rõ ràng, chi tiết giúp khách hàng chủ
            động nắm bắt mức đầu tư dự kiến trước khi thi công. Mọi con số đều
            được tính toán trung thực, tránh phát sinh không cần thiết.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            ▶ Hoàn thiện hồ sơ trong 45 ngày
          </h2>
          <p>
            Mộc Viên quản lý tiến độ nghiêm túc và thông báo minh bạch ở từng
            giai đoạn. Hồ sơ được hoàn thiện đúng hạn và đạt tiêu chuẩn chất
            lượng theo cam kết.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            ▶ Hỗ trợ giám sát trong quá trình thi công
          </h2>
          <p>
            Dù không trực tiếp thi công, Mộc Viên vẫn hỗ trợ kiểm tra và đối
            chiếu bản vẽ tại công trình nhằm đảm bảo thi công đúng thiết kế.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            ▶ Bàn giao hồ sơ đầy đủ và tận nơi
          </h2>
          <p>
            Hồ sơ kiến trúc, kết cấu, điện nước, phối cảnh và dự toán được đóng
            gói chuyên nghiệp và bàn giao tận tay khách hàng.
          </p>
        </div>
      </div>

      {/* Highlight */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg italic text-gray-700">
        Mộc Viên cam kết mang đến giải pháp thiết kế chính xác, thẩm mỹ và hiệu
        quả để giúp khách hàng yên tâm triển khai xây dựng và sở hữu không gian
        sống phù hợp nhất.
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <a
          href="tel:0354136968"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-yellow-500 px-5 text-sm font-bold text-gray-950 transition hover:-translate-y-1 hover:bg-yellow-600 sm:w-auto sm:text-base md:mt-0 md:shrink-0"
        >
          Hotline: 035.413.6968
        </a>
      </div>
    </div>
  );
}