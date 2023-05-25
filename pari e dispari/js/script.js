'use strict';

//creo una funzione che generi un numero random per il computer
function numberRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//creo una funzione che controlla se un numero è pari o dispari
function oddEven(number) {
    if (number % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

//dichiaro le variabili
let numberUser;
let numberComputer;
let choseUser;
let bottone = document.getElementById('play');
let somma;
let result;

//creo un evento per quando viene premuto il bottone
bottone.addEventListener('click', function() {
    //prendo i dati inseriti dall'utente
    numberUser = parseInt(document.getElementById('numberUser').value);
    console.log(numberUser);
    console.log(typeof(numberUser));
    choseUser = document.getElementById('choseUser').value;
    //genero un numero casuale per il computer
    numberComputer = numberRandom(1, 5);
    console.log(numberComputer);
    //faccio la somma dei due numeri
    somma = numberUser + numberComputer;
    console.log(somma);
    //controllo se il numero ottenuto dalla somma è pari o dispari
    result = oddEven(somma);
    console.log(result);
    //mostro il risultato a schermo
    if (result === choseUser) {
        alert('Hai vinto!');
    } else {
        alert('Mi dispiace, hai perso!');
    }
})

