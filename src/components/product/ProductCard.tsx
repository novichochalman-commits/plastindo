import Link from "next/link";
import Image from "next/image";
import { ProductCategory } from "@/data/products";
import { ArrowRight, Check } from "lucide-react";

interface ProductCardProps {
  category: ProductCategory;
}

export default function ProductCard({ category }: ProductCardProps) {
  const imageSrc = `/images/${category.slug}.png`;

  return (
    <div className="industrial-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:border-slate-300">
      <div>
        {/* Product Image */}
        <div className="relative h-52 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
          <Image
            src={imageSrc}
            alt={category.name}
            fill
            className="object-contain p-4 hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Info */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-[#102D50] leading-snug">
            {category.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium italic">
            {category.tagline}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {category.description}
          </p>

          {/* List of sample items */}
          <div className="pt-2">
            <p className="text-[11px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
              Contoh Produk:
            </p>
            <ul className="space-y-1">
              {category.items.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center text-xs text-slate-700 gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-6 pt-0 flex items-center gap-2">
        <Link
          href={`/produk/${category.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#102D50] hover:bg-[#1A4275] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
        >
          <span>Detail Spesifikasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href={`/kontak?kategori=${category.slug}`}
          className="inline-flex items-center justify-center bg-[#F58220] hover:bg-[#E07316] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
        >
          <span>Penawaran</span>
        </Link>
      </div>
    </div>
  );
}
