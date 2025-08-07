// Seleziona gli elementi dal DOM
const mainBoard = document.getElementById("mainBoard");
const drawButton = document.getElementById("drawNumber");
const lastNumber = document.getElementById("lastNumber");
const playerBoardsContainer = document.getElementById("playerBoards");
const startButton = document.getElementById("startGame");
const numBoardsInput = document.getElementById("numBoards");

const TOTAL_NUMBERS = 90; // Numero totale di numeri nel gioco
let drawnNumbers = []; // Array per tenere traccia dei numeri estratti
let playerBoards = []; // Array per le cartelle dei giocatori

// Crea una cella del tabellone con il numero passato
const createCell = function (number) {
    const cell = document.createElement("div");
    cell.className = "cell";
    // Imposta il contenuto della cella con il numero passato
    cell.textContent = number;
    return cell;
}

// Crea il tabellone principale con tutti i numeri
const createMainBoard = function () {
    mainBoard.innerHTML = "";
    for (let i = 1; i <= TOTAL_NUMBERS; i++) {
        mainBoard.appendChild(createCell(i));
    }
}

// Genera un array di numeri unici casuali di lunghezza 'count'
const generateUniqueNumbers = function (count) {
    const numbers = [];
    while (numbers.length < count) {
        const num = Math.floor(Math.random() * TOTAL_NUMBERS) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

// Crea le cartelle dei giocatori
const createPlayerBoards = function (numBoards) {
    playerBoardsContainer.innerHTML = "";
    playerBoards = [];

    for (let i = 0; i < numBoards; i++) {
        const board = document.createElement("div");
        board.className = "player-board board";
        const numbers = generateUniqueNumbers(24);
        const cells = [];

        numbers.forEach((num) => {
            const cell = createCell(num);
            board.appendChild(cell);
            cells.push(cell);
        });

        playerBoards.push({ numbers, cells });
        playerBoardsContainer.appendChild(board);
    }
}

// Estrae un nuovo numero casuale non ancora estratto
const drawNewNumber = function () {
    if (drawnNumbers.length >= TOTAL_NUMBERS) {
        alert("Tutti i numeri sono stati estratti!");
        return;
    }

    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * TOTAL_NUMBERS) + 1;
    } while (drawnNumbers.includes(newNumber));

    drawnNumbers.push(newNumber);
    lastNumber.textContent = newNumber;

    // Evidenzia il numero estratto sul tabellone principale
    [...mainBoard.children].forEach(cell => {
        if (parseInt(cell.textContent) === newNumber) {
            cell.classList.add("drawn");
        }
    });

    // Evidenzia il numero estratto sulle cartelle dei giocatori
    playerBoards.forEach((board) => {
        board.cells.forEach((cell) => {
            if (parseInt(cell.textContent) === newNumber) {
                cell.classList.add("marked");
            }
        });
    });
}

// Gestisce il click sul pulsante di inizio partita
startButton.addEventListener("click", () => {
    const numBoards = parseInt(numBoardsInput.value);
    if (isNaN(numBoards) || numBoards < 1 || numBoards > 10) {
        alert("Inserisci un numero valido di cartelle (1-10).");
        return;
    }

    drawnNumbers = [];
    lastNumber.textContent = "-";
    createMainBoard();
    createPlayerBoards(numBoards);
});

// Gestisce il click sul pulsante per estrarre un nuovo numero
drawButton.addEventListener("click", drawNewNumber);
