// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var dua = kataKedua.substring(0, 1).toUpperCase() + kataKedua.substring(1);
var kalimat = kataPertama.concat(" ", dua," ", kataKetiga," ", kataKeempat.toUpperCase());
console.log(kalimat);

//Soal 2
var a = "1";
var b = "2";
var c = "4";
var d = "5";

console.log(parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d));

//Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, kalimat.length); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//Soal 4
var nilai = 80;

if (nilai >= 80){
  console.log("A")
}else if (nilai >= 70){
  console.log("B")
}else if (nilai >= 60){
  console.log("C")
}else if (nilai >= 50){
  console.log("D")
}else if (nilai < 50){
  console.log("E")
}

//Soal 5
var tanggal = 12;
var bulan = 10;
var tahun = 2000;

switch(bulan) {
    case 1:     { bulan = 'Januari'; break; }
    case 2:     { bulan = 'Februari'; break; }
    case 3:     { bulan = 'Maret'; break; }
    case 4:     { bulan = 'April'; break; }
    case 5:     { bulan = 'Mei'; break; }
    case 6:     { bulan = 'Juni'; break; }
    case 7:     { bulan = 'Juli'; break; }
    case 8:     { bulan = 'Agustus'; break; }
    case 9:     { bulan = 'September'; break; }
    case 10:    { bulan = 'Oktober'; break; }
    case 11:    { bulan = 'November'; break; }
    case 12:    { bulan = 'Desember'; break; }
}
console.log(tanggal + " " + bulan + " " + tahun)