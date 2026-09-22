import HeroSection from "@/components/home/HeroSection";
import CompanySummary from "@/components/home/CompanySummary";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcurementFlow from "@/components/home/ProcurementFlow";
import BrandsSection from "@/components/home/BrandsSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Ringkasan Perusahaan */}
      <CompanySummary />

      {/* 3. 5 Kategori Produk */}
      <ProductCategories />

      {/* 4. Mengapa Memilih Kami */}
      <WhyChooseUs />

      {/* 5. Alur Pengadaan */}
      <ProcurementFlow />

      {/* 6. Brand & Kemampuan Sourcing */}
      <BrandsSection />

      {/* 7. CTA Penutup */}
      <CtaSection />
    </>
  );
}
