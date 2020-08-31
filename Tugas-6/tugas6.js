//Soal 1
const pi = 3.14
const luasL = (r) => {
  return pi * r * r
}

const kelilingL = (r) => {
  return 2* pi * r
}
//Soal 2
let kalimat = ""
const tambahKata = (kata) => {
  kalimat = kata
  return kalimat
}
let kata1 = "saya"
let kata2 = "adalah"
let kata3 = "seorang"
let kata4 = "frontend"
let kata5 = "developer"

const kata = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`

console.log(tambahKata(kata))

//Soal 3
const newFunction = (firstName, lastName) => {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: () => {
        console.log(`${firstName} ${lastName}`)
        return
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

//Soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  
  const {firstName, lastName, destination, occupation} = newObject
  
  // Driver code
  console.log(firstName, lastName, destination, occupation)

//Soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)