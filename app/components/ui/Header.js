import { Phone, Search } from "lucide-react";
import Menu from "./Menu";

const topLinks = [
  {
    title: "Quy trình",
    url: "/quy-trinh-lam-viec"
  },
  {
    title: "Cam kết",
    url: "/cam-ket"
  },
  {
    title: "Thước lỗ ban",
    url: "/thuoc-lo-ban"
  }
]

export default function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-center border-pm border-b-1">
        <div className="container flex justify-between items-center py-3">
          <nav className="space-x-6">
            {topLinks.map((link) => (
              <a href={link.url} key={link.title} className="hover:text-primary font-medium text-[18px]">{link.title}</a>
            ))}
          </nav>
        </div>
      </div>
      <div className="bg-white z-50 flex items-center justify-center">
        <div className="container flex justify-between items-center py-2">
          {/* Logo */}
          <a className="flex items-center gap-2" href="/">
            <div className="w-32 flex items-center justify-center rounded">
              <img src="/images/moc-vien-logo.png"/>
            </div>
          </a>

          {/* Search */}
          <div className="flex-1 mx-6">
            <div className="flex items-center bg-white rounded-full overflow-hidden border border-pm">
              <input
                type="text"
                placeholder="Tìm kiếm ..."
                className="flex-1 px-4 py-3 outline-none text-sm"
              />
              <button className="bg-yellow-500 px-4 py-3 flex items-center justify-center cursor-pointer">
                <Search className="text-white w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hotline */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Phone className="zoom-animation w-10 h-10 text-red-700 border rounded-full p-2" />
            </div>

            <div className="text-right">
              <p className="text-yellow-500 font-semibold leading-tight">
                082.8001.569
              </p>
              <p className="text-yellow-500 font-semibold leading-tight">
                035.413.6968
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Menu/>
      </div>
    </header>
  );
}