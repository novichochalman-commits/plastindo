// ============================================================
// DATA KATEGORI PRODUK
// PT YnW Multi Teknik Plastindo
// ============================================================

export interface ProductItem {
  name: string;
  description?: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  items: ProductItem[];
  materials?: string[];
  specRequirements: string[];
  relatedCategories: string[]; // slug dari kategori terkait
  icon: string;
  colorAccent: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "plastik",
    slug: "plastik",
    name: "Plastik Umum & Industri",
    shortName: "Plastik Industri",
    tagline: "Material plastik teknik untuk berbagai kebutuhan manufaktur dan industri",
    description:
      "Berbagai jenis material plastik teknik dalam bentuk sheet, rod, tube, dan roll. Tersedia dalam beragam material dan ukuran untuk kebutuhan manufaktur, konstruksi, dan industri.",
    longDescription:
      "Kami menyediakan berbagai jenis material plastik teknik yang umum digunakan di industri manufaktur, pengolahan, konstruksi, dan rekayasa. Produk tersedia dalam berbagai bentuk fisik (sheet, rod, tube, roll/film) dengan beragam pilihan material, ketebalan, ukuran, dan warna. Sourcing dilakukan berdasarkan spesifikasi dan kebutuhan Anda.",
    items: [
      { name: "Plastic Sheet / Lembaran", description: "Tersedia berbagai ketebalan dan ukuran" },
      { name: "Roll / Film Plastik", description: "Untuk packaging, pelindung, dan aplikasi industri" },
      { name: "Plastic Rod / Batang", description: "Tersedia berbagai diameter dan panjang" },
      { name: "Plastic Tube / Tabung", description: "Tersedia berbagai diameter dalam dan luar" },
    ],
    materials: [
      "PE (Polyethylene)",
      "PP (Polypropylene)",
      "PVC (Polyvinyl Chloride)",
      "PU (Polyurethane)",
      "PTFE (Teflon)",
      "POM (Polyacetal / Delrin)",
      "ABS (Acrylonitrile Butadiene Styrene)",
      "Nylon (PA)",
      "Acrylic (PMMA)",
      "HDPE (High-Density Polyethylene)",
    ],
    specRequirements: [
      "Jenis produk (sheet, rod, tube, roll)",
      "Material / jenis plastik",
      "Ukuran dan ketebalan yang dibutuhkan",
      "Grade atau standar kualitas",
      "Warna (natural, hitam, atau warna lain)",
      "Aplikasi / kegunaan produk",
      "Jumlah kebutuhan",
    ],
    relatedCategories: ["hydraulic-hose", "spare-part"],
    icon: "layers",
    colorAccent: "blue",
  },
  {
    id: "spare-part",
    slug: "spare-part",
    name: "Spare Part Alat Berat",
    shortName: "Spare Part",
    tagline: "Komponen dan spare part untuk berbagai merek dan tipe alat berat",
    description:
      "Spare part dan komponen untuk berbagai jenis alat berat: excavator, bulldozer, crane, forklift, dan lainnya. Sourcing berdasarkan merek, tipe unit, dan part number.",
    longDescription:
      "Kami membantu pengadaan spare part dan komponen untuk berbagai jenis alat berat yang digunakan di sektor konstruksi, pertambangan, perkebunan, dan industri. Sourcing dilakukan berdasarkan merek unit, nomor seri, dan part number yang Anda miliki, sehingga memastikan kompatibilitas produk dengan unit alat berat Anda.",
    items: [
      { name: "Undercarriage Parts", description: "Track, roller, sprocket, idler, track shoe" },
      { name: "Engine Parts", description: "Filter oli, filter udara, komponen mesin" },
      { name: "Hydraulic Parts", description: "Seal kit, cylinder, pompa hydraulik" },
      { name: "Filter & Electrical Parts", description: "Filter BBM, filter oli, sensor, komponen kelistrikan" },
      { name: "Bucket Teeth & Cutting Edge", description: "Mata bucket, cutting edge, protector" },
      { name: "Pin & Bushing", description: "Pin, bushing, dan komponen sambungan" },
    ],
    materials: undefined,
    specRequirements: [
      "Merek alat berat (Komatsu, Caterpillar, Hitachi, dll.)",
      "Tipe / model unit",
      "Part number atau kode komponen",
      "Tahun produksi unit (jika diketahui)",
      "Kondisi komponen (OEM, aftermarket, atau keduanya)",
      "Jumlah yang dibutuhkan",
    ],
    relatedCategories: ["hydraulic-hose", "bearing"],
    icon: "settings",
    colorAccent: "orange",
  },
  {
    id: "hydraulic-hose",
    slug: "hydraulic-hose",
    name: "Hydraulic Hose & Hose Industri",
    shortName: "Hydraulic Hose",
    tagline: "Hose dan fitting untuk sistem hydraulik dan berbagai aplikasi industri",
    description:
      "Hydraulic hose, hose industri untuk berbagai media, serta fitting, adaptor, coupling, dan clamp. Tersedia dalam berbagai ukuran tekanan, diameter, dan spesifikasi.",
    longDescription:
      "Kami menyediakan berbagai jenis hose dan sistem perpipaan fleksibel untuk kebutuhan industrial: dari hydraulic hose bertekanan tinggi, hose untuk transfer air, oli, chemical, hingga material handling. Dilengkapi dengan fitting, adaptor, coupling, dan clamp yang sesuai. Tersedia juga layanan hose assembly sesuai spesifikasi.",
    items: [
      { name: "Hydraulic Hose", description: "Hose sistem hydraulik bertekanan tinggi" },
      { name: "Hose Air (Water Hose)", description: "Untuk transfer air bersih dan industri" },
      { name: "Hose Oli (Oil Hose)", description: "Tahan terhadap pelumas dan minyak" },
      { name: "Hose Chemical", description: "Tahan terhadap berbagai bahan kimia" },
      { name: "Material Handling Hose", description: "Untuk transfer material granular dan pasir" },
      { name: "Fitting & Adaptor", description: "Sambungan hose berbagai standar" },
      { name: "Coupling & Clamp", description: "Pengikat dan konektor hose" },
      { name: "Hose Assembly", description: "Hose yang sudah dirakit sesuai spesifikasi" },
    ],
    materials: undefined,
    specRequirements: [
      "Jenis aplikasi (hydraulik, air, oli, chemical, dll.)",
      "Tekanan kerja (working pressure) dan tekanan maksimum",
      "Diameter dalam (ID) hose",
      "Panjang hose yang dibutuhkan",
      "Temperatur kerja (suhu media dan lingkungan)",
      "Media yang dialirkan",
      "Jenis fitting / sambungan yang dibutuhkan",
      "Standard (SAE, DIN, atau standar lain)",
    ],
    relatedCategories: ["spare-part", "bearing"],
    icon: "git-branch",
    colorAccent: "red",
  },
  {
    id: "bearing",
    slug: "bearing",
    name: "Bearing",
    shortName: "Bearing",
    tagline: "Bearing dari berbagai brand terkemuka untuk kebutuhan teknik dan industri",
    description:
      "Berbagai jenis bearing teknik dari brand internasional terpercaya. Sourcing berdasarkan part number atau spesifikasi teknis sesuai kebutuhan mesin dan aplikasi Anda.",
    longDescription:
      "Kami melayani kebutuhan bearing untuk berbagai aplikasi mesin industri, otomotif, dan alat berat. Tersedia dalam berbagai tipe dan ukuran, dengan pilihan brand internasional seperti SKF, NTN, NSK, FAG, IKO, Koyo, Timken, Nachi, dan lainnya. Sourcing dapat dilakukan berdasarkan part number bearing atau spesifikasi dimensi yang Anda miliki.",
    items: [
      { name: "Deep Groove Ball Bearing", description: "Bearing paling umum untuk berbagai aplikasi" },
      { name: "Roller Bearing", description: "Cylindrical dan spherical roller bearing" },
      { name: "Pillow Block / UCB", description: "Bearing duduk dengan housing" },
      { name: "Tapered Roller Bearing", description: "Untuk beban aksial dan radial" },
      { name: "Thrust Bearing", description: "Untuk beban aksial" },
      { name: "Needle Bearing", description: "Ukuran kompak untuk ruang terbatas" },
    ],
    materials: undefined,
    specRequirements: [
      "Part number bearing (contoh: 6205, 23220, UC205)",
      "Brand pilihan (SKF, NTN, NSK, FAG, dll.)",
      "Tipe bearing (ball, roller, tapered, dll.)",
      "Dimensi: diameter dalam (bore), diameter luar, lebar",
      "Aplikasi / jenis mesin",
      "Jumlah yang dibutuhkan",
    ],
    relatedCategories: ["v-belt", "spare-part"],
    icon: "circle",
    colorAccent: "purple",
  },
  {
    id: "v-belt",
    slug: "v-belt",
    name: "V-Belt & Transmisi Mesin",
    shortName: "V-Belt",
    tagline: "V-belt dan komponen transmisi untuk sistem penggerak mesin",
    description:
      "V-belt dan komponen transmisi mesin dari brand terpercaya. Tersedia dalam berbagai tipe dan ukuran untuk kebutuhan sistem penggerak industri, pertanian, dan mesin produksi.",
    longDescription:
      "Kami menyediakan berbagai jenis V-belt dan komponen transmisi mesin untuk kebutuhan sistem penggerak di industri manufaktur, pertanian, konstruksi, dan lainnya. Tersedia dari brand Gates, Bando, Mitsuboshi, Continental, dan brand lainnya. Sourcing berdasarkan part number, kode belt, atau dimensi yang Anda butuhkan.",
    items: [
      { name: "Classical V-Belt", description: "Tipe klasik: A, B, C, D, E" },
      { name: "Narrow V-Belt", description: "Tipe sempit: SPZ, SPA, SPB, SPC" },
      { name: "Cogged / Notched V-Belt", description: "V-belt dengan takik untuk efisiensi lebih tinggi" },
      { name: "Timing Belt", description: "Belt bergigi untuk transmisi presisi" },
      { name: "Pulley", description: "Pulley V-belt dan timing belt" },
      { name: "Bushing", description: "Taper lock dan bushing lainnya" },
    ],
    materials: undefined,
    specRequirements: [
      "Kode / part number belt (contoh: A50, B65, SPB2000)",
      "Tipe belt (classical, narrow, cogged, timing)",
      "Dimensi: panjang efektif, lebar, dan tinggi",
      "Merek pilihan (Gates, Bando, Mitsuboshi, Continental, dll.)",
      "Aplikasi / jenis mesin",
      "Jumlah yang dibutuhkan",
    ],
    relatedCategories: ["bearing", "spare-part"],
    icon: "repeat",
    colorAccent: "green",
  },
];

// Helper: cari kategori berdasarkan slug
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

// Helper: cari kategori terkait
export function getRelatedCategories(category: ProductCategory): ProductCategory[] {
  return category.relatedCategories
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is ProductCategory => c !== undefined);
}
