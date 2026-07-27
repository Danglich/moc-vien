import { supabase } from "@/app/lib/supabase";
import ProjectGrid from "../components/ui/ProjectGrid";

const type = "Nhà villa";
const pageUrl = "https://mocviengroup.vn/nha-villa";

export const revalidate = 60;

export const metadata = {
  title: "Mẫu Nhà Villa Đẹp, Sang Trọng, Hiện Đại | Mộc Viên Group",

  description:
    "Tổng hợp những mẫu nhà villa đẹp, sang trọng và hiện đại do Mộc Viên thiết kế. Không gian sống tiện nghi, gần gũi thiên nhiên và tối ưu theo nhu cầu gia đình.",

  keywords: [
    "nhà villa",
    "mẫu nhà villa đẹp",
    "villa hiện đại",
    "biệt thự villa",
    "villa sân vườn",
    "villa nghỉ dưỡng",
    "villa 2 tầng",
    "villa mái Nhật",
    "thiết kế nhà villa",
    "thiết kế villa hiện đại",
    "thiết kế biệt thự Nghệ An",
    "thiết kế biệt thự Hà Tĩnh",
    "Mộc Viên Group",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Mẫu Nhà Villa Đẹp, Sang Trọng | Mộc Viên Group",
    description:
      "Khám phá các mẫu nhà villa hiện đại, villa sân vườn và villa nghỉ dưỡng do Mộc Viên thiết kế.",
    url: pageUrl,
    siteName: "Mộc Viên Group",
    type: "website",
    locale: "vi_VN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mẫu Nhà Villa Đẹp, Sang Trọng | Mộc Viên Group",
    description:
      "Tổng hợp các mẫu nhà villa hiện đại, sang trọng và tối ưu không gian sống.",
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
    console.error("Lỗi lấy danh sách dự án nhà villa:", error);
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
    name: "Danh sách mẫu nhà villa đẹp",
    description:
      "Tổng hợp các mẫu nhà villa đẹp, sang trọng và hiện đại do Mộc Viên thiết kế.",
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
      question: "Chi phí xây một căn nhà villa khoảng bao nhiêu?",
      answer:
        "Chi phí xây nhà villa phụ thuộc vào diện tích, số tầng, phong cách kiến trúc, mức độ hoàn thiện, vật liệu sử dụng và điều kiện thi công. Gia chủ nên có hồ sơ thiết kế và dự toán chi tiết để kiểm soát ngân sách trước khi triển khai.",
    },
    {
      question: "Diện tích đất bao nhiêu thì phù hợp để xây villa?",
      answer:
        "Nhà villa thường phù hợp với những khu đất có diện tích tương đối rộng để bố trí công trình, sân vườn, lối đi và khoảng thoáng. Tuy nhiên, với cách tổ chức mặt bằng hợp lý, những khu đất có diện tích vừa phải vẫn có thể thiết kế được một mẫu villa hiện đại và tiện nghi.",
    },
    {
      question: "Nhà villa nên thiết kế theo phong cách nào?",
      answer:
        "Villa có thể được thiết kế theo phong cách hiện đại, tối giản, mái Nhật, Địa Trung Hải, tân cổ điển hoặc phong cách nghỉ dưỡng. Việc lựa chọn nên dựa trên sở thích, đặc điểm khu đất, cảnh quan xung quanh và ngân sách của gia đình.",
    },
    {
      question: "Nhà villa có nhất thiết phải có sân vườn không?",
      answer:
        "Sân vườn là một trong những yếu tố tạo nên giá trị của nhà villa, giúp tăng khoảng thoáng, cải thiện vi khí hậu và kết nối không gian sống với thiên nhiên. Tuy nhiên, diện tích sân vườn có thể được điều chỉnh phù hợp với quy mô khu đất.",
    },
    {
      question: "Mộc Viên có nhận thiết kế và thi công nhà villa không?",
      answer:
        "Mộc Viên cung cấp dịch vụ tư vấn, thiết kế kiến trúc, thiết kế nội thất, cảnh quan, giám sát và thi công nhà villa theo diện tích đất, nhu cầu sử dụng và ngân sách của từng gia đình.",
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
                Mẫu nhà villa đẹp, sang trọng
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                Tham khảo những mẫu villa hiện đại, villa sân vườn và villa
                nghỉ dưỡng được Mộc Viên thiết kế theo nhu cầu thực tế của
                từng gia đình.
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

        {/* ĐẶC ĐIỂM NHÀ VILLA */}
        <section className="border-y border-amber-100 bg-amber-50/70">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Không gian sang trọng",
                  description:
                    "Hình khối kiến trúc cân đối, nổi bật và có giá trị thẩm mỹ",
                },
                {
                  title: "Gắn kết thiên nhiên",
                  description:
                    "Kết hợp sân vườn, cây xanh và các khoảng không gian mở",
                },
                {
                  title: "Công năng tiện nghi",
                  description:
                    "Bố trí đầy đủ không gian sinh hoạt và nghỉ ngơi riêng tư",
                },
                {
                  title: "Thiết kế riêng biệt",
                  description:
                    "Phát triển phương án theo khu đất và phong cách của gia chủ",
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
                    Thiết kế nhà villa phù hợp với phong cách sống của gia chủ
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    Một căn villa đẹp cần có sự cân bằng giữa kiến trúc, công
                    năng, nội thất, sân vườn và cảnh quan xung quanh.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Kiến trúc sang trọng và khác biệt",
                      "Không gian sống rộng rãi, tiện nghi",
                      "Kết nối hài hòa với sân vườn",
                      "Phù hợp nhu cầu và ngân sách",
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
                        Những mẫu nhà villa đẹp được nhiều gia đình lựa chọn
                      </h2>

                      <div className="mt-4 h-1 w-14 rounded-full bg-amber-400" />

                      <p className="mt-5">
                        Nhà villa là loại hình nhà ở được thiết kế theo hướng
                        đề cao không gian sống, sự riêng tư và khả năng kết nối
                        với thiên nhiên. Công trình thường có kiến trúc nổi bật,
                        khoảng sân vườn rộng và nhiều mặt thoáng để đón ánh sáng,
                        gió tự nhiên.
                      </p>

                      <p className="mt-4">
                        Không chỉ mang giá trị về thẩm mỹ, nhà villa còn cần được
                        tổ chức công năng khoa học. Phòng khách, phòng bếp, phòng
                        ngủ, phòng thờ, khu sinh hoạt chung và các không gian thư
                        giãn cần được bố trí phù hợp với thói quen của từng gia
                        đình.
                      </p>
                    </section>

                    <section className="rounded-3xl bg-amber-50 p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-amber-700 shadow-sm">
                        Phong cách
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Đa dạng phong cách thiết kế nhà villa
                      </h2>

                      <p className="mt-5">
                        Nhà villa có thể được phát triển theo nhiều phong cách
                        khác nhau như villa hiện đại, villa mái Nhật, villa Địa
                        Trung Hải, villa tân cổ điển, villa nhiệt đới hoặc villa
                        nghỉ dưỡng.
                      </p>

                      <p className="mt-4">
                        Villa hiện đại thường sử dụng những hình khối mạnh mẽ,
                        đường nét tối giản và hệ cửa kính lớn. Villa mái Nhật tạo
                        cảm giác cân đối, nhẹ nhàng và phù hợp với nhiều khu đất.
                        Trong khi đó, villa Địa Trung Hải nổi bật với các đường
                        cong, mái ngói và gam màu sáng gần gũi với thiên nhiên.
                      </p>
                    </section>

                    <section>
                      <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                        Không gian
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Kết nối nhà villa với sân vườn và cảnh quan
                      </h2>

                      <p className="mt-5">
                        Một trong những đặc trưng quan trọng của nhà villa là sự
                        kết nối giữa không gian bên trong và cảnh quan bên ngoài.
                        Hệ cửa kính, ban công, hiên nhà và các khoảng sân được bố
                        trí hợp lý sẽ giúp ngôi nhà luôn thông thoáng.
                      </p>

                      <p className="mt-4">
                        Sân vườn có thể kết hợp cây xanh, hồ cá, tiểu cảnh, khu
                        nghỉ ngoài trời hoặc hồ bơi. Tuy nhiên, các khu vực này
                        cần được quy hoạch đồng bộ ngay từ đầu để tránh việc cảnh
                        quan bị rời rạc hoặc ảnh hưởng đến giao thông sử dụng.
                      </p>
                    </section>

                    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-full bg-amber-200/70 px-3 py-1 text-sm font-semibold text-amber-800">
                        Kinh nghiệm
                      </span>

                      <h2 className="text-2xl font-bold text-gray-900">
                        Vì sao nên thiết kế nhà villa trước khi thi công?
                      </h2>

                      <p className="mt-5">
                        Nhà villa thường có quy mô lớn, nhiều hạng mục và mức đầu
                        tư cao. Vì vậy, việc thiết kế đầy đủ trước khi thi công sẽ
                        giúp gia chủ hình dung rõ hình thức công trình, công năng,
                        nội thất và cảnh quan tổng thể.
                      </p>

                      <p className="mt-4">
                        Hồ sơ thiết kế cũng là cơ sở để lập dự toán, lựa chọn vật
                        liệu và kiểm soát quá trình thi công. Điều này giúp hạn
                        chế việc thay đổi, đập sửa hoặc phát sinh chi phí trong
                        quá trình xây dựng.
                      </p>

                      <p className="mt-4">
                        Mộc Viên cung cấp giải pháp từ tư vấn ý tưởng, thiết kế
                        kiến trúc, nội thất, cảnh quan, hồ sơ kỹ thuật đến giám
                        sát và thi công. Mỗi công trình được phát triển theo đặc
                        điểm khu đất, nhu cầu sử dụng và ngân sách của gia đình.
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
                  Câu hỏi thường gặp về nhà villa
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                  Những vấn đề được nhiều gia chủ quan tâm trước khi thiết kế
                  và xây dựng nhà villa.
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