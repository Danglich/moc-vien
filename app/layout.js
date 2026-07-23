import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import MobileMenu from "./components/ui/MobileMenu";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://mocviengroup.vn"),

  title: {
    default:
      "Mộc Viên Group - Thiết kế và thi công nhà ở tại Nghệ An, Hà Tĩnh",
    template: "%s | Mộc Viên Group",
  },

  description:
    "Mộc Viên Group chuyên thiết kế kiến trúc, thiết kế nội thất và thi công nhà ở trọn gói tại Nghệ An, Hà Tĩnh và khu vực miền Trung.",

  applicationName: "Mộc Viên Group",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://mocviengroup.vn",
    siteName: "Mộc Viên Group",
    title:
      "Mộc Viên Group - Thiết kế và thi công nhà ở tại Nghệ An, Hà Tĩnh",
    description:
      "Đơn vị thiết kế kiến trúc, nội thất và thi công nhà ở trọn gói tại Nghệ An, Hà Tĩnh.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mộc Viên Group - Thiết kế và thi công nhà ở tại Nghệ An, Hà Tĩnh",
    description:
      "Đơn vị thiết kế kiến trúc, nội thất và thi công nhà ở trọn gói tại Nghệ An, Hà Tĩnh.",
  },

  verification: {
    google: "53kF4d7kBdOd9AyX0tDfTUUxoQUeUAg5NRWoVFzh7WQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-sm md:text-base">
        <div className="hidden md:block">
          <Header />
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>

        <main className="flex-1">{children}</main>

        <Footer />

        <GoogleAnalytics gaId="G-PTSJTP1T35" />
      </body>
    </html>
  );
}