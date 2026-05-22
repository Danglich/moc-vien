import FormRegister from "@/app/components/ui/FormRegister";
import ProjectGallery from "@/app/components/ui/ProjectGallery";
import RelatedProjects from "@/app/components/ui/RelatedProjects";
import { supabase } from "@/app/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";

// ISR
export const revalidate = 60;

// SEO
export async function generateMetadata({
  params,
}) {
  const { slug } = await params;

  const { data: project } =
    await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

  if (!project) {
    return {};
  }

  return {
    metadataBase: new URL(
      "https://yourdomain.com"
    ),

    title: project.name,

    description:
      project.type || project.name,

    openGraph: {
      title: project.name,

      images: [project.thumbnail],
    },

    alternates: {
      canonical: `/du-an/${slug}`,
    },
  };
}

export default async function Page({
  params,
}) {
  const { slug } = await params;

  console.log("slug:", slug);

  // current project
  const {
    data: project,
    error,
  } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  console.log({
    project,
    error,
  });

  if (!project) {
    notFound();
  }

  // related projects
  const { data: relatedProjects } =
    await supabase
      .from("projects")
      .select("*")
      .neq("slug", slug)
      .limit(5);

  // schema seo
  const schema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: project.name,

    image: project.thumbnail,

    author: {
      "@type": "Organization",
      name: "Mộc Viên",
    },
  };

  return (
    <div className="project-description container mx-auto px-4 py-8 grid grid-cols-1 lg:flex gap-8">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* LEFT */}
      <div className="lg:flex-3">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-3">
          <Link href="/">
            Trang chủ
          </Link>{" "}
          /{" "}
          <Link href="/thiet-ke-nha-vuon">
            Dự án
          </Link>{" "}
          /{" "}
          <span className="text-black">
            {project.name}
          </span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">
          {project.name}
        </h1>

        {/* Gallery */}
        <ProjectGallery
          images={[
            project.thumbnail,
            ...(project.gallery || []),
          ]}
          title={project.name}
        />

        {/* Info */}
        <div className="border mb-6 text-sm">
          <div className="grid grid-cols-2 border-b">
            <div className="p-2 border-r bg-gray-50">
              Chủ đầu tư
            </div>

            <div className="p-2">
              {project.chuDauTu}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b">
            <div className="p-2 border-r bg-gray-50">
              Số tầng
            </div>

            <div className="p-2">
              {project.soTang}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b">
            <div className="p-2 border-r bg-gray-50">
              Diện tích sàn
            </div>

            <div className="p-2">
              {project.dienTichSan}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b">
            <div className="p-2 border-r bg-gray-50">
              Địa chỉ
            </div>

            <div className="p-2">
              {project.diaChi}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b">
            <div className="p-2 border-r bg-gray-50">
              Loại công trình
            </div>

            <div className="p-2">
              {project.loaiHinh}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b">
            <div className="p-2 border-r bg-gray-50">
              Tổng diện tích
            </div>

            <div className="p-2">
              {project.tongDienTich}
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html:
              project.description || "",
          }}
        />

        <FormRegister />

        <div className="mt-8">
          <RelatedProjects />
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:flex-1">
        <div>
          {/* Box 1 */}
          <div className="mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] p-4 rounded-xl">
            <p className="relative border-b uppercase text-[22px] pb-1">
              Tìm theo loại nhà

              <span className="absolute bottom-[-1px] left-0 w-20 bg-red-500 h-[2px]"></span>
            </p>

            <ul className="flex-wrap gap-4 flex mt-4">
              <li className="px-3 py-1 rounded-xs border cursor-pointer hover:text-primary">
                Nhà mái Nhật
              </li>

              <li className="px-3 py-1 rounded-xs border cursor-pointer hover:text-primary">
                Nhà cấp 4
              </li>

              <li className="px-3 py-1 rounded-xs border cursor-pointer hover:text-primary">
                Nhà vườn
              </li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] p-4 rounded-xl">
            <p className="relative border-b uppercase text-[22px] pb-1">
              Tìm theo loại nhà

              <span className="absolute bottom-[-1px] left-0 w-20 bg-red-500 h-[2px]"></span>
            </p>

            <ul className="flex-wrap gap-4 flex mt-4">
              <li className="px-3 py-1 rounded-xs border cursor-pointer hover:text-primary">
                Nhà mái Nhật
              </li>

              <li className="px-3 py-1 rounded-xs border cursor-pointer hover:text-primary">
                Nhà cấp 4
              </li>

              <li className="px-3 py-1 rounded-xs border cursor-pointer hover:text-primary">
                Nhà vườn
              </li>
            </ul>
          </div>
        </div>

        {/* Recent posts */}
        <h3 className="font-semibold mb-3">
          Bài viết mới
        </h3>

        <div className="space-y-4">
          {relatedProjects?.map((item) => (
            <Link
              key={item.id}
              href={`/du-an/${item.slug}`}
            >
              <div className="flex gap-3">
                <img
                  src={item.thumbnail}
                  width={80}
                  height={60}
                  alt={item.name}
                  className="rounded object-cover"
                />

                <p className="text-sm line-clamp-2">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}