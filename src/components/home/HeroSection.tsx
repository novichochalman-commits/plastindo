import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import {
  FileText,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  Truck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#102D50] text-white overflow-hidden py-16 lg:py-24 border-b border-slate-700">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Decorative gradient blur */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F58220]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-amber-300">
              <ShieldCheck className="w-4 h-4 text-[#F58220]" />
              <span>Teknik | Industri | Inovasi</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 hidden sm:inline">Supplier & Distributor Resmi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Solusi Lengkap Pengadaan untuk{" "}
              <span className="text-[#F58220]">Industri dan Bisnis</span> Anda
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Dari plastik industri hingga spare part alat berat, hose, bearing, dan sistem transmisi mesin.{" "}
              <strong className="text-white font-semibold">{company.name}</strong> membantu Anda menemukan produk sesuai spesifikasi dan kebutuhan operasional.
            </p>

            {/* Key Value Points directly from verified info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
                <PackageCheck className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Multi-Produk 1 Pintu</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sourcing Berbagai Brand</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
                <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kirim Seluruh Wilayah</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Minta Penawaran</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/produk"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-lg border border-slate-600 transition-colors"
              >
                <span>Jelajahi Produk</span>
              </Link>

              <a
                href="/company-profile.pdf"
                download
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium ml-1 transition-colors underline underline-offset-4"
              >
                <FileText className="w-4 h-4 text-[#F58220]" />
                <span>Unduh Dokumen PDF</span>
              </a>
            </div>
          </div>

          {/* Right Visual Composition Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-900 group">
              {/* Product Artwork Composition extracted from Company Profile */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/hero-composition.jpg"
                  alt="Komposisi Produk Industri: Bearing, Hose, V-Belt, Plastik Industri dan Spare Part Alat Berat"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E36]/90 via-transparent to-transparent"></div>

                {/* Floating Badge Over Artwork */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Komposisi Produk Lengkap
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Plastik • Spare Part • Hydraulic Hose • Bearing • V-Belt
                      </p>
                    </div>
                    <Link
                      href="/produk"
                      className="p-2 bg-[#F58220] hover:bg-[#E07316] rounded-lg text-white shrink-0 transition-colors"
                      title="Lihat Semua Produk"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
