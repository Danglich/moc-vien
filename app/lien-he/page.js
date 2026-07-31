import Link from "next/link";

export const metadata = {
  title: "Liên hệ Mộc Viên Group tại Nghệ An",
  description:
    "Địa chỉ Mộc Viên Group: 247 Xô Viết Nghệ Tĩnh, phường Vinh Phú, Nghệ An. Hotline 0354.136.968. Tư vấn thiết kế và thi công nhà ở.",
  alternates: {
    canonical: "https://mocviengroup.vn/lien-he",
  },
  openGraph: {
    title: "Liên hệ Mộc Viên Group tại Nghệ An",
    description:
      "Địa chỉ Mộc Viên Group: 247 Xô Viết Nghệ Tĩnh, phường Vinh Phú, Nghệ An. Hotline 0354.136.968.",
    url: "https://mocviengroup.vn/lien-he",
    siteName: "Mộc Viên Group",
    locale: "vi_VN",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mộc Viên Group",
  url: "https://mocviengroup.vn",
  description:
    "Mộc Viên Group chuyên thiết kế kiến trúc, thiết kế nội thất và thi công nhà ở trọn gói tại Nghệ An, Hà Tĩnh và các tỉnh thành trên toàn quốc.",
  telephone: "+84354136968",
  email: "mocviengroup8386@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "247 Xô Viết Nghệ Tĩnh",
    addressLocality: "Vinh Phú",
    addressRegion: "Nghệ An",
    addressCountry: "VN",
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
    {
      "@type": "Country",
      name: "Việt Nam",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+84354136968",
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: "Vietnamese",
    },
    {
      "@type": "ContactPoint",
      telephone: "+84828001569",
      contactType: "sales",
      areaServed: "VN",
      availableLanguage: "Vietnamese",
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="mb-7 border-b border-gray-200">
          <h1 className="inline-block border-b-2 border-amber-400 pb-3 text-3xl font-semibold text-gray-900">
            Liên hệ Mộc Viên Group
          </h1>
        </div>

        {/* Đoạn mô tả giúp Google ưu tiên hiển thị địa chỉ */}
        <p className="mb-8 max-w-4xl text-base leading-7 text-gray-700">
          Địa chỉ Mộc Viên Group tại{" "}
          <strong className="font-semibold text-gray-900">
            247 Xô Viết Nghệ Tĩnh, phường Vinh Phú, Nghệ An
          </strong>
          . Liên hệ hotline{" "}
          <a
            href="tel:0354136968"
            className="font-semibold text-blue-600 hover:underline"
          >
            0354.136.968
          </a>{" "}
          để được tư vấn thiết kế kiến trúc, thiết kế nội thất và thi công nhà
          ở.
        </p>

        {/* Thông tin và form */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Thông tin liên hệ */}
          <section aria-labelledby="contact-information">
            <h2
              id="contact-information"
              className="mb-5 text-2xl font-semibold text-gray-900"
            >
              Thông tin liên hệ
            </h2>

            <address className="not-italic">
              <ul className="mb-7 list-disc space-y-3 pl-6 text-base leading-7 text-gray-700">
                <li>
                  <strong className="text-gray-900">Địa chỉ văn phòng:</strong>{" "}
                  247 Xô Viết Nghệ Tĩnh, phường Vinh Phú, Nghệ An
                </li>

                <li>
                  <strong className="text-gray-900">
                    Khu vực hoạt động:
                  </strong>{" "}
                  Nghệ An, Hà Tĩnh và các tỉnh thành trên toàn quốc
                </li>
              </ul>

              <div className="space-y-4 text-base text-gray-700">
                <p>
                  <strong className="font-semibold text-gray-900">
                    Email:
                  </strong>{" "}
                  <a
                    href="mailto:mocviengroup8386@gmail.com"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    mocviengroup8386@gmail.com
                  </a>
                </p>

                <p>
                  <strong className="font-semibold text-gray-900">
                    Điện thoại:
                  </strong>{" "}
                  <a
                    href="tel:0828001569"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    082.8001.569
                  </a>
                </p>

                <p>
                  <strong className="font-semibold text-gray-900">
                    Hotline:
                  </strong>{" "}
                  <a
                    href="tel:0354136968"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    0354.136.968
                  </a>
                </p>
              </div>
            </address>
          </section>

          {/* Form liên hệ */}
          <section aria-labelledby="contact-form">
            <h2
              id="contact-form"
              className="mb-5 text-2xl font-semibold text-gray-900"
            >
              Gửi yêu cầu tư vấn của bạn
            </h2>

            <form
              action="https://formsubmit.co/mocviengroup8386@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="Yêu cầu tư vấn mới từ website Mộc Viên"
              />

              <input type="hidden" name="_captcha" value="false" />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <div>
                <label htmlFor="name" className="sr-only">
                  Họ và tên
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Họ và tên"
                  className="h-12 w-full rounded-sm border border-gray-300 px-5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Địa chỉ email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Địa chỉ email"
                  className="h-12 w-full rounded-sm border border-gray-300 px-5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Điện thoại
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Điện thoại"
                  className="h-12 w-full rounded-sm border border-gray-300 px-5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Yêu cầu của bạn
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Yêu cầu của bạn"
                  className="w-full resize-y rounded-sm border border-gray-300 px-5 py-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <button
                type="submit"
                className="rounded bg-amber-400 px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-amber-500"
              >
                Liên hệ ngay
              </button>
            </form>
          </section>
        </div>

        {/* Google Maps */}
        <section
          className="mt-16 overflow-hidden"
          aria-labelledby="office-location"
        >
          <h2
            id="office-location"
            className="mb-5 text-2xl font-semibold text-gray-900"
          >
            Vị trí văn phòng Mộc Viên Group
          </h2>

          <iframe
            title="Bản đồ văn phòng Mộc Viên Group tại 247 Xô Viết Nghệ Tĩnh, Nghệ An"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.8769793908796!2d105.67230951113869!3d18.71432506315305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139d1e35ffa9113%3A0xb74ce16e5c0e83db!2zMjQ3IFjDtCBWaeG6v3QgTmdo4buHIFTEqW5oLCBWaW5oIFBow7osIE5naOG7hyBBbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1784530363696!5m2!1svi!2s"
            width="100%"
            height="420"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="border-0"
          />
        </section>
      </div>
    </main>
  );
}