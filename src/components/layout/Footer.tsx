import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import {
  MapPin,
  Clock,
  FileText,
  PhoneCall,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1E36] text-slate-300 border-t border-slate-800">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Positioning (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 w-64">
              <Image
                src="/logo-white.svg"
                alt="PT YnW Multi Teknik Plastindo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {company.description}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-amber-400">
                <ShieldCheck className="w-4 h-4 text-[#F58220]" />
                <span>Teknik | Industri | Inovasi</span>
              </div>
            </div>

            {/* Download PDF button in footer */}
            <div className="pt-2">
              <a
                href="/company-profile.pdf"
                download
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2.5 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-[#F58220]" />
                <span>Unduh Company Profile Resmi (PDF)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Kategori Produk (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Kategori Produk
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/produk/${cat.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#F58220]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigasi Cepat (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Menu Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-slate-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-slate-400 hover:text-white transition-colors">
                  Semua Produk
                </Link>
              </li>
              <li>
                <Link href="/#alur-pengadaan" className="text-slate-400 hover:text-white transition-colors">
                  Alur Pengadaan
                </Link>
              </li>
              <li>
                <Link href="/#keunggulan" className="text-slate-400 hover:text-white transition-colors">
                  Mengapa Memilih Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-slate-400 hover:text-white transition-colors">
                  Kontak & Penawaran
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Informasi & Alamat (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Lokasi & Layanan
            </h3>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Basis Operasional:</strong>
                  <span>{company.address.full}</span>
                </div>
              </div>

              {company.email && (
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block text-xs">Email Resmi:</strong>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-slate-300 hover:text-white transition-colors underline underline-offset-2"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">WhatsApp Resmi:</strong>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    {company.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Area Pengiriman:</strong>
                  <span>{company.serviceArea}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Waktu Kerja:</strong>
                  <span>{company.operationalHours.weekdays}</span>
                  {company.operationalHours.note && (
                    <span className="block text-[11px] text-slate-500 italic mt-0.5">
                      ({company.operationalHours.note})
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors w-full justify-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Kirim Permintaan Penawaran</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-slate-800/80 bg-[#071628] py-5 px-4 sm:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            &copy; {currentYear} {company.name}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-slate-400 text-[11px]">
            Supplier & Distributor Plastik, Spare Part Alat Berat, Hose, Bearing & V-Belt — Bandar Lampung.
          </p>
        </div>
      </div>
    </footer>
  );
}
