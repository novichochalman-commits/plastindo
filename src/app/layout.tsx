import type { Metadata } from "next";
import { company } from "@/data/company";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: company.siteTitle,
    template: `%s | ${company.name}`,
  },
  description: company.siteDescription,
  keywords: [
    "Supplier industri Bandar Lampung",
    "Distributor plastik industri Lampung",
    "Supplier spare part alat berat",
    "Hydraulic hose Lampung",
    "Supplier bearing dan V-belt",
    "PT YnW Multi Teknik Plastindo",
    "Sourcing pengadaan industri Lampung",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  openGraph: {
    title: company.siteTitle,
    description: company.siteDescription,
    url: company.domain,
    siteName: company.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero-composition.jpg",
        width: 1200,
        height: 630,
        alt: `${company.name} - One Partner, Complete Solution for Industry & Business`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema (Organization) with strictly verified information
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.shortName,
    url: company.domain,
    logo: `${company.domain}/logo.svg`,
    description: company.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      addressCountry: "ID",
    },
    telephone: `+${company.whatsapp}`,
    email: company.email,
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    slogan: company.tagline,
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#F58220]/20 selection:text-[#102D50]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
