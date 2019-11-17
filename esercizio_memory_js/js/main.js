
// selettori

let cards = document.getElementsByClassName('card')
let immagini = document.getElementsByTagName('img')

clickTotali = "";

// variabili

// carte post

var nuoveCarte = [];
var dorso = "img/back.png"

selezionata1 = "";
selezionata2 = "";
elemento1= "";
elemento2= "";



// array di array: mazzo di carte con assi e re

let carte =
    [
        [
            "re_coppi",
            "re_coppi",
            "asu_mazzi",
            "asu_mazzi",
            "re_oro",
            "re_oro"

        ],
        [
            "asu_oro",
            "asu_oro",
            "asu_coppi",
            "re_mazzi",
            "asu_coppi",
            "re_mazzi",

        ]

    ]

// ottieni valore random tra 0 e 1
randomValue = Math.floor(Math.random() * (1 - 0 + 1) + 0)

// scegli assi o re con valore random
var mazzoRandom = carte[randomValue]

// mischia mazzo di carte selezionato
mazzoRandom.sort(() => Math.random() - 0.5);


//associa a immagini carta da mazzo mischiato e popopa nuovo array

var immaginiNascoste = [];
for (x in immagini) {
    try {
        immagini[x].src = dorso;
        immagini[x].setAttribute("back", dorso)

        let front = "img/" + mazzoRandom[x] + '.png'
        immagini[x].setAttribute("front", front);
    } catch (error) {
        console.log(error)
    }

}

// crea nuovo array carte e immagini

for (x in cards) {
    nuoveCarte.push(cards[x]);
}

var click = 0;

function resettaCarte() {
    if (selezionata1 === selezionata2){
        // alert("bravu u bestia")
        elemento1.parentElement.remove()
        elemento2.parentElement.remove()
        if(immagini.length === 0){
            var h1 = document.createElement('h1')
            h1.innerText= `HAI VINTO! in ${clickTotali} tentativi!!`
            document.getElementsByClassName('container-fluid')[0].appendChild(h1)
            clickTotali = 0;
            setTimeout(function(){ document.location = "index.html"; }, 1000);
        }

    }
    for (x in immagini) {
        immagini[x].src = dorso;
    }
    click = 0;
}
   
    function giracarta(event) {
        clickTotali ++
        if (click < 2) {
            console.log("click iniziale :" + click)
            let presente = event.target.getAttribute("src");
            
            if (presente == event.target.getAttribute("front")) {
                event.target.src = event.target.getAttribute("back")
               
            } else {
                if(click == 0){
                    // console.log("primo click")
                    selezionata1 = event.target.getAttribute("front")
                    elemento1= event.target;
                } else if(click == 1)
                selezionata2 = event.target.getAttribute("front");
                elemento2= event.target;
                // console.log(selezionata2)
                event.target.src = event.target.getAttribute("front")

                
            }
            // let attribute = event.target.getAttribute("front");
            // if(attribute === )
            // event.target.src = attribute;
            // let target = event.target
            // console.log(target.src)
            click++
            console.log("click finale :" + click)

            if (click == 2) {
                setTimeout( resettaCarte, 500);

            }


        }
    }


