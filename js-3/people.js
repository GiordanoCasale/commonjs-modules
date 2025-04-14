//vado a importare le funzioni
const names = require('../js/names.js')
const hobbies = require("../js-2/hobbies.js")
//vado a dichiarare una variabile per riportare i valori
const Nomi = names("Giordano", "Casale");
const passatempo = hobbies("football", "hockey", "hip hop");
//vado a dichiarare una funzione finale
const namesAndHobbies = () => {
    const finalObject= {
        fullName:names("Giordano", "casale"),
        hobbies:hobbies("football", "hockey", "hip hop")
    }

    return finalObject
}

console.log(namesAndHobbies())