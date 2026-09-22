import {
  DoorOpen,
  SlidersHorizontal,
  SearchCode,
  BadgePercent,
  MessageSquareCheck,
  CheckCircle,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: DoorOpen,
      title: "Satu Pintu untuk Berbagai Kebutuhan",
      description:
        "Plastik industri, spare part alat berat, hose, bearing, hingga V-belt — seluruh kebutuhan operasional dan maintenance dapat dipenuhi melalui satu pintu pengadaan yang praktis.",
      color: "blue",
    },
    {
      icon: SlidersHorizontal,
      title: "Pilihan Luas: Tipe, Ukuran, Material & Brand",
      description:
        "Kami menyediakan spektrum pilihan spesifikasi teknik yang sangat luas, mulai dari material standar hingga grade khusus sesuai lingkungan kerja mesin Anda.",
      color: "orange",
    },
    {
      icon: SearchCode,
      title: "Sourcing Fleksibel Sesuai Spesifikasi & Anggaran",
      description:
        "Tidak menemukan produk di pasaran lokal? Kami membantu penelusuran berdasarkan part number, dimensi teknis, maupun referensi sampel dengan penyesuaian anggaran.",
      color: "emerald",
    },
    {
      icon: BadgePercent,
      title: "Harga Kompetitif & Efisiensi Pengadaan",
      description:
        "Didukung jaringan pemasok dan distributor tangan pertama, kami menawarkan penawaran harga kompetitif guna membantu menekan total biaya operasional pelanggan.",
      color: "purple",
    },
    {
      icon: MessageSquareCheck,
      title: "Komunikasi yang Jelas & Transparan",
      description:
        "Dari tahap penawaran harga awal, kejelasan spesifikasi, konfirmasi dokumen pemesanan, hingga proses pengiriman dan layanan after-sales terkomunikasikan dengan baik.",
      color: "amber",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#102D50] uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Nilai Tambah Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102D50] tracking-tight">
            Mengapa Memilih PT YnW Multi Teknik Plastindo?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Komitmen kami adalah membantu tim purchasing, mekanik, dan pelaku industri mendapatkan produk yang tepat tanpa kerumitan administrasi dan rantai pasok yang panjang.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="industrial-card bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#102D50]/5 border border-slate-200 flex items-center justify-center text-[#102D50]">
                    <Icon className="w-6 h-6 text-[#F58220]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#102D50] leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Special 6th Card: Sourcing Callout */}
          <div className="bg-gradient-to-br from-[#102D50] to-[#0D2440] p-7 rounded-2xl text-white flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#F58220] uppercase tracking-wider">
                Fokus Kemitraan
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Meminimalkan Downtime Operasional Mesin Anda
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Keterlambatan suku cadang dapat menghentikan lini produksi. Kami merespon setiap inquiry dengan cepat dan teliti guna memastikan kelancaran operasional usaha Anda.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
              <span>Bandar Lampung, Indonesia</span>
              <span className="font-semibold text-emerald-400">Siap Melayani</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
