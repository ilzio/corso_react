
class Personaggio{
    constructor(nome, cognome, ruolo, idCasata, babbano, punteggio){
        this.nome  = nome
        this.cognome  = cognome
        this.ruolo  = ruolo
        this.idCasata  =  idCasata
        this.babbano  = babbano
        this.punteggio  = punteggio

    }
    descrizione = () =>  {
        return `${this.nome} ${this.cognome} e' un ${this.ruolo} della casata ${cercaCasata(this)}`;
    }; 
}


class Casata{
    constructor(id, nome){
        this.id  = id
        this.nome  = nome
    }
}

const cercaCasata = (Personaggio) => {
    const casata = casate.find(element => element.id === Personaggio.idCasata )
    return casata.nome
}

const grifondoro = new Casata(1, "grifondoro")
const serpeverde = new Casata(2, "serpeverde")
const corvonero = new Casata(3, "corvonero")
const tassorosso = new Casata(4, "tassorosso")

const casate = [
    grifondoro, tassorosso, corvonero, serpeverde
]

const harryPotter = new Personaggio("Harry", "Potter", "alunno", 1, true,  250)
const turePennisi = new Personaggio("Salvatore", "Pennisi", "alunno", 2, false,  50)
const cettinaPuglisi = new Personaggio("Concettina", "Puglisi", "professore", 3, true, 58)
const affioBarone = new Personaggio("Alfio", "Barone", "alunno", 4, false, 89)
const meloBelfiore = new Personaggio("Carmelo", "Belfiore", "professore", 1, true,  0)


const personaggi = [
    harryPotter,
    turePennisi,
    cettinaPuglisi,
    affioBarone,
    meloBelfiore
] 

const alunni = personaggi.filter(personaggio => personaggio.ruolo === "alunno"  )
const professori = personaggi.filter(personaggio => personaggio.ruolo === "professori"  )

const calcolaPunteggioCasata = (casata)=> {
    // prendi tutti i personaggi della casata specificata
    personaggiCasata = personaggi.filter(personaggio => personaggio.idCasata === casata.id )
    
    //prendi i punteggi dei singoli
    let totalePuntiCasata= 0;
    for(x in personaggiCasata){
        totalePuntiCasata += personaggiCasata[x].punteggio
    }
    return totalePuntiCasata
}



// creazione array di oggetti casate che hanno punteggi 
const casateconpunteggio = casate.map(casata => { 
    return {
        ...casata,
        punteggio: calcolaPunteggioCasata(casata)
    }
    
})

// per definire quale casata ha il punteggio massimo si definisce un index di partenza 0

let massimoIndex = 0;
// ciclando le casate si compara l'index di partenza con quello attuale, ottenendo come risultato l'index dell'oggetto che ha il punteggio maggiore
for(x in casateconpunteggio){
  
    if(casateconpunteggio[x].punteggio > casateconpunteggio[massimoIndex].punteggio){
        massimoIndex = x;
    }
}

const vincitore = () => ` il vincitore e' ${casateconpunteggio[massimoIndex].nome}`



harryPotter.descrizione();
