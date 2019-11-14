// define class in ES6

class Persona {
    // costruttore
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // metodi
    getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Studente extends Persona {
    
    constructor(firstName, lastName, age, matricola, corsoDiStudi){
        // chiama costruttore classe da cui eredita e passa argomenti
        super(firstName, lastName, age)

        this.matricola = matricola;
        this.corsoDiStudi = corsoDiStudi;
    }
}