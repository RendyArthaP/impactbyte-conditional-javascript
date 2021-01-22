// Soal 1
let position = 'CTO';

if (position === 'HR') {
  console.log('Tugas saya merekrut pegawai')
} else if (position === 'CEO') {
  console.log('Tugas saya memimpin perusahaan')
} else if (position === 'CTO') {
  console.log('Tugas saya membuat aplikasi dan web')
} else {
  console.log('Saya adalah karyawan biasa')
}

// Soal 2
let angka1 = 100;
let angka2 = 80;

if (angka1 > angka2) {
  console.log('Angka pertama lebih besar dari angka kedua')
} else if (angka1 < angka2) {
  console.log('Angka kedua lebih besar dari angka pertama')
} else if (angka1 === angka2) {
  console.log('Angka pertama sama dengan angka kedua')
}

// Soal 3
let hari = 8;

switch(hari) {
  case 1: console.log('Minggu')
    break;
  case 2: console.log('Senin')
    break;
  case 3: console.log('Selasa')
    break;
  case 4: console.log('Rabu')
    break;
  case 5: console.log('Kamis')
    break;
  case 6: console.log('Jumat')
    break;
  case 7: console.log('Sabtu')
    break;
  default: console.log('Kembali ke Minggu')
}

// Soal 4
let movement = 'RIGHT';

switch(movement) {
  case 'RIGHT': console.log('Karakter Ke Kanan');
    break;
  case 'BOTTOM': console.log('Karakter Ke Bawah');
    break;
  case 'LEFT': console.log('Karakter Ke Kiri');
    break;
  case 'UP': console.log('Karakter Ke Atas');
    break;
  default: console.log('Karakter diam')
}