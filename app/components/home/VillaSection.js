// components/home/VillaSection.tsx
import Card from "../ui/Card";

export default function VillaSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          Biệt thự cao cấp
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}