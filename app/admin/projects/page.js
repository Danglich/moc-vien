"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import Link from "next/link";

export default function ProjectsListPage() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // fetch
  async function getProjects() {
    setLoading(true);

    const { data } = await supabase
      .from("projects")
      .select(`
        id,
        name,
        slug,
        thumbnail,
        types,
        created_at
      `)
      .order("created_at", {
        ascending: false,
      })
      .range(0, 100);

    setProjects(data || []);

    setLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, []);

  // delete
  async function deleteProject(id) {
    const confirmDelete = confirm(
      "Có chắc chắn muốn xóa không???"
    );

    if (!confirmDelete) return;

    await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    setProjects((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  // search
  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const keyword =
        search.toLowerCase();

      return (
        item.name
          ?.toLowerCase()
          .includes(keyword) ||
        item.slug
          ?.toLowerCase()
          .includes(keyword) ||
        item.type
          ?.join(" ")
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [projects, search]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Quản lý các dự án đã đăng
            </h1>
          </div>

          <Link
            href="/admin/projects/create"
            className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition w-fit"
          >
            + Tạo mới
          </Link>
        </div>

        {/* Search */}
        <div className="bg-white rounded-3xl border shadow-sm p-5 mb-8">
          <input
            type="text"
            placeholder="Nhập từ khóa..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-2xl px-5 py-4 outline-none focus:border-black"
          />
        </div>

        {/* List */}
        <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-400">
              Đang tìm...
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              Không tìm thấy bài đăng nào
            </div>
          ) : (
            <div className="divide-y">
              {filteredProjects.map(
                (project) => (
                  <div
                    key={project.id}
                    className="p-5 hover:bg-gray-50 transition"
                  >
                    <div className="flex flex-col lg:flex-row gap-5">
                      {/* Image */}
                      <img
                        src={
                          project.thumbnail
                        }
                        alt={project.name}
                        className="w-full lg:w-[220px] h-[180px] object-cover rounded-2xl"
                      />

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.types?.map(
                            (item) => (
                              <span
                                key={item}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            )
                          )}
                        </div>

                        <h2 className="text-2xl font-bold">
                          {project.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                          /du-an/
                          {project.slug}
                        </p>

                        <p className="text-sm text-gray-400 mt-4">
                          {new Date(
                            project.created_at
                          ).toLocaleDateString(
                            "vi-VN"
                          )}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex lg:flex-col gap-3">
                        <Link
                          href={`/du-an/${project.slug}`}
                          target="_blank"
                          className="px-5 py-3 rounded-2xl border hover:bg-gray-100 transition text-center"
                        >
                          Xem
                        </Link>
                        <Link
                          href={`/admin/projects/edit/${project.id}`}
                          target="_blank"
                          className="px-5 py-3 rounded-2xl border hover:bg-blue-500 transition text-center"
                        >
                          Sửa
                        </Link>
                        <button
                          onClick={() =>
                            deleteProject(
                              project.id
                            )
                          }
                          className="px-5 py-3 rounded-2xl bg-red-500 text-white hover:bg-red-600 transition"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}