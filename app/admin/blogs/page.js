"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    setLoading(true);

    const { data, error } = await supabase
      .from("blogs")
      .select(`
        id,
        title,
        slug,
        description,
        thumbnail,
        created_at
      `)
      .order("created_at", { ascending: false });

    if (!error) {
      setBlogs(data);
    }

    setLoading(false);
  }

  async function handleDelete(id) {
    const ok = confirm("Bạn có chắc muốn xoá bài viết?");

    if (!ok) return;

    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setBlogs((prev) => prev.filter((item) => item.id !== id));
  }

  if (loading) {
    return (
      <div className="p-10">
        Đang tải...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-10">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Quản lý Blog
        </h1>

        <Link
          href="/admin/blogs/create"
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          + Tạo bài viết
        </Link>
      </div>

      <div className="bg-white rounded-2xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">
                Ảnh
              </th>

              <th className="text-left p-4">
                Tiêu đề
              </th>

              <th className="text-left p-4">
                Ngày tạo
              </th>

              <th className="text-center p-4">
                Hành động
              </th>

            </tr>

          </thead>

          <tbody>

            {blogs.map((blog) => (

              <tr
                key={blog.id}
                className="border-t"
              >

                <td className="p-4 w-40">

                  <img
                    src={blog.thumbnail}
                    className="w-28 h-20 rounded-lg object-cover"
                  />

                </td>

                <td className="p-4">

                  <div className="font-semibold">
                    {blog.title}
                  </div>

                  <div className="text-sm text-gray-500 mt-1">
                    {blog.description}
                  </div>

                </td>

                <td className="p-4 text-gray-500">

                  {new Date(
                    blog.created_at
                  ).toLocaleDateString("vi-VN")}

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/admin/blogs/${blog.id}`}
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(blog.id)
                      }
                      className="px-4 py-2 rounded-lg bg-red-600 text-white cursor-pointer"
                    >
                      Xóa
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}