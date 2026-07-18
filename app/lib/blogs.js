import { supabase } from "@/app/lib/supabase";
import { unstable_cache } from "next/cache";

export const getBlogBySlug = unstable_cache(
  async (slug) => {
    console.log("Đang truy vấn Supabase:", slug);

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
  },

  // Phần cố định của cache key
  ["blog-by-slug"],

  {
    // Cache trong 1 giờ
    revalidate: 3600,

    // Dùng để chủ động xóa cache
    tags: ["blogs"],
  }
);