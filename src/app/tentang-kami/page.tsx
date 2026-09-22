import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import {
  ShieldCheck,
  Briefcase,
  Award,
  Handshake,
  Lightbulb,
  Eye,
  CheckCircle2,
  MapPin,
  Truck,
  ArrowRight,
  PhoneCall,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil, Visi, Misi, dan Nilai PT YnW Multi Teknik Plastindo - Supplier & Distributor industri terpercaya di Bandar Lampung, Lampung.",
};

export default function TentangKamiPage() {
  const valueIcons: Record<string, any> = {
    integritas: ShieldCheck,
    profesional: Briefcase,
    kualitas: Award,
    kerjasama: Handshake,
    inovasi: Lightbulb,
  };

  const misiList = [
    "Menyediakan produk berkualitas dari berbagai brand dan sumber terpercaya.",
    "Memberikan pelayanan cepat, profesional, responsif, dan berorientasi pada kebutuhan pelanggan.",
    "Menyediakan solusi pengadaan yang efisien untuk membantu menekan downtime dan biaya operasional.",
    "Membangun hubungan jangka panjang yang saling menguntungkan dengan pelanggan dan mitra.",
    "Mengembangkan jaringan distribusi dan sourcing agar kebutuhan pelanggan dapat dipenuhi secara konsisten.",
  ];

  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#102D50] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-[#102D50] font-semibold">Tentang Kami</span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#102D50] uppercase tracking-wider">
              <span>Profil Resmi Perusahaan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D50] tracking-tight">
              PT YnW Multi Teknik Plastindo
            </h1>

            <p className="text-lg font-semibold text-[#F58220]">
              “{company.tagline}” — {company.taglineSupport}
            </p>

            <div className="prose prose-slate max-w-none text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                <strong>PT YnW Multi Teknik Plastindo</strong> hadir sebagai mitra pengadaan untuk kebutuhan industri, alat berat, manufaktur, maintenance, dan kebutuhan plastik umum. Kami mengutamakan ketersediaan produk, kualitas, ketepatan spesifikasi, harga kompetitif, serta pelayanan yang responsif untuk membantu pelanggan menjaga kelancaran operasional.
              </p>
              <p>
                <strong>Positioning Kami:</strong> Kami memposisikan diri sebagai supplier & distributor multi-produk dengan kemampuan sourcing dari berbagai brand dan jaringan pemasok, sehingga pelanggan dapat memperoleh beragam kebutuhan melalui satu pintu pengadaan yang efisien.
              </p>
            </div>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Visi */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#102D50] to-[#0A1E36] text-white p-8 sm:p-10 rounded-2xl shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F58220]">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Visi Perusahaan
              </span>
              <blockquote className="text-lg sm:text-xl font-bold leading-relaxed text-slate-100 italic border-l-4 border-[#F58220] pl-4">
                “Menjadi perusahaan supplier dan distributor terpercaya, profesional, inovatif, dan kompetitif dalam menyediakan solusi kebutuhan industri dan bisnis di Indonesia.”
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-700 text-xs text-slate-400">
              Fokus pada kepuasan pelanggan dan keandalan suplai berkelanjutan.
            </div>
          </div>

          {/* Misi */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-[#F58220] uppercase tracking-wider block">
                Misi Perusahaan
              </span>
              <h2 className="text-2xl font-extrabold text-[#102D50] mt-1">
                Langkah Nyata Mewujudkan Komitmen
              </h2>
            </div>

            <ul className="space-y-4">
              {misiList.map((misi, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#102D50] font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5 Nilai Perusahaan */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#F58220] uppercase tracking-wider">
              Prinsip Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D50]">
              5 Nilai Utama Perusahaan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Landasan integritas dalam setiap hubungan kerja sama bersama mitra dan pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.values.map((val) => {
              const IconComponent = valueIcons[val.id] || ShieldCheck;
              return (
                <div
                  key={val.id}
                  className="industrial-card bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F58220] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#102D50]">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Sourcing card */}
            <div className="bg-[#102D50] p-7 rounded-2xl text-white flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Transparansi
                </span>
                <h3 className="text-lg font-bold text-white">
                  Komitmen Kemitraan Jangka Panjang
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Kami mengutamakan kesesuaian part number dan transparansi spesifikasi material tanpa klaim berlebihan.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-700 text-xs text-slate-300">
                PT YnW Multi Teknik Plastindo
              </div>
            </div>
          </div>
        </div>

        {/* Lokasi & Area Layanan */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#102D50] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#F58220]" />
                <span>Basis Operasional</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#102D50]">
                Berbasis di Bandar Lampung, Melayani Seluruh Indonesia
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Berbasis di <strong>Bandar Lampung, Lampung</strong>, kami melayani kebutuhan pelanggan industri secara lokal maupun pengiriman ke berbagai wilayah Indonesia sesuai kebutuhan dan kesepakatan pengiriman.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold bg-slate-50 p-3 rounded-lg border border-slate-200">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Opsi Pengambilan di Tempat atau Pengiriman Ekspedisi Darat/Laut</span>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-[#102D50]">
                Butuh Penawaran atau Informasi Produk?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tim kami siap menerima konsultasi spesifikasi teknis dan memberikan penawaran harga terbaik.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Hubungi Kami</span>
                </Link>
                <a
                  href="/company-profile.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F58220]" />
                  <span>Unduh Dokumen PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
