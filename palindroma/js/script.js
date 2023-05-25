'use stric';

//chiedo all'utente di inserire una parola
let parolaUtente = prompt('inerisci una parola');

//creo la funzione che mi permette di capire se la parola è palindroma
function palindroma(word) {
    //trasformo la parola in un array
    let letters = word.split('');
    //inverto l'ordine dell'array
    let lettersReverse = letters.reverse();
    //creo la nuova parola con le lettere inverse
    let wordReverse = lettersReverse.join('');
    //controllo se la parola è palindroma
    if (word === wordReverse) {
        return true
    } else {
        return false
    }
}

//mostro a schermo un alert che mi dice se la parola è palindroma o meno
if (palindroma(parolaUtente)) {
    alert(`${parolaUtente} è palindroma`)
} else {
    alert(`${parolaUtente} non è palindroma`) 
}