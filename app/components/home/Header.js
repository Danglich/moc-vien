export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="container flex justify-between items-center py-4">
        <h2 className="font-bold text-xl">MAXHOME</h2>
        <nav className="space-x-6">
          <a href="#">Trang chủ</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Dự án</a>
          <a href="#">Dịch vụ</a>
          <a href="#">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}