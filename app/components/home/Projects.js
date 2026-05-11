export default function Projects() {
  return (
    <section className="py-20 container">
      <h2 className="text-3xl font-bold mb-6">Dự án nổi bật</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="border overflow-hidden rounded">
            <img src={`/project${i}.jpg`} className="hover:scale-110 transition" />
            <div className="p-4">
              <h3 className="font-semibold">Biệt thự {i}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
