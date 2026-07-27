import { supabase } from "@/app/lib/supabase";
import ProjectGrid from "../components/ui/ProjectGrid";

const type = "Thiết kế nhà hiện đại";
const pageUrl = "https://mocviengroup.vn/mau-nha-hien-dai";

export const revalidate = 60;

export const metadata = {
  title:
    "Mẫu Nhà Hiện Đại Đẹp, Xu Hướng Thiết Kế Mới Nhất | Mộc Viên Group",

  description:
    "Tổng hợp những mẫu nhà hiện đại đẹp, nhà 1 tầng, nhà 2 tầng, nhà phố và villa hiện đại do Mộc Viên thiết kế. Công năng tối ưu, kiến trúc sang trọng và phù hợp xu hướng mới.",

  keywords: [
    "mẫu nhà hiện đại",
    "nhà hiện đại",
    "thiết kế nhà hiện đại",
    "nhà đẹp hiện đại",
    "nhà 1 tầng hiện đại",
    "nhà 2 tầng hiện đại",
    "nhà cấp 4 hiện đại",
    "nhà phố hiện đại",
    "villa hiện đại",
    "biệt thự hiện đại",
    "mẫu nhà hiện đại Nghệ An",
    "thiết kế nhà Hà Tĩnh",
    "Mộc Viên Group",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Mẫu Nhà Hiện Đại Đẹp | Mộc Viên Group",
    description:
      "Khám phá những mẫu nhà hiện đại đẹp, tối ưu công năng và phù hợp với nhiều diện tích đất.",
    url: pageUrl,
    siteName: "Mộc Viên Group",
    type: "website",
    locale: "vi_VN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mẫu Nhà Hiện Đại Đẹp | Mộc Viên Group",
    description:
      "Tổng hợp các mẫu nhà hiện đại mới nhất do Mộc Viên thiết kế.",
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
    console.error("Lỗi lấy danh sách dự án nhà hiện đại:", error);
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
    name: "Danh sách mẫu nhà hiện đại đẹp",
    description:
      "Tổng hợp các mẫu nhà hiện đại đẹp, sang trọng và tối ưu công năng do Mộc Viên thiết kế.",
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
      question: "Nhà hiện đại có những ưu điểm gì?",
      answer:
        "Nhà hiện đại thường sử dụng hình khối tinh gọn, không gian mở, cửa kính lớn và cách bố trí công năng linh hoạt. Phong cách này giúp tận dụng ánh sáng tự nhiên, tạo cảm giác rộng rãi và phù hợp với nhu cầu sống ngày nay.",
    },
    {
      question: "Nhà hiện đại phù hợp với diện tích đất nào?",
      answer:
        "Kiến trúc hiện đại có thể áp dụng cho nhiều loại khu đất, từ nhà phố mặt tiền hẹp, nhà cấp 4, nhà vườn đến villa và biệt thự. Phương án thiết kế sẽ được điều chỉnh theo diện tích, hình dáng đất và nhu cầu sử dụng.",
    },
    {
      question: "Xây nhà hiện đại có chi phí cao không?",
      answer:
        "Chi phí xây nhà hiện đại phụ thuộc vào diện tích, số tầng, kết cấu, vật liệu hoàn thiện và mức độ đầu tư. Phong cách hiện đại có thể thiết kế theo nhiều mức ngân sách nếu được tính toán ngay từ giai đoạn đầu.",
    },
    {
      question: "Nhà hiện đại có phù hợp với khí hậu miền Trung không?",
      answer:
        "Nhà hiện đại hoàn toàn có thể phù hợp với khí hậu Nghệ An, Hà Tĩnh và miền Trung nếu thiết kế tốt giải pháp chống nóng, che nắng, thông gió, chống thấm và thoát nước.",
    },
    {
      question: "Mộc Viên có nhận thiết kế và thi công nhà hiện đại không?",
      answer:
        "Mộc Viên cung cấp dịch vụ tư vấn, thiết kế kiến trúc, nội thất, giám sát và thi công các mẫu nhà hiện đại theo diện tích đất, nhu cầu sử dụng và ngân sách của từng gia đình.",
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
        {/* TIÊU ĐỀ NGẮN ĐẦU TRANG */}
        <section className="border-b border-amber-100 bg-gradient-to-r from-amber-50 via-yellow-50 to-white">
          <div className="container mx-auto px-4 py-8 md:py-10">
            <div className="max-w-4xl">
              <div className="mb-3 inline-flex rounded-full border border-amber-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm">
                Bộ sưu tập thiết kế Mộc Viên
              </div>

              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Mẫu nhà hiện đại đẹp
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                Tổng hợp những mẫu nhà hiện đại mới nhất với đa dạng loại
                hình từ nhà phố, nhà cấp 4, nhà vườn đến villa và biệt thự
                do Mộc Viên thiết kế.
              </p>
            </div>
          </div>
        </section>

        {/* DỰ ÁN ƯU TIÊN HIỂN THỊ ĐẦU TRANG */}
        <section className="bg-white py-8 md:py-12">
          {projects.length > 0 ? (
            <ProjectGrid title="" projects={projects} pageSize={12} />
          ) : (
            <div className="container mx-auto px-4 py-10">
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

        {/* ĐẶC ĐIỂM NHÀ HIỆN ĐẠI */}
        <section className="border-y border-amber-100 bg-amber-50/70">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Kiến trúc tinh gọn",
                  description:
                    "Đường nét rõ ràng, hình khối mạnh mẽ và ít chi tiết rườm rà",
                },
                {
                  title: "Không gian mở",
                  description:
                    "Tăng khả năng kết nối giữa các khu vực sinh hoạt",
                },
                {
                  title: "Nhiều ánh sáng",
                  description:
                    "Tận dụng cửa kính, khoảng thông tầng và ánh sáng tự nhiên",
                },
                {
                  title: "Công năng linh hoạt",
                  description:
                    "Bố trí phù hợp với nhu cầu sống của từng gia đình",
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
                    Thiết kế nhà hiện đại phù hợp với phong cách sống ngày nay
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    Kiến trúc hiện đại không chỉ mang đến vẻ đẹp tinh tế mà
                    còn giúp tối ưu không gian, ánh sáng, thông gió và trải
                    nghiệm sử dụng.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Hình khối hiện đại, tinh gọn",
                      "Tối ưu công năng sử dụng",
                      "Tăng ánh sáng và thông gió",
                      "Phù hợp nhiều diện tích đất",
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
                        Những mẫu nhà hiện đại đẹp được nhiều gia đình lựa chọn
                      </h2>

                      <div className="mt-4 h-1 w-14 rounded-full bg-amber-400" />

                      <p className="mt-5">
                        Nhà hiện đại là phong cách kiến trúc được nhiều gia
                        đình lựa chọn nhờ hình thức tinh gọn, công năng linh
                        hoạt và khả năng phù hợp với nhiều loại khu đất. Thay
                        vì sử dụng quá nhiều chi tiết trang trí, kiến trúc hiện
                        đại tập trung vào hình khối, tỷ lệ, vật liệu và sự liên
                        kết giữa các không gian.
                      </p>

                      <p className="mt-4">
                        Những mẫu nhà hiện đại ngày nay có thể được áp dụng cho
                        nhà phố, nhà cấp 4, nhà vườn, villa hoặc biệt thự. Tùy
                        theo diện tích và nhu cầu của gia đình, công trình có
                        thể được phát triển theo hướng tối giản, sang trọng,
                        gần gũi thiên nhiên hoặc mang hơi hướng nghỉ dưỡng.
                      </p>
                    </section>

                    <section className="rounded-3xl bg-amber-50 p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-amber-700 shadow-sm">
                        Xu hướng
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Xu hướng thiết kế nhà hiện đại hiện nay
                      </h2>

                      <p className="mt-5">
                        Xu hướng thiết kế nhà hiện đại tập trung vào việc giảm
                        bớt những chi tiết không cần thiết, sử dụng hình khối
                        rõ ràng và kết hợp các vật liệu như kính, đá, gỗ, bê
                        tông hoặc kim loại.
                      </p>

                      <p className="mt-4">
                        Bên cạnh yếu tố thẩm mỹ, nhiều gia đình ưu tiên không
                        gian mở, cửa kính lớn, ban công rộng và các khoảng sân
                        xanh. Những yếu tố này giúp công trình có cảm giác nhẹ
                        nhàng, thoáng đãng và gần gũi với thiên nhiên hơn.
                      </p>
                    </section>

                    <section>
                      <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                        Không gian
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Giải pháp không gian mở và ánh sáng tự nhiên
                      </h2>

                      <p className="mt-5">
                        Không gian mở là một trong những đặc trưng nổi bật của
                        nhà hiện đại. Phòng khách, phòng ăn và bếp có thể được
                        liên kết với nhau để tăng cảm giác rộng rãi, đồng thời
                        thuận tiện cho sinh hoạt chung của gia đình.
                      </p>

                      <p className="mt-4">
                        Hệ cửa kính, giếng trời, sân trong và khoảng thông tầng
                        giúp đưa ánh sáng vào sâu bên trong công trình. Tuy
                        nhiên, việc sử dụng kính cần đi kèm giải pháp che nắng,
                        rèm, lam chắn hoặc mái đua để hạn chế nóng vào mùa hè.
                      </p>
                    </section>

                    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-amber-200/70 px-3 py-1 text-sm font-semibold text-amber-800">
                        Khí hậu
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Thiết kế nhà hiện đại phù hợp khí hậu miền Trung
                      </h2>

                      <p className="mt-5">
                        Khi thiết kế nhà hiện đại tại Nghệ An, Hà Tĩnh và khu
                        vực miền Trung, cần quan tâm đến khả năng chống nóng,
                        che nắng hướng Tây, thông gió tự nhiên và thoát nước
                        trong mùa mưa.
                      </p>

                      <p className="mt-4">
                        Những mảng kính lớn nên được bố trí theo hướng phù hợp,
                        kết hợp mái đua, ban công, lam chắn nắng hoặc cây xanh.
                        Vật liệu mặt tiền cũng cần có độ bền cao, dễ bảo trì và
                        phù hợp với điều kiện thời tiết khắc nghiệt.
                      </p>
                    </section>

                    <section>
                      <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                        Công năng
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Tối ưu công năng trong thiết kế nhà hiện đại
                      </h2>

                      <p className="mt-5">
                        Một ngôi nhà hiện đại đẹp cần đi kèm với mặt bằng công
                        năng hợp lý. Các phòng phải được bố trí theo thói quen
                        sinh hoạt thực tế, hạn chế hành lang thừa và đảm bảo
                        giao thông thuận tiện.
                      </p>

                      <p className="mt-4">
                        Phòng khách, bếp, phòng ngủ, phòng thờ và khu vệ sinh
                        cần có kích thước vừa đủ. Việc cân đối diện tích giữa
                        các phòng sẽ giúp công trình tiện nghi hơn và tránh lãng
                        phí chi phí xây dựng.
                      </p>
                    </section>

                    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-amber-200/70 px-3 py-1 text-sm font-semibold text-amber-800">
                        Kinh nghiệm
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Vì sao nên thiết kế nhà hiện đại trước khi thi công?
                      </h2>

                      <p className="mt-5">
                        Hồ sơ thiết kế giúp gia chủ hình dung rõ hình thức mặt
                        tiền, bố trí công năng, vật liệu hoàn thiện và không
                        gian nội thất trước khi bắt đầu xây dựng.
                      </p>

                      <p className="mt-4">
                        Việc có bản vẽ đầy đủ cũng giúp đội ngũ thi công xác
                        định chính xác kích thước, kết cấu, hệ thống điện nước
                        và các chi tiết hoàn thiện. Nhờ đó, gia chủ có thể hạn
                        chế sửa đổi và kiểm soát tốt hơn chi phí phát sinh.
                      </p>

                      <p className="mt-4">
                        Mộc Viên cung cấp giải pháp từ tư vấn ý tưởng, thiết kế
                        mặt bằng công năng, phối cảnh kiến trúc, nội thất, hồ
                        sơ kỹ thuật đến giám sát và thi công. Mỗi công trình
                        được phát triển theo đặc điểm khu đất, nhu cầu sử dụng
                        và ngân sách của gia đình.
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
                  Câu hỏi thường gặp về nhà hiện đại
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                  Những vấn đề được nhiều gia chủ quan tâm trước khi thiết kế
                  và xây dựng nhà hiện đại.
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