import type { Metadata } from "next";
import Link from "next/link";
import { productCategories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Layers, PhoneCall, Sparkles, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Katalog Produk & Sourcing Industri",
  description:
    "Katalog produk lengkap PT YnW Multi Teknik Plastindo: Plastik industri, spare part alat berat, hydraulic hose, bearing, dan V-belt transmisi mesin.",
};

export default function ProdukPage() {
  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#102D50] transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-[#102D50] font-semibold">Produk</span>
        </div>

        {/* Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#F58220] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Katalog Industri Resmi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D50] tracking-tight">
            Katalog Produk & Solusi Sourcing
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Menyediakan 5 kategori utama komponen dan material industri. Kami melayani pengadaan berdasarkan merek, tipe spesifikasi, maupun part number yang Anda butuhkan.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white text-xs font-bold px-5 py-3 rounded-lg shadow-sm transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Minta Penawaran Kustom</span>
            </Link>

            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-3 rounded-lg border border-slate-300 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Unduh Katalog Lengkap PDF</span>
            </a>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#102D50]">
              5 Kategori Kebutuhan Pokok Industri
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              5 Kategori Tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Sourcing Guidance Card */}
        <div className="bg-[#102D50] text-white p-8 rounded-2xl shadow-md">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Fleksibilitas Sourcing</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Tidak Menemukan Item yang Anda Cari di Daftar?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Jaringan kami memiliki akses ke berbagai distributor tangan pertama dan manufaktur spare part. Kirimkan foto sampel, part number lama, atau spesifikasi dimensi teknis Anda melalui formulir penawaran atau WhatsApp kami.
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors"
              >
                <span>Konsultasikan dengan Tim Kami</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
