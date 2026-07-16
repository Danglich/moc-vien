import { ShieldCheck } from "lucide-react";

export const aboutData = {
  intro: {
    title: "Giới thiệu Mộc Viên",
    description:
      "Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế, Mộc Viên đã khẳng định vị thế là một trong những đơn vị thiết kế uy tín và được khách hàng tin tưởng hàng đầu trên toàn quốc.",
    features: [
      "Chi nhánh rộng khắp cả nước",
      "Đội ngũ thiết kế chuyên nghiệp và sáng tạo",
      "Tiêu chuẩn chất lượng, kiểm duyệt nghiêm ngặt",
    ],
    stats: [
      { value: "10+", label: "Năm kinh nghiệm" },
      { value: "1000+", label: "Khách hàng yêu thích" },
      { value: "5.000+", label: "Đánh giá tích cực" },
    ],
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/anh-van-phong.png",
  },

  office: {
    title: "Đội ngũ thiết kế Mộc Viên",
    description:
      "Đội ngũ kiến trúc sư và kỹ sư của Mộc Viên luôn đặt công năng, thẩm mỹ và tính khả thi lên hàng đầu, mang đến những không gian sống phù hợp với từng gia đình.",
    features: [
      "Thiết kế kiến trúc sáng tạo",
      "Thiết kế nội thất đồng bộ",
      "Tối ưu công năng sử dụng",
      "Cá nhân hóa theo nhu cầu gia chủ",
    ],
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/van_phong.png",
  },

  fengshui: {
    title: "Bậc thầy phong thủy Mộc Viên",
    description:
      "Nghiên cứu sự ảnh hưởng của hướng gió, hướng khí, mạch nước đến đời sống và tài lộc của gia chủ.",
    features: [
      "Tư vấn phong thủy chuyên sâu",
      "Phong thủy theo tuổi",
      "Dịch vụ phong thủy",
      "Thước lỗ ban",
    ],
    image:
      "https://kuqztqzzyxnsigkrjerd.supabase.co/storage/v1/object/public/images/phong_thuy_2.png",
  },
};

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto space-y-14 px-4 py-10 text-base sm:px-6 md:space-y-20 md:py-16 md:text-[18px] lg:px-8">
        {/* SECTION 1 */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          {/* LEFT */}
          <div>
            <SectionTitle>{aboutData.intro.title}</SectionTitle>

            <p className="mb-6 text-sm leading-7 text-gray-600 sm:text-base md:text-[18px] md:leading-8">
              {aboutData.intro.description}
            </p>

            <FeatureList items={aboutData.intro.features} />

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-4 min-[430px]:grid-cols-3 md:gap-6">
              {aboutData.intro.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-yellow-100 bg-yellow-50/60 px-4 py-4 min-[430px]:rounded-none min-[430px]:border-0 min-[430px]:border-l-4 min-[430px]:border-yellow-500 min-[430px]:bg-transparent min-[430px]:px-3 min-[430px]:py-0"
                >
                  <p className="mb-1 text-3xl font-bold leading-none text-gray-900 sm:text-4xl md:mb-2 md:text-[40px]">
                    {stat.value}
                  </p>

                  <p className="text-sm leading-5 text-gray-600 md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[460px]">
              <img
                src={aboutData.intro.image}
                alt="Giới thiệu văn phòng Mộc Viên"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

              {/* Play button */}
              <button
                type="button"
                aria-label="Xem video giới thiệu Mộc Viên"
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500 text-lg text-gray-950 shadow-xl transition hover:scale-110 hover:bg-yellow-400 md:h-16 md:w-16"
              >
                <span className="ml-1">▶</span>
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          {/* LEFT IMAGE */}
          <div className="order-2 overflow-hidden rounded-xl bg-gray-100 shadow-sm md:order-1">
            <div className="aspect-[4/3] md:aspect-auto md:min-h-[480px]">
              <img
                src={aboutData.office.image}
                alt="Đội ngũ thiết kế Mộc Viên"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="order-1 md:order-2">
            <SectionTitle>{aboutData.office.title}</SectionTitle>

            <p className="mb-6 text-sm leading-7 text-gray-600 sm:text-base md:text-[18px] md:leading-8">
              {aboutData.office.description}
            </p>

            <FeatureList items={aboutData.office.features} />
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          {/* LEFT TEXT */}
          <div>
            <SectionTitle>{aboutData.fengshui.title}</SectionTitle>

            <FeatureList items={aboutData.fengshui.features} />

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base md:text-[18px] md:leading-8">
              {aboutData.fengshui.description}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <div className="aspect-[4/3] md:aspect-auto md:min-h-[460px]">
              <img
                src={aboutData.fengshui.image}
                alt="Tư vấn phong thủy Mộc Viên"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-6 border-l-4 border-yellow-500 pl-4 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:mb-8 md:text-4xl">
      {children}
    </h2>
  );
}

function FeatureList({ items }) {
  return (
    <ul className="space-y-4 md:space-y-5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-6 text-gray-700 sm:text-base md:text-[18px] md:leading-7"
        >
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-green-600 sm:h-7 sm:w-7 md:h-8 md:w-8" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}