// ============================================================
// WhatsApp Message Builder & Utilities
// PT YnW Multi Teknik Plastindo
// ============================================================

import { company } from "@/data/company";

export interface QuoteFormData {
  name: string;
  companyName?: string;
  whatsapp: string;
  email?: string;
  category: string;
  productName: string;
  specification?: string;
  quantity: string;
  unit?: string;
  deliveryCity: string;
  notes?: string;
}

/**
 * Membangun URL WhatsApp Click-to-Chat dengan pesan terformat rapi.
 * @param data Data dari formulir penawaran
 * @returns URL WhatsApp lengkap (misal: https://wa.me/628xxx?text=...)
 */
export function buildWhatsAppQuoteUrl(data: QuoteFormData): string {
  const targetNumber = company.whatsapp.replace(/[^0-9]/g, "");

  const lines = [
    `*PERMINTAAN PENAWARAN PRODUK*`,
    `Halo PT YnW Multi Teknik Plastindo, saya ingin meminta informasi dan penawaran harga untuk kebutuhan industri/bisnis:`,
    ``,
    `*── DATA PEMESAN ──*`,
    `• *Nama:* ${data.name.trim()}`,
    data.companyName?.trim() ? `• *Perusahaan / Usaha:* ${data.companyName.trim()}` : null,
    `• *WhatsApp:* ${data.whatsapp.trim()}`,
    data.email?.trim() ? `• *Email:* ${data.email.trim()}` : null,
    ``,
    `*── DETAIL KEBUTUHAN PRODUK ──*`,
    `• *Kategori:* ${data.category}`,
    `• *Nama Produk / Part Number:* ${data.productName.trim()}`,
    data.specification?.trim() ? `• *Spesifikasi / Dimensi:* ${data.specification.trim()}` : null,
    `• *Jumlah Kebutuhan:* ${data.quantity.trim()}${data.unit ? ` ${data.unit.trim()}` : ""}`,
    `• *Kota Tujuan Pengiriman:* ${data.deliveryCity.trim()}`,
    data.notes?.trim() ? `• *Catatan Tambahan:* ${data.notes.trim()}` : null,
    ``,
    `Mohon informasi mengenai ketersediaan, estimasi harga, dan waktu pengiriman. Terima kasih.`,
  ].filter((line) => line !== null);

  const rawMessage = lines.join("\n");
  const encodedMessage = encodeURIComponent(rawMessage);

  return `https://wa.me/${targetNumber}?text=${encodedMessage}`;
}

/**
 * Membangun URL WhatsApp untuk konsultasi umum atau tombol cepat per produk.
 * @param contextText Keterangan konteks (misal: "Plastik Industri" atau "Spare Part")
 */
export function buildWhatsAppQuickUrl(contextText?: string): string {
  const targetNumber = company.whatsapp.replace(/[^0-9]/g, "");
  
  let message = `Halo PT YnW Multi Teknik Plastindo, saya ingin berkonsultasi mengenai kebutuhan produk industri.`;
  if (contextText) {
    message = `Halo PT YnW Multi Teknik Plastindo, saya ingin menanyakan informasi & penawaran untuk produk *${contextText}*. Mohon bantuannya.`;
  }

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}
