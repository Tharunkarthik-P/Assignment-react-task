import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import FeatureGrid from '../components/FeatureGrid';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import Blog from '../components/Blog';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <FeatureGrid />
      <ServicesSection />
      <SolutionsSection />
      <Blog />
      <Footer />
    </div>
  );
}