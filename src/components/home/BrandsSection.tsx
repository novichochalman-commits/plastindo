import { company } from "@/data/company";
import { Info, Sparkles } from "lucide-react";

export default function BrandsSection() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Fleksibilitas Sourcing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D50] tracking-tight">
            Kemampuan Sourcing Berbagai Brand Terkemuka
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {company.brandNote}
          </p>
        </div>

        {/* Brands Grid (Strictly textual badges as required) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {company.brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-xl p-4 text-center shadow-2xs hover:shadow-sm hover:border-[#102D50]/40 transition-all flex flex-col items-center justify-center min-h-[72px] group"
            >
              <span className="text-base font-extrabold text-[#102D50] group-hover:text-[#F58220] tracking-wider transition-colors">
                {brand}
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-0.5">
                Industrial Brand
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer / Informational Note as strictly mandated */}
        <div className="mt-8 max-w-3xl mx-auto bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-700">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Catatan Keterbukaan:</strong> Nama-nama merek di atas adalah brand yang umum digunakan dan dapat kami lakukan proses sourcing sesuai dengan permintaan, nomor seri, kebutuhan spesifikasi, ketersediaan pasar, serta kesepakatan penawaran pelanggan.
          </p>
        </div>
      </div>
    </section>
  );
}
