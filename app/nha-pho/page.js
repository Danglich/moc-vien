import { supabase } from "@/app/lib/supabase";
import ProjectGrid from "../components/ui/ProjectGrid";

const type = "Nhà phố";
const pageUrl = "https://mocviengroup.vn/nha-pho";

export const revalidate = 60;

export const metadata = {
  title: "Mẫu Nhà Phố Đẹp, Hiện Đại, Tối Ưu Công Năng | Mộc Viên Group",

  description:
    "Tổng hợp những mẫu nhà phố đẹp, hiện đại, nhà ống 2 tầng, 3 tầng và nhà phố mặt tiền hẹp do Mộc Viên thiết kế. Công năng khoa học, phù hợp nhiều diện tích đất.",

  keywords: [
    "nhà phố",
    "mẫu nhà phố đẹp",
    "nhà phố hiện đại",
    "nhà ống đẹp",
    "nhà phố 2 tầng",
    "nhà phố 3 tầng",
    "nhà phố mặt tiền 5m",
    "thiết kế nhà phố",
    "thiết kế nhà ống",
    "mẫu nhà phố Nghệ An",
    "thiết kế nhà Hà Tĩnh",
    "Mộc Viên Group",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Mẫu Nhà Phố Đẹp, Hiện Đại | Mộc Viên Group",
    description:
      "Khám phá các mẫu nhà phố hiện đại, tối ưu công năng và phù hợp với nhiều diện tích đất do Mộc Viên thiết kế.",
    url: pageUrl,
    siteName: "Mộc Viên Group",
    type: "website",
    locale: "vi_VN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mẫu Nhà Phố Đẹp, Hiện Đại | Mộc Viên Group",
    description:
      "Tổng hợp các mẫu nhà phố 2 tầng, 3 tầng và nhà ống hiện đại do Mộc Viên thiết kế.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
    console.error("Lỗi lấy danh sách dự án nhà phố:", error);
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
    name: "Danh sách mẫu nhà phố đẹp",
    description:
      "Tổng hợp các mẫu nhà phố đẹp, hiện đại và tối ưu công năng do Mộc Viên thiết kế.",
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
      question: "Chi phí xây nhà phố khoảng bao nhiêu?",
      answer:
        "Chi phí xây nhà phố phụ thuộc vào diện tích xây dựng, số tầng, phong cách kiến trúc, kết cấu móng, vật liệu hoàn thiện và khu vực thi công. Gia chủ nên có hồ sơ thiết kế và bảng dự toán chi tiết trước khi xây dựng để kiểm soát ngân sách.",
    },
    {
      question: "Nhà phố mặt tiền 5 mét nên bố trí công năng thế nào?",
      answer:
        "Với nhà phố mặt tiền khoảng 5 mét, nên hạn chế hành lang dài, bố trí cầu thang hợp lý và kết hợp giếng trời để tăng ánh sáng, thông gió. Công năng cần được sắp xếp theo nhu cầu của từng gia đình và chiều sâu khu đất.",
    },
    {
      question: "Nhà phố có cần làm giếng trời không?",
      answer:
        "Những mẫu nhà phố có chiều sâu lớn hoặc bị che chắn hai bên thường nên bố trí giếng trời. Giếng trời giúp lấy sáng, thông gió và giảm cảm giác bí bách cho khu vực cầu thang, phòng bếp hoặc hành lang.",
    },
    {
      question: "Nhà phố nên xây 2 tầng hay 3 tầng?",
      answer:
        "Việc lựa chọn số tầng phụ thuộc vào diện tích đất, số lượng thành viên, nhu cầu phòng ngủ và ngân sách. Nhà phố 2 tầng phù hợp với gia đình có nhu cầu vừa phải, trong khi nhà 3 tầng phù hợp khi cần thêm phòng ngủ, phòng thờ hoặc không gian làm việc.",
    },
    {
      question: "Mộc Viên có nhận thiết kế và thi công nhà phố không?",
      answer:
        "Mộc Viên cung cấp dịch vụ tư vấn, thiết kế kiến trúc, thiết kế nội thất, giám sát và thi công nhà phố theo diện tích đất, nhu cầu sử dụng và ngân sách của từng gia đình.",
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
        {/* TIÊU ĐỀ ĐẦU TRANG */}
        <section className="border-b border-amber-100 bg-gradient-to-r from-amber-50 via-yellow-50 to-white">
          <div className="container mx-auto px-4 py-8 md:py-10">
            <div className="max-w-4xl">
              <div className="mb-3 inline-flex rounded-full border border-amber-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm">
                Bộ sưu tập thiết kế Mộc Viên
              </div>

              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Mẫu nhà phố đẹp, hiện đại
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                Tham khảo những mẫu nhà phố 2 tầng, 3 tầng và nhà ống hiện
                đại được thiết kế tối ưu công năng, ánh sáng và thông gió.
              </p>
            </div>
          </div>
        </section>

        {/* DANH SÁCH DỰ ÁN */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mb-7 flex flex-col justify-between gap-4 border-b border-gray-100 pb-5 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                  Dự án nổi bật
                </span>

                <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                  Các mẫu nhà phố mới nhất
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
                  Nhấn vào từng mẫu nhà để xem phối cảnh kiến trúc, công
                  năng và thông tin chi tiết của dự án.
                </p>
              </div>

              {projects.length > 0 && (
                <div className="shrink-0 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                  {projects.length} mẫu thiết kế
                </div>
              )}
            </div>
          </div>

          {projects.length > 0 ? (
            <ProjectGrid title="" projects={projects} pageSize={12} />
          ) : (
            <div className="container mx-auto px-4 py-10">
              <div className="mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-amber-50 p-10 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl">
                  🏠
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

        {/* ĐẶC ĐIỂM NHÀ PHỐ */}
        <section className="border-y border-amber-100 bg-amber-50/70">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Tối ưu diện tích",
                  description: "Tận dụng hiệu quả mặt tiền và chiều sâu khu đất",
                },
                {
                  title: "Lấy sáng tự nhiên",
                  description: "Bố trí giếng trời, cửa sổ và khoảng thông tầng",
                },
                {
                  title: "Thông gió hiệu quả",
                  description: "Hạn chế cảm giác bí bách trong nhà phố dài",
                },
                {
                  title: "Kiểm soát chi phí",
                  description: "Thiết kế phù hợp với ngân sách của gia đình",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-sm font-bold text-amber-700">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                    Thiết kế nhà phố phù hợp với diện tích và nhu cầu sử dụng
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    Nhà phố thường có mặt tiền hẹp và chiều sâu lớn. Vì vậy,
                    việc tổ chức công năng, ánh sáng và thông gió cần được
                    tính toán kỹ ngay từ giai đoạn thiết kế.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Tối ưu diện tích sử dụng",
                      "Tăng ánh sáng tự nhiên",
                      "Hạn chế không gian bí bách",
                      "Đảm bảo thẩm mỹ mặt tiền",
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
                        Những mẫu nhà phố đẹp được nhiều gia đình lựa chọn
                      </h2>

                      <div className="mt-4 h-1 w-14 rounded-full bg-amber-400" />

                      <p className="mt-5">
                        Nhà phố là loại hình nhà ở phổ biến tại thành phố,
                        thị xã và các khu dân cư đông đúc. Đặc điểm thường
                        gặp của nhà phố là chiều ngang hạn chế nhưng chiều
                        sâu tương đối lớn, hai bên có thể tiếp giáp với các
                        công trình khác.
                      </p>

                      <p className="mt-4">
                        Vì vậy, một phương án nhà phố đẹp không chỉ cần có
                        mặt tiền hiện đại mà còn phải giải quyết tốt vấn đề
                        công năng, ánh sáng, thông gió, giao thông trong nhà
                        và sự riêng tư giữa các không gian.
                      </p>
                    </section>

                    <section className="rounded-3xl bg-amber-50 p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-amber-700 shadow-sm">
                        Công năng
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Bố trí công năng khoa học cho nhà phố
                      </h2>

                      <p className="mt-5">
                        Khi thiết kế nhà phố, cầu thang là một trong những
                        khu vực ảnh hưởng lớn đến toàn bộ mặt bằng. Vị trí
                        cầu thang cần thuận tiện cho việc di chuyển nhưng
                        không chiếm quá nhiều diện tích hoặc chia nhỏ không
                        gian sinh hoạt.
                      </p>

                      <p className="mt-4">
                        Phòng khách, phòng bếp, phòng ngủ, phòng thờ và khu
                        vệ sinh cần được bố trí phù hợp với thói quen sử dụng
                        của gia đình. Với những khu đất dài, có thể sử dụng
                        sân trong hoặc giếng trời để chia khoảng không gian
                        và tăng chất lượng chiếu sáng.
                      </p>
                    </section>

                    <section>
                      <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                        Ánh sáng
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Giải pháp lấy sáng và thông gió cho nhà phố
                      </h2>

                      <p className="mt-5">
                        Nhà phố thường khó mở cửa sổ ở hai bên do tiếp giáp
                        với nhà hàng xóm. Vì vậy, ngoài mặt tiền và mặt sau,
                        giếng trời là giải pháp quan trọng giúp đưa ánh sáng
                        và không khí tự nhiên vào giữa nhà.
                      </p>

                      <p className="mt-4">
                        Giếng trời có thể bố trí tại khu vực cầu thang,
                        phòng bếp hoặc khoảng giữa phòng khách và bếp. Tuy
                        nhiên, cần xử lý tốt hệ mái che, thoát nước và chống
                        thấm để tránh phát sinh sự cố trong quá trình sử dụng.
                      </p>
                    </section>

                    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-amber-200/70 px-3 py-1 text-sm font-semibold text-amber-800">
                        Kinh nghiệm
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Vì sao nên thiết kế nhà phố trước khi xây dựng?
                      </h2>

                      <p className="mt-5">
                        Nhà phố thường có diện tích đất hạn chế nên chỉ cần
                        bố trí sai cầu thang, vệ sinh hoặc phòng ngủ cũng có
                        thể làm giảm đáng kể diện tích sử dụng. Hồ sơ thiết
                        kế giúp gia chủ kiểm tra trước công năng và hình thức
                        ngôi nhà trước khi thi công.
                      </p>

                      <p className="mt-4">
                        Bản vẽ thiết kế đầy đủ cũng giúp đội ngũ thi công
                        xác định chính xác kích thước, kết cấu, vị trí điện
                        nước và vật liệu hoàn thiện. Nhờ đó, gia chủ có thể
                        hạn chế việc đập sửa và kiểm soát tốt hơn các khoản
                        chi phí phát sinh.
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
                  Câu hỏi thường gặp về nhà phố
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                  Những vấn đề được nhiều gia chủ quan tâm trước khi thiết
                  kế và xây dựng nhà phố.
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