import { supabase } from "@/app/lib/supabase";
import ProjectGrid from "../components/ui/ProjectGrid";

export default async function Page() {
    // Giá trị này phải trùng với một phần tử trong cột types
  const type = "Mẫu nhà mái Nhật";

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: type,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `https://yourdomain.com/du-an/${project.slug}`,
      image: project.image || undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Phần giới thiệu trang nội thất */}
      <section className="relative overflow-hidden bg-[#F8F1E5]">
        {/* Họa tiết trang trí */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#D6B06C]/20" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#B88746]/10" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#B88746]/30 bg-white/70 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B32]">
              Thiết kế nội thất Mộc Viên
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-[#4D3824] md:text-5xl">
              Không gian nội thất tinh tế,
              <span className="block text-[#B88746]">
                tiện nghi và mang dấu ấn riêng
              </span>
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#B88746]" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#6D5945] md:text-lg">
              Mộc Viên mang đến những giải pháp thiết kế nội thất được nghiên
              cứu kỹ lưỡng về công năng, thẩm mỹ và thói quen sinh hoạt của từng
              gia đình. Mỗi không gian đều được bố trí hài hòa, lựa chọn vật
              liệu phù hợp và chăm chút từng chi tiết để tạo nên một ngôi nhà
              đẹp, tiện nghi và bền vững theo thời gian.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#6D5945]">
              Khám phá các công trình phòng khách, phòng bếp, phòng ngủ, phòng
              thờ và không gian sinh hoạt do đội ngũ Mộc Viên thiết kế và hoàn
              thiện.
            </p>
          </div>
        </div>
      </section>

      {/* Danh sách dự án */}
      <section className="bg-white py-10 md:py-14">
        {projects.length > 0 ? (
          <ProjectGrid
            title="Các dự án nội thất nổi bật"
            projects={projects}
            pageSize={9}
          />
        ) : (
          <div className="container mx-auto px-4">
            <div className="rounded-xl border border-[#D6B06C]/40 bg-[#F8F1E5] p-10 text-center">
              <h2 className="text-xl font-bold text-[#4D3824]">
                Chưa có dự án phù hợp
              </h2>

              <p className="mt-2 text-[#6D5945]">
                Hiện chưa có dự án thuộc loại “{type}”.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}