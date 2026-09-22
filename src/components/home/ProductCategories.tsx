import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/products";
import { ArrowRight, Package, Check } from "lucide-react";

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white" id="kategori-produk">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#F58220] uppercase tracking-wider">
            <Package className="w-3.5 h-3.5" />
            <span>Katalog Industri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D50] tracking-tight">
            5 Pilar Kategori Produk Industri
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Menjawab kebutuhan pengadaan sektor manufaktur, perbengkelan, kontraktor alat berat, dan industri pengolahan dengan produk berkualitas dan spesifikasi tepat.
          </p>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const imageSrc = `/images/${category.slug}.png`;

            return (
              <div
                key={category.id}
                className={`industrial-card group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:border-slate-300 ${
                  index === 0 || index === 1 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Image Container with authentic PDF product photos */}
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <Image
                      src={imageSrc}
                      alt={category.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#102D50]/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      Kategori {index + 1}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#102D50] group-hover:text-[#F58220] transition-colors leading-snug">
                        {category.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-1 italic">
                        {category.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {category.description}
                    </p>

                    {/* Featured items preview */}
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase text-slate-400 tracking-wider mb-2">
                        Pilihan Produk:
                      </p>
                      <ul className="space-y-1.5">
                        {category.items.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center text-xs text-slate-700 gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </li>
                        ))}
                        {category.items.length > 3 && (
                          <li className="text-[11px] text-slate-400 italic pl-5.5">
                            + {category.items.length - 3} jenis produk lainnya
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <Link
                    href={`/produk/${category.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#102D50] hover:bg-[#1A4275] text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/kontak?kategori=${category.slug}`}
                    className="inline-flex items-center justify-center bg-orange-50 hover:bg-[#F58220] text-[#F58220] hover:text-white border border-orange-200 hover:border-transparent text-xs font-semibold py-2.5 px-3.5 rounded-lg transition-colors"
                    title="Minta Penawaran Kategori Ini"
                  >
                    <span>Minta Penawaran</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Link Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-base">
              Mencari dimensi khusus, material langka, atau part number tertentu?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Tim sourcing kami siap membantu pencarian produk sesuai kebutuhan teknis spesifik Anda.
            </p>
          </div>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white text-xs font-bold px-5 py-3 rounded-lg shadow-sm shrink-0 transition-colors"
          >
            <span>Konsultasikan Spesifikasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
