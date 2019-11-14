const array = [1, 2, 3, 4]

class Person{
    constructor(nome, cognome, eta){
        this.nome = nome, 
        this.cognome = cognome
        this.eta = eta
    }
}

const saro = new Person('saro', 'fassaperla', 30)
const pippo = new Person('pippo', 'occhipinti', 33)
const cammelo = new Person('cammelo', 'iammilisci', 17)

const chistiani = [saro, pippo, cammelo] 

// usa array map per creare array di oggetti che soddisfano una condizione
// const minorenni = chistiani.filter(item => item.eta < 18 ? true : false)
const minorenni = chistiani.filter(item => item.eta < 18)


const arrayPerDue = array.map(item => item*2)
const showMin = array.map(item => console.log(item.eta))

// number.map((arrow function parameter) => 

const arrayDue = array.map((elemento, index) => {
    return console.log(` elemento: ${elemento}, indice: ${index}` )
})


// array filter

const arraySoloPari = array.filter(item => item%2 === 0 ? true : false)
 





console.log(arraySoloPari)