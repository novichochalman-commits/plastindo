import Link from "next/link";
import Image from "next/image";
import { ProductCategory, getRelatedCategories } from "@/data/products";
import {
  CheckCircle2,
  ListChecks,
  PhoneCall,
  ArrowRight,
  ShieldAlert,
  Layers,
  ArrowLeft,
} from "lucide-react";

interface CategoryDetailProps {
  category: ProductCategory;
}

export default function CategoryDetail({ category }: CategoryDetailProps) {
  const relatedCategories = getRelatedCategories(category);
  const imageSrc = `/images/${category.slug}.png`;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#102D50] transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/produk" className="hover:text-[#102D50] transition-colors">
            Produk
          </Link>
          <span>/</span>
          <span className="text-[#102D50] font-semibold">{category.name}</span>
        </div>

        {/* Main Category Header & Intro */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Product Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center p-6">
                <Image
                  src={imageSrc}
                  alt={category.name}
                  fill
                  className="object-contain p-6 hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>

            {/* Right: Info & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#102D50]">
                  <Layers className="w-3.5 h-3.5 text-[#F58220]" />
                  <span>Kategori Produk Resmi</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102D50] tracking-tight">
                  {category.name}
                </h1>
                <p className="text-sm font-semibold text-[#F58220]">
                  {category.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {category.longDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={`/kontak?kategori=${category.slug}`}
                  className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all active:scale-95 text-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Minta Penawaran Produk Ini</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-lg text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali ke Katalog</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Specification & Items Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Daftar Jenis Produk (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <div className="p-2 rounded-lg bg-blue-50 text-[#102D50]">
                <ListChecks className="w-5 h-5 text-[#F58220]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#102D50]">
                  Daftar Jenis Produk & Komponen
                </h2>
                <p className="text-xs text-slate-500">
                  Varian produk yang tersedia untuk proses pengadaan dan sourcing
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-sm font-bold text-[#102D50]">{item.name}</h3>
                  </div>
                  {item.description && (
                    <p className="text-xs text-slate-600 pl-6">{item.description}</p>
                  )}
                </div>
              ))}
            </div>

            {/* If there are material options (like for plastic) */}
            {category.materials && category.materials.length > 0 && (
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <h3 className="text-sm font-bold text-[#102D50] uppercase tracking-wider">
                  Pilihan Jenis Material:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded-md text-xs font-semibold"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Informasi Spesifikasi yang Perlu Disampaikan Pelanggan (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                  <ShieldAlert className="w-5 h-5 text-[#F58220]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#102D50]">
                    Spesifikasi yang Perlu Disampaikan
                  </h2>
                  <p className="text-xs text-slate-500">
                    Untuk mempercepat pencarian dan penawaran harga akurat
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Agar tim teknis kami dapat memberikan penawaran produk yang tepat dan cepat, mohon sertakan informasi berikut saat menghubungi kami:
                </p>

                <ul className="space-y-2.5">
                  {category.specRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#102D50] font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/kontak?kategori=${category.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#102D50] hover:bg-[#1A4275] text-white text-xs font-bold py-3 rounded-lg transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#F58220]" />
                  <span>Kirim Permintaan dengan Kategori Ini</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tautan Kategori Terkait */}
        {relatedCategories.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#102D50]">
                Kategori Produk Terkait
              </h2>
              <Link
                href="/produk"
                className="text-xs font-semibold text-[#102D50] hover:text-[#F58220] transition-colors flex items-center gap-1"
              >
                <span>Lihat Semua</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCategories.map((relCat) => (
                <div
                  key={relCat.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex items-center justify-between hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={`/images/${relCat.slug}.png`}
                        alt={relCat.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#102D50]">
                        {relCat.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {relCat.tagline}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/produk/${relCat.slug}`}
                    className="p-2 bg-slate-100 hover:bg-[#102D50] hover:text-white rounded-lg text-slate-700 transition-colors shrink-0 ml-4"
                    title={`Buka detail ${relCat.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
