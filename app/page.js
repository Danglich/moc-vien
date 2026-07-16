import FeaturedProjects from "./components/home/FeaturedProjects";
import Services from "./components/home/Services";
import FengShui from "./components/home/FengShui";
import HouseList from "./components/home/HouseList";
import VillaSection from "./components/home/VillaSection";
import ConstructionSection from "./components/home/ConstructionSection";
import Testimonials from "./components/home/Testimonials";
import BlogSection from "./components/home/BlogSection";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import GardenBlogs from "./components/home/GardenBlogs";
import CustomerContracts from "./components/home/CustomerContracts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <ConstructionSection />
      <CustomerContracts />
      <BlogSection />
    </>
  );
}