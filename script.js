//If else
let namaMahasiswa = "Gita Mutiara";
let statusAktif = true;

if (statusAktif) {
  console.log(namaMahasiswa + " adalah mahasiswa aktif.");
} else {
  console.log(namaMahasiswa + " adalah mahasiswa tidak aktif.");
}

// Nested if
let NamaMahasiswa = "Gita Mutiara Syawalnitya";
let prodi = "Teknik Informatika";

if (NamaMahasiswa) {
  console.log("Nama Mahasiswa: " + NamaMahasiswa);
  
  if (prodi) {
    console.log(NamaMahasiswa + " terdaftar di program studi " + prodi + ".");
  } else {
    console.log("Program studi tidak diketahui untuk " + NamaMahasiswa + ".");
  }
} else {
  console.log("Nama Mahasiswa tidak diketahui.");
}


//switch case
let kodeMataKuliah = "IF-101";
let infoMataKuliah;

switch (kodeMataKuliah) {
  case "IF-101":
    infoMataKuliah = "Keamanan Informasi";
    break;
  case "IF-102":
    infoMataKuliah = "Keamanan Jaringan";
    break;
  case "IF-024":
    infoMataKuliah = "Mobile Programing II";
    break;
  case "IF-025":
    infoMataKuliah = "Web Programing I";
    break;
  default:
    infoMataKuliah = "Mata kuliah tidak ditemukan";
}

console.log("Mata kuliah dengan kode " + kodeMataKuliah + " adalah " + infoMataKuliah + ".");


//for statement 
let hariKuliah = ["Senin", "Senin", "Selasa", "Rabu", "Kamis", "Kamis", "Jumat"];
let jadwal = ["Mobile Programing II", "Sistem Microprosesor", "Web Programing I", "Bahasa indonesia", "Keamanan Jaringan", "Keamanan Informasi", "Sistem Informasi Enterprise"];

for (let i = 0; i < hariKuliah.length; i++) {
  console.log("Pada hari " + hariKuliah[i] + ", Anda memiliki kuliah " + jadwal[i] + ".");
}



//while do while
let kata = "Gita Mutiara";
let i = 0;

while (i < kata.length) {
  console.log(kata[i]);
  i++;
}

let teks = "";
let huruf = "GF";
let n = 5;

do {
  teks += huruf;
  n--;
} while (n > 0);

console.log(teks);


//function
function MasukanMahasiswa(nama, jurusan) {
  let mahasiswa = {
    nama: nama,
    jurusan: jurusan,
    info: function () {
      console.log("Nama: " + this.nama + ", Jurusan: " + this.jurusan);
    }
  };
  return mahasiswa;
}

let mahasiswa1 = MasukanMahasiswa("Gisya", "Informatika");
let mahasiswa2 = MasukanMahasiswa("Fatih", "Bisnis Digital");

mahasiswa1.info();
mahasiswa2.info();

  