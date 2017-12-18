var n;   // num clienti
var m;   // num server
var c;   // matrice dei costi
var req; // matrice delle richieste
var cap = new Array(); // vettore delle capacità
var sol = new Array(n); // vettore soluzione con indici dei magazzini a cui è assegnato il client sol[j] c'è il magazzino a cui è assegnato il client j
var solbest; // vettore migliore soluzione trovata
var startTime, endTime, timeDiff; // tempi esecuzione
var zub = Number.MAX_VALUE;       // costo miglior soluzione trovata: la funzione di costo si chiama Z, ub è upper bound 
var zlbBest = Number.MAX_VALUE;   // best lower bound

var jInstance;    // istanza in input
var EPS = 0.001;
