"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/data/company";
import { MessageCircle, AlertCircle, X, ExternalLink, ArrowRight } from "lucide-react";

export default function WhatsAppButton() {
  const [modalOpen, setModalOpen] = useState(false);

  // Check whether the WhatsApp number is verified (contains valid digits not 'x')
  const isVerified =
    company.whatsapp &&
    !company.whatsapp.includes("x") &&
    company.whatsapp.replace(/[^0-9]/g, "").length >= 9;

  const handleClick = (e: React.MouseEvent) => {
    if (!isVerified) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  const targetUrl = isVerified
    ? `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        "Halo PT YnW Multi Teknik Plastindo, saya ingin menanyakan informasi produk dan penawaran."
      )}`
    : "#";

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={targetUrl}
          onClick={handleClick}
          target={isVerified ? "_blank" : undefined}
          rel={isVerified ? "noopener noreferrer" : undefined}
          aria-label="Konsultasi WhatsApp PT YnW Multi Teknik Plastindo"
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-600"></span>
          </div>
          <span className="hidden sm:inline font-semibold text-sm tracking-wide">
            Konsultasi WhatsApp
          </span>
        </a>
      </div>

      {/* Modal if contact is awaiting verification */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative border border-slate-200">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-md"
              aria-label="Tutup dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-100 text-amber-700 rounded-lg shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Konfirmasi Kontak Perusahaan
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Nomor WhatsApp resmi perusahaan saat ini dalam proses konfigurasi administratif di konfigurasi web (<code className="text-blue-700">src/data/company.ts</code>).
                </p>
              </div>
            </div>

            <div className="mt-5 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 space-y-2">
              <p>
                Anda dapat mengisi <strong>Formulir Permintaan Penawaran</strong> untuk menyiapkan draf pesan spesifikasi produk Anda terlebih dahulu.
              </p>
              <p className="text-slate-500">
                Atau unduh dokumen resmi <strong>Company Profile PDF</strong> untuk informasi lebih lanjut.
              </p>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <Link
                href="/kontak"
                onClick={() => setModalOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#102D50] hover:bg-[#1A4275] text-white text-xs font-semibold py-2.5 px-4 rounded-lg flex-1 transition-colors"
              >
                <span>Buka Form Penawaran</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/company-profile.pdf"
                download
                className="inline-flex items-center justify-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-medium py-2.5 px-3 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Unduh PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
