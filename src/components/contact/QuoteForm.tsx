"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import { buildWhatsAppQuoteUrl, QuoteFormData } from "@/lib/whatsapp";
import {
  Send,
  Building2,
  User,
  Phone,
  Mail,
  Package,
  Layers,
  MapPin,
  FileText,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("kategori");

  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    companyName: "",
    whatsapp: "",
    email: "",
    category: "",
    productName: "",
    specification: "",
    quantity: "",
    unit: "Pcs",
    deliveryCity: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedDraft, setGeneratedDraft] = useState("");

  // Sync category from URL parameter if available
  useEffect(() => {
    if (categoryParam) {
      const matched = productCategories.find(
        (c) => c.slug.toLowerCase() === categoryParam.toLowerCase() || c.id.toLowerCase() === categoryParam.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, category: matched.name }));
      }
    }
  }, [categoryParam]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Nomor WhatsApp wajib diisi";
    } else if (!/^[0-9+\-\s]{8,20}$/.test(formData.whatsapp.trim())) {
      newErrors.whatsapp = "Format nomor WhatsApp tidak valid";
    }

    if (!formData.category) newErrors.category = "Silakan pilih salah satu kategori produk";
    if (!formData.productName.trim()) newErrors.productName = "Nama produk atau part number wajib diisi";
    if (!formData.quantity.trim()) newErrors.quantity = "Jumlah kebutuhan wajib diisi";
    if (!formData.deliveryCity.trim()) newErrors.deliveryCity = "Kota tujuan pengiriman wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isCompanyWhatsAppVerified =
    company.whatsapp &&
    !company.whatsapp.includes("x") &&
    company.whatsapp.replace(/[^0-9]/g, "").length >= 9;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (isCompanyWhatsAppVerified) {
      const url = buildWhatsAppQuoteUrl(formData);
      // Open WhatsApp chat in a new tab
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // Build textual preview and open modal
      const rawLines = [
        `*PERMINTAAN PENAWARAN PRODUK*`,
        `Halo PT YnW Multi Teknik Plastindo, saya ingin meminta penawaran harga:`,
        ``,
        `• *Nama:* ${formData.name.trim()}`,
        formData.companyName?.trim() ? `• *Perusahaan:* ${formData.companyName.trim()}` : null,
        `• *WhatsApp:* ${formData.whatsapp.trim()}`,
        formData.email?.trim() ? `• *Email:* ${formData.email.trim()}` : null,
        `• *Kategori:* ${formData.category}`,
        `• *Nama Produk / Part Number:* ${formData.productName.trim()}`,
        formData.specification?.trim() ? `• *Spesifikasi:* ${formData.specification.trim()}` : null,
        `• *Jumlah:* ${formData.quantity.trim()} ${formData.unit || ""}`,
        `• *Tujuan Pengiriman:* ${formData.deliveryCity.trim()}`,
        formData.notes?.trim() ? `• *Catatan:* ${formData.notes.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      setGeneratedDraft(rawLines);
      setModalOpen(true);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-extrabold text-[#102D50]">
          Formulir Permintaan Penawaran Harga
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
          Isi detail spesifikasi produk yang Anda butuhkan. Sistem akan merangkum informasi Anda ke format pesan WhatsApp resmi siap kirim.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Section 1: Informasi Kontak */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            1. Informasi Pemesan
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nama Lengkap */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: Budi Santoso"
                  className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                    errors.name ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:ring-blue-100 focus:border-[#102D50]"
                  } focus:outline-none focus:ring-2`}
                />
              </div>
              {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Nama Perusahaan (Opsional) */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Perusahaan / Usaha <span className="text-slate-400 font-normal">(Opsional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Contoh: CV Maju Karya Teknik"
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#102D50]"
                />
              </div>
            </div>

            {/* Nomor WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-700 mb-1">
                Nomor WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="Contoh: 081234567890"
                  className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                    errors.whatsapp ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:ring-blue-100 focus:border-[#102D50]"
                  } focus:outline-none focus:ring-2`}
                />
              </div>
              {errors.whatsapp && <p className="text-[11px] text-red-500 mt-1">{errors.whatsapp}</p>}
            </div>

            {/* Email (Opsional) */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                Alamat Email <span className="text-slate-400 font-normal">(Opsional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Contoh: purchasing@perusahaan.com"
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#102D50]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Detail Produk */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            2. Detail Kebutuhan Produk
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Kategori Produk */}
            <div>
              <label htmlFor="category" className="block text-xs font-semibold text-slate-700 mb-1">
                Kategori Produk <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Layers className="w-4 h-4" />
                </div>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-white ${
                    errors.category ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:ring-blue-100 focus:border-[#102D50]"
                  } focus:outline-none focus:ring-2`}
                >
                  <option value="">-- Pilih Kategori Produk --</option>
                  {productCategories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="Lainnya / Multi-Kategori">Lainnya / Multi-Kategori</option>
                </select>
              </div>
              {errors.category && <p className="text-[11px] text-red-500 mt-1">{errors.category}</p>}
            </div>

            {/* Nama Produk / Part Number */}
            <div>
              <label htmlFor="productName" className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Produk / Part Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Package className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="Contoh: Bearing 6205-2RS / Sheet PE 10mm"
                  className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                    errors.productName ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:ring-blue-100 focus:border-[#102D50]"
                  } focus:outline-none focus:ring-2`}
                />
              </div>
              {errors.productName && <p className="text-[11px] text-red-500 mt-1">{errors.productName}</p>}
            </div>

            {/* Spesifikasi atau Ukuran */}
            <div className="sm:col-span-2">
              <label htmlFor="specification" className="block text-xs font-semibold text-slate-700 mb-1">
                Spesifikasi / Dimensi / Merek Unit <span className="text-slate-400 font-normal">(Disarankan)</span>
              </label>
              <input
                type="text"
                id="specification"
                value={formData.specification}
                onChange={(e) => setFormData({ ...formData, specification: e.target.value })}
                placeholder="Contoh: Ukuran 1000x2000mm, Brand SKF, Tekanan 300 Bar, Unit Komatsu PC200"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#102D50]"
              />
            </div>

            {/* Jumlah & Satuan */}
            <div>
              <label htmlFor="quantity" className="block text-xs font-semibold text-slate-700 mb-1">
                Jumlah Kebutuhan <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="Contoh: 10"
                  className={`flex-1 px-3 py-2.5 text-sm rounded-lg border ${
                    errors.quantity ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:ring-blue-100 focus:border-[#102D50]"
                  } focus:outline-none focus:ring-2`}
                />
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  className="w-24 px-2 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  aria-label="Satuan jumlah"
                >
                  <option value="Pcs">Pcs</option>
                  <option value="Unit">Unit</option>
                  <option value="Meter">Meter</option>
                  <option value="Lembar">Lembar</option>
                  <option value="Batang">Batang</option>
                  <option value="Roll">Roll</option>
                  <option value="Set">Set</option>
                </select>
              </div>
              {errors.quantity && <p className="text-[11px] text-red-500 mt-1">{errors.quantity}</p>}
            </div>

            {/* Kota Tujuan Pengiriman */}
            <div>
              <label htmlFor="deliveryCity" className="block text-xs font-semibold text-slate-700 mb-1">
                Kota Tujuan Pengiriman <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="deliveryCity"
                  value={formData.deliveryCity}
                  onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                  placeholder="Contoh: Bandar Lampung / Palembang / Jakarta"
                  className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                    errors.deliveryCity ? "border-red-500 focus:ring-red-200" : "border-slate-300 focus:ring-blue-100 focus:border-[#102D50]"
                  } focus:outline-none focus:ring-2`}
                />
              </div>
              {errors.deliveryCity && <p className="text-[11px] text-red-500 mt-1">{errors.deliveryCity}</p>}
            </div>

            {/* Catatan Tambahan */}
            <div className="sm:col-span-2">
              <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1">
                Catatan Tambahan <span className="text-slate-400 font-normal">(Opsional)</span>
              </label>
              <textarea
                id="notes"
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Sertakan informasi deadline pengadaan, syarat sertifikat material, atau catatan teknis lainnya..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#102D50]"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Action Button & Explanatory Notice */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#F58220] hover:bg-[#E07316] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] text-base cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span>Lanjutkan ke WhatsApp</span>
          </button>

          {/* Prompt explicit requirement: Explain that the user still needs to click send in WhatsApp */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Pemberitahuan:</strong> Setelah menekan tombol di atas, aplikasi WhatsApp akan terbuka dengan pesan terisi rapi. <em>Anda masih perlu menekan tombol kirim di WhatsApp</em> untuk menyampaikan pesan Anda kepada tim kami.
            </p>
          </div>
        </div>
      </form>

      {/* Modal if company number is awaiting configuration */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-slate-200 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 text-[#102D50] rounded-lg">
                  <FileText className="w-5 h-5 text-[#F58220]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Draf Penawaran Berhasil Disiapkan
                  </h4>
                  <p className="text-xs text-slate-500">
                    Format pesan siap dikirim ke tim pengadaan
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-mono text-slate-800 whitespace-pre-line max-h-60 overflow-y-auto">
              {generatedDraft}
            </div>

            <div className="text-xs text-slate-600 bg-amber-50 border border-amber-200 p-3 rounded-xl">
              Nomor WhatsApp resmi sedang menunggu verifikasi di <code className="text-blue-700">src/data/company.ts</code>. Anda dapat menyalin draf pesan ini untuk dikirim secara langsung setelah nomor resmi diaktifkan.
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleCopyText}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#102D50] hover:bg-[#1A4275] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Teks Berhasil Disalin!" : "Salin Teks Pesan"}</span>
              </button>

              <a
                href="/company-profile.pdf"
                download
                className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#F58220]" />
                <span>Unduh PDF Resmi</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
