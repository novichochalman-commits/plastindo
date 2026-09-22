import Link from "next/link";
import { company } from "@/data/company";
import { PhoneCall, ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#102D50] via-[#0E2849] to-[#0A1E36] text-white relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold text-amber-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Respon Cepat & Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Sedang Mencari Produk atau Part Number Tertentu?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sampaikan spesifikasi dan kebutuhan Anda. Tim kami siap membantu proses pencarian produk dan penawaran harga terbaik.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95 text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasikan Kebutuhan Anda</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-lg border border-slate-600 transition-colors text-sm"
            >
              <FileText className="w-4 h-4 text-[#F58220]" />
              <span>Unduh Company Profile (PDF)</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Berbasis di Bandar Lampung • Pengiriman lokal & ke seluruh wilayah Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}
