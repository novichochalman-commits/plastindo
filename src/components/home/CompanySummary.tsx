import Link from "next/link";
import { company } from "@/data/company";
import {
  Building2,
  MapPin,
  Layers,
  ArrowRight,
  Target,
  FileCheck2,
} from "lucide-react";

export default function CompanySummary() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold text-[#102D50] uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-[#F58220]" />
                <span>Profil & Keberadaan Perusahaan</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D50] leading-snug">
                Mitra Pengadaan Multi-Produk dengan Kemampuan Sourcing Terpercaya
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                <strong className="text-slate-800">{company.name}</strong> hadir sebagai mitra pengadaan terpercaya untuk kebutuhan industri, alat berat, manufaktur, maintenance, dan kebutuhan plastik umum. Kami memposisikan diri sebagai supplier & distributor multi-produk dengan kemampuan sourcing dari berbagai brand dan jaringan pemasok, sehingga pelanggan dapat memperoleh beragam kebutuhan operasional melalui <strong>satu pintu pengadaan</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Target className="w-5 h-5 text-[#F58220] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#102D50]">Positioning Bisnis</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Kemampuan sourcing berbagai brand dan tipe produk, menekan downtime dan efisiensi pengadaan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-[#102D50] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#102D50]">Lokasi & Jangkauan</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Berbasis di Bandar Lampung, siap melayani lokal serta pengiriman ke berbagai wilayah Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card (4 cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#102D50] to-[#0A1E36] text-white p-6 sm:p-8 rounded-xl shadow-md space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Tagline Resmi
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  “Teknik | Industri | Inovasi”
                </h3>
                <p className="text-xs text-slate-300 italic pt-1">
                  “One Partner, Complete Solution for Industry & Business.”
                </p>
              </div>

              <div className="border-t border-slate-700/80 pt-5 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kualitas & Ketepatan Spesifikasi</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>5 Kategori Kebutuhan Pokok Industri</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center justify-between w-full bg-[#F58220] hover:bg-[#E07316] text-white text-xs font-bold px-4 py-3 rounded-lg transition-colors"
                >
                  <span>Pelajari Profil Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
