// components/home/FengShui.tsx
export default function FengShui() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Tư vấn phong thủy
          </h2>
          <p className="text-gray-600 mb-6">
            Thiết kế nhà hợp tuổi, hợp hướng, mang lại tài lộc và may mắn.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
            Xem chi tiết
          </button>
        </div>

        <div className="h-80 bg-gray-300 rounded-xl" />
      </div>
    </section>
  );
}