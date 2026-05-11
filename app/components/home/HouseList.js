// components/home/HouseList.tsx
import Card from "../ui/Card";

export default function HouseList() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">
        Mẫu nhà đẹp mới nhất
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </section>
  );
}