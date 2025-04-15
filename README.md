# LetsConvert
LetsConvert adalah aplikasi yang menyediakan fitur konversi untuk berbagai unit pengukuran, seperti suhu, panjang, berat, waktu, dan kecepatan. 

## Fitur
- Konversi suhu (Celsius → Fahrenheit, dan sebaliknya).
- Konversi panjang (Kilometer → Mil, dan sebaliknya).
- Konversi berat (Kilogram → Pounds, dan sebaliknya).
- Konversi waktu (Menit → Jam, dan sebaliknya).
- Konversi kecepatan (Km/jam → m/detik, dan sebaliknya).

## Cara Penggunaan
1. Pilih kategori konversi yang diinginkan.
2. Pilih tipe konversi (misalnya, Celsius → Fahrenheit).
3. Masukkan nilai yang ingin dikonversi.
4. Hasil konversi akan ditampilkan secara otomatis.

## Konsep JavaScript yang Digunakan

1. Objek dan Fungsi: 
   Objek `conversions` digunakan untuk mengelompokkan fungsi konversi berdasarkan kategori, seperti suhu, panjang, berat, waktu, dan kecepatan. Setiap kategori berisi pasangan key-value, di mana key adalah nama konversi (misalnya, "Celsius → Fahrenheit") dan value adalah fungsi yang melakukan perhitungan konversi sesuai rumus yang diberikan.
   
2. Event Handling: 
   Aplikasi ini merespons interaksi pengguna dengan menggunakan event listener. Misalnya, `change` event pada elemen dropdown kategori dan konversi untuk memperbarui opsi yang tersedia dan melakukan perhitungan ulang hasil konversi. Event `input` pada elemen input digunakan untuk memperbarui hasil konversi setiap kali pengguna mengubah nilai input.

3. DOM Manipulation:
   JavaScript digunakan untuk memodifikasi konten halaman secara dinamis. Ketika kategori atau tipe konversi berubah, elemen-elemen HTML, seperti dropdown dan hasil konversi, diperbarui menggunakan `textContent` dan `createElement`. Ini memungkinkan antarmuka pengguna untuk merespons input dengan cepat.

4. Parsing dan Validasi Input:
   Input yang diberikan oleh pengguna diproses menggunakan `parseFloat` untuk mengonversi nilai input menjadi angka. Jika input bukan angka, aplikasi menampilkan pesan kesalahan "Masukkan angka yang valid."

5. Scroll Event Listener:
   Menggunakan `window.addEventListener('scroll')`, aplikasi mendeteksi perubahan posisi scroll pada halaman dan menambahkan atau menghapus kelas pada navbar untuk membuatnya tetap terlihat saat pengguna menggulir ke bawah.

6. Scroll Behavior:
   Fungsi `scrollIntoView({ behavior: 'smooth' })` digunakan untuk menggulir ke bagian konverter dengan animasi scroll yang halus, memberikan pengalaman pengguna yang lebih baik.
