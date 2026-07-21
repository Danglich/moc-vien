import Image from "next/image";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://mocviengroup.vn"),

  title: "Quy trình làm việc | Công ty ABC",
  description:
    "Quy trình làm việc chuyên nghiệp từ tư vấn, thiết kế đến thi công và bàn giao nhà ở trọn gói.",

  openGraph: {
    title: "Quy trình làm việc | Công ty ABC",
    description:
      "Quy trình rõ ràng, minh bạch giúp khách hàng an tâm khi xây dựng nhà ở.",
    url: "/quy-trinh-lam-viec",
    images: ["/images/quy-trinh.jpg"],
  },

  alternates: {
    canonical: "/quy-trinh-lam-viec",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://mocviengroup.vn/quy-trinh-lam-viec",
  name: "Quy trình làm việc",
  url: "https://mocviengroup.vn/quy-trinh-lam-viec",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: "https://mocviengroup.vn",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Quy trình làm việc",
      item: "https://mocviengroup.vn/quy-trinh-lam-viec",
    },
  ],
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 md:text-lg">
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
        / <span className="text-black">Quy trình làm việc</span>
      </nav>

      {/* Title */}
      <div className="border-b mb-6">
        <h1 className="text-3xl font-bold pb-2 inline-block border-b border-b-[3px] border-pm">
            Quy trình làm việc
        </h1>
      </div>

      {/* Intro */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
        <p>
          <strong>Mộc Viên</strong> là đơn vị thiết kế nhà ở chuyên nghiệp hàng đầu
          tại Việt Nam, quy tụ đội ngũ kiến trúc sư giàu kinh nghiệm, tư duy
          thẩm mỹ hiện đại và phong cách làm việc sáng tạo.
        </p>

        <p>
          Chúng tôi luôn chú trọng xây dựng những phương án thiết kế tối ưu,
          phù hợp với nhu cầu thực tế của từng gia đình, đồng thời đảm bảo hài
          hòa giữa thẩm mỹ, công năng sử dụng và yếu tố phong thủy.
        </p>

        <p>
          Trong suốt quá trình phát triển, chúng tôi không ngừng cập nhật xu
          hướng kiến trúc mới và ứng dụng công nghệ hiện đại vào thiết kế.
        </p>
      </div>

      {/* Image */}
      <div className="mb-8">
        <img
          src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/quy_trinh.png"
          alt="Quy trình làm việc"
          width={1200}
          height={700}
          className="rounded-lg w-full lg:w-[80%] mx-auto h-auto"
        />
      </div>

      {/* Steps */}
      <div className="space-y-8 text-gray-800 leading-relaxed">
        {/* Step 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Bước 1: Tư vấn khách hàng
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tiếp nhận thông tin, yêu cầu của gia chủ</li>
            <li>Tư vấn phong thủy nhà ở</li>
            <li>Tư vấn thiết kế và nội thất</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Bước 2: Gặp trực tiếp ký kết hợp đồng
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Đo đạc kích thước</li>
            <li>Khảo sát hiện trạng</li>
            <li>Tư vấn giá trị hợp đồng</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Bước 3: Triển khai hợp đồng
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Thành lập nhóm làm việc (Zalo)</li>
            <li>Thời gian triển khai: 35–40 ngày</li>
            <li>Hồ sơ gồm: 3D, kết cấu, điện nước, dự toán</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Bước 4: Bàn giao & hỗ trợ kỹ thuật
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bàn giao đầy đủ hồ sơ</li>
            <li>Hỗ trợ trong quá trình thi công</li>
          </ul>
        </div>
      </div>
    </div>
  );
}