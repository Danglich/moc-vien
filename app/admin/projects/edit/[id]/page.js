"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import slugify from "slugify";

import { supabase } from "@/app/lib/supabase";
import { uploadImage } from "@/app/lib/uploadImage";
import Editor from "@/app/components/Editor";

export default function EditProjectPage() {
  const params = useParams();
  const router = useRouter();

  const [projectId, setProjectId] = useState(null);

  const [name, setName] = useState("");
  const [info, setInfo] = useState({});
  const [types, setTypes] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [gallery, setGallery] = useState([]);
  const [description, setDescription] =
    useState("");

  const [loading, setLoading] = useState(true);

  // upload loading
  const [thumbnailLoading, setThumbnailLoading] =
    useState(false);

  const [galleryLoading, setGalleryLoading] =
    useState(false);

  // save loading
  const [saving, setSaving] = useState(false);

  const PROJECT_TYPES = [
    "Mẫu nhà mái Nhật",
    "Nhà cấp 4",
    "Mẫu biệt thự",
    "Villa",
    "Nhà phố",
    "Thiết kế nhà vườn",
    "Mẫu nhà mái Thái",
    "Thiết kế nhà hiện đại",
    "Nhà phố",
    "Nhà 1 tầng",
    "Nhà 2 tầng",
    "Nhà 3 tầng",
    "Nhà nhiều tầng",
    "Công trình đang thi công",
  ];

  // fetch project
  useEffect(() => {
    async function fetchProject() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", params.id)
          .single();

        if (error) {
          console.log(error);
          alert("Không tìm thấy dự án");
          return;
        }

        setProjectId(data.id);

        setName(data.name || "");

        setTypes(data.types || []);

        setThumbnail(data.thumbnail || "");

        setGallery(data.gallery || []);

        setDescription(data.description || "");

        setInfo({
          loaiHinh: data.loaiHinh || "",
          diaChi: data.diaChi || "",
          chuDauTu: data.chuDauTu || "",
          soTang: data.soTang || "",
          dienTichSan: data.dienTichSan || "",
          tongDienTich: data.tongDienTich || "",
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  // handle info
  const handleChangeInfo = (key, value) => {
    setInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // upload thumbnail
  async function handleThumbnail(e) {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setThumbnailLoading(true);

      const url = await uploadImage(file);

      setThumbnail(url);
    } catch (err) {
      console.log(err);
      alert("Upload thumbnail thất bại");
    } finally {
      setThumbnailLoading(false);
    }
  }

  // upload gallery
  async function handleGallery(e) {
    const files = Array.from(e.target.files);

    try {
      setGalleryLoading(true);

      let urls = [];

      for (const file of files) {
        const url = await uploadImage(file);

        urls.push(url);
      }

      setGallery((prev) => [...prev, ...urls]);
    } catch (err) {
      console.log(err);
      alert("Upload gallery thất bại");
    } finally {
      setGalleryLoading(false);
    }
  }

  // remove thumbnail
  function removeThumbnail() {
    setThumbnail("");
  }

  // remove gallery image
  function removeGalleryImage(img) {
    setGallery((prev) =>
      prev.filter((item) => item !== img)
    );
  }

  // update
  async function handleUpdate() {
    try {
      setSaving(true);

      const slug = slugify(name, {
        lower: true,
        strict: true,
      });

      const { error } = await supabase
        .from("projects")
        .update({
          name,
          slug,
          types,
          thumbnail,
          gallery,
          description,
          ...info,
        })
        .eq("id", projectId);

      if (error) {
        console.log(error);
        alert("Cập nhật thất bại");
        return;
      }

      alert("Đã cập nhật dự án");

      router.refresh();
    } catch (err) {
      console.log(err);
      alert("Có lỗi xảy ra");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Chỉnh sửa dự án
          </h1>
        </div>

        <div className="gap-8 mx-20">
          <div className="space-y-6">
            {/* Basic info */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-6">
                Thông tin cơ bản
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 font-medium">
                    Tiêu đề dự án
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Loại hình
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={info.loaiHinh || ""}
                    onChange={(e) =>
                      handleChangeInfo(
                        "loaiHinh",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Địa chỉ
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={info.diaChi || ""}
                    onChange={(e) =>
                      handleChangeInfo(
                        "diaChi",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Chủ đầu tư
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={info.chuDauTu || ""}
                    onChange={(e) =>
                      handleChangeInfo(
                        "chuDauTu",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Số tầng
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={info.soTang || ""}
                    onChange={(e) =>
                      handleChangeInfo(
                        "soTang",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Diện tích sàn
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={info.dienTichSan || ""}
                    onChange={(e) =>
                      handleChangeInfo(
                        "dienTichSan",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Tổng diện tích
                  </label>

                  <input
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
                    value={info.tongDienTich || ""}
                    onChange={(e) =>
                      handleChangeInfo(
                        "tongDienTich",
                        e.target.value
                      )
                    }
                  />
                </div>

                {/* types */}
                <div>
                  <label className="block mb-3 font-medium">
                    Loại dự án
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {PROJECT_TYPES.map((item) => {
                      const active =
                        types.includes(item);

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            if (active) {
                              setTypes(
                                types.filter(
                                  (t) => t !== item
                                )
                              );
                            } else {
                              setTypes([
                                ...types,
                                item,
                              ]);
                            }
                          }}
                          className={`px-4 py-2 rounded-xl border transition
                          ${
                            active
                              ? "bg-black text-white border-black"
                              : "bg-white hover:bg-gray-100"
                          }
                        `}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
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
                  {thumbnailLoading
                    ? "Đang upload..."
                    : "Upload"}

                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnail}
                  />
                </label>
              </div>

              {thumbnailLoading ? (
                <div className="h-[320px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center">
                  <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-4"></div>

                  <p className="text-gray-500">
                    Đang upload ảnh...
                  </p>
                </div>
              ) : thumbnail ? (
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

            {/* Gallery */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold">
                  Các hình ảnh của dự án
                </h2>

                <label className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer hover:opacity-90">
                  {galleryLoading
                    ? "Đang upload..."
                    : "Thêm hình ảnh"}

                  <input
                    hidden
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={handleGallery}
                  />
                </label>
              </div>

              {galleryLoading && (
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

                  <span className="text-gray-500">
                    Đang upload gallery...
                  </span>
                </div>
              )}

              {gallery.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((img) => (
                    <div
                      key={img}
                      className="relative group"
                    >
                      <img
                        src={img}
                        className="w-full h-[220px] object-cover rounded-2xl"
                      />

                      <button
                        onClick={() =>
                          removeGalleryImage(img)
                        }
                        className="absolute top-3 right-3 bg-black/70 text-white w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[240px] border-2 border-dashed rounded-2xl flex items-center justify-center text-gray-400">
                  Chưa có hình ảnh nào
                </div>
              )}
            </div>

            {/* Editor */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-5">
                Nội dung dự án
              </h2>

              <Editor
                content={description}
                onChange={setDescription}
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleUpdate}
              disabled={saving}
              className="bg-black text-white cursor-pointer px-8 py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {saving
                ? "Đang cập nhật..."
                : "Cập nhật dự án"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}