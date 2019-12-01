// variabili

var province = []
var nomiProvince = []
var codiceProvince = []
var comuni = []
var nomiComuni = []

// selettori js

var regioneSelect = document.getElementById('regione')
var provinciaSelect = document.getElementById('provincia');
var comuneSelect = document.getElementById('comune');
var selectWrapper = document.getElementById('selectWrapper');

// funzioni

// prende dati da github. Dopo la prima richiesta al server i dati presi dalla cache del browser
async function retrieveData() {

    console.log('start donwload dati da server')
    let url = 'https://raw.githubusercontent.com/dakk/Italia.json/master/italia_comuni.json';
    let response = await fetch(url);

    data = await response.json(); // read response body and parse as JSON
    // data = JSON.parse(response.json())
    if(data){
        console.log('terminato')
    }
    return data

}

//  appenda opzioni al select 
function createOption(text, value, select) {
    let option = document.createElement("option");
    option.classList.add("created");
    option.text = text;
    option.value = value;
    select.appendChild(option)

}
// resetta i select distruggendo le options ed elimina il submit button se presente
function destroyOptions(select) {
   
    if (select.querySelectorAll('.created').length > 1) {
        select.querySelectorAll('.created').forEach(n => n.remove());
        select.selectedIndex = 0
        if (!!document.querySelector('.btn')) {
            document.querySelector('.btn').remove()
        }
    }
}

// crea bottone se non esiste
function createButton() {
    if (provinciaSelect.querySelectorAll('.created').length > 1 &&
        comuneSelect.querySelectorAll('.created').length > 1 &&
        document.querySelectorAll('.btn').length === 0) {

        let bottone = document.createElement('button');
        bottone.classList.add('btn', 'btn-primary', 'btn-block', 'mt-3');
        bottone.innerText = 'Invia';
        selectWrapper.appendChild(bottone)

    }


}


// eventListeners attaccati ai select

regioneSelect.addEventListener('change', function () {
    // resetta array nomi province
    nomiProvince = [];
    let regioneSelezionata = regioneSelect.selectedOptions[0].text
    retrieveData()
        .then(function (data) {
            for (item of data.regioni) {
                if (item.nome == regioneSelezionata) {
                    province = item.province

                    for (x of item.province) {
                        nomiProvince.push(x.nome)
                    }
                }
            }
        })
        // popola select provincia con dati appena ottenuti
        .then(function () {
            destroyOptions(provinciaSelect)
            if (comuneSelect.querySelectorAll('.created').length > 0) {
                destroyOptions(comuneSelect)
            }
            for (x in nomiProvince) {
                createOption(nomiProvince[x], nomiProvince[x], provinciaSelect)

            }
        })
});

provinciaSelect.addEventListener('change', function () {
    let provinciaSelezionata = provinciaSelect.selectedOptions[0].text
    for (item of province) {
        if (item.nome == provinciaSelezionata) {
            // prendi province e codici province
            comuni = item.comuni
            destroyOptions(comuneSelect)
            for (x in comuni) {
                createOption(comuni[x].nome, comuni[x].nome, comuneSelect)
            }
        }

    }


})

comuneSelect.addEventListener('change', createButton);



