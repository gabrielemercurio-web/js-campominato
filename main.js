// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.


// generare 16 numeri tra 1 e 100 diversi uno dall'altro
var numeri_pc = mine_generator(1, 100); // la funzione restituisce l'array con le mine
console.log(numeri_pc);

// array dei numeri giocati dall'utente
var numeri_consentiti = [];
var giocata_vinta = 0;

// determino se l'utente inserisce un numero vincente o perdente
do {
    // chiedo all'utente di digitare un numero
    var numero_utente = parseInt(prompt('Digita un numero compreso tra 1 e 100!'));

    // verifico se rispetta le condizioni (1 >= numero_utente <= 100 e un numero non ancora digitato)
    if (is_valid(numero_utente) == true) {

        // verifico se l'utente ha beccato una mina
        if (is_mine(numero_utente, numeri_pc) == true) {
            // l'utente ha beccato una mina
            alert('Hai perso! Ritenta!');
        } else if (numeri_consentiti.includes(numero_utente) == false) {
            // verifico se l'utente ha digitato lo stesso numero più volte
            numeri_consentiti.push(numero_utente);
            giocata_vinta = giocata_vinta + 1;
        } else {
            alert('Hai già inserito questo numero. Digitane un altro!');
        }

    } else {
        alert('Hai digitato un valore non valido! Digita un numero compreso tra 1 e 100!');
    }

} while (numeri_consentiti.length != 84 && is_mine(numero_utente, numeri_pc) == false);

if (numeri_consentiti.length == 84) {
    alert('Complimenti, hai vinto!!');
} else {
    alert('Totale giocate: ' + giocata_vinta);
}

// funzione che vede se un numero è una mina
function is_mine(numero, mine) {
    var trovato = false;
    for (var i = 0; i < mine.length && trovato == false; i++) {
        if (mine[i] == numero) {
            trovato = true;
        }
    }
    return trovato;
}

// funzione che genera n numeri random per il pc
function mine_generator(min, max) {
    var mine = [];

    do {
        var numero_random = Math.floor(Math.random() * (max - min + 1)) + min;
        if(mine.includes(numero_random) == false) {
            mine.push(numero_random)
        }
    } while (mine.length < 16);

    // restituisco l'array con le 16 mine
    return mine;
}

// funzione per controllare che l'utente abbia inserito un numeto corretto
function is_valid(numero) {
    if (numero > 0 && numero <= 100 && isNaN(numero) == false) {
        return true;
    } else {
        return false;
    }
}