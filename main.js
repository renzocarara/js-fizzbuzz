// CONSEGNA: esercitazione di oggi: FizzBuzz test!
// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"
// nome repo: js-fizzbuzz
//------------------------------------------------------------------------------

var maxFizzBuzz = 100; // lunghezza sequenza
var FizzBuzzArray = []; // uso un array per memorizzare la sequenza
var FizzBuzzElement = ""; // variabile tampone che mi da' il valore da scrivere nell'array
var FizzDivisor = 3;
var BuzzDivisor = 5;
var FizzString = "Fizz";
var BuzzString = "Buzz";
// statistiche
var FizzCounter = 0;
var BuzzCounter = 0;
var FizzBuzzCounter = 0;


// customizzazione - chiedere all'utente di quanti numeri vuole il FizzBuzz
maxFizzBuzz = parseInt(prompt("Inserisci la lunghezza preferita pe la tua sequenza FizzBuzz:"));

for (var i = 0; i < maxFizzBuzz; i++) {
    //ciclo maxFizzBuzz volte, con un indice cha va da 0 a (maxFizzBuzz-1)

    console.log("numero:", i + 1);
    // SCRIVO FIZZ
    if (((i + 1) % FizzDivisor) == 0) {
        // scrivo "Fizz" nella mia variabile tampone
        FizzBuzzElement = FizzString;
    }

    // SRIVO BUZZ
    if (((i + 1) % BuzzDivisor) == 0) {
        // scrivo "Buzz" nella variabile tampone, preservando un eventuale Fizz scritto prima
        FizzBuzzElement += BuzzString;
    }

    // SCRIVO NUMERO
    if (FizzBuzzElement == "") {
        // non ho scritto ne Fizz ne Buzz, allora scrivo il numero
        FizzBuzzElement = i + 1;
    }

    // console.log("FizzBuzzElement:", FizzBuzzElement);
    // copio l'elemento calcolato (Fizz, Buzz, FizzBuzz o numero) nell'array
    FizzBuzzArray[i] = FizzBuzzElement;
    // re-inizializzo la variabile prima di iniziare un nuovo ciclo
    FizzBuzzElement = "";

    console.log("FizzBuzzArray[", i, "] :", FizzBuzzArray[i]);
    console.log("");
} //for

// console.log(FizzBuzzArray);

// STATISTICA - analisi occorrenze in FizzBuzzArray
// (anzichè riscorrere di nuovo l'array, si poteva fare anche direttamente quando vado a valorizzare FizzBuzzElement,
// aggiungendo un "if" per distinguere tra caso Buzz e caso FizzBuzz)
for (var i = 0; i < FizzBuzzArray.length; i++) {
    if (FizzBuzzArray[i] == FizzString) {
        FizzCounter++;
    } else if ((FizzBuzzArray[i] == BuzzString)) {
        BuzzCounter++;
    } else if (FizzBuzzArray[i] == (FizzString + BuzzString)) {
        FizzBuzzCounter++;
    }
}
console.log("occorenze Fizz:", FizzCounter);
console.log("occorenze Buzz:", BuzzCounter);
console.log("occorenze FizzBuzz:", FizzBuzzCounter);