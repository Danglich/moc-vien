export default function Services() {
  const services = [
    "Thiết kế kiến trúc",
    "Thi công",
    "Xây nhà trọn gói",
    "Cải tạo sửa chữa",
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">
        Dịch vụ
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s}
            className="p-6 bg-white shadow rounded-lg text-center"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}