# Image Documentation Pop-Up Feature

Fitur ini bertujuan untuk menampilkan pop-up berisikan gambaran dokumentasi (foto kegiatan atau sertifikat) saat card di bagian "Experience" dan "Training" diklik. Dokumen ini dirancang sederhana agar mudah dieksekusi oleh junior programmer atau sistem automasi (AI).

## Proposed Changes

### `src/App.tsx`

#### 1. Perbarui Props pada `TimelineItem`
- Tambahkan properti baru bernama `images` dengan tipe `string[]` ke parameter fungsional komponen `TimelineItem`. Properti ini wajib opsional (`images?: string[]`).
- Tambahkan properti tailwind `cursor-pointer` di parent element `TimelineItem` jika list tersebut memiliki inputan gambar (agar user tahu elemen bisa ditekan).
- Berikan event listener `onClick` yang memanggil *setter* untuk memicu modal.

#### 2. Buat Komponen Baru: `DocumentModal`
Komponen ini menampilkan fotonya secara pop-up:
- Posisikan dengan style `fixed` memblok layar dengan efek blur, bukan sekadar layar gelap (`inset-0 z-[100] backdrop-blur-sm bg-black/10`).
- Gambar/sertifikat akan ditata secara list memanjang ke vertikal (`flex-col`) dengan kemampuan discroll atas-bawah (`overflow-y-auto`).
- Tiap unit gambar ditaruh di dalam `<img />` bersusun ke bawah.
- Tambahkan tombol "Tutup" (X) di pojok kanan agar user bisa menutup pop-up.

#### 3. Tambahkan State di `App`
- Di dalam komponen utama `App`, daftarkan state dasar React: `const [activeDocs, setActiveDocs] = useState<string[] | null>(null)`.
- Jika suatu card `TimelineItem` diklik, perbarui datanya `setActiveDocs(gambar_dari_card)`.
- Jika `activeDocs` berisi data, komponen `<DocumentModal />` langsung dimunculkan di layar utama dan dikirimkan data fotonya.

#### 4. Pengisian Data Dummy/Asset
- Buka dan cari pemanggilan `<TimelineItem />` di bagian section `Experience` dan `Training`.
- Tambahkan argumen contoh penggunaan gambar:
  ```tsx
  images={["/img/sertifikat1.png", "/img/dokumentasi2.png"]}
  ```
  *(Simpan file .png anda pada direktori `/public/img/`)*

## Open Questions
- Tidak ada. Seluruh keputusan teknis sudah disetujui pengguna (penyimpanan di `/public/img/`, mode scroll atas-bawah, dan backdrop blur 25%).
 
## Verification Plan
1. Lakukan klik pada bagian area komponen `TimelineItem` yang telah ditambahkan properti `images`. Background layar akan memblur secara transparan (25%), tidak gelap gulita.
2. Gambar/sertifikat muncul secara list vertikal yang bisa discroll ke bawah.
2. Cek tombol tutup. Apabila ikon `X` pada pop-up diklik, pop-up harus hilang dari layar.
