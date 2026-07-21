import Image from "next/image";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://mocviengroup.vn"),

  title: "Thước Lỗ Ban là gì? Cách xem chuẩn | Mộc Viên",
  description:
    "Hướng dẫn sử dụng thước Lỗ Ban chuẩn trong xây dựng: chọn kích thước đẹp, tránh cung xấu, áp dụng cho cửa, bàn thờ, nội thất.",

  alternates: {
    canonical: "/thuoc-lo-ban",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Thước Lỗ Ban là gì",
};

export default function ThuocLoBanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/">Trang chủ</Link> /{" "}
        <span className="text-black">Thước lỗ ban</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">
        Thước lỗ ban
      </h1>

      {/* Image */}
      <div className="text-center mb-6">
        <Image
          src="/images/lo-ban.jpg"
          alt="Lỗ Ban"
          width={400}
          height={500}
          className="mx-auto rounded"
        />
        <p className="text-sm text-gray-500 mt-2">
          Lỗ Ban – Ông tổ nghề mộc
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
        <p>
          Theo quan niệm dân gian và trong xây dựng truyền thống, khi xây dựng
          nhà cửa ngoài yếu tố phong thủy, người ta thường sử dụng{" "}
          <strong>thước Lỗ Ban</strong> để lựa chọn kích thước đẹp, mang lại may
          mắn cho gia chủ.
        </p>

        <p>
          Tại <strong>Mộc Viên</strong>, chúng tôi áp dụng linh hoạt thước Lỗ Ban
          trong thiết kế nhằm đảm bảo sự hài hòa giữa thẩm mỹ, công năng và yếu
          tố phong thủy.
        </p>

        <p>
          Hiện nay phổ biến 3 loại thước Lỗ Ban gồm: 52.2cm (thông thủy), 42.9cm
          (khối xây dựng) và 38.8cm (đồ nội thất).
        </p>
      </div>

      {/* Main Image */}
      <div className="mb-8">
        <img
          src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/thuoc_lo_ban.png"
          alt="Thước Lỗ Ban"
          width={1200}
          height={600}
          className="w-full rounded-lg"
        />
      </div>

      {/* Explanation */}
      <div className="bg-yellow-50 p-5 rounded-lg mb-8 space-y-3">
        <h2 className="font-semibold text-lg">
          Cách hiểu các loại thước Lỗ Ban
        </h2>

        <p>
          <strong>Thước 52.2cm:</strong> Dùng đo kích thước thông thủy (cửa,
          cửa sổ, lối đi...)
        </p>

        <p>
          <strong>Thước 42.9cm:</strong> Dùng đo khối xây dựng (tường, bếp,
          bậc...)
        </p>

        <p>
          <strong>Thước 38.8cm:</strong> Dùng đo nội thất (bàn thờ, tủ...)
        </p>
      </div>

      {/* Guide */}
      <div className="bg-yellow-50 p-5 rounded-lg mb-8 space-y-3">
        <h2 className="font-semibold text-lg">
          Hướng dẫn xem thước Lỗ Ban
        </h2>

        <p>
          Thước Lỗ Ban chia thành các cung tốt – xấu. Khi đo kích thước, nên
          chọn rơi vào cung tốt như: <strong>Tài, Lộc, Quý Nhân</strong> và tránh
          các cung xấu như: <strong>Bệnh, Tử, Hại</strong>.
        </p>

        <p>
          Không nên áp dụng cứng nhắc cho mọi kích thước, mà cần kết hợp với công
          năng sử dụng thực tế.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Cung</th>
              <th className="border p-2">Ý nghĩa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 text-red-500 font-semibold">
                Tài Lộc
              </td>
              <td className="border p-2">
                Mang lại tiền tài, may mắn, thuận lợi
              </td>
            </tr>
            <tr>
              <td className="border p-2 text-green-600 font-semibold">
                Quý Nhân
              </td>
              <td className="border p-2">
                Có người giúp đỡ, gặp nhiều thuận lợi
              </td>
            </tr>
            <tr>
              <td className="border p-2 text-gray-500 font-semibold">
                Tai Họa
              </td>
              <td className="border p-2">
                Không tốt, nên tránh khi thiết kế
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Conclusion */}
      <div className="bg-gray-100 p-6 rounded-lg italic text-gray-700">
        Mộc Viên khuyến nghị khách hàng sử dụng thước Lỗ Ban một cách linh hoạt,
        kết hợp với tư vấn kiến trúc để đảm bảo không gian sống vừa đẹp, vừa hợp
        phong thủy.
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <Link
          href="/lien-he"
          className="inline-block bg-black text-white px-6 py-2 rounded"
        >
          Nhận tư vấn miễn phí
        </Link>
      </div>
    </div>
  );
}