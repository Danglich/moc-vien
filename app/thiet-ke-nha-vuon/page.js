import ProjectGrid from "../components/ui/ProjectGrid";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Thiết kế nhà vườn đẹp, hiện đại | Mộc Viên",
  description:
    "Tổng hợp các mẫu thiết kế nhà vườn đẹp, hiện đại, tối ưu công năng.",
};

const projects = [
  {
    id: 1,
    title:
      "Mẫu nhà phố 2 tầng 1 tum hiện đại tại Đà Nẵng | MH46494",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 2,
    title:
      "Bản vẽ nhà Nhật 2 tầng đơn giản đầy đủ công năng | MH46186",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 3,
    title:
      "Mẫu nhà phố 2 tầng hiện đại tại Phú Thọ | MH46359",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 4,
    title:
      "Mẫu nhà phố 2 tầng 1 tum hiện đại tại Đà Nẵng | MH46494",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 5,
    title:
      "Bản vẽ nhà Nhật 2 tầng đơn giản đầy đủ công năng | MH46186",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 6,
    title:
      "Mẫu nhà phố 2 tầng hiện đại tại Phú Thọ | MH46359",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 7,
    title:
      "Mẫu nhà phố 2 tầng 1 tum hiện đại tại Đà Nẵng | MH46494",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 8,
    title:
      "Bản vẽ nhà Nhật 2 tầng đơn giản đầy đủ công năng | MH46186",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 9,
    title:
      "Mẫu nhà phố 2 tầng hiện đại tại Phú Thọ | MH46359",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 10,
    title:
      "Mẫu nhà phố 2 tầng 1 tum hiện đại tại Đà Nẵng | MH46494",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 11,
    title:
      "Bản vẽ nhà Nhật 2 tầng đơn giản đầy đủ công năng | MH46186",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
  {
    id: 12,
    title:
      "Mẫu nhà phố 2 tầng hiện đại tại Phú Thọ | MH46359",
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/02/biet-thu-3-tang-tan-co-dien-co-thang-may-khong-gian-song-dang-cap-sang-trong-mh06037-5-676x380.jpg",
  },
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Thiết kế nhà vườn",
    itemListElement: projects.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `https://yourdomain.com/du-an/${item.id}`,
    })),
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* SEO Content */}
      <div className="container mx-auto px-4 mt-8 text-gray-700">
        <h1 className="text-3xl font-bold mb-4">
          Thiết kế nhà vườn đẹp, hiện đại
        </h1>

        <p className="mb-3">
          Thiết kế nhà vườn là xu hướng sống xanh được nhiều gia đình lựa chọn.
          Mộc Viên mang đến giải pháp thiết kế tối ưu, hài hòa giữa kiến trúc và
          thiên nhiên.
        </p>
      </div>

      {/* Grid */}
      <ProjectGrid
        title="Thiết kế nhà vườn"
        projects={projects}
        pageSize={9}
      />
    </>
  );
}