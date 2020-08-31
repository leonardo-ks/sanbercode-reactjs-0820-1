//Soal 1
console.log('LOOPING PERTAMA');
var i = 2;
while(i < 21){
console.log(i + " - I Love coding");
i = i + 2;
}
console.log('LOOPING KEDUA');
var i = 20;
while(i > 1){
console.log(i + " - I Love coding");
i = i - 2;
}

//Soal 2
var i;
for(i = 1; i < 21; i++){
if(i % 2 !== 0&& i % 3 == 0){
console.log(i + " - I love coding");
}else if(i % 2 == 0){
console.log(i + " - Berkualitas");
}else if(i % 2 !== 0){
console.log(i + " - Santai");
}
}

//Soal 3
for(var i = 1; i <= 7; i++){
console.log("#".repeat(i));
}

//Soal 4
var kalimat = "saya sangat senang belajar javascript";
var split = kalimat.split(" ");
console.log(split)

//Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
for (var i = 0; i <5; i++){
console.log(daftarBuah[i]);
}
