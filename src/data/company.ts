// ============================================================
// KONFIGURASI PERUSAHAAN PT YnW Multi Teknik Plastindo
// Isi / perbarui data ini sesuai informasi resmi perusahaan
// ============================================================

export const company = {
  name: "PT YnW Multi Teknik Plastindo",
  shortName: "YnW Multi Teknik",
  tagline: "Teknik | Industri | Inovasi",
  taglineSupport: "One Partner, Complete Solution for Industry & Business.",
  description:
    "Supplier dan distributor multi-produk untuk kebutuhan industri dan bisnis. Melayani pengadaan plastik umum & industri, spare part alat berat, hydraulic hose & hose industri, bearing, serta V-belt & transmisi mesin.",

  // ── Kontak ──────────────────────────────────────────────
  whatsapp: "6281179760063", // Format internasional tanpa +
  whatsappDisplay: "+62 811-7976-0063", // Tampilan untuk publik
  email: "yw.multiteknikplastindo@gmail.com",
  emailDisplay: "yw.multiteknikplastindo@gmail.com",

  // ── Alamat ──────────────────────────────────────────────
  // ⚠️ PERLU DILENGKAPI: Alamat lengkap dari PDF
  address: {
    street: "", // Nama jalan dan nomor
    city: "Bandar Lampung",
    province: "Lampung",
    country: "Indonesia",
    full: "Bandar Lampung, Lampung, Indonesia", // Gabungan untuk tampilan
    mapsUrl: "", // URL Google Maps (kosongkan jika belum terkonfirmasi)
    mapsEmbed: "", // URL embed Google Maps (iframe src)
  },

  // ── Jam Operasional ─────────────────────────────────────
  // ⚠️ PERLU DILENGKAPI: Dari PDF atau konfirmasi perusahaan
  operationalHours: {
    weekdays: "Senin – Jumat", // Contoh: "Senin – Jumat: 08.00 – 17.00 WIB"
    saturday: "", // Kosongkan jika tidak beroperasi
    note: "Waktu operasional harap dikonfirmasi", // Catatan jika belum pasti
  },

  // ── Area Layanan ─────────────────────────────────────────
  serviceArea: "Bandar Lampung dan berbagai wilayah Indonesia sesuai kesepakatan",

  // ── SEO & Metadata ───────────────────────────────────────
  domain: "https://ynwmultiteknik.com", // ⚠️ PERLU DILENGKAPI: domain resmi
  siteTitle: "PT YnW Multi Teknik Plastindo | Supplier Industri Bandar Lampung",
  siteDescription:
    "Supplier dan distributor terpercaya untuk plastik industri, spare part alat berat, hydraulic hose, bearing, dan V-belt di Bandar Lampung, Lampung. Solusi lengkap pengadaan industri.",

  // ── Open Graph ───────────────────────────────────────────
  ogImage: "/images/og-image.jpg", // ⚠️ PERLU DILENGKAPI: gambar OG 1200x630px

  // ── Sosial Media ─────────────────────────────────────────
  // ⚠️ PERLU DILENGKAPI jika ada
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },

  // ── Brand yang di-sourcing ───────────────────────────────
  brands: [
    "SKF", "NTN", "NSK", "FAG", "IKO",
    "Koyo", "Timken", "Nachi",
    "Gates", "Bando", "Mitsuboshi", "Continental",
  ],
  brandNote:
    "Sourcing berbagai brand sesuai permintaan, spesifikasi, dan ketersediaan.",

  // ── Nilai Perusahaan ─────────────────────────────────────
  values: [
    {
      id: "integritas",
      title: "Integritas",
      description:
        "Kami berkomitmen menjaga kejujuran dan transparansi dalam setiap proses bisnis dan komunikasi dengan pelanggan.",
      icon: "shield-check",
    },
    {
      id: "profesional",
      title: "Profesional",
      description:
        "Kami melayani dengan standar kerja yang tinggi, responsif, dan berorientasi pada kebutuhan pelanggan.",
      icon: "briefcase",
    },
    {
      id: "kualitas",
      title: "Kualitas",
      description:
        "Kami memprioritaskan produk yang memenuhi spesifikasi teknis dan standar kualitas yang dibutuhkan pelanggan.",
      icon: "star",
    },
    {
      id: "kerjasama",
      title: "Kerja Sama",
      description:
        "Kami membangun hubungan jangka panjang yang saling menguntungkan bersama pelanggan dan mitra pemasok.",
      icon: "handshake",
    },
    {
      id: "inovasi",
      title: "Inovasi",
      description:
        "Kami terus berkembang dan beradaptasi untuk memberikan solusi pengadaan yang lebih efisien dan komprehensif.",
      icon: "lightbulb",
    },
  ],

  // ── Alur Pengadaan ───────────────────────────────────────
  procurementSteps: [
    {
      step: 1,
      title: "Konsultasi Kebutuhan",
      description:
        "Sampaikan kebutuhan, spesifikasi teknis, dan informasi unit atau aplikasi produk Anda kepada tim kami.",
      icon: "message-circle",
    },
    {
      step: 2,
      title: "Sourcing & Penawaran",
      description:
        "Kami mencari produk dari jaringan pemasok dan brand terpilih, lalu menyampaikan penawaran harga.",
      icon: "search",
    },
    {
      step: 3,
      title: "Konfirmasi Pesanan",
      description:
        "Setelah penawaran disetujui, kami memproses dokumen pemesanan dan administrasi yang diperlukan.",
      icon: "file-check",
    },
    {
      step: 4,
      title: "Pengiriman Produk",
      description:
        "Produk dikirimkan sesuai kesepakatan, baik pickup di Bandar Lampung maupun pengiriman ke wilayah Anda.",
      icon: "truck",
    },
    {
      step: 5,
      title: "Dukungan After-Sales",
      description:
        "Kami siap membantu jika ada pertanyaan atau kebutuhan lanjutan setelah produk diterima.",
      icon: "headphones",
    },
  ],

  // ── Mengapa Memilih Kami ─────────────────────────────────
  whyUs: [
    {
      id: "one-stop",
      title: "Satu Pintu untuk Berbagai Kebutuhan",
      description:
        "Plastik industri, spare part alat berat, hose, bearing, hingga V-belt — semua tersedia dari satu mitra pengadaan.",
    },
    {
      id: "pilihan-luas",
      title: "Pilihan Luas: Tipe, Ukuran, Material & Brand",
      description:
        "Kami menyediakan beragam pilihan spesifikasi, material, dan brand sesuai dengan kebutuhan teknis dan anggaran Anda.",
    },
    {
      id: "sourcing-spesifik",
      title: "Sourcing Sesuai Spesifikasi",
      description:
        "Tidak menemukan produk di pasar lokal? Kami membantu pencarian berdasarkan part number, dimensi, dan spesifikasi teknis.",
    },
    {
      id: "harga-kompetitif",
      title: "Harga Kompetitif",
      description:
        "Dengan jaringan pemasok yang luas, kami dapat menawarkan harga yang kompetitif tanpa mengorbankan kualitas produk.",
    },
    {
      id: "komunikasi-jelas",
      title: "Komunikasi yang Jelas",
      description:
        "Dari penawaran harga, konfirmasi pesanan, hingga pengiriman dan after-sales — kami menjaga komunikasi yang transparan.",
    },
  ],
};
