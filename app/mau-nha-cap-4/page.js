import { supabase } from "@/app/lib/supabase";
import ProjectGrid from "../components/ui/ProjectGrid";

const type = "Nhà cấp 4";
const pageUrl = "https://mocviengroup.vn/nha-cap-4";

export const metadata = {
  title: "Mẫu Nhà Cấp 4 Đẹp, Hiện Đại | Mộc Viên Group",

  description:
    "Tổng hợp những mẫu nhà cấp 4 đẹp, hiện đại, mái Nhật, mái Thái và nhà vườn do Mộc Viên thiết kế. Công năng khoa học, phù hợp với nhiều diện tích và ngân sách.",

  keywords: [
    "nhà cấp 4",
    "mẫu nhà cấp 4 đẹp",
    "nhà cấp 4 hiện đại",
    "nhà cấp 4 mái Nhật",
    "nhà cấp 4 mái Thái",
    "nhà vườn cấp 4",
    "thiết kế nhà cấp 4",
    "mẫu nhà cấp 4 nông thôn",
    "thiết kế nhà Nghệ An",
    "Mộc Viên Group",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Mẫu Nhà Cấp 4 Đẹp, Hiện Đại | Mộc Viên Group",
    description:
      "Khám phá những mẫu nhà cấp 4 đẹp, hiện đại, tối ưu công năng do Mộc Viên thiết kế.",
    url: pageUrl,
    siteName: "Mộc Viên Group",
    type: "website",
    locale: "vi_VN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mẫu Nhà Cấp 4 Đẹp, Hiện Đại | Mộc Viên Group",
    description:
      "Tổng hợp các mẫu nhà cấp 4 đẹp, mái Nhật, mái Thái và nhà vườn do Mộc Viên thiết kế.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page() {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      id,
      name,
      slug,
      thumbnail,
      types,
      created_at
    `)
    .contains("types", [type])
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Lỗi lấy danh sách dự án:", error);
  }

  const projects = (data || []).map((project) => ({
    id: project.id,
    title: project.name,
    slug: project.slug,
    image: project.thumbnail,
    types: project.types || [],
    created_at: project.created_at,
  }));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Danh sách mẫu nhà cấp 4 đẹp",
    description:
      "Tổng hợp các mẫu nhà cấp 4 đẹp, hiện đại do Mộc Viên thiết kế.",
    url: pageUrl,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        url: `https://mocviengroup.vn/du-an/${project.slug}`,
        image: project.image || undefined,
      },
    })),
  };

  const faqItems = [
    {
      question: "Chi phí xây nhà cấp 4 khoảng bao nhiêu?",
      answer:
        "Chi phí phụ thuộc vào diện tích, phong cách kiến trúc, loại mái, vật liệu hoàn thiện và khu vực xây dựng. Gia chủ nên có hồ sơ thiết kế cụ thể để lập dự toán chính xác và hạn chế phát sinh.",
    },
    {
      question: "Nhà cấp 4 nên làm mái Nhật hay mái Thái?",
      answer:
        "Mái Nhật phù hợp với phong cách nhẹ nhàng, hiện đại và có độ dốc vừa phải. Mái Thái có độ dốc cao, thoát nước tốt và tạo cảm giác bề thế. Việc lựa chọn nên dựa trên phong cách, khí hậu và ngân sách.",
    },
    {
      question: "Diện tích nhà cấp 4 bao nhiêu là hợp lý?",
      answer:
        "Với gia đình từ 4 đến 6 người, diện tích khoảng 100 đến 160 mét vuông thường có thể bố trí phòng khách, bếp, phòng thờ và từ 3 đến 4 phòng ngủ.",
    },
    {
      question: "Thiết kế nhà cấp 4 mất bao lâu?",
      answer:
        "Thời gian thiết kế phụ thuộc vào quy mô và mức độ chi tiết của công trình. Quy trình thường gồm khảo sát, bố trí mặt bằng, dựng phối cảnh và hoàn thiện hồ sơ kỹ thuật thi công.",
    },
    {
      question: "Mộc Viên có nhận thiết kế và thi công nhà cấp 4 không?",
      answer:
        "Mộc Viên cung cấp dịch vụ tư vấn, thiết kế kiến trúc, nội thất, giám sát và thi công nhà ở theo nhu cầu, diện tích đất và ngân sách của từng gia đình.",
    },
  ];

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="bg-white">
        {/* PHẦN GIỚI THIỆU ĐẦU TRANG */}
        <section className="relative overflow-hidden border-b border-amber-100 bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

          <div className="container relative mx-auto px-4 py-14 md:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                Bộ sưu tập thiết kế của Mộc Viên
              </div>

              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl md:leading-tight">
                Mẫu nhà cấp 4 đẹp, hiện đại
                <span className="block text-amber-600">
                  và tối ưu công năng
                </span>
              </h1>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-amber-400" />

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
                Tổng hợp những mẫu nhà cấp 4 đẹp, tiện nghi và phù hợp với nhu
                cầu thực tế của từng gia đình. Mỗi phương án đều được Mộc Viên
                nghiên cứu kỹ về công năng, thẩm mỹ, khí hậu và ngân sách đầu
                tư.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  "Nhà cấp 4 mái Nhật",
                  "Nhà cấp 4 mái Thái",
                  "Nhà vườn hiện đại",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DANH SÁCH DỰ ÁN */}
        <section className="py-6 md:py-10">
          {projects.length > 0 ? (
            <ProjectGrid
              title={type}
              projects={projects}
              pageSize={9}
            />
          ) : (
            <div className="container mx-auto px-4 py-12">
              <div className="mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-amber-50 p-10 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl">
                  🏡
                </div>

                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  Chưa có dự án phù hợp
                </h2>

                <p className="mt-3 text-gray-600">
                  Hiện chưa có dự án thuộc loại “{type}”.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* NỘI DUNG SEO */}
        <section className="bg-gradient-to-b from-white to-amber-50/60 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_2.2fr]">
                {/* SIDEBAR */}
                <aside className="h-fit rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm lg:sticky lg:top-24">
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                    Mộc Viên chia sẻ
                  </p>

                  <h2 className="mt-3 text-2xl font-bold leading-snug text-gray-900">
                    Thiết kế nhà cấp 4 phù hợp với từng gia đình
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    Một ngôi nhà đẹp không chỉ nằm ở hình thức bên ngoài mà còn
                    phải phù hợp với thói quen sinh hoạt, diện tích đất và ngân
                    sách của gia chủ.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Tối ưu công năng sử dụng",
                      "Phù hợp khí hậu miền Trung",
                      "Kiểm soát chi phí xây dựng",
                      "Đảm bảo thẩm mỹ lâu dài",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-sm"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                          ✓
                        </span>

                        <span className="text-sm font-medium leading-6 text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </aside>

                {/* CONTENT */}
                <article className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm md:p-10">
                  <div className="space-y-10 text-base leading-8 text-gray-700">
                    <section>
                      <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                        Tổng quan
                      </span>

                      <h2 className="text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                        Những mẫu nhà cấp 4 đẹp được nhiều gia đình lựa chọn
                      </h2>

                      <div className="mt-4 h-1 w-14 rounded-full bg-amber-400" />

                      <p className="mt-5">
                        Nhà cấp 4 là loại hình nhà ở được nhiều gia đình lựa
                        chọn nhờ chi phí xây dựng hợp lý, thời gian thi công
                        nhanh và khả năng đáp ứng tốt nhu cầu sinh hoạt. Với sự
                        phát triển của kiến trúc hiện đại, các mẫu nhà cấp 4
                        ngày nay không chỉ đơn giản mà còn có tính thẩm mỹ cao,
                        công năng khoa học và không gian sống tiện nghi.
                      </p>

                      <p className="mt-4">
                        Tại Mộc Viên, mỗi mẫu nhà cấp 4 đều được nghiên cứu dựa
                        trên diện tích khu đất, hướng nhà, nhu cầu sử dụng, số
                        lượng thành viên và ngân sách đầu tư. Việc bố trí phòng
                        khách, phòng bếp, phòng ngủ, phòng thờ và khu vệ sinh
                        được tính toán hợp lý, hạn chế diện tích giao thông và
                        tận dụng tối đa không gian sử dụng.
                      </p>
                    </section>

                    <section className="rounded-3xl bg-amber-50 p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-amber-700 shadow-sm">
                        Phong cách
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Đa dạng phong cách thiết kế nhà cấp 4
                      </h2>

                      <p className="mt-5">
                        Các mẫu nhà cấp 4 hiện nay có nhiều phong cách như nhà
                        cấp 4 mái Nhật, nhà cấp 4 mái Thái, nhà cấp 4 hiện đại,
                        nhà cấp 4 chữ L và nhà vườn cấp 4. Mỗi phong cách có
                        đặc điểm riêng về hình khối, hệ mái, vật liệu và mức
                        chi phí xây dựng.
                      </p>

                      <p className="mt-4">
                        Nhà cấp 4 mái Nhật thường có hình thức cân đối, độ dốc
                        mái vừa phải và phù hợp với những gia đình yêu thích vẻ
                        đẹp nhẹ nhàng, hiện đại. Nhà cấp 4 mái Thái có hệ mái
                        cao, khả năng thoát nước tốt và tạo cảm giác bề thế.
                        Trong khi đó, nhà cấp 4 hiện đại thường sử dụng hình
                        khối đơn giản, cửa kính lớn và vật liệu mới để tạo nên
                        không gian trẻ trung.
                      </p>
                    </section>

                    <section>
                      <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                        Khí hậu
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Thiết kế nhà cấp 4 phù hợp với khí hậu miền Trung
                      </h2>

                      <p className="mt-5">
                        Khi thiết kế nhà cấp 4 tại Nghệ An, Hà Tĩnh và khu vực
                        miền Trung, cần đặc biệt quan tâm đến khả năng chống
                        nóng, chống thấm, thoát nước mái và thông gió tự nhiên.
                        Hệ mái cần có độ dốc phù hợp, phần đua mái đủ rộng và
                        vật liệu hoàn thiện phải có khả năng chịu được điều
                        kiện thời tiết khắc nghiệt.
                      </p>

                      <p className="mt-4">
                        Bên cạnh đó, việc bố trí cửa sổ, cửa đi và các khoảng
                        sân vườn hợp lý sẽ giúp ngôi nhà đón ánh sáng tự nhiên
                        nhưng vẫn hạn chế nắng nóng trực tiếp. Đây là yếu tố
                        quan trọng để tạo nên không gian sống thoáng mát và
                        tiết kiệm điện năng.
                      </p>
                    </section>

                    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-amber-200/70 px-3 py-1 text-sm font-semibold text-amber-800">
                        Kinh nghiệm
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Vì sao nên thiết kế nhà cấp 4 trước khi thi công?
                      </h2>

                      <p className="mt-5">
                        Một bộ hồ sơ thiết kế đầy đủ sẽ giúp gia chủ hình dung
                        rõ hình thức ngôi nhà, kiểm soát công năng và dự toán
                        chi phí trước khi xây dựng. Hồ sơ cũng giúp đội ngũ thi
                        công thực hiện đúng kích thước, kết cấu, vật liệu và
                        hạn chế tối đa việc sửa đổi hoặc phát sinh chi phí.
                      </p>

                      <p className="mt-4">
                        Mộc Viên cung cấp giải pháp từ tư vấn ý tưởng, thiết kế
                        mặt bằng công năng, phối cảnh kiến trúc, hồ sơ kỹ thuật
                        đến giám sát và thi công. Mỗi công trình được phát triển
                        dựa trên nhu cầu thực tế của gia đình, đảm bảo sự cân
                        bằng giữa thẩm mỹ, công năng, chất lượng và ngân sách
                        đầu tư.
                      </p>
                    </section>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-amber-100 bg-[#fffaf0] py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                  Giải đáp thắc mắc
                </span>

                <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
                  Câu hỏi thường gặp về nhà cấp 4
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                  Những vấn đề được nhiều gia chủ quan tâm trước khi thiết kế
                  và xây dựng nhà cấp 4.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                {faqItems.map((item, index) => (
                  <article
                    key={item.question}
                    className="group rounded-3xl border border-amber-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 font-bold text-amber-700 transition group-hover:bg-amber-500 group-hover:text-white">
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
      </main>
    </>
  );
}