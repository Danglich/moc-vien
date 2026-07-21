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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "Chi phí xây nhà cấp 4 khoảng bao nhiêu?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Chi phí xây nhà cấp 4 phụ thuộc vào diện tích, phong cách kiến trúc, loại mái, vật liệu hoàn thiện và khu vực xây dựng. Để có dự toán chính xác, gia chủ cần có mặt bằng công năng và hồ sơ thiết kế cụ thể.",
        },
      },
      {
        "@type": "Question",
        name: "Nhà cấp 4 nên làm mái Nhật hay mái Thái?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Mái Nhật phù hợp với phong cách hiện đại, có độ dốc vừa phải và tạo cảm giác cân đối. Mái Thái có độ dốc cao hơn, khả năng thoát nước tốt và tạo vẻ bề thế. Việc lựa chọn phụ thuộc vào kiến trúc, ngân sách và sở thích của gia chủ.",
        },
      },
      {
        "@type": "Question",
        name: "Diện tích nhà cấp 4 bao nhiêu là hợp lý?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Diện tích nhà cấp 4 cần dựa trên số thành viên và nhu cầu sử dụng. Với gia đình từ 4 đến 6 người, diện tích khoảng 100 đến 160 mét vuông thường có thể bố trí phòng khách, phòng bếp, phòng thờ và từ 3 đến 4 phòng ngủ.",
        },
      },
      {
        "@type": "Question",
        name: "Thiết kế nhà cấp 4 mất bao lâu?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Thời gian thiết kế nhà cấp 4 thường phụ thuộc vào quy mô và mức độ chi tiết của công trình. Quy trình bao gồm khảo sát, bố trí mặt bằng, thiết kế phối cảnh và hoàn thiện hồ sơ kỹ thuật thi công.",
        },
      },
      {
        "@type": "Question",
        name: "Mộc Viên có nhận thiết kế và thi công nhà cấp 4 không?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Mộc Viên cung cấp dịch vụ tư vấn, thiết kế kiến trúc, thiết kế nội thất, giám sát và thi công nhà ở theo nhu cầu của từng gia đình.",
        },
      },
    ],
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

      <main>
        <section className="container mx-auto mt-8 px-4 text-gray-700">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Mẫu nhà cấp 4 đẹp, hiện đại và tối ưu công năng
          </h1>

          <p className="max-w-4xl text-base leading-7 md:text-lg md:leading-8">
            Tổng hợp những mẫu nhà cấp 4 đẹp, hiện đại, tiện nghi và tối ưu công
            năng do Mộc Viên thực hiện. Các phương án được thiết kế phù hợp với
            nhu cầu sinh hoạt, diện tích đất và ngân sách của từng gia đình.
          </p>
        </section>

        {projects.length > 0 ? (
          <ProjectGrid
            title={type}
            projects={projects}
            pageSize={9}
          />
        ) : (
          <section className="container mx-auto px-4 py-16">
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-10 text-center">
              <h2 className="text-xl font-bold text-gray-900">
                Chưa có dự án phù hợp
              </h2>

              <p className="mt-2 text-gray-600">
                Hiện chưa có dự án thuộc loại “{type}”.
              </p>
            </div>
          </section>
        )}

        <section className="container mx-auto px-4 py-12 text-gray-700">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-3xl">
              Những mẫu nhà cấp 4 đẹp được nhiều gia đình lựa chọn
            </h2>

            <div className="space-y-5 text-base leading-8">
              <p>
                Nhà cấp 4 là loại hình nhà ở được nhiều gia đình lựa chọn nhờ
                chi phí xây dựng hợp lý, thời gian thi công nhanh và khả năng
                đáp ứng tốt nhu cầu sinh hoạt. Với sự phát triển của kiến trúc
                hiện đại, các mẫu nhà cấp 4 ngày nay không chỉ đơn giản mà còn
                có tính thẩm mỹ cao, công năng khoa học và không gian sống tiện
                nghi.
              </p>

              <p>
                Tại Mộc Viên, mỗi mẫu nhà cấp 4 đều được nghiên cứu dựa trên
                diện tích khu đất, hướng nhà, nhu cầu sử dụng, số lượng thành
                viên và ngân sách đầu tư của gia đình. Việc bố trí phòng khách,
                phòng bếp, phòng ngủ, phòng thờ và khu vệ sinh được tính toán
                hợp lý, hạn chế diện tích giao thông và tận dụng tối đa không
                gian sử dụng.
              </p>

              <h2 className="pt-3 text-2xl font-bold text-gray-900">
                Đa dạng phong cách thiết kế nhà cấp 4
              </h2>

              <p>
                Các mẫu nhà cấp 4 hiện nay có nhiều phong cách như nhà cấp 4
                mái Nhật, nhà cấp 4 mái Thái, nhà cấp 4 hiện đại, nhà cấp 4
                chữ L và nhà vườn cấp 4. Mỗi phong cách có đặc điểm riêng về
                hình khối, hệ mái, vật liệu và mức chi phí xây dựng.
              </p>

              <p>
                Nhà cấp 4 mái Nhật thường có hình thức cân đối, độ dốc mái vừa
                phải và phù hợp với những gia đình yêu thích vẻ đẹp nhẹ nhàng,
                hiện đại. Nhà cấp 4 mái Thái có hệ mái cao, khả năng thoát nước
                tốt và tạo cảm giác bề thế. Trong khi đó, nhà cấp 4 hiện đại
                thường sử dụng hình khối đơn giản, cửa kính lớn và vật liệu mới
                để tạo nên không gian trẻ trung.
              </p>

              <h2 className="pt-3 text-2xl font-bold text-gray-900">
                Thiết kế nhà cấp 4 phù hợp với khí hậu miền Trung
              </h2>

              <p>
                Khi thiết kế nhà cấp 4 tại Nghệ An, Hà Tĩnh và khu vực miền
                Trung, cần đặc biệt quan tâm đến khả năng chống nóng, chống
                thấm, thoát nước mái và thông gió tự nhiên. Hệ mái cần có độ
                dốc phù hợp, phần đua mái đủ rộng và vật liệu hoàn thiện phải
                có khả năng chịu được điều kiện thời tiết khắc nghiệt.
              </p>

              <p>
                Bên cạnh đó, việc bố trí cửa sổ, cửa đi và các khoảng sân vườn
                hợp lý sẽ giúp ngôi nhà đón ánh sáng tự nhiên nhưng vẫn hạn chế
                nắng nóng trực tiếp. Đây là yếu tố quan trọng để tạo nên không
                gian sống thoáng mát và tiết kiệm điện năng trong quá trình sử
                dụng.
              </p>

              <h2 className="pt-3 text-2xl font-bold text-gray-900">
                Vì sao nên thiết kế nhà cấp 4 trước khi thi công?
              </h2>

              <p>
                Một bộ hồ sơ thiết kế đầy đủ sẽ giúp gia chủ hình dung rõ hình
                thức ngôi nhà, kiểm soát công năng và dự toán chi phí trước khi
                xây dựng. Hồ sơ cũng giúp đội ngũ thi công thực hiện đúng kích
                thước, kết cấu, vật liệu và hạn chế tối đa việc sửa đổi hoặc
                phát sinh chi phí trong quá trình thi công.
              </p>

              <p>
                Mộc Viên cung cấp giải pháp từ tư vấn ý tưởng, thiết kế mặt bằng
                công năng, phối cảnh kiến trúc, hồ sơ kỹ thuật đến giám sát và
                thi công. Mỗi công trình được phát triển dựa trên nhu cầu thực
                tế của gia đình, đảm bảo sự cân bằng giữa thẩm mỹ, công năng,
                chất lượng và ngân sách đầu tư.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
                Câu hỏi thường gặp về nhà cấp 4
              </h2>

              <div className="space-y-4">
                <article className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    Chi phí xây nhà cấp 4 khoảng bao nhiêu?
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Chi phí phụ thuộc vào diện tích, loại mái, phong cách kiến
                    trúc, vật liệu hoàn thiện và khu vực xây dựng. Gia chủ nên
                    có hồ sơ thiết kế cụ thể để lập dự toán chính xác.
                  </p>
                </article>

                <article className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    Nhà cấp 4 nên làm mái Nhật hay mái Thái?
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Mái Nhật phù hợp với phong cách nhẹ nhàng, hiện đại. Mái
                    Thái có độ dốc cao, thoát nước tốt và tạo vẻ bề thế. Gia
                    chủ nên lựa chọn dựa trên phong cách và ngân sách.
                  </p>
                </article>

                <article className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    Diện tích nhà cấp 4 bao nhiêu là hợp lý?
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Với gia đình từ 4 đến 6 người, diện tích khoảng 100 đến 160
                    mét vuông thường có thể bố trí đầy đủ phòng khách, bếp,
                    phòng thờ và từ 3 đến 4 phòng ngủ.
                  </p>
                </article>

                <article className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    Mộc Viên có nhận thiết kế và thi công nhà cấp 4 không?
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Mộc Viên cung cấp dịch vụ tư vấn, thiết kế kiến trúc, nội
                    thất, giám sát và thi công nhà ở theo nhu cầu của từng gia
                    đình.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}