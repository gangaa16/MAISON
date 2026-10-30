import HeroSection from "@/components/home/HeroSection";
import BrandValues from "@/components/home/BrandValues";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import EditorialSection from "@/components/home/EditorialSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#25251f]">
      <HeroSection />
      <BrandValues />
      <CategorySection />
      <FeaturedProducts />
      <EditorialSection />
      <NewsletterSection />
    </main>
  );
}