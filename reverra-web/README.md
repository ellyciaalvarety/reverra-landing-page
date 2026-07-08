# Reverra Website

Dibuat dengan React + Vite. Semua gambar (termasuk logo brand di header)
diambil dari file lokal di `src/assets/images/` — tidak ada gambar dari URL
eksternal.

## Cara jalankan

```bash
npm install
npm run dev
```

## Gambar yang perlu kamu tambahkan

Taruh file-file berikut di `src/assets/images/` dengan nama persis seperti
ini (formatnya boleh .jpg/.png, tinggal sesuaikan ekstensi di import
masing-masing komponen kalau beda):

| Nama file                          | Dipakai di        | Keterangan                              |
|-------------------------------------|--------------------|------------------------------------------|
| `logo.png`                          | Header.jsx         | Logo + wordmark Reverra (header)          |
| `hero-panel-room.jpg`                | Hero.jsx           | Foto ruangan dengan panel akustik biru    |
| `about-living-room.jpg`              | About.jsx          | Foto ruang tamu (Tentang Reverra)         |
| `proses-waste-collection.jpg`        | Process.jsx        | Step 1 — Waste Collection                 |
| `proses-shredding-sorting.jpg`       | Process.jsx        | Step 2 — Shredding & Shorting             |
| `proses-bio-binder-compressing.jpg`  | Process.jsx        | Step 3 — Bio Binder Compressing           |
| `proses-sterile-room-curing.jpg`     | Process.jsx        | Step 4 — Sterile Room Curing              |
| `produk-acoustic-wall-panel.jpg`     | Product.jsx        | Foto produk hexagon Acoustic Wall Panel   |
| `cta-hexagon-panel.jpg`              | CTA.jsx            | Background section "Mulai Kolaborasi"     |

Kalau nama file gambar kamu beda, cukup ubah baris `import ... from '../assets/images/...'`
di komponen terkait.

## Struktur folder

```
src/
  assets/images/     <- taruh semua gambar di sini
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Process.jsx
    Product.jsx
    CTA.jsx
    Footer.jsx
  theme.js           <- COLORS & FONTS constants
  App.jsx
  main.jsx
  index.css
```
