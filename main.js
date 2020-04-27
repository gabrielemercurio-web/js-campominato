// 1 - Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// debugger;
function numeri_casuali_pc (min, max) {
    var random_generati_pc = [];
    for (var i = 0; i < 16; i++) {
        var genera_random = Math.floor(Math.random() * (max - min + 1) + min);
        random_generati_pc.push(genera_random);
    }
    return random_generati_pc;
}

var random_16_pc = numeri_casuali_pc(1, 100);
console.log('Il PC ha generato i seguenti numeri: ' + random_16_pc);

// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
do {
    var numero_utente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100.'))
    console.log('L\'utente ha scelto il numero ' + numero_utente);
} while (true);

// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).

// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50
