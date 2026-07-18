import { getBlogBySlug } from "@/app/lib/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

const SITE_URL = "https://mocviengroup.vn";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Không tìm thấy bài viết",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/bai-viet/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description,
      url: canonicalUrl,
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at || blog.created_at,
      images: blog.thumbnail
        ? [
            {
              url: blog.thumbnail,
              alt: blog.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.thumbnail ? [blog.thumbnail] : [],
    },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
      <article>
        {blog.thumbnail && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        )}

        <header className="mt-8 md:mt-10">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {blog.title}
          </h1>

          {blog.description && (
            <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">
              {blog.description}
            </p>
          )}

          <time
            dateTime={blog.created_at}
            className="mt-4 block text-sm text-gray-400"
          >
            {new Date(blog.created_at).toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </time>
        </header>

        <div
          className="prose prose-lg mt-10 max-w-none md:mt-12"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </article>
    </main>
  );
}