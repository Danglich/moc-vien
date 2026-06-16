"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import slugify from "slugify";
import Editor from "@/app/components/Editor";
import { uploadImage } from "@/app/lib/uploadImage";
import { supabase } from "@/app/lib/supabase";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchBlog();
  }, []);

  async function fetchBlog() {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert("Không tìm thấy bài viết");
      router.push("/admin/blogs");
      return;
    }

    setTitle(data.title);
    setDescription(data.description);
    setThumbnail(data.thumbnail);
    setContent(data.content);

    setLoading(false);
  }

  async function handleThumbnail(e) {
    const file = e.target.files[0];

    if (!file) return;

    const url = await uploadImage(file);

    setThumbnail(url);
  }

  function removeThumbnail() {
    setThumbnail("");
  }

  async function handleSubmit() {
    const slug = slugify(title, {
      lower: true,
      strict: true,
    });

    const { error } = await supabase
      .from("blogs")
      .update({
        title,
        slug,
        description,
        thumbnail,
        content,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Cập nhật thành công");
  }

  if (loading) {
    return (
      <div className="p-10">
        Đang tải...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto p-6 lg:p-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Chỉnh sửa bài viết
          </h1>
        </div>

        <div className="mx-20 space-y-6">

          {/* Thông tin */}

          <div className="bg-white rounded-3xl p-6 shadow border">

            <h2 className="text-xl font-semibold mb-6">
              Thông tin cơ bản
            </h2>

            <div className="space-y-5">

              <div>

                <label className="block mb-2 font-medium">
                  Tiêu đề
                </label>

                <input
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="w-full border rounded-xl px-4 py-3"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Mô tả
                </label>

                <input
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  className="w-full border rounded-xl px-4 py-3"
                />

              </div>

            </div>

          </div>

          {/* Thumbnail */}

          <div className="bg-white rounded-3xl p-6 shadow border">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-xl font-semibold">
                Ảnh bìa
              </h2>

              <label className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">

                Upload

                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnail}
                />

              </label>

            </div>

            {thumbnail ? (

              <div className="relative">

                <img
                  src={thumbnail}
                  className="w-full h-[320px] object-cover rounded-2xl"
                />

                <button
                  onClick={removeThumbnail}
                  className="absolute top-3 right-3 bg-black/70 text-white w-10 h-10 rounded-full"
                >
                  ✕
                </button>

              </div>

            ) : (

              <div className="h-[320px] border-2 border-dashed rounded-2xl flex items-center justify-center">
                Chưa có ảnh
              </div>

            )}

          </div>

          {/* Editor */}

          <div className="bg-white rounded-3xl p-6 shadow border">

            <h2 className="text-xl font-semibold mb-5">
              Nội dung
            </h2>

            <Editor
              content={content}
              onChange={setContent}
            />

          </div>

          <button
            onClick={handleSubmit}
            className="bg-black text-white px-8 py-4 rounded-2xl cursor-pointer"
          >
            Lưu thay đổi
          </button>

        </div>

      </div>

    </div>
  );
}