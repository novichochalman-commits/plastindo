"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { Menu, X, FileText, PhoneCall, ChevronRight, Mail } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Produk", href: "/produk" },
    { name: "Alur Pengadaan", href: "/#alur-pengadaan" },
    { name: "Kontak", href: "/kontak" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      {/* Top Bar for Industrial Corporate credibility */}
      <div className="bg-[#102D50] text-slate-200 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              {company.address.full}
            </span>
            <span className="hidden xl:inline text-slate-400">|</span>
            <span className="hidden xl:inline text-slate-300 font-medium">
              {company.taglineSupport}
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="hidden md:inline-flex items-center text-slate-200 hover:text-white transition-colors gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#F58220]" />
                <span>{company.email}</span>
              </a>
            )}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-200 hover:text-emerald-400 transition-colors gap-1.5 font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>{company.whatsappDisplay}</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors gap-1.5 font-medium underline underline-offset-2"
              title="Unduh Company Profile Resmi PDF"
            >
              <FileText className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Unduh PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#102D50] rounded-md p-1">
          <div className="relative h-12 w-64 max-w-[240px] sm:max-w-[270px]">
            <Image
              src="/logo.svg"
              alt="PT YnW Multi Teknik Plastindo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navigasi Utama">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
                  active
                    ? "text-[#102D50] bg-slate-100 font-bold"
                    : "text-slate-700 hover:text-[#102D50] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#E07316] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F58220]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Minta Penawaran</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#102D50]"
          aria-expanded={mobileMenuOpen}
          aria-label="Buka menu navigasi"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold ${
                  isActive(link.href)
                    ? "bg-[#102D50] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#F58220] hover:bg-[#E07316] text-white font-semibold py-3 rounded-lg text-center shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Minta Penawaran Sekarang</span>
            </Link>

            <a
              href="/company-profile.pdf"
              download
              className="flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2.5 rounded-lg text-center text-sm"
            >
              <FileText className="w-4 h-4 text-[#F58220]" />
              <span>Unduh Company Profile (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
