"use client";

import { useEffect, useState } from "react";
import { uploadImage } from "@/app/lib/uploadImage";
import Editor from "@/app/components/Editor";
import slugify from "slugify";
import { supabase } from "@/app/lib/supabase";

export default function AdminBlogsPage() {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] =
    useState("");

  // thumbnail
  async function handleThumbnail(e) {
    const file = e.target.files[0];

    if (!file) return;

    const url = await uploadImage(file);

    setThumbnail(url);
  }

  // remove thumbnail
  function removeThumbnail() {
    setThumbnail("");
  }

  // save
  async function handleSubmit() {
    const slug = slugify(name, {
      lower: true,
      strict: true,
    });

    await supabase.from("blogs").insert({
      name,
      slug,
      thumbnail,
      description,
      content
    });


    alert("Yeal , Đã tạo thành công :v")
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Tạo dự án
          </h1>
        </div>

        <div className="gap-8 mx-20">
          {/* LEFT */}
          <div className="space-y-6">

            {/* Basic info */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-6">
                Thông tin cơ bản
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium">
                    Tiêu đề bài viết
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">
                    Mô tả bài viết
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold">
                  Ảnh bìa
                </h2>

                <label className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer hover:opacity-90">
                  Upload
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnail}
                    required
                  />
                </label>
              </div>

              {thumbnail ? (
                <div className="relative w-full">
                  <img
                    src={thumbnail}
                    className="w-full h-[320px] object-cover rounded-2xl"
                  />

                  <button
                    onClick={removeThumbnail}
                    className="absolute top-3 right-3 bg-black/70 text-white w-10 h-10 rounded-full hover:bg-red-500 transition"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="h-[320px] border-2 border-dashed rounded-2xl flex items-center justify-center text-gray-400">
                  Chưa có ảnh bìa
                </div>
              )}
            </div>

            {/* Editor */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-5">
                Nội dung dự án
              </h2>

              <Editor
                content={content}
                onChange={setContent}
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="bg-black text-white cursor-pointer px-8 py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition"
            >
              Tạo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}