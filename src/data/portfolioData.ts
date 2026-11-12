import { Project, TrackRecordItem, Certification, ServiceItem } from '../types';

export const IMPACT_METRICS = [
  {
    value: '5,000+',
    label: 'LULUSAN PROGRAM',
    description: 'Talenta digital lulus dari program RuangAI & CODEPOLITAN.',
  },
  {
    value: '93% & 91%',
    label: 'REKOR KELULUSAN',
    description: 'Tingkat kelulusan tertinggi sepanjang sejarah Bangkit Academy.',
  },
  {
    value: '55+ ACARA',
    label: 'EVENT TECH NASIONAL',
    description: 'Workshop & talkshow digelar bareng 35+ kampus se-Indonesia.',
  },
  {
    value: '3.83 / 4.00',
    label: 'LULUSAN TERBAIK',
    description: 'IPK Lulusan Terbaik S1 Teknik Informatika Widyatama 2024.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proquote-ai',
    number: '01',
    title: 'ProQuote AI',
    badge: 'AI Platform',
    categories: ['ai', 'webapp'],
    summary:
      'Capek bikin proposal dan hitung rab proyek manual? Platform berbasis AI ini otomatis nge-generate proposal, scope kerjaan, timeline, sampai estimasi budget dengan cepat dan akurat.',
    problem:
      'Freelancer, agensi, dan software house sering kehabisan waktu berjam-jam cuma buat nyusun dokumen proposal teknis dan kalkulasi RAB proyek yang sering kali meleset dari estimasi sebenarnya.',
    solution:
      'Membangun sistem prompt chaining cerdas dengan UI fullstack modern. Pengguna cukup memasukkan poin kebutuhan klien, lalu sistem memecahnya jadi User Story, estimasi man-days, breakdown modul, dan dokumen proposal siap kirim.',
    impact:
      'Memangkas waktu penyusunan proposal proyek software hingga 80%, dengan akurasi estimasi biaya yang meningkat signifikan.',
    techStack: ['AI Prompt Eng', 'Fullstack', 'Tailwind', 'Next.js', 'REST API'],
    year: '2024',
    client: 'Independent / Agency Tool',
  },
  {
    id: 'ruangai-prompt-hub',
    number: '02',
    title: 'RuangAI Prompt Hub',
    badge: 'AI Ecosystem',
    categories: ['ai', 'webapp'],
    summary:
      'Tempat nongkrongnya prompt AI berkualitas. Dibangun pakai teknologi web modern supaya user gampang nyari, berbagi, dan ngatur prompt buat berbagai model AI.',
    problem:
      'Banyak pengguna AI bingung menyusun prompt yang tepat dan sering kehilangan prompt produktif yang pernah berhasil digunakan sebelumnya.',
    solution:
      'Merancang repositori prompt interaktif dengan pengkategorian cerdas, live testing playground, dan fitur kurasi berbasis performa model AI terkini.',
    impact:
      'Diadopsi ribuan peserta kelas RuangAI sebagai basis pustaka prompt harian untuk coding, desain, dan otomasi kerja.',
    techStack: ['Next.js', 'REST API', 'AI Ecosystem', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://prompt.ruangai.id/',
    year: '2024',
    client: 'RuangAI Ecosystem',
  },
  {
    id: 'medfluffy',
    number: '03',
    title: 'MedFluffy',
    badge: 'Computer Vision',
    categories: ['ai'],
    summary:
      'Aplikasi pintar buat deteksi kesehatan mata anjing. Cukup lewat analisis foto, sistem bisa bantu prediksi indikasi nuclear sclerosis lengkap sama info medisnya.',
    problem:
      'Pemilik hewan peliharaan sering terlambat mendeteksi perubahan mata pada anjing lansia yang berpotensi menurunkan kualitas hidup hewan.',
    solution:
      'Melatih model Convolutional Neural Network (CNN) berbasis transfer learning menggunakan TensorFlow dan membungkus inferensi model ke dalam API Flask yang ringan dan cepat.',
    impact:
      'Mencapai akurasi klasifikasi di atas 90% pada dataset uji medis mata hewan peliharaan dengan feedback instan kepada pemilik.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'Computer Vision', 'CNN'],
    year: '2023',
    client: 'HealthTech Research',
  },
  {
    id: 'restoranku',
    number: '04',
    title: 'Restoranku',
    badge: 'Laravel 12 & FinTech',
    categories: ['webapp'],
    summary:
      'Aplikasi restoran modern berbasis Laravel 12. Pelanggan tinggal scan QR Code di meja buat pesan menu dan langsung bayar sat-set lewat integrasi Midtrans.',
    problem:
      'Antrean kasir yang panjang dan proses pemesanan manual menggunakan kertas sering memicu pesanan tertukar serta turnover meja yang lambat saat jam makan sibuk.',
    solution:
      'Membangun sistem pemesanan self-service via QR Code dinamis tiap meja yang terhubung real-time ke dapur dan gateway pembayaran Midtrans Snap.',
    impact:
      'Mempercepat siklus pesan-hingga-saji restoran hingga 35% tanpa ketergantungan pada perangkat kasir khusus yang mahal.',
    techStack: ['Laravel 12', 'Midtrans', 'QR Code', 'MySQL', 'Tailwind CSS'],
    year: '2024',
    client: 'F&B Retail',
  },
  {
    id: 'siacta',
    number: '05',
    title: 'SIACTA (Accounting & Tax)',
    badge: 'HIBAH RP30 JUTA',
    categories: ['webapp', 'enterprise'],
    summary:
      'Aplikasi web berbasis Laravel buat ngeberesin urusan akuntansi dan pajak. Proyek ini berhasil dapet pendanaan hibah Rp30 Juta dari Kemendikbudristek.',
    problem:
      'Banyak UMKM dan entitas bisnis kesulitan melakukan pencatatan buku besar dan rekonsiliasi perpajakan yang sesuai dengan standar akuntansi Indonesia.',
    solution:
      'Merancang arsitektur sistem akuntansi komprehensif mulai dari jurnal umum, neraca lajur, hingga kalkulator PPh final yang otomatis dan transparan.',
    impact:
      'Memenangkan program hibah kompetitif PHP2D Kemendikbudristek senilai Rp30.000.000 dan diimplementasikan secara nyata pada mitra binaan.',
    techStack: ['Laravel', 'Accounting', 'MySQL', 'PHP', 'Bootstrap'],
    year: '2021 – 2022',
    client: 'Kemendikbudristek RI / Mitra Binaan',
    grantWinner: true,
  },
  {
    id: 'panasonic-smart-clinic',
    number: '06',
    title: 'Panasonic Smart Clinic',
    badge: 'Enterprise App',
    categories: ['enterprise', 'webapp', 'uiux'],
    summary:
      'Aplikasi web manajemen klinik internal yang gue kembangin khusus buat ngejawab kebutuhan operasional PT Panasonic Industrial Devices Batam.',
    problem:
      'Klinik internal pabrik dengan ribuan karyawan memerlukan pencatatan rekam medis yang cepat, aman, dan terintegrasi dengan jadwal shift kerja tanpa hambatan latensi.',
    solution:
      'Mengembangkan frontend sistem yang tangguh dengan dashboard responsif, pemantauan antrean dokter, dan integrasi riwayat medis berbasis role-based access.',
    impact:
      'Mempercepat proses input rekam medis dan pelaporan kesehatan berkala perusahaan dengan ketepatan rilis sprint 95%.',
    techStack: ['Enterprise Web', 'Medical Record', 'UI/UX', 'JavaScript', 'REST API'],
    year: '2022 – 2023',
    client: 'PT Panasonic Industrial Devices Batam',
  },
  {
    id: 'gambar-yuk',
    number: '07',
    title: 'Gambar Yuk',
    badge: 'Web Utility',
    categories: ['webapp'],
    summary:
      'Platform edit foto online gratis dengan 20+ tools lengkap. Tanpa iklan yang ganggu, nggak perlu login, dan 100% gratis tinggal pakai.',
    problem:
      'Banyak tool edit gambar di web penuh iklan pop-up yang mengganggu, mewajibkan registrasi akun berbayar, atau membatasi ukuran resolusi berkas.',
    solution:
      'Membuat client-side photo studio memanfaatkan HTML5 Canvas API murni, web workers, dan pemrosesan gambar lokal di peramban pengguna.',
    impact:
      'Menyediakan 20+ utility pengolah gambar (crop, compress, filter, format conversion) yang berjalan instan tanpa mengirim data pengguna ke server pihak ketiga.',
    techStack: ['Canvas API', 'JavaScript', 'Web Tools', 'CSS3', 'Web Workers'],
    demoUrl: 'https://www.gambaryuk.com/',
    year: '2023',
    client: 'Public Utility',
  },
  {
    id: 'sibi-mobile-uiux',
    number: '08',
    title: 'UI/UX SIBI Mobile App',
    badge: 'GovTech UI/UX',
    categories: ['uiux'],
    summary:
      'Ngerancang desain antarmuka (UI/UX) aplikasi mobile Sistem Informasi Perbukuan Indonesia (SIBI) punya Kemendikbudristek biar makin nyaman dipakai.',
    problem:
      'Aplikasi buku digital nasional memerlukan antarmuka yang ramah bagi siswa, guru, dan pembaca umum dari berbagai latar belakang perangkat dan kemampuan literasi digital.',
    solution:
      'Menyusun design system komprehensif di Figma, wireframing, high-fidelity mockups, dan prototipe interaktif yang telah diuji kegunaannya (usability testing).',
    impact:
      'Meningkatkan skor kemudahan aksesibilitas dan menyajikan tata letak katalog buku kurikulum yang mudah dijelajahi di layar ponsel.',
    techStack: ['Figma', 'Design System', 'Mobile App', 'User Research', 'Prototyping'],
    year: '2023',
    client: 'Kemendikbudristek RI',
  },
  {
    id: 'herya-wf',
    number: '09',
    title: 'Herya WF Company Profile',
    badge: 'Corporate Web',
    categories: ['webapp'],
    summary:
      'Website company profile elegan buat PT Herya Wood Furniture yang fokus di industri furnitur kayu dan desain interior.',
    problem:
      'Perusahaan manufaktur furnitur membutuhkan etalase online yang mencerminkan mutu pengerjaan kayu premium untuk menarik pembeli skala korporat dan ekspor.',
    solution:
      'Membangun website portofolio korporat dengan visual fotografi tajam, navigasi katalog produk terstruktur, dan optimasi performa SEO tinggi.',
    impact:
      'Meningkatkan inquiry pesanan proyek custom interior dan kredibilitas merek di mata klien arsitektur dan properti.',
    techStack: ['Corporate Web', 'SEO', 'Responsive', 'Tailwind', 'Modern Web'],
    demoUrl: 'https://heryawf.co.id/',
    year: '2023',
    client: 'PT Herya Wood Furniture',
  },
  {
    id: 'laundry-app',
    number: '10',
    title: 'Laundry Web App',
    badge: 'SME Tech',
    categories: ['webapp'],
    summary:
      'Aplikasi web simpel dan rapi buat ngebantu operasional bisnis laundry, mulai dari catat pesanan masuk sampai pantau status cucian.',
    problem:
      'Pengusaha laundry kiloan kerap mengalami salah hitung nota, nota hilang, atau pelanggan menanyakan status cucian yang belum selesai diproses.',
    solution:
      'Mendesain POS web sederhana berbasis Laravel dengan fitur cetak nota termal, pelacak status pengerjaan (cuci/kering/setrika), dan rekap kas harian.',
    impact:
      'Meminimalisir kesalahan operasional harian dan mempermudah staf mencatat beban kerja harian secara akurat.',
    techStack: ['Laravel', 'POS System', 'SME Tech', 'MySQL', 'Bootstrap'],
    year: '2022',
    client: 'SME Enterprise',
  },
  {
    id: 'story-app',
    number: '11',
    title: 'StoryApp',
    badge: 'Web Platform',
    categories: ['webapp'],
    summary:
      'Platform web buat berbagi cerita dan momen yang terintegrasi langsung sama Dicoding Story API.',
    problem:
      'Kebutuhan platform media sosial minimalis berbasis feed interaktif yang mendukung geolokasi dan unggah gambar dengan performa cepat.',
    solution:
      'Mengembangkan Single Page Application (SPA) modular dengan autentikasi token JWT, routing sisi klien, dan integrasi peta interaktif lokasi unggahan.',
    impact:
      'Menjadi salah satu proyek submission predikat bintang 5 tertinggi dalam kurikulum Intermediate Web Development.',
    techStack: ['JavaScript', 'Dicoding API', 'Geolocation', 'SPA', 'Webpack'],
    year: '2023',
    client: 'Dicoding Academy Showcase',
  },
  {
    id: 'aa-jersey',
    number: '12',
    title: 'AA Jersey',
    badge: 'E-Commerce',
    categories: ['webapp'],
    summary:
      'Toko online spesialis jersey sepak bola berkualitas (Grade Ori Import, Retro, hingga Official). Dilengkapi katalog klub & timnas dunia, filter ukuran, serta sistem checkout order.',
    problem:
      'Pecinta sepak bola dan kolektor sering kesulitan mencari katalog jersey lengkap dengan varian ukuran, detail patch/nameset, serta alur pemesanan yang cepat dan transparan.',
    solution:
      'Membangun web store responsif dengan showcase katalog terstruktur berdasarkan liga/klub/musim, pencarian cepat, keranjang belanja interaktif, dan integrasi direct checkout pemesanan.',
    impact:
      'Menghadirkan kanal penjualan online resmi yang mudah diakses dari ponsel maupun desktop, memperluas jangkauan pembeli jersey di seluruh Indonesia.',
    techStack: ['E-Commerce', 'Modern Web', 'Responsive', 'Catalog System', 'SEO'],
    demoUrl: 'https://www.jerseyaa.com/',
    year: '2024',
    client: 'AA Jersey (Retail)',
  },
];

export const TRACK_RECORD: TrackRecordItem[] = [
  {
    id: 'codepolitan',
    role: 'Mentor AI & Fullstack',
    organization: 'CODEPOLITAN',
    period: 'Sep 2024 – Sekarang',
    location: 'Cimahi',
    tag: 'AKTIF SEKARANG',
    isCurrent: true,
    category: 'mentoring',
    points: [
      'Ngasuh dan ngembangin program belajar AI & Fullstack di RuangAI sampai berhasil ngelulusin 5.000+ peserta dari kalangan mahasiswa, pekerja, sampai UMKM.',
      'Ngeracik kurikulum yang relevan sama industri, ngisi live mentoring, workshop (online & offline), sekaligus bangun ekosistem konten edukasi di YouTube dan short-form video.',
    ],
  },
  {
    id: 'bangkit',
    role: 'Mentor',
    organization: 'Bangkit Academy led by Google, Tokopedia, Gojek, Traveloka',
    period: 'Feb 2024 – Jan 2025',
    location: 'Jakarta',
    tag: 'REKOR KELULUSAN',
    category: 'mentoring',
    points: [
      'Nganterin 24 siswa kelas MD-34 dan 23 siswa kelas MD-06 lulus dengan rekor kelulusan 93% dan 91%—angka tertinggi sepanjang sejarah Bangkit.',
      'Bantu 5 siswa tembus predikat Distinction (Top 10% dari 8.000+ peserta) dan konsisten dapet rating 4.9+ di 34 sesi konsultasi mingguan & 25 sesi ILT.',
    ],
  },
  {
    id: 'gdg-bandung',
    role: 'Organizer',
    organization: 'Google Developer Groups (GDG) Bandung',
    period: 'Agu 2023 – Sekarang',
    location: 'Bandung',
    tag: 'GOOGLE DEV',
    isCurrent: true,
    category: 'community',
    points: [
      'Nge-lead perencanaan dan eksekusi event komunitas teknologi Google di Bandung, mulai dari kurasi materi, kolaborasi bareng speaker, sampai live streaming yang udah ditonton 6.500+ viewers di YouTube.',
    ],
  },
  {
    id: 'gdsc',
    role: 'Lead GDSC & PR GDSC Indonesia',
    organization: 'GDSC Widyatama University & Google Developers',
    period: 'Agu 2023 – Jul 2024',
    location: 'Bandung',
    tag: 'KOMUNITAS KAMPUS',
    category: 'community',
    points: [
      'Ngebentuk 21 core team dan ngumpulin 1.582 member lintas 35+ kampus dan 40 kota di Indonesia.',
      'Sukses ngegelar 55 event (pernah tembus 1.218 peserta dalam satu acara) dan ngebagiin benefit belajar senilai Rp43,5 Juta dalam bentuk voucher kursus coding & e-wallet.',
    ],
  },
  {
    id: 'cinovasi',
    role: 'Fullstack Web Developer',
    organization: 'PT Cinovasi Rekaprima',
    period: 'Jun 2022 – Jun 2023',
    location: 'Bandung',
    tag: 'ENTERPRISE TECH',
    category: 'engineering',
    points: [
      'Ngembangin dan nge-maintain aplikasi buat klien sekelas Panasonic dengan ketepatan waktu 95% dan performa naik 30%.',
    ],
  },
  {
    id: 'sibernetika',
    role: 'Frontend Web Developer',
    organization: 'PT Sibernetika Teknologi Industri',
    period: 'Sep 2022 – Jan 2023',
    location: 'Bandung',
    tag: 'CLINIC SYSTEM',
    category: 'engineering',
    points: [
      'Ngerjain slicing UI/UX ke kode responsif dan kolaborasi tim backend buat ngebangun Panasonic Smart Clinic.',
    ],
  },
  {
    id: 'jerbee',
    role: 'Fullstack Web Developer',
    organization: 'PT Jerbee Indonesia',
    period: 'Jul 2019 – Sep 2019',
    location: 'Bandung',
    tag: 'WEB DEVELOPMENT',
    category: 'engineering',
    points: [
      'Bangun website PHP, Laravel, AJAX, dan MySQL sekaligus bantu tim adopsi tools yang naikin produktivitas 25%.',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'dicoding-web',
    title: 'Intermediate Web Development',
    issuer: 'DICODING',
    date: 'JUL 2025',
    credentialId: '72ZDKQWOVPYW',
    linkText: 'Verifikasi di Dicoding',
    skills: ['JavaScript ES6+', 'REST API Consumption', 'Web Tooling', 'Clean Architecture'],
  },
  {
    id: 'ruangai-genai',
    title: 'Certified Generative AI Specialist',
    issuer: 'RUANGAI',
    date: 'JUN 2025',
    credentialId: 'CP-RAI/2025/06/0193',
    linkText: 'Verifikasi di RuangAI',
    skills: ['Prompt Engineering', 'LLM Workflow', 'Agentic Systems', 'Production AI Integration'],
  },
  {
    id: 'google-gdsc',
    title: 'Lead of Google Developer Student Clubs',
    issuer: 'GOOGLE FOR DEVELOPERS',
    date: 'JUL 2024',
    linkText: 'Global Community Leadership',
    skills: ['Tech Leadership', 'Developer Ecosystem', 'Public Speaking', 'Event Organizing'],
  },
  {
    id: 'dicoding-android',
    title: 'Intermediate Android Application Development',
    issuer: 'DICODING',
    date: 'MEI 2023',
    credentialId: '2VX3J6533PYQ',
    linkText: 'Verifikasi di Dicoding',
    skills: ['Android Studio', 'Kotlin / Java', 'Local Storage', 'Background Processing'],
  },
];

export const TECH_STACK = [
  'Laravel',
  'PHP',
  'JavaScript',
  'React JS',
  'Next JS',
  'Tailwind CSS',
  'Python',
  'Java',
  'MySQL',
  'REST API',
  'Git',
  'Prompt Eng',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'speaker',
    number: '01',
    title: 'Tech Speaker & Keynote',
    tagline: 'Materi Berbobot, Bahasa Mengalir, Anti-Kaku',
    description:
      'Siap mengisi panggung seminar teknologi, konferensi nasional, atau event kampus dengan topik implementasi AI praktis, tren fullstack modern, dan strategi karir developer.',
    deliverables: [
      'Keynote presentation (30–90 menit) yang engaging',
      'Materi slide siap pakai + panduan referensi',
      'Sesi Q&A teknis interaktif',
    ],
    audience: 'Kampus, GDG/komunitas tech, startup, corporate gathering',
  },
  {
    id: 'mentorship',
    number: '02',
    title: 'Workshop & Mentoring Program',
    tagline: 'Dari Teori Langsung ke Kode Siap Produksi',
    description:
      'Program pelatihan intensif terstruktur untuk bootcamp, tim internal perusahaan, atau mahasiswa yang ingin menguasai AI tools dan web development secara konkret.',
    deliverables: [
      'Penyusunan kurikulum industri berbasis proyek nyata',
      'Live coding walkthrough & hands-on mentoring',
      'Review kode dan evaluasi standar kualitas tim',
    ],
    audience: 'Bootcamp tech, tim engineering perusahaan, universitas',
  },
  {
    id: 'engineering',
    number: '03',
    title: 'Fullstack Web & AI Architecture',
    tagline: 'Bangun Sistem Cepat, Rapi & Siap Scale-Up',
    description:
      'Konsultasi teknis dan perancangan sistem web app modern menggunakan Laravel, Next.js, dan integrasi API AI untuk otomatisasi alur kerja bisnis.',
    deliverables: [
      'Perancangan arsitektur sistem & skema database',
      'Pengembangan MVP web app fungsional',
      'Integrasi payment gateway & prompt pipeline AI',
    ],
    audience: 'Founder, UMKM, instansi pemerintah, bisnis berkembang',
  },
  {
    id: 'advisory',
    number: '04',
    title: '1-on-1 Career & Code Advisory',
    tagline: 'Diskusi Khusus Buat Pecahin Kebuntuan Teknis',
    description:
      'Sesi tatap muka virtual privat untuk bimbingan karir developer, bedah portofolio proyek, atau persiapan seleksi program bergengsi seperti Bangkit Academy.',
    deliverables: [
      'Review mendalam portofolio & repository GitHub',
      'Action plan terarah untuk mencapai Distinction',
      'Rekomendasi teknis spesifik untuk masalah proyekmu',
    ],
    audience: 'Mahasiswa, junior developer, aspiring tech talent',
  },
];
