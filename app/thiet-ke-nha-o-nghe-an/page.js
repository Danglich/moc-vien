import Image from "next/image";
import Link from "next/link";

const pageUrl = "https://mocviengroup.vn/thiet-ke-nha-o-nghe-an";

export const revalidate = 3600;

export const metadata = {
  title: "Thiết Kế Nhà Ở Nghệ An Đẹp, Tối Ưu Công Năng | Mộc Viên",

  description:
    "Mộc Viên chuyên thiết kế nhà ở Nghệ An: nhà cấp 4, nhà phố, nhà vườn, biệt thự, villa và nhà hiện đại. Thiết kế đẹp, tối ưu công năng, phù hợp khí hậu miền Trung.",

  keywords: [
    "thiết kế nhà ở Nghệ An",
    "thiết kế nhà Nghệ An",
    "công ty thiết kế nhà tại Nghệ An",
    "kiến trúc sư Nghệ An",
    "thiết kế nhà tại Vinh",
    "thiết kế nhà đẹp Nghệ An",
    "thiết kế nhà cấp 4 Nghệ An",
    "thiết kế biệt thự Nghệ An",
    "thiết kế nhà phố Nghệ An",
    "thiết kế nhà vườn Nghệ An",
    "thiết kế villa Nghệ An",
    "Mộc Viên Group",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Thiết Kế Nhà Ở Nghệ An | Mộc Viên Group",
    description:
      "Dịch vụ thiết kế nhà ở tại Nghệ An, tối ưu công năng, thẩm mỹ và phù hợp điều kiện khí hậu miền Trung.",
    url: pageUrl,
    siteName: "Mộc Viên Group",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/thiet-ke-nha-nghe-an/anh-bia.jpg",
        width: 1200,
        height: 630,
        alt: "Thiết kế nhà ở Nghệ An",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thiết Kế Nhà Ở Nghệ An | Mộc Viên",
    description:
      "Thiết kế nhà cấp 4, nhà phố, nhà vườn, biệt thự và villa tại Nghệ An.",
    images: ["/images/thiet-ke-nha-nghe-an/anh-bia.jpg"],
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

const featuredProjects = [
  {
    title: "Mẫu nhà hiện đại 2 tầng tại Nghệ An",
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/project-images/1784544270425-1.png",
    alt: "Mẫu nhà hiện đại 2 tầng tại Nghệ An",
  },
  {
    title: "Mẫu nhà mái Nhật sang trọng",
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/project-images/1784275664836-14.jpg",
    alt: "Thiết kế nhà mái Nhật tại Nghệ An",
  },
  {
    title: "Mẫu nhà vườn 1 tầng hiện đại",
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/project-images/1784284749593-2.png",
    alt: "Thiết kế nhà vườn tại Nghệ An",
  },
  {
    title: "Mẫu nhà phố tối ưu công năng",
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/project-images/1784189964339-Untitled%20design%20(7).png",
    alt: "Thiết kế nhà phố tại thành phố Vinh Nghệ An",
  },
  {
    title: "Mẫu biệt thự 2 tầng đẹp",
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/project-images/1784550896270-3.png",
    alt: "Thiết kế biệt thự tại Nghệ An",
  },
  {
    title: "Mẫu villa hiện đại, sang trọng",
    image: "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/project-images/1784277522628-17.jpg",
    alt: "Thiết kế villa hiện đại tại Nghệ An",
  },
];

const actualProjects = [
  {
    title: "Công trình thực tế số 1",
    image: "/images/thiet-ke-nha-nghe-an/cong-trinh-01.jpg",
    alt: "Công trình nhà ở thực tế tại Nghệ An",
  },
  {
    title: "Công trình thực tế số 2",
    image: "/images/thiet-ke-nha-nghe-an/cong-trinh-02.jpg",
    alt: "Thi công nhà ở theo thiết kế tại Nghệ An",
  },
  {
    title: "Công trình thực tế số 3",
    image: "/images/thiet-ke-nha-nghe-an/cong-trinh-03.jpg",
    alt: "Công trình nhà đẹp tại Nghệ An",
  },
];

const houseStyles = [
  {
    title: "Nhà hiện đại",
    description:
      "Phong cách sử dụng hình khối tinh gọn, cửa kính lớn và không gian mở.",
    image: "/images/thiet-ke-nha-nghe-an/phong-cach-hien-dai.jpg",
    url: "/mau-nha-hien-dai",
  },
  {
    title: "Nhà mái Nhật",
    description:
      "Kiến trúc cân đối, mái có độ dốc vừa phải, phù hợp nhà vườn và nhà 2 tầng.",
    image: "/images/thiet-ke-nha-nghe-an/phong-cach-mai-nhat.jpg",
    url: "/mau-nha-mai-nhat",
  },
  {
    title: "Nhà phố",
    description:
      "Giải pháp tối ưu cho khu đất mặt tiền hẹp, chú trọng thông gió và ánh sáng.",
    image: "/images/thiet-ke-nha-nghe-an/phong-cach-nha-pho.jpg",
    url: "/nha-pho",
  },
  {
    title: "Biệt thự",
    description:
      "Không gian sang trọng, mặt tiền bề thế và công năng tiện nghi.",
    image: "/images/thiet-ke-nha-nghe-an/phong-cach-biet-thu.jpg",
    url: "/mau-biet-thu",
  },
  {
    title: "Villa",
    description:
      "Kiến trúc nghỉ dưỡng, gần gũi thiên nhiên và đề cao trải nghiệm sống.",
    image: "/images/thiet-ke-nha-nghe-an/phong-cach-villa.jpg",
    url: "/mau-villa",
  },
  {
    title: "Nhà cấp 4",
    description:
      "Không gian sinh hoạt thuận tiện, phù hợp gia đình có khu đất rộng.",
    image: "/images/thiet-ke-nha-nghe-an/phong-cach-nha-cap-4.jpg",
    url: "/mau-nha-cap-4",
  },
];

const designDocuments = [
  {
    title: "Mặt bằng công năng",
    image: "/images/thiet-ke-nha-nghe-an/ho-so-mat-bang.jpg",
    alt: "Bản vẽ mặt bằng công năng nhà ở",
  },
  {
    title: "Phối cảnh kiến trúc",
    image: "/images/thiet-ke-nha-nghe-an/ho-so-phoi-canh.jpg",
    alt: "Phối cảnh thiết kế nhà tại Nghệ An",
  },
  {
    title: "Bản vẽ kỹ thuật",
    image: "/images/thiet-ke-nha-nghe-an/ho-so-ky-thuat.jpg",
    alt: "Hồ sơ kỹ thuật thi công nhà ở",
  },
  {
    title: "Bản vẽ điện nước",
    image: "/images/thiet-ke-nha-nghe-an/ho-so-dien-nuoc.jpg",
    alt: "Bản vẽ điện nước nhà ở",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description:
      "Trao đổi về diện tích đất, số tầng, số phòng, phong cách và ngân sách dự kiến.",
  },
  {
    number: "02",
    title: "Khảo sát khu đất",
    description:
      "Kiểm tra hiện trạng, hướng nhà, giao thông, cao độ và điều kiện xây dựng.",
  },
  {
    number: "03",
    title: "Thiết kế mặt bằng",
    description:
      "Bố trí phòng khách, phòng ngủ, bếp, phòng thờ và các không gian phụ trợ.",
  },
  {
    number: "04",
    title: "Thiết kế phối cảnh",
    description:
      "Phát triển hình thức kiến trúc, màu sắc và vật liệu mặt tiền.",
  },
  {
    number: "05",
    title: "Triển khai hồ sơ",
    description:
      "Hoàn thiện bản vẽ kiến trúc, kết cấu, điện nước và chi tiết thi công.",
  },
  {
    number: "06",
    title: "Bàn giao và hỗ trợ",
    description:
      "Bàn giao hồ sơ, giải thích bản vẽ và hỗ trợ trong quá trình thi công.",
  },
];

const serviceAreas = [
  "Thành phố Vinh",
  "Cửa Lò",
  "Nghi Lộc",
  "Diễn Châu",
  "Yên Thành",
  "Đô Lương",
  "Thanh Chương",
  "Hưng Nguyên",
  "Nam Đàn",
  "Quỳnh Lưu",
  "Hoàng Mai",
  "Thái Hòa",
  "Tân Kỳ",
  "Anh Sơn",
  "Con Cuông",
  "Quế Phong",
];

const faqItems = [
  {
    question: "Thiết kế nhà ở Nghệ An giá bao nhiêu?",
    answer:
      "Chi phí thiết kế phụ thuộc vào diện tích, loại hình công trình, phong cách kiến trúc và mức độ chi tiết của hồ sơ. Sau khi nắm rõ nhu cầu và quy mô công trình, đơn vị thiết kế sẽ lập báo giá cụ thể.",
  },
  {
    question: "Thời gian thiết kế một ngôi nhà mất bao lâu?",
    answer:
      "Thời gian thiết kế phụ thuộc vào diện tích, số tầng và số lần điều chỉnh phương án. Công trình nhà ở phổ biến thường cần khoảng vài tuần để hoàn thiện đầy đủ mặt bằng, phối cảnh và hồ sơ kỹ thuật.",
  },
  {
    question: "Hồ sơ thiết kế nhà gồm những gì?",
    answer:
      "Hồ sơ thường gồm bản vẽ kiến trúc, mặt bằng công năng, mặt đứng, mặt cắt, kết cấu, điện nước, chi tiết kỹ thuật và phối cảnh ngoại thất. Phạm vi cụ thể phụ thuộc vào gói thiết kế.",
  },
  {
    question: "Mộc Viên có nhận giám sát thi công không?",
    answer:
      "Mộc Viên có thể cung cấp dịch vụ thiết kế, giám sát và thi công theo phạm vi thống nhất với từng khách hàng.",
  },
  {
    question: "Có nhận thiết kế ngoài thành phố Vinh không?",
    answer:
      "Mộc Viên nhận tư vấn và thiết kế tại thành phố Vinh, các huyện thuộc Nghệ An, Hà Tĩnh và một số khu vực lân cận.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Thiết kế nhà ở Nghệ An",
  serviceType: "Thiết kế kiến trúc nhà ở",
  url: pageUrl,
  description:
    "Dịch vụ thiết kế nhà ở tại Nghệ An gồm thiết kế mặt bằng công năng, phối cảnh kiến trúc và hồ sơ kỹ thuật thi công.",
  provider: {
    "@type": "Organization",
    name: "Mộc Viên Group",
    url: "https://mocviengroup.vn",
    logo: "https://mocviengroup.vn/images/moc-vien-logo.png",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Nghệ An",
  },
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
      name: "Thiết kế nhà ở Nghệ An",
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
          <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
          <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

          <div className="container relative mx-auto grid gap-10 px-4 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                Kiến trúc nhà ở tại Nghệ An
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                Thiết kế nhà ở Nghệ An đẹp, hiện đại và tối ưu công năng
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                Mộc Viên cung cấp giải pháp thiết kế nhà ở tại Nghệ An từ mặt
                bằng công năng, phối cảnh kiến trúc đến hồ sơ kỹ thuật thi
                công. Mỗi công trình được phát triển theo đặc điểm khu đất,
                nhu cầu sinh hoạt và ngân sách của từng gia đình.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/lien-he"
                  className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-amber-600"
                >
                  Nhận tư vấn thiết kế
                </Link>

                <Link
                  href="/du-an"
                  className="rounded-xl border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
                >
                  Xem các mẫu nhà
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "Tối ưu công năng",
                  "Phù hợp khí hậu",
                  "Hồ sơ đầy đủ",
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
                  src="/images/thiet-ke-nha-nghe-an/anh-bia.jpg"
                  alt="Thiết kế nhà ở Nghệ An"
                  width={1000}
                  height={750}
                  priority
                  className="aspect-[4/3] w-full object-cover"
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
                Dịch vụ thiết kế nhà
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Thiết kế nhà không chỉ là tạo ra một mặt tiền đẹp
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-amber-400" />

              <div className="mt-7 space-y-5 text-base leading-8 text-gray-700">
                <p>
                  Khi tìm kiếm một đơn vị thiết kế nhà ở Nghệ An, gia chủ
                  không nên chỉ quan tâm đến hình ảnh phối cảnh bên ngoài. Một
                  ngôi nhà đẹp cần được giải quyết đồng thời về công năng,
                  kết cấu, ánh sáng, thông gió, điện nước và khả năng thi công
                  thực tế.
                </p>

                <p>
                  Hồ sơ thiết kế đầy đủ giúp gia đình hình dung rõ ngôi nhà
                  trước khi khởi công, đồng thời giúp đội thợ có căn cứ triển
                  khai chính xác. Nhờ đó, công trình hạn chế việc sửa đổi,
                  giảm nguy cơ phát sinh chi phí và tránh sự khác biệt quá
                  lớn giữa phối cảnh với thực tế.
                </p>

                <p>
                  Mộc Viên thiết kế nhiều loại hình nhà ở như nhà cấp 4, nhà
                  phố, nhà vườn, nhà mái Nhật, biệt thự, villa và nhà hiện
                  đại. Mỗi phương án được nghiên cứu theo diện tích đất, số
                  thành viên, thói quen sinh hoạt và ngân sách của gia đình.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY DỰ ÁN NỔI BẬT */}
        <section className="border-y border-amber-100 bg-amber-50/60 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Mẫu nhà nổi bật
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Các mẫu nhà do Mộc Viên thiết kế
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Bạn thay những ảnh mẫu dưới đây bằng hình ảnh công trình thực tế
                hoặc phối cảnh do công ty đã thực hiện.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/du-an"
                className="inline-flex rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                Xem tất cả dự án
              </Link>
            </div>
          </div>
        </section>

        {/* VÌ SAO CẦN THIẾT KẾ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Giá trị của thiết kế
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Vì sao nên thiết kế nhà trước khi thi công?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Một bộ hồ sơ được chuẩn bị kỹ giúp giải quyết các vấn đề quan
                trọng trước khi đưa vật liệu và nhân công vào công trường.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Bố trí công năng phù hợp",
                  "Kiểm soát diện tích từng phòng",
                  "Tính toán kết cấu an toàn",
                  "Bố trí điện nước hợp lý",
                  "Dự toán trước ngân sách",
                  "Hạn chế đập sửa khi thi công",
                  "Đồng bộ kiến trúc và nội thất",
                  "Dễ dàng nghiệm thu công trình",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
                      ✓
                    </span>

                    <span className="text-sm font-medium leading-6 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
              <Image
                src="/images/thiet-ke-nha-nghe-an/anh-kien-truc-su.jpg"
                alt="Kiến trúc sư tư vấn thiết kế nhà tại Nghệ An"
                width={900}
                height={700}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* KHÍ HẬU NGHỆ AN */}
        <section className="bg-gray-950 py-14 text-white md:py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
                Giải pháp địa phương
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Thiết kế nhà phù hợp với khí hậu Nghệ An
              </h2>

              <div className="mt-7 space-y-5 leading-8 text-gray-300">
                <p>
                  Nhà ở tại Nghệ An thường chịu ảnh hưởng của thời tiết nắng
                  nóng, gió Lào và những đợt mưa lớn. Vì vậy, phương án thiết
                  kế cần xử lý đồng thời khả năng chống nóng, che nắng, thông
                  gió và thoát nước.
                </p>

                <p>
                  Đối với mặt tiền hướng Tây, có thể sử dụng mái đua, ban công,
                  lam chắn nắng, tường hai lớp hoặc cây xanh. Phần mái cần có
                  giải pháp cách nhiệt phù hợp để giảm nhiệt truyền xuống
                  không gian bên trong.
                </p>

                <p>
                  Sân mái, ban công, nhà vệ sinh và khu vực chân tường cần được
                  thiết kế chống thấm đúng kỹ thuật. Hệ thống thoát nước cũng
                  phải được tính toán ngay trong hồ sơ để hạn chế ngập và thấm
                  trong mùa mưa.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  title: "Chống nóng",
                  description:
                    "Tính toán hướng nhà, mái, lam che và vật liệu cách nhiệt.",
                },
                {
                  title: "Thông gió",
                  description:
                    "Tổ chức cửa, giếng trời và khoảng thông tầng hợp lý.",
                },
                {
                  title: "Chống thấm",
                  description:
                    "Xử lý sân mái, ban công, vệ sinh và chân tường.",
                },
                {
                  title: "Thoát nước",
                  description:
                    "Bố trí độ dốc, phễu thu và đường thoát nước phù hợp.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-bold text-amber-400">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUY TRÌNH */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Các bước triển khai
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Quy trình thiết kế nhà ở tại Mộc Viên
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm"
                >
                  <span className="text-3xl font-bold text-amber-500">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-gray-900">
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

        {/* KHU VỰC PHỤC VỤ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Khu vực hoạt động
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Nhận thiết kế nhà ở tại thành phố Vinh và toàn tỉnh Nghệ An
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Tùy theo vị trí và quy mô công trình, Mộc Viên có thể khảo sát,
                tư vấn và triển khai thiết kế tại nhiều khu vực trong tỉnh
                Nghệ An.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm font-semibold text-gray-700"
                >
                  <span className="text-amber-600">●</span>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-amber-100 bg-amber-50/60 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                  Giải đáp thắc mắc
                </span>

                <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
                  Câu hỏi thường gặp về thiết kế nhà ở Nghệ An
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
                  Bạn đang có kế hoạch xây nhà tại Nghệ An?
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-amber-50">
                  Hãy chuẩn bị diện tích khu đất, nhu cầu sử dụng và ngân sách
                  dự kiến để kiến trúc sư tư vấn phương án phù hợp hơn.
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