import { supabase } from "@/app/lib/supabase";

export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = "https://mocviengroup.vn";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/gioi-thieu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bao-gia-thiet-ke`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/thiet-ke-nha`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/thi-cong-tron-goi-tai-vinh-nghe-an`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/du-an`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bai-viet`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lien-he`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const [
    { data: projects, error: projectsError },
    { data: blogs, error: blogsError },
  ] = await Promise.all([
    supabase
      .from("projects")
      .select("slug, created_at")
      .not("slug", "is", null),

    supabase
      .from("blogs")
      .select("slug, created_at")
      .eq("published", true)
      .not("slug", "is", null),
  ]);

  if (projectsError) {
    console.error("Lỗi lấy dự án cho sitemap:", projectsError);
  }

  if (blogsError) {
    console.error("Lỗi lấy bài viết cho sitemap:", blogsError);
  }

  const projectPages = (projects || []).map((project) => ({
    url: `${baseUrl}/du-an/${project.slug}`,
    lastModified: project.created_at
      ? new Date(project.created_at)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages = (blogs || []).map((blog) => ({
    url: `${baseUrl}/bai-viet/${blog.slug}`,
    lastModified: blog.created_at
      ? new Date(blog.created_at)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}