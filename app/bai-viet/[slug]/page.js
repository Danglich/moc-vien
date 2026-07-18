import { cache } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

const SITE_URL = "https://tenmiencuaban.vn";
const SITE_NAME = "Mộc Viên";

// Dùng chung dữ liệu cho generateMetadata và BlogDetail
const getBlog = cache(async (slug) => {
  const { data, error } = await supabase
    .from("blogs")
    .select(`
      id,
      title,
      slug,
      description,
      thumbnail,
      content,
      created_at,
      updated_at,
      published
    `)
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    console.error("Lỗi lấy bài viết:", error);
    return null;
  }

  return data;
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

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
      locale: "vi_VN",
      siteName: SITE_NAME,
      title: blog.title,
      description: blog.description,
      url: canonicalUrl,
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at || blog.created_at,
      images: blog.thumbnail
        ? [
            {
              url: blog.thumbnail,
              width: 1200,
              height: 630,
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
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/bai-viet/${blog.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: blog.title,
    description: blog.description,
    image: blog.thumbnail ? [blog.thumbnail] : [],
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    inLanguage: "vi-VN",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <article>
          {blog.thumbnail && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
              <Image
                src={blog.thumbnail}
                alt={`Hình ảnh bài viết ${blog.title}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          )}

          <header className="mt-10">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {blog.title}
            </h1>

            {blog.description && (
              <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">
                {blog.description}
              </p>
            )}

            <time
              dateTime={blog.created_at}
              className="mt-4 block text-sm text-gray-500"
            >
              Đăng ngày{" "}
              {new Date(blog.created_at).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </time>
          </header>

          <div
            className="prose prose-lg mt-12 max-w-none
              prose-headings:font-bold
              prose-img:rounded-xl
              prose-a:text-blue-600
              prose-a:no-underline
              hover:prose-a:underline"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </article>
      </main>
    </>
  );
}