import { supabase } from "@/app/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const { data, error } = await supabase
      .from("blogs")
      .select(`
        id,
        title,
        slug,
        thumbnail,
        description,
        created_at
      `)
      .eq("published", true)
      .order("created_at", {
        ascending: false,
      })
      .limit(6);

    if (error) {
      console.error("Lỗi Supabase khi lấy blog:", error);

      return NextResponse.json(
        {
          blogs: [],
          message: "Không thể lấy danh sách bài viết",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        blogs: data || [],
      },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    console.error("Lỗi API blog:", error);

    return NextResponse.json(
      {
        blogs: [],
        message: "Đã xảy ra lỗi khi tải bài viết",
      },
      {
        status: 500,
      }
    );
  }
}