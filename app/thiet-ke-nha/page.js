import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thiết kế nhà | Mộc Viên Group",
  description:
    "Tìm hiểu vì sao cần có bản thiết kế trước khi xây nhà, những rủi ro khi xây nhà không có hồ sơ thiết kế và các hạng mục trong một bộ hồ sơ thiết kế hoàn chỉnh.",
  alternates: {
    canonical: "/thiet-ke-nha",
  },
  openGraph: {
    title: "Vì sao cần thiết kế trước khi xây nhà?",
    description:
      "Bản thiết kế giúp tối ưu công năng, kiểm soát chi phí, hạn chế sửa chữa và bảo đảm ngôi nhà được thi công đúng kỹ thuật.",
    url: "/thiet-ke-nha",
    type: "website",
    images: [
      {
        url: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/thiet-ke-nha-hero.png",
        width: 1200,
        height: 630,
        alt: "Dịch vụ thiết kế nhà Mộc Viên Group",
      },
    ],
  },
};

const reasons = [
  {
    number: "01",
    title: "Tối ưu công năng sử dụng",
    description:
      "Bản thiết kế giúp bố trí phòng khách, phòng bếp, phòng ngủ, cầu thang và nhà vệ sinh hợp lý theo diện tích đất và nhu cầu thực tế của gia đình.",
  },
  {
    number: "02",
    title: "Hình dung ngôi nhà trước khi xây",
    description:
      "Thông qua phối cảnh 3D, gia chủ có thể nhìn thấy trước hình dáng, màu sắc, vật liệu và phong cách của ngôi nhà để điều chỉnh trước khi thi công.",
  },
  {
    number: "03",
    title: "Kiểm soát chi phí xây dựng",
    description:
      "Hồ sơ thiết kế giúp xác định rõ khối lượng công việc, vật liệu và phương án kết cấu, từ đó hạn chế phát sinh chi phí ngoài dự kiến.",
  },
  {
    number: "04",
    title: "Bảo đảm an toàn kết cấu",
    description:
      "Móng, cột, dầm, sàn và mái được tính toán phù hợp với quy mô công trình, điều kiện nền đất và tải trọng sử dụng.",
  },
  {
    number: "05",
    title: "Thi công điện nước chính xác",
    description:
      "Vị trí ổ cắm, công tắc, đèn, đường cấp thoát nước và thiết bị vệ sinh được bố trí trước, tránh đục phá sau khi đã hoàn thiện.",
  },
  {
    number: "06",
    title: "Hạn chế sửa chữa về sau",
    description:
      "Khi mọi chi tiết đã được tính toán từ đầu, công trình sẽ hạn chế tình trạng thiếu sáng, bí gió, bất tiện khi sử dụng hoặc phải sửa lại nhiều lần.",
  },
];

const risks = [
  "Bố trí phòng thiếu hợp lý, diện tích bị lãng phí.",
  "Mặt tiền thi công xong không giống hình dung ban đầu.",
  "Cầu thang, cửa và đồ nội thất xung đột với nhau.",
  "Đường điện nước chồng chéo, phải đục phá để sửa.",
  "Không kiểm soát được khối lượng và chi phí phát sinh.",
  "Thợ thi công theo kinh nghiệm nên chất lượng không đồng đều.",
];

const designItems = [
  {
    title: "Mặt bằng công năng",
    description:
      "Bố trí các phòng, giao thông trong nhà, kích thước cửa, cầu thang và đồ nội thất cơ bản.",
    image: "/images/thiet-ke-nha/mat-bang-cong-nang.jpg",
    alt: "Bản vẽ mặt bằng công năng nhà ở",
  },
  {
    title: "Phối cảnh kiến trúc 3D",
    description:
      "Thể hiện hình dáng, màu sắc, vật liệu và phong cách tổng thể của ngôi nhà trước khi xây dựng.",
    image: "/images/thiet-ke-nha/phoi-canh-3d.jpg",
    alt: "Phối cảnh kiến trúc 3D nhà ở",
  },
  {
    title: "Bản vẽ kiến trúc",
    description:
      "Bao gồm mặt đứng, mặt cắt, chi tiết cửa, mái, sàn, vệ sinh và các vị trí cần triển khai khi thi công.",
    image: "/images/thiet-ke-nha/ban-ve-kien-truc.jpg",
    alt: "Bản vẽ kiến trúc chi tiết",
  },
  {
    title: "Bản vẽ kết cấu",
    description:
      "Thể hiện móng, cột, dầm, sàn, cầu thang và các chi tiết cốt thép bảo đảm an toàn cho công trình.",
    image: "/images/thiet-ke-nha/ban-ve-ket-cau.jpg",
    alt: "Bản vẽ kết cấu nhà ở",
  },
  {
    title: "Bản vẽ điện nước",
    description:
      "Bố trí hệ thống chiếu sáng, ổ cắm, công tắc, điều hòa, cấp nước, thoát nước và thiết bị vệ sinh.",
    image: "/images/thiet-ke-nha/ban-ve-dien-nuoc.jpg",
    alt: "Bản vẽ hệ thống điện nước nhà ở",
  },
  {
    title: "Dự toán chi phí",
    description:
      "Thống kê khối lượng và chi phí tham khảo để gia chủ chuẩn bị ngân sách và lựa chọn vật liệu phù hợp.",
    image: "/images/thiet-ke-nha/du-toan-chi-phi.jpg",
    alt: "Dự toán chi phí xây dựng nhà ở",
  },
];

const process = [
  {
    step: "Bước 1",
    title: "Tiếp nhận nhu cầu",
    description:
      "Tìm hiểu diện tích đất, số thành viên, số phòng, phong cách yêu thích và ngân sách dự kiến.",
  },
  {
    step: "Bước 2",
    title: "Khảo sát hiện trạng",
    description:
      "Kiểm tra kích thước khu đất, hướng nhà, đường giao thông, công trình xung quanh và điều kiện thực tế.",
  },
  {
    step: "Bước 3",
    title: "Thiết kế mặt bằng",
    description:
      "Đề xuất phương án bố trí công năng phù hợp để gia chủ xem xét và điều chỉnh.",
  },
  {
    step: "Bước 4",
    title: "Thiết kế phối cảnh 3D",
    description:
      "Hoàn thiện hình thức mặt tiền, màu sắc, vật liệu và phong cách kiến trúc.",
  },
  {
    step: "Bước 5",
    title: "Triển khai hồ sơ kỹ thuật",
    description:
      "Thực hiện bản vẽ kiến trúc, kết cấu, điện nước và các chi tiết phục vụ thi công.",
  },
  {
    step: "Bước 6",
    title: "Bàn giao và hỗ trợ",
    description:
      "Bàn giao hồ sơ hoàn chỉnh, giải đáp bản vẽ và hỗ trợ trong quá trình thi công.",
  },
];

export default function HouseDesignPage() {
  return (
    <main className="overflow-hidden bg-white text-gray-800">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-yellow-700">
              Thiết kế nhà Mộc Viên
            </span>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Vì sao cần có{" "}
              <span className="text-yellow-500">bản thiết kế</span> trước khi
              xây nhà?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Xây nhà là một khoản đầu tư lớn và ảnh hưởng trực tiếp đến cuộc
              sống của cả gia đình trong nhiều năm. Một bộ hồ sơ thiết kế đầy
              đủ sẽ giúp ngôi nhà đẹp hơn, tiện nghi hơn, an toàn hơn và hạn chế
              tối đa những chi phí phát sinh trong quá trình thi công.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:0354136968"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 font-bold text-gray-950 shadow-lg shadow-yellow-500/20 transition hover:-translate-y-1 hover:bg-yellow-600"
              >
                Tư vấn thiết kế: 035.413.6968
              </a>

              <a
                href="#ly-do-can-thiet-ke"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-yellow-500 bg-white px-6 py-3 font-bold text-yellow-700 transition hover:-translate-y-1 hover:bg-yellow-50"
              >
                Tìm hiểu chi tiết
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-yellow-200 pt-7">
              <div>
                <strong className="block text-2xl font-extrabold text-yellow-500 md:text-3xl">
                  3D
                </strong>
                <span className="mt-1 block text-sm text-gray-600">
                  Phối cảnh trực quan
                </span>
              </div>

              <div>
                <strong className="block text-2xl font-extrabold text-yellow-500 md:text-3xl">
                  100%
                </strong>
                <span className="mt-1 block text-sm text-gray-600">
                  Hồ sơ kỹ thuật
                </span>
              </div>

              <div>
                <strong className="block text-2xl font-extrabold text-yellow-500 md:text-3xl">
                  24/7
                </strong>
                <span className="mt-1 block text-sm text-gray-600">
                  Hỗ trợ thi công
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-yellow-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-gray-100 shadow-2xl">
              <div className="relative aspect-[4/3]">
                <img
                  src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/thiet-ke-nha-hero.png"
                  alt="Kiến trúc sư thiết kế nhà ở trước khi thi công"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 max-w-xs rounded-2xl border border-yellow-200 bg-white p-5 shadow-xl md:-left-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-xl font-black text-gray-950">
                  ✓
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">
                    Tính toán trước khi xây
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Hạn chế việc vừa thi công vừa thay đổi, gây phát sinh chi
                    phí và kéo dài thời gian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
            <div className="relative aspect-[4/3]">
              <img
                src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/ho-so-thiet-ke.png"
                alt="Bộ hồ sơ thiết kế nhà ở hoàn chỉnh"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-gray-950/85 p-5 text-white backdrop-blur-md">
              <p className="font-bold text-yellow-400">
                Bản thiết kế là cơ sở để thi công
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-200">
                Kiến trúc sư, kỹ sư, chủ nhà và đội thợ cùng làm việc dựa trên
                một hồ sơ thống nhất.
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
              Chuẩn bị trước khi xây
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Bản thiết kế không chỉ là một hình ảnh ngôi nhà đẹp
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Một bộ hồ sơ thiết kế hoàn chỉnh là tài liệu hướng dẫn toàn bộ quá
              trình xây dựng. Trong đó thể hiện rõ kích thước, công năng, kết
              cấu, vật liệu, hệ thống điện nước và các chi tiết cần thiết để đội
              thợ thi công chính xác.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Khi không có bản vẽ, nhiều quyết định sẽ chỉ được đưa ra ngay tại
              công trường. Điều này dễ dẫn đến tình trạng mỗi đội thợ hiểu một
              cách khác nhau, công trình thiếu đồng bộ và gia chủ khó kiểm soát
              chất lượng.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-6">
              <p className="font-bold leading-7 text-yellow-900">
                Chi phí thiết kế thường chỉ chiếm một phần nhỏ trong tổng mức
                đầu tư nhưng có thể giúp hạn chế rất nhiều chi phí sửa chữa và
                phát sinh về sau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lý do */}
      <section id="ly-do-can-thiet-ke" className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
              6 lý do quan trọng
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Những điều bản thiết kế giải quyết cho gia chủ
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Thiết kế không chỉ giúp ngôi nhà đẹp mà còn giải quyết đồng thời
              các vấn đề về công năng, kỹ thuật, chi phí và quá trình sử dụng
              lâu dài.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-lg font-black text-gray-950 transition group-hover:rotate-6">
                    {item.number}
                  </span>

                  <span className="text-4xl font-black text-yellow-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Có và không có thiết kế */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-red-200 bg-red-50 p-7 md:p-10">
            <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-red-700">
              Xây nhà không có thiết kế
            </span>

            <h2 className="mt-5 text-2xl font-extrabold text-gray-900 md:text-3xl">
              Những rủi ro thường gặp
            </h2>

            <div className="mt-7 space-y-4">
              {risks.map((risk) => (
                <div
                  key={risk}
                  className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                    ×
                  </span>

                  <p className="leading-7 text-gray-700">{risk}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-yellow-50 p-7 md:p-10">
            <span className="inline-flex rounded-full bg-yellow-200 px-4 py-2 text-sm font-bold uppercase tracking-wider text-yellow-800">
              Xây nhà có hồ sơ thiết kế
            </span>

            <h2 className="mt-5 text-2xl font-extrabold text-gray-900 md:text-3xl">
              Chủ động trong toàn bộ quá trình
            </h2>

            <div className="mt-7 space-y-4">
              {[
                "Biết rõ ngôi nhà sẽ được bố trí và hoàn thiện như thế nào.",
                "Có cơ sở để làm việc, trao đổi và nghiệm thu với đội thi công.",
                "Dự trù được khối lượng công việc và ngân sách xây dựng.",
                "Các hạng mục kiến trúc, kết cấu và điện nước được đồng bộ.",
                "Dễ dàng điều chỉnh phương án trước khi bắt đầu thi công.",
                "Hạn chế phát sinh và bảo đảm chất lượng sử dụng lâu dài.",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-black text-gray-950">
                    ✓
                  </span>

                  <p className="leading-7 text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thành phần hồ sơ */}
      <section className="bg-gray-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
              Hồ sơ thiết kế hoàn chỉnh
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
              Một bộ hồ sơ thiết kế nhà gồm những gì?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Mỗi nhóm bản vẽ đảm nhiệm một vai trò riêng nhưng phải được triển
              khai đồng bộ để công trình có thể thi công chính xác.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {designItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quy trình */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                Quy trình làm việc
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
                Từ nhu cầu của gia chủ đến bộ hồ sơ thi công hoàn chỉnh
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Mỗi giai đoạn đều có sự trao đổi và xác nhận của gia chủ. Nhờ
                đó, phương án cuối cùng vừa phù hợp với nhu cầu sử dụng vừa nằm
                trong mức đầu tư dự kiến.
              </p>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
                <img
                  src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/quy_trinh.png"
                  alt="Quy trình tư vấn và thiết kế nhà ở"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-5">
              {process.map((item, index) => (
                <article
                  key={item.step}
                  className="group flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-yellow-400 hover:shadow-lg md:p-7"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-xl font-black text-gray-950">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
                      {item.step}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-yellow-500 px-6 py-12 text-center shadow-2xl shadow-yellow-500/20 md:px-12 md:py-16">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20" />
            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-yellow-300/50" />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex rounded-full bg-gray-950 px-4 py-2 text-sm font-bold uppercase tracking-wider text-yellow-400">
                Tư vấn miễn phí
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-gray-950 md:text-4xl">
                Bạn đang chuẩn bị xây nhà nhưng chưa biết bắt đầu từ đâu?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-yellow-950 md:text-lg">
                Mộc Viên sẽ tư vấn phương án công năng, phong cách kiến trúc và
                lộ trình thiết kế phù hợp với diện tích đất cũng như ngân sách
                của gia đình.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="tel:0354136968"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-950 px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-gray-800"
                >
                  Gọi ngay: 035.413.6968
                </a>

                <Link
                  href="/bao-gia-thiet-ke"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-gray-950 px-7 py-3 font-bold text-gray-950 transition hover:-translate-y-1 hover:bg-white"
                >
                  Xem bảng giá thiết kế
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}