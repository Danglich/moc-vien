import { Check, ShieldCheck } from "lucide-react";

export const aboutData = {
  intro: {
    title: "Giới thiệu Mộc Viên",
    description:
      "Với hơn 12 năm kinh nghiệm trong lĩnh vực thiết kế, Maxhome đã khẳng định vị thế là một trong những đơn vị thiết kế uy tín và được khách hàng tin tưởng hàng đầu trên toàn quốc.",
    features: [
      "Chi nhánh rộng khắp cả nước",
      "Đội ngũ thiết kế chuyên nghiệp và sáng tạo",
      "Tiêu chuẩn chất lượng, kiểm duyệt nghiêm ngặt",
    ],
    stats: [
      { value: "12+", label: "năm kinh nghiệm" },
      { value: "4500+", label: "Khách hàng yêu thích" },
      { value: "10.000+", label: "Đánh giá tích cực và trải nghiệm" },
    ],
    image: "https://mocviengroup.vn/wp-content/uploads/2025/03/483487289_122116599596716662_6306153882274393052_n.jpg",
  },

  office: {
    title: "Trụ sở Mộc Viên",
    description:
      "Trụ sở rộng lớn trải dài toàn quốc được đầu tư bài bản là điểm tựa để Maxhome vận hành bộ máy thiết kế chuyên nghiệp, từ khâu tư vấn đến triển khai bản vẽ.",
    features: [
      "Nhóm khảo sát kỹ thuật",
      "Nhóm thiết kế kiến trúc",
      "Phòng phong thuỷ",
      "Phòng chăm sóc khách hàng",
    ],
    image: "https://maxhomegroup.vn/wp-content/uploads/2024/11/chi-nhanh-Can-Tho.jpg",
  },

  fengshui: {
    title: "Bậc thầy phong thủy Maxhome",
    description:
      "Nghiên cứu sự ảnh hưởng của hướng gió, hướng khí, mạch nước đến đời sống và tài lộc của gia chủ.",
    features: [
      "Tư vấn phong thủy chuyên sâu",
      "Phong thủy theo tuổi",
      "Dịch vụ phong thủy",
      "Thước lỗ ban",
    ],
    image: "https://maxhomegroup.vn/wp-content/uploads/2026/04/banner-vuong-phong-thuy-2026-542x580.png",
  },
};

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-20 text-[18px]">
      
      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-semibold mb-8 border-l-4 border-pm pl-4">
            {aboutData.intro.title}
          </h2>

          <p className="text-gray-600 mb-6">
            {aboutData.intro.description}
          </p>

          <ul className="space-y-5 mb-8">
            {aboutData.intro.features.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <ShieldCheck  className="w-10 h-10 text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {aboutData.intro.stats.map((stat, i) => (
              <div key={i} className="border-l-5 border-yellow-500 pl-3">
                <p className="text-[40px] font-bold mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img
            src={aboutData.intro.image}
            className="w-full rounded-lg object-cover"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer">
              ▶
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <img
          src={aboutData.office.image}
          className="w-full rounded-lg object-cover"
        />

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-4xl font-semibold mb-8 border-l-4 border-pm pl-4">
            {aboutData.office.title}
          </h2>

          <p className="text-gray-600 mb-6">
            {aboutData.office.description}
          </p>

          <ul className="space-y-3">
            {aboutData.office.features.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 mb-6">
                <ShieldCheck  className="w-10 h-10 text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-semibold mb-8 border-l-4 border-pm pl-4">
            {aboutData.fengshui.title}
          </h2>

          <ul className="space-y-3 mb-6">
            {aboutData.fengshui.features.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 mb-6">
                <ShieldCheck  className="w-10 h-10 text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-600">
            {aboutData.fengshui.description}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={aboutData.fengshui.image}
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}