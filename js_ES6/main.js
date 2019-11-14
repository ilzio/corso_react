const address = {
    street: "via mulino a vento",
    citta : "catania",
    provincia: "catania"
}


const person = {
    firstName : "Saro",
    lastName : "Fassaperla",
    age : 69,
    getFullName : function(){
        return `il nome completo è ${this.firstName} ${this.lastName}`;
    },
    ...address
}

// per prendere valore di proprieta' oggetto attraverso di altre variabili necessario usare notation []

const a = "firstName";

console.log(person[a])

// oggetto non e' iterabile, quindi for in funziona, mentre for of no

// genera array con chiavi oggetto -> metodo della classe Object 

const chiaviPerson = Object.keys(person);

console.log(chiaviPerson)

// const address = {
//     street: "via mulino a vento",
//     citta : "catania",
//     provincia: "catania"
// }

