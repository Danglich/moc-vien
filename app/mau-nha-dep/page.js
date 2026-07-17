import { supabase } from "@/app/lib/supabase";
import ProjectGrid from "../components/ui/ProjectGrid";
export default async function Page() {

    const allowedTypes = [
    "Mẫu nhà mái Nhật",
    "Nhà phố",
    "Thiết kế nhà hiện đại",
    "Mẫu biệt thự",
    "Villa",
    "Thiết kế nhà hiện đại",
    ];

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
    .overlaps("types", allowedTypes)
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
    name: "Mẫu nhà đẹp",
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

      {projects.length > 0 ? (
        <ProjectGrid
          title="Tổng hợp những mẫu nhà đẹp do Mộc Viên thiết kế và thi công trọn gói"
          projects={projects}
          pageSize={9}
        />
      ) : (
        <div className="container mx-auto px-4 py-16">
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-10 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Chưa có dự án phù hợp
            </h2>

            <p className="mt-2 text-gray-600">
              Hiện không tìm thấy dự án nào phù hợp.
            </p>
          </div>
        </div>
      )}
    </>
  );
}