import Image from "next/image";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://mocviengroup.vn"),

  title: "Bản Vẽ Thiết Kế Nhà Đẹp, Đầy Đủ Hồ Sơ | Mộc Viên",

  description:
    "Tham khảo bản vẽ thiết kế nhà đẹp, khoa học và đầy đủ hồ sơ kiến trúc, kết cấu, điện nước. Mộc Viên tư vấn thiết kế nhà theo diện tích, công năng và ngân sách.",

  keywords: [
    "bản vẽ thiết kế nhà",
    "bản vẽ nhà đẹp",
    "bản vẽ kiến trúc nhà ở",
    "hồ sơ thiết kế nhà",
    "bản vẽ thiết kế nhà 2 tầng",
    "bản vẽ thiết kế nhà cấp 4",
    "bản vẽ nhà phố",
    "bản vẽ biệt thự",
    "thiết kế nhà Nghệ An",
    "công ty thiết kế nhà",
  ],

  alternates: {
    canonical: "/ban-ve-thiet-ke-nha",
  },

  openGraph: {
    title: "Bản Vẽ Thiết Kế Nhà Đẹp, Đầy Đủ Hồ Sơ | Mộc Viên",
    description:
      "Tìm hiểu một bộ bản vẽ thiết kế nhà gồm những gì, quy trình thực hiện và các mẫu thiết kế nhà phù hợp với từng diện tích.",
    url: "https://mocviengroup.vn/ban-ve-thiet-ke-nha",
    siteName: "Mộc Viên",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/ban-ve-thiet-ke-nha/ban-ve-thiet-ke-nha-dep.jpg",
        width: 1200,
        height: 630,
        alt: "Bản vẽ thiết kế nhà đẹp và đầy đủ của Mộc Viên",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bản Vẽ Thiết Kế Nhà Đẹp, Đầy Đủ Hồ Sơ | Mộc Viên",
    description:
      "Tham khảo bản vẽ thiết kế nhà và hồ sơ kiến trúc, kết cấu, điện nước đầy đủ.",
    images: ["/images/ban-ve-thiet-ke-nha/ban-ve-thiet-ke-nha-dep.jpg"],
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

const drawingItems = [
  {
    number: "01",
    title: "Bản vẽ kiến trúc",
    description:
      "Bao gồm mặt bằng bố trí công năng, mặt đứng, mặt cắt, kích thước cửa, cầu thang, mái và các chi tiết kiến trúc quan trọng.",
  },
  {
    number: "02",
    title: "Bản vẽ kết cấu",
    description:
      "Thể hiện phương án móng, cột, dầm, sàn, cầu thang và các cấu kiện chịu lực phù hợp với quy mô công trình.",
  },
  {
    number: "03",
    title: "Bản vẽ điện",
    description:
      "Bố trí hệ thống chiếu sáng, ổ cắm, công tắc, điều hòa, internet, tivi và tủ điện cho từng khu vực.",
  },
  {
    number: "04",
    title: "Bản vẽ cấp thoát nước",
    description:
      "Thể hiện vị trí đường cấp nước, thoát nước, thiết bị vệ sinh, bể nước, bể phốt và các điểm kỹ thuật cần thiết.",
  },
  {
    number: "05",
    title: "Phối cảnh ngoại thất",
    description:
      "Giúp gia chủ hình dung rõ hình dáng, màu sắc, vật liệu và phong cách tổng thể của ngôi nhà trước khi thi công.",
  },
  {
    number: "06",
    title: "Chi tiết hoàn thiện",
    description:
      "Bao gồm chi tiết trần, tường, sàn, lan can, cửa, khu vệ sinh và những vị trí cần hướng dẫn thi công cụ thể.",
  },
];

const houseTypes = [
  {
    title: "Bản vẽ thiết kế nhà cấp 4",
    description:
      "Phù hợp với gia đình yêu thích không gian sống gần gũi, công năng tập trung trên một tầng và thuận tiện sử dụng.",
    href: "/mau-nha-dep/nha-cap-4",
    image: "/images/ban-ve-thiet-ke-nha/ban-ve-nha-cap-4.jpg",
  },
  {
    title: "Bản vẽ thiết kế nhà 2 tầng",
    description:
      "Giải pháp phổ biến cho gia đình từ 4–6 thành viên, giúp phân chia rõ không gian sinh hoạt chung và riêng tư.",
    href: "/mau-nha-dep",
    image: "/images/ban-ve-thiet-ke-nha/ban-ve-nha-2-tang.jpg",
  },
  {
    title: "Bản vẽ thiết kế nhà phố",
    description:
      "Tối ưu chiều ngang hẹp, chiều sâu lớn, chú trọng thông gió, lấy sáng và bố trí công năng khoa học.",
    href: "/mau-nha-dep/mau-nha-ong-dep",
    image: "/images/ban-ve-thiet-ke-nha/ban-ve-nha-pho.jpg",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description:
      "Trao đổi về diện tích đất, số thành viên, số phòng, phong cách mong muốn và mức ngân sách dự kiến.",
  },
  {
    number: "02",
    title: "Khảo sát hiện trạng",
    description:
      "Kiểm tra kích thước, hướng đất, đường giao thông, cao độ, điều kiện xung quanh và hiện trạng khu đất.",
  },
  {
    number: "03",
    title: "Bố trí mặt bằng",
    description:
      "Đề xuất phương án công năng phù hợp với thói quen sinh hoạt và nhu cầu sử dụng của gia đình.",
  },
  {
    number: "04",
    title: "Thiết kế phối cảnh",
    description:
      "Xây dựng hình thức kiến trúc, màu sắc và vật liệu để gia chủ hình dung rõ ngôi nhà sau khi hoàn thiện.",
  },
  {
    number: "05",
    title: "Triển khai kỹ thuật",
    description:
      "Hoàn thiện bản vẽ kiến trúc, kết cấu, điện nước và các chi tiết phục vụ thi công.",
  },
  {
    number: "06",
    title: "Bàn giao hồ sơ",
    description:
      "Kiểm tra hồ sơ, hướng dẫn gia chủ đọc bản vẽ và hỗ trợ giải đáp trong quá trình thi công.",
  },
];

const faqItems = [
  {
    question: "Một bộ bản vẽ thiết kế nhà gồm những gì?",
    answer:
      "Một bộ hồ sơ thiết kế nhà thường gồm bản vẽ kiến trúc, kết cấu, hệ thống điện, cấp thoát nước, phối cảnh ngoại thất và các bản vẽ chi tiết phục vụ thi công.",
  },
  {
    question: "Có nên thiết kế bản vẽ trước khi xây nhà không?",
    answer:
      "Có. Bản vẽ giúp gia chủ xác định rõ công năng, hình thức kiến trúc, phương án kết cấu và hệ thống kỹ thuật trước khi thi công, từ đó hạn chế thay đổi và phát sinh không cần thiết.",
  },
  {
    question: "Thời gian hoàn thiện bản vẽ thiết kế nhà là bao lâu?",
    answer:
      "Thời gian phụ thuộc vào diện tích, quy mô và mức độ phức tạp của công trình. Nhà ở thông thường có thể cần vài tuần để hoàn thiện đầy đủ các bước từ mặt bằng đến hồ sơ kỹ thuật.",
  },
  {
    question: "Có thể thiết kế nhà theo mẫu có sẵn không?",
    answer:
      "Có thể sử dụng mẫu nhà có sẵn để tham khảo phong cách. Tuy nhiên, bản vẽ vẫn cần được điều chỉnh theo kích thước khu đất, nhu cầu sử dụng, hướng nhà, điều kiện khí hậu và ngân sách thực tế.",
  },
  {
    question: "Mộc Viên có thiết kế nhà tại Nghệ An và Hà Tĩnh không?",
    answer:
      "Mộc Viên tư vấn thiết kế nhà ở, nhà phố, nhà vườn và biệt thự tại Nghệ An, Hà Tĩnh cùng các khu vực lân cận.",
  },
];

export default function BanVeThietKeNhaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://mocviengroup.vn/ban-ve-thiet-ke-nha#webpage",
        url: "https://mocviengroup.vn/ban-ve-thiet-ke-nha",
        name: "Bản Vẽ Thiết Kế Nhà Đẹp, Đầy Đủ Hồ Sơ",
        description:
          "Tìm hiểu bản vẽ thiết kế nhà gồm những gì, quy trình thiết kế và các mẫu bản vẽ nhà đẹp, khoa học.",
        inLanguage: "vi-VN",
        isPartOf: {
          "@id": "https://mocviengroup.vn/#website",
        },
        breadcrumb: {
          "@id":
            "https://mocviengroup.vn/ban-ve-thiet-ke-nha#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://mocviengroup.vn/ban-ve-thiet-ke-nha#breadcrumb",
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
            name: "Bản vẽ thiết kế nhà",
            item: "https://mocviengroup.vn/ban-ve-thiet-ke-nha",
          },
        ],
      },
      {
        "@type": "Service",
        "@id":
          "https://mocviengroup.vn/ban-ve-thiet-ke-nha#service",
        name: "Dịch vụ thiết kế bản vẽ nhà",
        serviceType: "Thiết kế kiến trúc nhà ở",
        url: "https://mocviengroup.vn/ban-ve-thiet-ke-nha",
        description:
          "Dịch vụ thiết kế bản vẽ nhà ở bao gồm kiến trúc, kết cấu, điện nước và phối cảnh ngoại thất.",
        provider: {
          "@type": "Organization",
          name: "Mộc Viên",
          url: "https://mocviengroup.vn",
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Nghệ An",
          },
          {
            "@type": "AdministrativeArea",
            name: "Hà Tĩnh",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-600"
          >
            <Link
              href="/"
              className="transition hover:text-amber-600"
            >
              Trang chủ
            </Link>

            <span aria-hidden="true">/</span>

            <span className="font-medium text-gray-900">
              Bản vẽ thiết kế nhà
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          <Image
            src="/images/ban-ve-thiet-ke-nha/ban-ve-thiet-ke-nha-dep.jpg"
            alt="Bản vẽ thiết kế nhà đẹp và khoa học"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
        </div>

        <div className="relative mx-auto grid min-h-[590px] max-w-7xl items-center px-4 py-20 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-300">
              Thiết kế kiến trúc – Kết cấu – Điện nước
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Bản vẽ thiết kế nhà đẹp, khoa học và đầy đủ hồ sơ
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
              Một bộ bản vẽ thiết kế nhà tốt không chỉ giúp ngôi
              nhà đẹp hơn mà còn giúp gia chủ bố trí công năng hợp
              lý, kiểm soát quá trình thi công và hạn chế những
              thay đổi không cần thiết.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/lien-he"
                className="rounded-lg bg-amber-400 px-6 py-3.5 font-semibold text-gray-950 transition hover:bg-amber-300"
              >
                Nhận tư vấn thiết kế
              </Link>

              <Link
                href="/du-an"
                className="rounded-lg border border-white/50 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-950"
              >
                Xem dự án đã thiết kế
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
            <Image
              src="/images/ban-ve-thiet-ke-nha/ho-so-thiet-ke-nha.jpg"
              alt="Hồ sơ bản vẽ thiết kế nhà đầy đủ"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-600">
              Hồ sơ thiết kế nhà
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-950 md:text-4xl">
              Bản vẽ thiết kế nhà là gì?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
              <p>
                <strong className="text-gray-900">
                  Bản vẽ thiết kế nhà
                </strong>{" "}
                là bộ tài liệu thể hiện đầy đủ phương án bố trí
                công năng, hình thức kiến trúc, kết cấu chịu lực
                và hệ thống kỹ thuật của công trình.
              </p>

              <p>
                Thông qua bản vẽ, gia chủ và đơn vị thi công có
                thể biết chính xác vị trí từng phòng, kích thước
                cửa, cao độ sàn, cấu tạo móng, cột, dầm, hệ thống
                điện và đường cấp thoát nước.
              </p>

              <p>
                Việc chuẩn bị hồ sơ thiết kế trước khi xây dựng
                giúp các bên thống nhất phương án ngay từ đầu,
                đồng thời hạn chế tình trạng vừa thi công vừa sửa
                đổi.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-amber-400 bg-amber-50 p-5 text-gray-700">
              Không nên chỉ sử dụng một hình phối cảnh mặt tiền
              để thi công. Công trình cần có bản vẽ kỹ thuật phù
              hợp với kích thước khu đất và điều kiện thực tế.
            </div>
          </div>
        </div>
      </section>

      {/* Hồ sơ gồm gì */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-600">
              Thành phần hồ sơ
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Một bộ bản vẽ thiết kế nhà gồm những gì?
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Hồ sơ cần thể hiện đủ thông tin để đội thợ có thể
              triển khai đúng phương án thiết kế và hạn chế việc
              tự xử lý theo kinh nghiệm.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {drawingItems.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 font-bold text-amber-700">
                  {item.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lợi ích */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-600">
              Giá trị thực tế
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-950 md:text-4xl">
              Vì sao nên có bản vẽ trước khi xây nhà?
            </h2>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Bố trí công năng khoa học",
                  text: "Diện tích từng phòng, lối đi, cầu thang và các khu vực chức năng được tính toán trước khi thi công.",
                },
                {
                  title: "Hình dung rõ ngôi nhà",
                  text: "Phối cảnh giúp gia chủ kiểm tra hình thức mặt tiền, màu sắc và vật liệu trước khi quyết định.",
                },
                {
                  title: "Hạn chế sửa chữa trong quá trình làm",
                  text: "Các vị trí quan trọng được xác định trên hồ sơ, giảm tình trạng xây xong mới phát hiện bất tiện.",
                },
                {
                  title: "Thuận lợi khi bóc tách khối lượng",
                  text: "Hồ sơ rõ ràng là cơ sở để dự toán vật tư, nhân công và kiểm soát các hạng mục thi công.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-gray-950">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-2xl">
            <Image
              src="/images/ban-ve-thiet-ke-nha/kien-truc-su-thiet-ke-nha.jpg"
              alt="Kiến trúc sư triển khai bản vẽ thiết kế nhà"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Các loại nhà */}
      <section className="bg-stone-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-400">
              Mẫu nhà phổ biến
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Bản vẽ thiết kế theo từng loại nhà
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Mỗi khu đất và mỗi gia đình cần một phương án riêng,
              thay vì sao chép nguyên trạng một mẫu nhà trên mạng.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {houseTypes.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-white text-gray-900"
              >
                <Link
                  href={item.href}
                  aria-label={`Xem ${item.title}`}
                  className="block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold transition group-hover:text-amber-700">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>

                    <span className="mt-5 inline-flex font-semibold text-amber-700">
                      Xem mẫu thiết kế
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quy trình */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-600">
              Cách Mộc Viên thực hiện
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Quy trình thiết kế bản vẽ nhà
            </h2>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative border-t border-gray-200 pt-7"
              >
                <span className="text-4xl font-bold text-amber-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lưu ý */}
      <section className="bg-amber-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-950">
            Những thông tin cần chuẩn bị khi thiết kế nhà
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            Để kiến trúc sư có thể đề xuất phương án phù hợp, gia
            chủ nên chuẩn bị trước những thông tin cơ bản dưới
            đây:
          </p>

          <ul className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              "Kích thước và hiện trạng khu đất.",
              "Hướng đất và vị trí đường giao thông.",
              "Số lượng thành viên trong gia đình.",
              "Số phòng ngủ và nhu cầu sử dụng.",
              "Phong cách kiến trúc mong muốn.",
              "Ngân sách xây dựng dự kiến.",
              "Thời gian dự định khởi công.",
              "Các yêu cầu đặc biệt về phong thủy.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="font-bold text-amber-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-600">
              Câu hỏi thường gặp
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Giải đáp về bản vẽ thiết kế nhà
            </h2>
          </div>

          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold text-gray-950">
                  {item.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-4 leading-8 text-gray-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 md:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-stone-950 px-6 py-12 text-center text-white md:px-12 md:py-16">
          <p className="font-semibold uppercase tracking-[0.2em] text-amber-400">
            Mộc Viên
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            Bạn đang cần bản vẽ thiết kế phù hợp với khu đất của
            mình?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
            Gửi cho Mộc Viên kích thước khu đất, nhu cầu công năng
            và mẫu nhà bạn yêu thích để được tư vấn phương án phù
            hợp.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/lien-he"
              className="rounded-lg bg-amber-400 px-7 py-3.5 font-semibold text-gray-950 transition hover:bg-amber-300"
            >
              Liên hệ tư vấn
            </Link>

            <Link
              href="/bao-gia-thiet-ke"
              className="rounded-lg border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-gray-950"
            >
              Xem báo giá thiết kế
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}