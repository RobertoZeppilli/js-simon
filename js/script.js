// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONI-----------------------------------------------------------------
// 1. creo una funzione per generare numeri random.
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. creo una funzione che mi dica se un elemento sia o meno in un array.
function isInArray(numero, array) {
    for (var i = 0; i < array.length; i++) {

        if (numero == array[i]) {
            return true;
        }
    }
    return false;
}

// VARIABILI---------------------------------

// 1. creo 2 array vuoti, uno per i numeri random che andrò a generare ed uno per i numeri che indovinerò. Poi inizializzo il punteggio pari a 0.
var numeriRandom = [];
var numeriIndovinati = [];
var punteggio = 0;

// GIOCO---------------------------------------------------------------------------

// 1. con un ciclo while genero i numeri random e li inserisco in un array vuoto (numeriRandom).
while (numeriRandom.length < 5) {

    var numero = numeroRandom(1, 100);

    if (!isInArray(numero, numeriRandom)) {
        numeriRandom.push(numero);
    }
}

// 2. creo un alert per mostrare in pagina 5 numeri random (generati in precedenza).
alert("Ricorda bene questi 5 numeri, avrai 30 secondi per riscriverli:\n" + numeriRandom);

//    3. faccio partire un timer di 30 secondi (30.000 millisecondi), terminato il quale partirà il ciclo for: 
//    3.1 chiedo 5 volte un numero (compreso tra 1 e 100, non stringa) all'utente tramite prompt.
//    3.2 se il numero è presente nell'array numeriIndovinati, un alert dirà all'utente che il numero è stato già inserito ed avrà perso un tentativo.
//    3.3 se quel numero è presente nell'array numeriRandom, lo inserisco nell'array numeriIndovinati ed incremento il punteggio.
//    3.4 in caso contrario dico all'utente che il numero inserito è sbagliato.
setTimeout(function () {
    for (var t = 0; t < 5; t++) {

        do {
            var numeriUtente = parseInt(prompt("Inserisci i numeri che sono apparsi in precedenza!"));
        } while (isNaN(numeriUtente) || numeriUtente < 1 || numeriUtente > 100);

        if (isInArray(numeriUtente, numeriIndovinati)) {
            alert("Il numero che hai scelto è stato già inserito, hai perso un tentativo!");
        } else if (isInArray(numeriUtente, numeriRandom)) {
            numeriIndovinati.push(numeriUtente);
            punteggio++;
            console.log("Hai indovinato il numero:", numeriUtente);
        } else {
            console.log("Il numero", numeriUtente, "è sbagliato!");
        }
    }
    // 4. al di fuori del ciclo for, se la lunghezza dell'array numeriIndovinati è pari a 0 (cioè non ho indovinato nessun numero), manderò un messaggio appropriato all'utente. In caso contrario comunicherò all'utente il punteggio totalizzato e quali numeri ha indovinato tra quelli presenti nell'array numeriRandom.
    if (numeriIndovinati.length == 0) {
        console.log("Non hai indovinato nessun numero!");
    } else {
        console.log("Hai indovinato", punteggio, "numeri/o" + "\nI numeri che hai ricordato sono", numeriIndovinati);
    }

}, 3000);




// (isInArray(numeriUtente, numeriIndovinati)) {
//     alert("Il numero che hai scelto è stato già inserito, riprova!")