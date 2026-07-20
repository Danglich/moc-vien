import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  DraftingCompass,
  Hammer,
  HeartHandshake,
  House,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Giới thiệu Mộc Viên - Công ty thiết kế và thi công trọn gói",
  description:
    "Mộc Viên là công ty chuyên thiết kế kiến trúc, thiết kế nội thất và thi công nhà ở trọn gói. Với 8 năm kinh nghiệm, Mộc Viên đã được hàng ngàn khách hàng tin tưởng lựa chọn.",

  keywords: [
    "giới thiệu Mộc Viên",
    "công ty thiết kế nhà",
    "công ty thi công trọn gói",
    "thiết kế kiến trúc",
    "thiết kế nội thất",
    "xây nhà trọn gói",
    "thiết kế nhà Nghệ An",
    "thi công nhà Nghệ An",
  ],

  alternates: {
    canonical: "/gioi-thieu",
  },

  openGraph: {
    title: "Giới thiệu Mộc Viên - Thiết kế và thi công trọn gói",
    description:
      "Đơn vị chuyên thiết kế kiến trúc, nội thất và thi công nhà ở trọn gói với 8 năm kinh nghiệm.",
    url: "https://mocviengroup.vn/gioi-thieu",
    siteName: "Mộc Viên Group",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/gioi-thieu-moc-vien.jpg",
        width: 1200,
        height: 630,
        alt: "Giới thiệu Công ty Mộc Viên Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Giới thiệu Mộc Viên Group",
    description:
      "Mộc Viên chuyên thiết kế kiến trúc, nội thất và thi công nhà ở trọn gói.",
    images: ["/images/gioi-thieu-moc-vien.jpg"],
  },
};

const stats = [
  {
    value: "8+",
    label: "Năm kinh nghiệm",
    icon: Clock3,
  },
  {
    value: "1.000+",
    label: "Khách hàng tin tưởng",
    icon: Users,
  },
  {
    value: "500+",
    label: "Công trình thiết kế",
    icon: House,
  },
  {
    value: "98%",
    label: "Khách hàng hài lòng",
    icon: HeartHandshake,
  },
];

const services = [
  {
    title: "Thiết kế kiến trúc",
    description:
      "Tư vấn và thiết kế nhà phố, biệt thự, nhà vườn, nhà mái Nhật, mái Thái và các công trình dân dụng.",
    icon: DraftingCompass,
  },
  {
    title: "Thiết kế nội thất",
    description:
      "Thiết kế không gian sống khoa học, thẩm mỹ và phù hợp với phong cách riêng của từng gia đình.",
    icon: Building2,
  },
  {
    title: "Thi công trọn gói",
    description:
      "Triển khai từ phần thô đến hoàn thiện, kiểm soát tiến độ, vật liệu và chất lượng trong từng hạng mục.",
    icon: Hammer,
  },
];

const commitments = [
  "Thiết kế phù hợp với diện tích đất, nhu cầu sử dụng và ngân sách.",
  "Hồ sơ kiến trúc, kết cấu, điện nước rõ ràng và đồng bộ.",
  "Báo giá minh bạch, hạn chế tối đa phát sinh trong quá trình thi công.",
  "Giám sát chặt chẽ chất lượng và tiến độ công trình.",
  "Đồng hành cùng khách hàng từ ý tưởng đến khi hoàn thiện.",
  "Bảo hành và hỗ trợ sau khi bàn giao công trình.",
];

const process = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description:
      "Trao đổi về diện tích đất, công năng, phong cách, ngân sách và mong muốn của gia đình.",
  },
  {
    number: "02",
    title: "Khảo sát và tư vấn",
    description:
      "Khảo sát hiện trạng, phân tích điều kiện khu đất và đề xuất phương án phù hợp.",
  },
  {
    number: "03",
    title: "Thiết kế phương án",
    description:
      "Triển khai mặt bằng công năng, phối cảnh kiến trúc và hồ sơ kỹ thuật chi tiết.",
  },
  {
    number: "04",
    title: "Báo giá và thi công",
    description:
      "Lập dự toán rõ ràng, thống nhất vật liệu và tổ chức thi công theo đúng hồ sơ.",
  },
  {
    number: "05",
    title: "Nghiệm thu và bàn giao",
    description:
      "Kiểm tra từng hạng mục, nghiệm thu chất lượng và bàn giao công trình hoàn thiện.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://mocviengroup.vn/gioi-thieu/#aboutpage",
    url: "https://mocviengroup.vn/gioi-thieu",
    name: "Giới thiệu Mộc Viên Group",
    description:
      "Mộc Viên chuyên thiết kế kiến trúc, nội thất và thi công nhà ở trọn gói với 8 năm kinh nghiệm.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://mocviengroup.vn/#website",
      name: "Mộc Viên Group",
      url: "https://mocviengroup.vn",
    },
    about: {
      "@type": "Organization",
      "@id": "https://mocviengroup.vn/#organization",
      name: "Mộc Viên Group",
      url: "https://mocviengroup.vn",
      logo: "https://mocviengroup.vn/logo.png",
      description:
        "Công ty chuyên thiết kế kiến trúc, nội thất và thi công nhà ở trọn gói.",
      foundingDate: "2018",
      areaServed: {
        "@type": "Country",
        name: "Việt Nam",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84-354-136-968",
        contactType: "customer service",
        availableLanguage: ["Vietnamese"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-white text-slate-800">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <Image
              src="/images/gioi-thieu-moc-vien.jpg"
              alt="Công ty thiết kế và thi công Mộc Viên Group"
              fill
              priority
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          </div>

          <div className="relative mx-auto grid min-h-[460px] max-w-7xl items-center px-4 py-12 sm:min-h-[520px] sm:px-6 sm:py-16 lg:min-h-[560px] lg:grid-cols-2 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                Giới thiệu Mộc Viên Group
              </p>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Kiến tạo không gian sống
                <span className="block text-amber-400">
                  bền vững và khác biệt
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:mt-6 md:text-lg md:leading-8">
                Mộc Viên là đơn vị chuyên thiết kế kiến trúc, thiết kế nội
                thất và thi công nhà ở trọn gói. Với 8 năm kinh nghiệm, chúng
                tôi đã đồng hành cùng hàng ngàn khách hàng trong hành trình
                xây dựng một không gian sống đẹp, tiện nghi và phù hợp với
                từng gia đình.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
                <Link
                  href="/du-an"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Xem dự án
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Liên hệ tư vấn
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Thống kê */}
        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:-mt-10 sm:px-6 lg:-mt-12 lg:px-8">
          <div className="grid overflow-hidden rounded-xl bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border-b border-slate-100 p-4 last:border-b-0 sm:gap-4 sm:border-r sm:p-5 lg:border-b-0 lg:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Giới thiệu */}
        <section className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:gap-9 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl sm:min-h-[400px] sm:rounded-2xl lg:min-h-[480px]">
            <Image
              src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/van_phong.png"
              alt="Đội ngũ thiết kế kiến trúc Mộc Viên"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 p-3 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-xl sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-slate-950">
                  <Award size={25} />
                </div>

                <div>
                  <p className="font-bold text-slate-950">
                    8 năm kinh nghiệm thực tế
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Tận tâm trong thiết kế, nghiêm túc trong thi công
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Về Mộc Viên
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:mt-3 sm:text-3xl md:text-4xl">
              Đơn vị thiết kế và thi công trọn gói được nhiều gia đình tin
              tưởng
            </h2>

            <p className="mt-4 leading-7 text-slate-600 sm:mt-6 sm:leading-8">
              Mộc Viên được xây dựng với mục tiêu mang đến những công trình
              không chỉ đẹp về hình thức mà còn hợp lý về công năng, bền vững
              về kết cấu và phù hợp với ngân sách thực tế của khách hàng.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Trong suốt 8 năm hoạt động, đội ngũ kiến trúc sư, kỹ sư và nhân
              sự thi công của Mộc Viên luôn đặt sự minh bạch, trách nhiệm và
              chất lượng lên hàng đầu. Mỗi công trình đều được nghiên cứu dựa
              trên đặc điểm khu đất, điều kiện khí hậu, nhu cầu sử dụng và
              phong cách sống của từng gia đình.
            </p>

            <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
              {[
                "Thiết kế đúng nhu cầu",
                "Tối ưu chi phí đầu tư",
                "Thi công đúng kỹ thuật",
                "Đồng hành đến khi bàn giao",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-amber-600"
                  />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dịch vụ */}
        <section className="bg-slate-50 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Lĩnh vực hoạt động
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:mt-3 sm:text-3xl md:text-4xl">
                Giải pháp toàn diện cho ngôi nhà của bạn
              </h2>

              <p className="mt-3 leading-7 text-slate-600 sm:mt-5 sm:leading-8">
                Mộc Viên cung cấp dịch vụ đồng bộ từ tư vấn, thiết kế đến thi
                công, giúp khách hàng tiết kiệm thời gian và kiểm soát hiệu
                quả chất lượng công trình.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg sm:p-6 lg:p-7"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sứ mệnh */}
        <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:gap-6 sm:px-6 sm:py-16 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:py-24">
          <article className="rounded-xl border border-slate-200 p-5 sm:p-6 lg:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <House size={24} />
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-950 sm:mt-5">Sứ mệnh</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Kiến tạo những không gian sống phù hợp với nhu cầu, ngân sách và
              giá trị riêng của mỗi gia đình.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 p-5 sm:p-6 lg:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <Award size={24} />
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-950 sm:mt-5">Tầm nhìn</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Trở thành thương hiệu thiết kế và thi công nhà ở uy tín, được
              khách hàng tin tưởng trên toàn quốc.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 p-5 sm:p-6 lg:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <HeartHandshake size={24} />
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-950 sm:mt-5">
              Giá trị cốt lõi
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Tận tâm, minh bạch, sáng tạo, trách nhiệm và luôn đặt lợi ích
              lâu dài của khách hàng lên hàng đầu.
            </p>
          </article>
        </section>

        {/* Cam kết */}
        <section className="bg-slate-950 py-12 text-white sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:gap-9 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Cam kết của Mộc Viên
              </p>

              <h2 className="mt-2 text-2xl font-bold leading-tight sm:mt-3 sm:text-3xl md:text-4xl">
                Chất lượng được kiểm soát trong từng giai đoạn
              </h2>

              <p className="mt-4 leading-7 text-slate-300 sm:mt-6 sm:leading-8">
                Chúng tôi hiểu rằng xây nhà là một quyết định quan trọng. Vì
                vậy, Mộc Viên luôn xây dựng quy trình làm việc rõ ràng, kiểm
                soát kỹ hồ sơ thiết kế, vật liệu, kỹ thuật thi công và tiến độ
                thực hiện.
              </p>

              <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck
                      size={21}
                      className="mt-1 shrink-0 text-amber-400"
                    />
                    <p className="leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-xl sm:min-h-[400px] sm:rounded-2xl lg:min-h-[520px]">
              <Image
                src="https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/anh-van-phong.png"
                alt="Mộc Viên thi công nhà ở trọn gói"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Quy trình */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Quy trình làm việc
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:mt-3 sm:text-3xl md:text-4xl">
              Đồng hành từ ý tưởng đến công trình hoàn thiện
            </h2>
          </div>

          <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-4 lg:mt-12 lg:grid-cols-5 lg:gap-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative rounded-xl border border-slate-200 p-4 sm:p-5 lg:p-6"
              >
                <span className="text-4xl font-bold text-amber-500">
                  {step.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-slate-950 sm:mt-5">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-amber-500 px-5 py-8 sm:rounded-2xl sm:px-7 sm:py-10 md:px-12 md:py-12">
            <div className="grid items-center gap-5 sm:gap-7 lg:grid-cols-[1fr_auto] lg:gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
                  Bạn đang chuẩn bị xây nhà?
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:mt-3 sm:text-3xl md:text-4xl">
                  Hãy để Mộc Viên đồng hành cùng gia đình bạn
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-slate-800">
                  Liên hệ với đội ngũ Mộc Viên để được tư vấn phương án thiết
                  kế, chi phí và quy trình thi công phù hợp với nhu cầu thực
                  tế.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="tel:0354136968"
                  className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  <Phone size={18} />
                  0354 136 968
                </a>

                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-950 px-6 py-3 font-semibold text-slate-950 transition hover:bg-white"
                >
                  <MapPin size={18} />
                  Liên hệ Mộc Viên
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}