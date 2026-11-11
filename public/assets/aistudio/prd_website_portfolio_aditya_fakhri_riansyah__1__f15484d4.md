# Product Requirements Document (PRD)
**Project Name:** Personal Branding & Portfolio Website — Aditya Fakhri Riansyah  
**Role Perspective:** Senior UI/UX Designer & Fullstack Web Developer Expert  
**Design Theme:** Minimalist Editorial Split-Screen — Luxury Emerald Green & Crisp White  
**Copywriting Style:** Bahasa Indonesia Gaul ala Gen Z (Santai, Tech-Savvy, Asik, tapi Tetap Kredibel)  
**Status:** Ready for Development (Strict Anti-AI Slop, Zero-Emoji, Gen-Z Copy Edition)  

---

## 1. Executive Summary & Project Vision
Website portfolio ini dirancang untuk memposisikan **Aditya Fakhri Riansyah** sebagai **AI & Fullstack Mentor, Tech Speaker, dan Web Developer** yang punya *track record* gokil namun tetap terasa dekat (*approachable*) bagi audiens muda, developer, maupun klien industri. 

Keunikan utama website ini terletak pada kontras yang menarik: **Visualnya sangat rapi, minimalis, bersih (Luxury Emerald Green & Crisp White)** mengadaptasi gambar referensi, namun **bahasa/copywriting di dalamnya menggunakan Bahasa Indonesia gaul ala Gen Z** yang mengalir natural, nggak kaku kayak robot, dan bebas dari bahasa formal yang membosankan.

---

## 2. Strict Design & Copywriting Guardrails (Wajib Dipatuhi)

1. **GEN-Z INDONESIAN COPYWRITING (Santai, Mengalir, & Berdampak):**
   * **Tone of Voice:** Gunakan gaya bahasa anak muda/komunitas *tech* masa kini (contoh diksi: *bikin, ngulik, bareng, gokil, sat-set, anti-ribet, kepake banget, gas ngobrol, dll.*), dipadukan secara natural dengan istilah teknis bahasa Inggris (*code-switching* seperti *production-ready, tech stack, scale-up, real-world project*).
   * **Tetap Punya Wibawa:** Walaupun bahasanya santai dan gaul, angka pencapaian (5.000+ lulusan, 93% *graduation rate*, hibah Rp30 Juta) harus tetap ditonjolkan dengan jelas supaya HRD, *founder*, atau institusi tetap respek.
2. **ZERO EMOJI POLICY (Haram Pakai Emoji):**
   * **Dilarang keras** menyelipkan emoji apa pun di seluruh halaman website. Kesan Gen-Z dibangun murni lewat pilihan kata (*copywriting*) dan tipografi, **bukan** lewat tempelan emoji.
   * Gunakan ikon garis vektor minimalis (*Lucide Icons* `stroke-width: 1.5px`), tanda panah tipografi (`↗`), titik status geometris, atau angka indeks (`01`, `02`, `03`).
3. **NO AI SLOP (Hindari Desain & Bahasa Klise AI):**
   * **Visual:** Jangan gunakan gradasi warna neon norak, efek *glow* berlebihan, atau bayangan (*drop-shadow*) kotor.
   * **Teks:** Hindari terjemahan kaku khas AI seperti *"Merevolusi lanskap digital"* atau *"Mendorong sinergi masa depan"*. Gunakan kalimat langsung seperti *"Bantu 5.000+ orang bikin produk digital beneran, bukan cuma proyek pajangan tutorial."*
4. **MINIMALIST CLEAN AESTHETIC (Emerald & White):**
   * Dominasi ruang putih bersih (**Pure Crisp White** `#FFFFFF`) di luar bagian Hero kiri agar terlihat sangat *clean*, lega, dan profesional.
   * Pemisah antar-komponen menggunakan garis tipis presisi (`1px solid #E2E8F0`), bukan bayangan tebal.

---

## 3. UI/UX Design System (Adaptasi Gambar Referensi)

### 3.1. Layout Architecture (Hero Split-Screen)
Meniru komposisi asimetris dari gambar referensi secara presisi:
* **Kanvas Sisi Kiri (52% Lebar Desktop):** Latar belakang **Luxury Emerald Green** (`#022C22` ke `#064E3B`) dengan pencahayaan radial lembut di belakang objek foto.
* **Kanvas Sisi Kanan (48% Lebar Desktop):** Kartu putih bersih (**Pure Crisp White** `#FFFFFF`) dengan sudut membulat (`border-radius: 28px`).
* **Centerpiece (Overlapping Portrait):** Lampiran foto *cutout* **Aditya Fakhri Riansyah** tepat di tengah membelah latar Emerald dan kartu Putih.

### 3.2. Color Palette (Clean Emerald & White Balance)
| Token Warna | Hex Code | Penggunaan UI |
| :--- | :--- | :--- |
| **Deep Luxury Emerald** | `#022C22` | Kanvas utama Hero kiri, tombol utama di atas latar putih, aksen kartu CTA bawah |
| **Refined Emerald** | `#064E3B` | Gradasi halus Hero kiri & latar *badge* aksen |
| **Emerald Accent** | `#059669` | Indikator status aktif, *border hover*, dan aksen teks |
| **Pure Crisp White** | `#FFFFFF` | Panel kanan Hero & latar belakang utama halaman (dominan agar bersih) |
| **Clean Alabaster** | `#F8FAFC` | Latar belakang kartu proyek & testimoni |
| **Crisp Border** | `#E2E8F0` | Garis batas tipis (`1px`) antar elemen |
| **Slate Black** | `#0F172A` | Warna teks utama di atas latar putih |
| **Muted Slate** | `#475569` | Warna teks penjelasan/deskripsi |

### 3.3. Typography
* **Headline Hero (Teks "CREATE"):** *Bebas Neue* atau *Anton* — *Ultra-Condensed*, huruf besar semua, warna Putih (`#FFFFFF`).
* **Brand Name ("Aditya"):** *Playfair Display* (Serif elegan) di pojok kiri atas.
* **Body & UI Font:** *Plus Jakarta Sans* atau *Inter* — Bersih, modern, dan nyaman dibaca.

### 3.4. Instruksi Khusus Aset Foto
> **INSTRUKSI LAMPIRAN FOTO UTAMA (HERO PORTRAIT):**
> 1. **Lampirkan Foto:** Gunakan foto **Aditya Fakhri Riansyah** yang dilampirkan.
> 2. **Format:** Wajib berupa potongan subjek tanpa latar belakang (**PNG Cutout transparan**).
> 3. **Posisi:** Diletakkan di tengah-tengah (*center-bottom*) menumpuk di antara latar hijau emerald di kiri dan kartu putih di kanan sesuai referensi gambar.

---

## 4. Struktur Konten & Copywriting Bahasa Indonesia Gaul Gen Z (Sesuai CV)

### 4.1. Hero Section (Above The Fold)
* **Top Left (Area Emerald):** Logo Monogram + Teks Serif `"Aditya"`.
* **Top Right (Di dalam Kartu Putih):** Navigasi simpel (`KARYA`, `TRACK RECORD`, `LAYANAN`, `KONTAK`) + tombol menu lingkaran minimalis.
* **Center-Left (Area Emerald):**
  * Giant Display Text: **`CREATE`**
  * Sub-headline (Gen-Z Copy): *"Ngulik AI yang beneran kepake. Ngerancang kode yang sat-set & siap scale-up."*
  * Primary CTA Button: Tombol kapsul putih bersih bertuliskan **`LIHAT KARYA ↗`**
  * Social Proof (Kiri Bawah): Tumpukan 4 foto lingkaran + badge **`+5K`** dengan teks: *"Udah dipercaya 5.000+ learners, developer, dan brand buat tumbuh bareng."*
* **Centerpiece:** Lampiran Foto Cutout **Aditya Fakhri Riansyah**.
* **Center-Right (Di dalam Kartu Putih):**
  * Status Indicator: Teks hijau emerald **`OPEN COLLAB BUAT`** + titik hijau kecil.
  * Role Highlight: **`Mentoring AI, Speaker & Proyek Web`**
  * Sub-note: *"Spesialis ekosistem Laravel, Modern Web, dan implementasi AI praktis yang anti-ribet."*
* **Bottom-Right (Kartu Kutipan di dalam Kartu Putih):**
  * Ikon kutip tipografi (`“`), teks: *"Bawa kelas Bangkit tembus rekor kelulusan 93% dan dapet rating mentoring 4.9+ dari ribuan peserta."*
  * Footer Kartu: **`BANGKIT & RUANGAI`** | Sub-label: **`GOOGLE, GOJEK, CODEPOLITAN`** | Badge: **`4.9/5`**.

### 4.2. Impact Metrics Bar (Bukti Nyata, Bukan Sekadar Klaim)
Ditampilkan dalam 4 kolom rapi dengan garis pemisah `1px`:
* **`5,000+`** — *Talenta Digital Lulus dari Program RuangAI & CODEPOLITAN*
* **`93% & 91%`** — *Rekor Kelulusan Tertinggi Sepanjang Sejarah Bangkit Academy*
* **`55+ Acara`** — *Event Tech & Workshop Digelar Bareng 35+ Kampus se-Indonesia*
* **`3.83 / 4.00`** — *IPK Lulusan Terbaik Teknik Informatika Widyatama 2024*

### 4.3. Showcase Proyek (11 Produk Digital dari CV — Copywriting Gen Z)
* **Judul Section:** `"Proyek & Produk Digital"`
* **Sub-judul:** `"Bukan sekadar proyek coba-coba. Ini deretan web app, sistem AI, dan desain produk yang udah gue bangun buat klien industri sampai komunitas."`
* **Daftar 11 Proyek:**
  1. **`01` ProQuote AI** *(AI Platform)* — `"Capek bikin proposal dan hitung rab proyek manual? Platform berbasis AI ini otomatis nge-generate proposal, scope kerjaan, timeline, sampai estimasi budget dengan cepat dan akurat."`
  2. **`02` RuangAI Prompt Hub** *(AI Ecosystem)* — `"Tempat nongkrongnya prompt AI berkualitas. Dibangun pakai teknologi web modern supaya user gampang nyari, berbagi, dan ngatur prompt buat berbagai model AI."`
  3. **`03` MedFluffy** *(Computer Vision)* — `"Aplikasi pintar buat deteksi kesehatan mata anjing. Cukup lewat analisis foto, sistem bisa bantu prediksi indikasi nuclear sclerosis lengkap sama info medisnya."`
  4. **`04` Restoranku** *(Laravel 12 & FinTech)* — `"Aplikasi restoran modern berbasis Laravel 12. Pelanggan tinggal scan QR Code di meja buat pesan menu dan langsung bayar sat-set lewat integrasi Midtrans."`
  5. **`05` SIACTA (Accounting & Tax)** *(Grant Winner Rp30 Juta)* — `"Aplikasi web berbasis Laravel buat ngeberesin urusan akuntansi dan pajak. Proyek ini berhasil dapet pendanaan hibah Rp30 Juta dari Kemendikbudristek."`
  6. **`06` Panasonic Smart Clinic** *(Enterprise Web App)* — `"Aplikasi web manajemen klinik internal yang gue kembangin khusus buat ngejawab kebutuhan operasional PT Panasonic Industrial Devices Batam."`
  7. **`07` Gambar Yuk** *(Web Utility)* — `"Platform edit foto online gratis dengan 20+ tools lengkap. Tanpa iklan yang ganggu, nggak perlu login, dan 100% gratis tinggal pakai."`
  8. **`08` UI/UX SIBI Mobile App** *(GovTech UI/UX)* — `"Ngerancang desain antarmuka (UI/UX) aplikasi mobile Sistem Informasi Perbukuan Indonesia (SIBI) punya Kemendikbudristek biar makin nyaman dipakai."`
  9. **`09` Herya WF Company Profile** *(Corporate Web)* — `"Website company profile elegan buat PT Herya Wood Furniture yang fokus di industri furnitur kayu dan desain interior."`
  10. **`10` Laundry Web App** *(SME Tech)* — `"Aplikasi web simpel dan rapi buat ngebantu operasional bisnis laundry, mulai dari catat pesanan masuk sampai pantau status cucian."`
  11. **`11` StoryApp** *(Web Platform)* — `"Platform web buat berbagi cerita dan momen yang terintegrasi langsung sama Dicoding Story API."`

### 4.4. Pengalaman Kerja & Komunitas (Track Record)
* **Judul Section:** `"Perjalanan Karier & Komunitas"`
* **Sub-judul:** `"Dari ngoding buat perusahaan multinasional, mimpin komunitas developer, sampai ngajar ribuan orang belajar AI dan web development."`
* **Daftar Pengalaman:**
  * **Mentor AI & Fullstack — CODEPOLITAN** *(Sep 2024 – Sekarang | Cimahi)*
    * `"Ngasuh dan ngembangin program belajar AI & Fullstack di RuangAI sampai berhasil ngelulusin 5.000+ peserta dari kalangan mahasiswa, pekerja, sampai UMKM."`
    * `"Ngeracik kurikulum yang relevan sama industri, ngisi live mentoring, workshop (online & offline), sekaligus bangun ekosistem konten edukasi di YouTube dan short-form video."`
  * **Mentor — Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)** *(Feb 2024 – Jan 2025 | Jakarta)*
    * `"Nganterin 24 siswa kelas MD-34 dan 23 siswa kelas MD-06 lulus dengan rekor kelulusan 93% dan 91%—angka tertinggi sepanjang sejarah Bangkit."`
    * `"Bantu 5 siswa tembus predikat Distinction (Top 10% dari 8.000+ peserta) dan konsisten dapet rating 4.9+ di 34 sesi konsultasi mingguan & 25 sesi ILT."`
  * **Organizer — Google Developer Groups (GDG) Bandung** *(Agu 2023 – Sekarang | Bandung)*
    * `"Nge-lead perencanaan dan eksekusi event komunitas teknologi Google di Bandung, mulai dari kurasi materi, kolaborasi bareng speaker, sampai live streaming yang udah ditonton 6.500+ viewers di YouTube."`
  * **Lead — GDSC Widyatama University & PR GDSC Indonesia** *(Agu 2023 – Jul 2024 | Bandung)*
    * `"Ngebentuk 21 core team dan ngumpulin 1.582 member lintas 35+ kampus dan 40 kota di Indonesia."`
    * `"Sukses ngegelar 55 event (pernah tembus 1.218 peserta dalam satu acara) dan ngebagiin benefit belajar senilai Rp43,5 Juta dalam bentuk voucher kursus coding & e-wallet."`
  * **Fullstack Web Developer — PT Cinovasi Rekaprima** *(Jun 2022 – Jun 2023 | Bandung)*
    * `"Ngembangin dan nge-maintain aplikasi buat klien sekelas Panasonic dengan tingkat ketepatan waktu rilis 95% dan berhasil naikin performa aplikasi sebesar 30%."`
  * **Frontend Web Developer — PT Sibernetika Teknologi Industri** *(Sep 2022 – Jan 2023 | Bandung)*
    * `"Ngerjain slicing UI/UX ke kode yang responsif dan kolaborasi bareng tim backend buat ngebangun aplikasi Panasonic Smart Clinic."`
  * **Fullstack Web Developer — PT Jerbee Indonesia** *(Jul 2019 – Sep 2019 | Bandung)*
    * `"Bangun website pakai PHP, Laravel, JavaScript/AJAX, Bootstrap, dan MySQL sekaligus bantu tim adopsi tools modern yang naikin produktivitas sampai 25%."`

### 4.5. Pendidikan, Tech Stack, Penghargaan & Sertifikasi
* **Pendidikan:** Sarjana Informatika (S.Kom), Universitas Widyatama (2020 – 2024). **IPK 3.83 / 4.00** — *Lulusan Terbaik Teknik Informatika Angkatan 2024 & Lulusan Terbaik MSIB Bangkit Academy*.
* **Senjata Koding (Tech Stack):** Laravel, PHP, JavaScript, React JS, Next JS, Tailwind CSS, Bootstrap, Python, Java, MySQL, JSON, REST API, Git.
* **Penghargaan:**
  * *Distinction Graduate (Top 10% dari 5.013 Siswa)* — Bangkit Academy (Jul 2023).
  * *Penerima Hibah Rp30.000.000 (PHP2D)* — Kemendikbudristek RI untuk pengembangan aplikasi SIACTA (Des 2021).
* **Sertifikasi Resmi:**
  * *Intermediate Web Development* — Dicoding (Jul 2025 | ID: `72ZDKQWOVPYW`)
  * *Certified Generative AI* — RuangAI by CODEPOLITAN (Jun 2025 | ID: `CP-RAI/2025/06/0193`)
  * *Lead of Google Developer Student Clubs* — Google for Developers (Jul 2024)
  * *Intermediate Android Application Development* — Dicoding (Mei 2023 | ID: `2VX3J6533PYQ`)

### 4.6. Layanan & Footer Kontak (CTA Penutup)
* **Headline CTA:** `"Punya ide proyek seru atau mau ngundang ngisi acara?"`
* **Sub-headline:** `"Entah itu kolaborasi bikin web app, workshop AI buat tim kantor/kampus, atau sekadar diskusi teknis—gas hubungi gue lewat jalur di bawah."`
* **Kontak Langsung:**
  * Email: `adityafakhri03@gmail.com`
  * WhatsApp / Telepon: `0895324105731`
  * Jejaring: `linkedin.com/in/adityafakhrii` | `github.com/adityafakhrii` | `adityafakhri.com`