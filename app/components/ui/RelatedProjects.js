import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function RelatedProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(`
      id,
      name,
      slug,
      thumbnail,
      created_at
    `)
    .order("created_at", {
      ascending: false,
    })
    .limit(6);

  if (error) {
    console.error("Lỗi lấy dự án mới nhất:", error);
  }

  const projects = data || [];

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      {/* Tiêu đề */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold uppercase text-gray-900">
          Dự án mới nhất
        </h2>

        <div className="mt-2 h-1 w-20 bg-yellow-500" />
      </div>

      {/* Mobile: slider */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[85%] snap-start"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group">
      <Link
        href={`/du-an/${project.slug}`}
        className="block"
        aria-label={`Xem dự án ${project.name}`}
      >
        {/* Hình ảnh */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-gray-100">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
              Chưa có hình ảnh
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

          <span className="absolute bottom-3 right-3 translate-y-2 rounded-md bg-yellow-500 px-3 py-1.5 text-xs font-bold text-gray-950 opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Xem chi tiết
          </span>
        </div>

        {/* Tiêu đề */}
        <h3 className="mt-3 line-clamp-3 text-sm font-semibold leading-relaxed text-gray-800 transition group-hover:text-yellow-600">
          {project.name}
        </h3>
      </Link>
    </article>
  );
}