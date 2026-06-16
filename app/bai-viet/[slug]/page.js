import { notFound } from "next/navigation";
import { supabase } from "@/app/lib/supabase";
import Editor from "@/app/components/Editor";

export async function generateMetadata({ params }) {
  const { data } = await supabase
    .from("blogs")
    .select("title,description,thumbnail")
    .eq("slug", params.slug)
    .single();

  if (!data) {
    return {
      title: "Không tìm thấy bài viết",
    };
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.thumbnail],
    },
  };
}

export default async function BlogDetail({ params }) {
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", params.slug)
    .eq("published", true)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      {/* Thumbnail */}

      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-[450px] object-cover rounded-3xl"
      />

      {/* Title */}

      <h1 className="text-5xl font-bold mt-10 leading-tight">
        {blog.title}
      </h1>

      {/* Description */}

      <p className="text-gray-500 text-xl mt-4">
        {blog.description}
      </p>

      {/* Date */}

      <div className="mt-4 text-sm text-gray-400">
        {new Date(blog.created_at).toLocaleDateString("vi-VN")}
      </div>

      {/* Content */}

      <article className="prose prose-lg max-w-none mt-12">
        <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </article>

    </div>
  );
}