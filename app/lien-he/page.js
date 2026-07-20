import Link from "next/link";

export const metadata = {
  title: "Liên hệ | Mộc Viên",
  description:
    "Liên hệ Mộc Viên để được tư vấn thiết kế và thi công nhà ở.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">

        {/* Tiêu đề */}
        <div className="mb-7 border-b border-gray-200">
          <h1 className="inline-block border-b-2 border-amber-400 pb-3 text-3xl font-semibold text-gray-900">
            Liên hệ
          </h1>
        </div>

        {/* Thông tin và form */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Thông tin liên hệ */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold text-gray-900">
              Địa chỉ:
            </h2>

            <ul className="mb-7 list-disc space-y-3 pl-6 text-base leading-7 text-gray-700">
              <li>
                <strong className="text-gray-900">Văn phòng:</strong>{" "}
                247 Xô Viết Nghệ Tĩnh - Phường Vinh Phú - Nghệ An
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
                Email:{" "}
                <a
                  href="mailto:mocviengroup8386@gmail.com"
                  className="font-medium text-blue-600 hover:underline"
                >
                  mocviengroup8386@gmail.com
                </a>
              </p>

              <p>
                Điện thoại:{" "}
                <a
                  href="tel:0828001569"
                  className="font-medium text-blue-600 hover:underline"
                >
                  082.8001.569
                </a>
              </p>

              <p>
                Hotline:{" "}
                <a
                  href="tel:0354136968"
                  className="font-medium text-blue-600 hover:underline"
                >
                  0354.136.968
                </a>
              </p>
            </div>
          </section>

          {/* Form liên hệ */}
          <section>
            <h2 className="mb-5 text-2xl font-semibold text-gray-900">
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

              <div>
                <label htmlFor="name" className="sr-only">
                  Họ và tên
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
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
        <section className="mt-16 overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.8769793908796!2d105.67230951113869!3d18.71432506315305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139d1e35ffa9113%3A0xb74ce16e5c0e83db!2zMjQ3IFjDtCBWaeG6v3QgTmdo4buHIFTEqW5oLCBWaW5oIFBow7osIE5naOG7hyBBbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1784530363696!5m2!1svi!2s" width="100%" height="420" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </section>
      </div>
    </main>
  );
}