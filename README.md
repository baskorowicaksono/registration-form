<h1 align="center">
  <br>
  Registration Form Web Service
  <br>
</h1>

### Menjalankan File
Sebelum menjalankan file, pastikan bahwa pada device yang digunakan telah mendukung penggunaan database MySQL. Jika belum, maka Anda perlu untuk navigasi pada laman [DownloadMySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html) dan mengunduh MySQL Installer yang sesuai dengan arsitektur yang Anda gunakan. Kemudian, lanjutkan dengan melakukan instalasi terhadap tools-tools yang disarankan, seperti MySQL Command-Line Client, MySQL Workbench, dll.

Setelah hal di atas selesai disiapkan, lakukan langkah-langkah berikut ini untuk menjalankan layanan.
- Navigasi pada folder __*back-end*__
- Menyesuaikan konfigurasi mysql pada path __*/backend/config/config.json*__, tepatnya pada environment bagian __*production*__
- Membuka terminal
- Menjalankan perintah berikut untuk langkah instalasi dependencies yang digunakan dalam service
```
npm development
```
- Melakukan instalasi __sequelize-cli__ pada global scope, dengan cara menjalankan perintah berikut pada terminal:
```
npm install sequelize-cli -g
```
- Melakukan migrasi terhadap model yang tersedia pada folder __/back-end/models & /back-end/migrations__. Jalankan perintah sebagai berikut
```
npx sequelize db:migrate --env production
```
- NB: Jika tidak ditemukan model atau file migrasi untuk dipindahkan pada database local, maka diperlukan untuk membuat model dan migrasi dari awal terlebih dahulu. Untuk membuat model bernama __*user*__ beserta dengan migrationnya, kita dapat menjalankan perintah sebagai berikut
```
npx sequelize model:generate --env production --name user --attributes nama:string,no_telp:string,<attr3>:<type>,...
```
hingga seluruh attribut terdefinisikan (pastikan nama model adalah "__*user*__"). Kemudian, jalankan kembali perintah
```
npx sequelize db:migrate --env production
```
- Setelah migration selesai diproses pada local database, services siap digunakan. Jalankan perintah sebagai berikut untuk memulai program/layanan.
```
npm start
```
- Layanan telah dijalankan pada localhost
- Setiap record data yang merupakan input dari form akan disimpan ke dalam database dan saat ini dapat diakses menggunakan __*MySQL Workbench ataupun MySQL Command-Line Client*__ untuk database dan tabel terkait.
