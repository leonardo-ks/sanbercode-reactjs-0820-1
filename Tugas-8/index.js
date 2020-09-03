// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
let i = 1
let a = 0
let time = 10000

function buku(book){
readBooks(time, book, function(){
    if (a < 3){
        buku(books[0 + i])
        i++
        a++
    }
})
time = time - book.timeSpent
}
buku(books[0])