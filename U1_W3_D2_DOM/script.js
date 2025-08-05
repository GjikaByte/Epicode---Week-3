// DOM TRAVERSING & MANIPULATION
// Sfruttando il DOM possiamo alterare il contenuto della pagina gia' precedentemente creata
// Possiamo creare nuovi elementi, modificarli, eliminarli, aggiungere classi, ecc...
// Due fasi: 1) Selezione degli elementi
//           2) Manipolazione degli elementi

console.dir(document); // Stampa la struttura del DOM

//per ID
const thirdTitle = document.getElementById("third-title"); // Seleziona l'elemento con id "third-title" se trovato, null se non trovato
console.log(thirdTitle); // Stampa l'elemento selezionato
//per classe
const secondTitle = document.getElementsByClassName("item"); // Seleziona il primo elemento con class "item"
console.log(secondTitle); // Stampa l'elemento selezionato
const secondTitle2 = document.getElementsByClassName("item")[0]; // Seleziona il primo elemento con class "item"
console.log(secondTitle2); // Stampa l'elemento selezionato

// i metodi piu moderni non sono supportati da tutti i browser
for (let i = 0; i < secondTitle.length; i++) {
    console.log(secondTitle[i]); // Stampa tutti gli elementi con class "item"
}

// Metodi recenti per selezionare gli elementi
const firstTitle = document.querySelector("#item"); // Seleziona il primo elemento con class "item"
console.log(firstTitle); // Stampa l'elemento selezionato

const allItems = document.querySelectorAll(".item"); // Seleziona tutti gli elementi con class "item"
console.log(allItems); // Stampa tutti gli elementi selezionati