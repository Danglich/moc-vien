import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import MobileMenu from "./components/ui/MobileMenu";

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
  title: "Mộc Viên - Làm nhà bằng cả kinh nghiệm và trải nghiệm thực tế",
  description: "Mộc viên - Chuyên thiết kế và thi công trọn gái nhà ở",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-sm md:text-base">
        <div className="hidden md:block">
          <Header/>
        </div>
        <div className="md:hidden">
          <MobileMenu/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
