import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import QuoteForm from "@/components/contact/QuoteForm";
import {
  MapPin,
  Clock,
  Truck,
  FileText,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Mail,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak & Permintaan Penawaran",
  description:
    "Hubungi PT YnW Multi Teknik Plastindo untuk permintaan penawaran harga plastik industri, spare part alat berat, hose, bearing, dan V-belt di Bandar Lampung.",
};

export default function KontakPage() {
  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#102D50] transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-[#102D50] font-semibold">Kontak & Penawaran</span>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#102D50] uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Layanan Pelanggan & Penawaran Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102D50] tracking-tight">
            Hubungi Kami & Minta Penawaran Harga
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Sampaikan kebutuhan pengadaan industri Anda. Formulir di bawah ini akan menyusun format pesan WhatsApp rapi agar tim pengadaan kami dapat memproses spesifikasi barang Anda dengan cepat.
          </p>
        </div>

        {/* Form and Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="bg-white p-8 rounded-2xl border border-slate-200 text-sm text-slate-500">Memuat formulir penawaran...</div>}>
              <QuoteForm />
            </Suspense>
          </div>

          {/* Company Verification Information Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Lokasi & Layanan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-[#102D50] border-b border-slate-100 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F58220]" />
                <span>Basis Operasional & Pengiriman</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#102D50] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Nama Perusahaan
                    </strong>
                    <span className="font-semibold text-slate-800">{company.name}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F58220] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Lokasi Basis
                    </strong>
                    <span>{company.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      WhatsApp Resmi
                    </strong>
                    <a
                      href={`https://wa.me/${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>{company.whatsappDisplay}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        Chat Langsung
                      </span>
                    </a>
                  </div>
                </div>

                {company.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                        Email Resmi
                      </strong>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors underline underline-offset-2"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Cakupan Pengiriman
                    </strong>
                    <span>{company.serviceArea}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Waktu Operasional
                    </strong>
                    <span>{company.operationalHours.weekdays}</span>
                    {company.operationalHours.note && (
                      <span className="block text-xs text-slate-500 italic mt-0.5">
                        ({company.operationalHours.note})
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Profile PDF download card */}
              <div className="pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#102D50]">
                    <FileText className="w-4 h-4 text-[#F58220]" />
                    <span>Dokumen Profil Perusahaan</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dokumen company profile resmi dapat Anda unduh dalam format PDF untuk keperluan arsip purchasing internal Anda.
                  </p>
                  <a
                    href="/company-profile.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-[#102D50] hover:bg-[#1A4275] text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors mt-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#F58220]" />
                    <span>Unduh Company Profile (PDF)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Credibility & Disclaimer Card */}
            <div className="bg-gradient-to-br from-[#102D50] to-[#0A1E36] text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-[#F58220]" />
                <span>Prinsip Layanan Kami</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                Transparansi & Respon Cepat
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sourcing spesifik sesuai part number & dimensi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Penawaran harga transparan tanpa komitmen tersembunyi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Koordinasi pengiriman langsung dengan ekspedisi terpercaya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
