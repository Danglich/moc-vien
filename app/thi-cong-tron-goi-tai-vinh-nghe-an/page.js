import Link from "next/link";
import Image from "next/image";

const pageUrl =
  "https://mocviengroup.vn/thi-cong-tron-goi-tai-vinh-nghe-an";

export const revalidate = 3600;

export const metadata = {
  title:
    "Thi Công Nhà Trọn Gói Tại Vinh – Nghệ An | Mộc Viên Group",

  description:
    "Mộc Viên Group nhận thiết kế và thi công nhà trọn gói tại TP Vinh, Nghệ An. Quy trình rõ ràng, dự toán minh bạch, kiểm soát chất lượng và tiến độ thi công.",

  keywords: [
    "thi công trọn gói tại Vinh",
    "thi công nhà trọn gói tại Vinh",
    "xây nhà trọn gói tại Vinh",
    "xây nhà trọn gói Nghệ An",
    "thi công trọn gói Nghệ An",
    "công ty xây dựng tại Vinh",
    "nhà thầu xây dựng tại Vinh",
    "thiết kế thi công nhà tại Vinh",
    "báo giá xây nhà trọn gói tại Vinh",
    "Mộc Viên Group",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Thi Công Nhà Trọn Gói Tại Vinh – Nghệ An | Mộc Viên Group",
    description:
      "Dịch vụ thiết kế và thi công nhà trọn gói tại TP Vinh, Nghệ An. Quy trình rõ ràng, kiểm soát chất lượng, tiến độ và ngân sách.",
    url: pageUrl,
    siteName: "Mộc Viên Group",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/images/thi-cong-tron-goi-vinh-nghe-an.jpg",
        width: 1200,
        height: 630,
        alt: "Thi công nhà trọn gói tại Vinh Nghệ An",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thi Công Nhà Trọn Gói Tại Vinh – Nghệ An",
    description:
      "Mộc Viên nhận thiết kế và thi công nhà trọn gói tại TP Vinh, Nghệ An.",
    images: ["/images/thi-cong-tron-goi-vinh-nghe-an.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const services = [
  {
    title: "Khảo sát và tư vấn",
    description:
      "Khảo sát hiện trạng khu đất, nhu cầu sử dụng, phong cách kiến trúc và ngân sách dự kiến của gia đình.",
  },
  {
    title: "Thiết kế kiến trúc",
    description:
      "Bố trí mặt bằng công năng, thiết kế mặt tiền, kết cấu, điện nước và hồ sơ kỹ thuật thi công.",
  },
  {
    title: "Lập dự toán chi tiết",
    description:
      "Bóc tách khối lượng và dự toán từng hạng mục để gia chủ chủ động kiểm soát ngân sách.",
  },
  {
    title: "Thi công phần thô",
    description:
      "Triển khai móng, cột, dầm, sàn, xây tường, mái và các hạng mục kết cấu theo hồ sơ thiết kế.",
  },
  {
    title: "Thi công hoàn thiện",
    description:
      "Thực hiện chống thấm, điện nước, trần, sơn, ốp lát, cửa và các hạng mục hoàn thiện.",
  },
  {
    title: "Nghiệm thu và bàn giao",
    description:
      "Kiểm tra từng hạng mục, hoàn thiện hồ sơ, vệ sinh công trình và bàn giao cho gia chủ.",
  },
];

const benefits = [
  "Một đơn vị chịu trách nhiệm từ thiết kế đến thi công",
  "Hạn chế phát sinh do có dự toán và hồ sơ rõ ràng",
  "Kiểm soát đồng bộ chất lượng, vật liệu và tiến độ",
  "Gia chủ tiết kiệm thời gian quản lý nhiều đội thợ",
  "Công năng và hình thức công trình bám sát thiết kế",
  "Có quy trình nghiệm thu theo từng giai đoạn",
];

const processSteps = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description:
      "Trao đổi diện tích đất, số tầng, số phòng, phong cách và ngân sách đầu tư.",
  },
  {
    number: "02",
    title: "Khảo sát khu đất",
    description:
      "Kiểm tra hiện trạng, đường vào công trình, cao độ, hướng nắng gió và điều kiện thi công.",
  },
  {
    number: "03",
    title: "Lên phương án thiết kế",
    description:
      "Bố trí mặt bằng công năng và phối cảnh kiến trúc phù hợp với nhu cầu gia đình.",
  },
  {
    number: "04",
    title: "Lập dự toán và hợp đồng",
    description:
      "Thống nhất vật liệu, phạm vi công việc, chi phí, tiến độ và trách nhiệm của các bên.",
  },
  {
    number: "05",
    title: "Triển khai thi công",
    description:
      "Thi công theo hồ sơ, giám sát từng giai đoạn và cập nhật tiến độ cho gia chủ.",
  },
  {
    number: "06",
    title: "Nghiệm thu, bàn giao",
    description:
      "Kiểm tra chất lượng, hoàn thiện các hạng mục còn lại và bàn giao công trình.",
  },
];

const faqItems = [
  {
    question: "Thi công nhà trọn gói tại Vinh gồm những hạng mục nào?",
    answer:
      "Dịch vụ thi công trọn gói thường gồm khảo sát, thiết kế, lập dự toán, xin phép xây dựng nếu có thỏa thuận, thi công phần thô, điện nước, chống thấm, hoàn thiện và bàn giao. Phạm vi cụ thể cần được ghi rõ trong hợp đồng.",
  },
  {
    question: "Chi phí xây nhà trọn gói tại Vinh được tính như thế nào?",
    answer:
      "Chi phí phụ thuộc vào diện tích xây dựng, kết cấu móng, số tầng, phong cách kiến trúc, vật liệu hoàn thiện và điều kiện vận chuyển. Muốn có con số sát thực tế cần bóc tách từ hồ sơ thiết kế cụ thể.",
  },
  {
    question: "Xây nhà trọn gói có bị phát sinh nhiều không?",
    answer:
      "Phát sinh có thể được hạn chế nếu hồ sơ thiết kế đầy đủ, chủng loại vật liệu được chốt rõ và hợp đồng quy định cụ thể phạm vi công việc. Các thay đổi do gia chủ yêu cầu trong quá trình thi công cần được xác nhận trước khi thực hiện.",
  },
  {
    question: "Thời gian thi công một ngôi nhà mất bao lâu?",
    answer:
      "Thời gian phụ thuộc vào diện tích, số tầng, điều kiện khu đất, thời tiết và mức độ hoàn thiện. Tiến độ cụ thể nên được lập thành kế hoạch và ghi trong hợp đồng sau khi có hồ sơ thiết kế.",
  },
  {
    question: "Mộc Viên có nhận thi công ngoài thành phố Vinh không?",
    answer:
      "Mộc Viên có thể tư vấn và triển khai tại TP Vinh cùng nhiều khu vực khác thuộc Nghệ An và Hà Tĩnh, tùy quy mô, vị trí và phạm vi công việc của từng công trình.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Mộc Viên Group",
  url: "https://mocviengroup.vn",
  logo: "https://mocviengroup.vn/images/moc-vien-logo.png",
  image:
    "https://mocviengroup.vn/images/thi-cong-tron-goi-vinh-nghe-an.jpg",
  description:
    "Đơn vị thiết kế và thi công nhà trọn gói tại TP Vinh, Nghệ An.",
  areaServed: [
    {
      "@type": "City",
      name: "Thành phố Vinh",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nghệ An",
    },
    {
      "@type": "AdministrativeArea",
      name: "Hà Tĩnh",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vinh",
    addressRegion: "Nghệ An",
    addressCountry: "VN",
  },

  /*
  HÃY THÊM THÔNG TIN THẬT CỦA CÔNG TY:

  streetAddress: "Địa chỉ văn phòng",
  postalCode: "Mã bưu chính nếu có",

  telephone: "Số điện thoại",
  email: "Email công ty",
  priceRange: "₫₫",
  */
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Thi công nhà trọn gói tại Vinh – Nghệ An",
  serviceType: "Thiết kế và thi công nhà trọn gói",
  url: pageUrl,
  provider: {
    "@type": "GeneralContractor",
    name: "Mộc Viên Group",
    url: "https://mocviengroup.vn",
  },
  areaServed: {
    "@type": "City",
    name: "Thành phố Vinh",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Nghệ An",
    },
  },
  description:
    "Dịch vụ thiết kế và thi công nhà trọn gói tại TP Vinh, Nghệ An, gồm khảo sát, thiết kế, dự toán, thi công và bàn giao.",
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
      name: "Thi công trọn gói tại Vinh – Nghệ An",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="bg-white text-gray-800">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

          <div className="container relative mx-auto grid gap-10 px-4 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                Thiết kế và thi công nhà ở tại Nghệ An
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                Thi công nhà trọn gói tại Vinh – Nghệ An
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                Mộc Viên cung cấp giải pháp từ khảo sát, thiết kế, lập dự
                toán đến tổ chức thi công và bàn giao công trình. Mỗi ngôi
                nhà được triển khai theo nhu cầu sử dụng, điều kiện khu đất
                và ngân sách thực tế của gia đình.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/lien-he"
                  className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-amber-600"
                >
                  Nhận tư vấn xây nhà
                </Link>

                <Link
                  href="/cong-trinh-thuc-te"
                  className="rounded-xl border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
                >
                  Xem công trình thực tế
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "Dự toán rõ ràng",
                  "Quy trình minh bạch",
                  "Kiểm soát chất lượng",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-amber-100 bg-white p-3 text-center text-sm font-semibold text-gray-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border-4 border-white bg-gray-100 shadow-2xl">
                <Image
                  src="/images/thi-cong-tron-goi-vinh-nghe-an.jpg"
                  alt="Thi công nhà trọn gói tại thành phố Vinh Nghệ An"
                  width={900}
                  height={650}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GIỚI THIỆU */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Dịch vụ tại Vinh
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Dịch vụ thi công trọn gói giúp gia chủ kiểm soát toàn bộ quá
                trình xây nhà
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-amber-400" />

              <div className="mt-7 space-y-5 text-base leading-8 text-gray-700">
                <p>
                  Xây nhà là quá trình có nhiều hạng mục liên quan chặt chẽ
                  với nhau, từ mặt bằng công năng, kết cấu, điện nước cho đến
                  vật liệu hoàn thiện. Khi các phần này do nhiều đội thực
                  hiện riêng lẻ, gia chủ có thể gặp khó khăn trong việc kiểm
                  soát tiến độ, chất lượng và trách nhiệm.
                </p>

                <p>
                  Với hình thức thi công trọn gói, một đơn vị sẽ đồng hành từ
                  giai đoạn lên ý tưởng đến khi hoàn thiện. Điều này giúp bản
                  vẽ, dự toán và quá trình thi công có sự thống nhất, đồng
                  thời giảm nguy cơ sai lệch giữa phối cảnh và công trình
                  thực tế.
                </p>

                <p>
                  Đối với công trình tại TP Vinh và Nghệ An, phương án thiết
                  kế còn cần quan tâm đến nắng nóng, gió Lào, mưa bão, chống
                  thấm và khả năng thoát nước. Những yếu tố này phải được xử
                  lý từ hồ sơ thiết kế thay vì chờ đến khi công trình phát
                  sinh vấn đề mới khắc phục.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DỊCH VỤ */}
        <section className="border-y border-amber-100 bg-amber-50/60 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Phạm vi công việc
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Thi công nhà trọn gói tại Vinh gồm những gì?
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Phạm vi cụ thể của từng công trình được thống nhất trong hồ
                sơ báo giá và hợp đồng trước khi triển khai.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-bold text-amber-700">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LỢI ÍCH */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Lợi ích
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Vì sao nhiều gia đình lựa chọn xây nhà trọn gói?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Giá trị quan trọng nhất của hình thức trọn gói không chỉ nằm
                ở việc giảm công sức quản lý, mà còn ở khả năng đồng bộ giữa
                thiết kế, dự toán và thi công.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
                      ✓
                    </span>

                    <p className="text-sm font-medium leading-6 text-gray-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-9">
              <h3 className="text-2xl font-bold text-gray-900">
                Điều cần làm rõ trước khi ký hợp đồng
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Chủng loại và thương hiệu vật liệu",
                  "Phạm vi phần thô và phần hoàn thiện",
                  "Hạng mục đã bao gồm và chưa bao gồm",
                  "Tiến độ thi công từng giai đoạn",
                  "Quy trình nghiệm thu và thanh toán",
                  "Điều kiện bảo hành và xử lý phát sinh",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-amber-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white font-bold text-amber-700 shadow-sm">
                      {index + 1}
                    </span>

                    <span className="font-medium leading-7 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUY TRÌNH */}
        <section className="bg-gray-950 py-14 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
                Quy trình triển khai
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Quy trình thiết kế và thi công nhà trọn gói
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-3xl font-bold text-amber-400">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 leading-7 text-gray-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KINH NGHIỆM ĐỊA PHƯƠNG */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <article className="mx-auto max-w-5xl">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Kinh nghiệm xây nhà tại Nghệ An
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Những yếu tố cần lưu ý khi thi công nhà tại Vinh – Nghệ An
              </h2>

              <div className="mt-8 space-y-8 text-base leading-8 text-gray-700">
                <section>
                  <h3 className="text-2xl font-bold text-gray-900">
                    1. Giải pháp chống nóng và che nắng
                  </h3>

                  <p className="mt-3">
                    Khu vực Nghệ An có những thời điểm nắng nóng kéo dài. Vì
                    vậy cần tính toán hướng nhà, mái đua, ban công, lam chắn
                    nắng, vật liệu mái và khả năng thông gió ngay từ giai
                    đoạn thiết kế.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900">
                    2. Chống thấm và thoát nước
                  </h3>

                  <p className="mt-3">
                    Sân mái, ban công, nhà vệ sinh, khu vực mái và chân tường
                    là những vị trí dễ xảy ra thấm. Quy trình chống thấm cần
                    được thực hiện đúng kỹ thuật và thử nước trước khi hoàn
                    thiện.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900">
                    3. Kiểm soát vật liệu đầu vào
                  </h3>

                  <p className="mt-3">
                    Thép, xi măng, cát, đá, gạch và vật liệu hoàn thiện cần
                    được thống nhất rõ về quy cách. Không nên chỉ ghi chung
                    chung trong báo giá vì có thể dẫn đến chênh lệch lớn về
                    chất lượng và chi phí.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-gray-900">
                    4. Nghiệm thu từng giai đoạn
                  </h3>

                  <p className="mt-3">
                    Các hạng mục như móng, cốt thép, cốp pha, điện nước âm,
                    chống thấm và ốp lát cần được kiểm tra trước khi chuyển
                    sang bước tiếp theo. Nghiệm thu sớm giúp hạn chế việc đập
                    sửa về sau.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-amber-100 bg-[#fffaf0] py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                  Giải đáp thắc mắc
                </span>

                <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
                  Câu hỏi về thi công nhà trọn gói tại Vinh
                </h2>
              </div>

              <div className="mt-10 space-y-5">
                {faqItems.map((item, index) => (
                  <article
                    key={item.question}
                    className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm md:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 font-bold text-amber-700">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold leading-7 text-gray-900 md:text-xl">
                          {item.question}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-500 py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Bạn đang chuẩn bị xây nhà tại Vinh?
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-amber-50">
                  Hãy chuẩn bị trước mặt bằng công năng, ngân sách dự kiến và
                  các nhu cầu quan trọng để quá trình tư vấn đạt hiệu quả tốt
                  hơn.
                </p>
              </div>

              <Link
                href="/lien-he"
                className="shrink-0 rounded-xl bg-white px-7 py-3.5 font-bold text-amber-700 shadow-lg transition hover:bg-amber-50"
              >
                Liên hệ Mộc Viên
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}