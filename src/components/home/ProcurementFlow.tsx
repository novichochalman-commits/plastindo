import Link from "next/link";
import { company } from "@/data/company";
import {
  MessageSquare,
  Search,
  FileCheck,
  Truck,
  Headphones,
  ArrowRight,
  Workflow,
} from "lucide-react";

export default function ProcurementFlow() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Konsultasi Kebutuhan",
      description:
        "Sampaikan kebutuhan Anda beserta spesifikasi teknis, part number, ukuran, atau foto komponen yang dicari kepada tim kami.",
    },
    {
      num: "02",
      icon: Search,
      title: "Sourcing & Penawaran",
      description:
        "Tim kami melakukan pencarian ke jaringan manufaktur dan brand terkait, lalu memberikan penawaran harga dan estimasi waktu ketersediaan.",
    },
    {
      num: "03",
      icon: FileCheck,
      title: "Konfirmasi Pesanan",
      description:
        "Setelah penawaran harga disetujui, kami menyiapkan purchase order, invoice, dan kelengkapan dokumen administrasi pemesanan.",
    },
    {
      num: "04",
      icon: Truck,
      title: "Pengiriman Produk",
      description:
        "Pesanan dikemas secara aman dan dikirim sesuai kesepakatan, baik pickup lokal di Bandar Lampung maupun ekspedisi antar pulau ke seluruh Indonesia.",
    },
    {
      num: "05",
      icon: Headphones,
      title: "Dukungan After-Sales",
      description:
        "Kami siap mendampingi konfirmasi kesesuaian barang setelah diterima serta membantu kebutuhan pengadaan berkala selanjutnya.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="alur-pengadaan">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#102D50] uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Proses Kerja Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D50] tracking-tight">
            5 Langkah Mudah Alur Pengadaan
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Alur pengadaan sistematis yang dirancang untuk memudahkan purchasing officer, kontraktor, dan mekanik industri dalam melengkapi suku cadang tanpa kendala.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-[#102D50] hover:shadow-md transition-all duration-200 group"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#F58220] transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#102D50] group-hover:bg-[#102D50] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#102D50] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400 font-medium">
                  Langkah {idx + 1} dari 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-[#102D50] hover:bg-[#1A4275] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-sm transition-colors"
          >
            <span>Mulai Konsultasi Kebutuhan Anda</span>
            <ArrowRight className="w-4 h-4 text-[#F58220]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
