// 1) Generare il giusto numero di celle
// 2) Assegnare il nome del mese correlato nel titolo
// 3) Illuminare il giorno corrente
// 4) Rendere cliccabile una cella e visualizzare il bordo
// 5) Rendere la selezione univoca (rimuovere il precedente bordo e applicarlo alla nuova cella)
// 6) Modificare il meeting day contestualemente al click della celle

//

// Prendere il valore dell'orario e il testo del meeting dal form
// Salva il dato nella giusta posizione dell'array meetings
// Dobbiamo poter selezionare altri giorni e aggiungere meeting in altri giorni
// Se trovo gli apuntamenti in giorni successivi, devo poterli visualizzare
// La cella del giorno contenente il meeting deve essere evidenziata


// Funzione che restituisce il numero di giorni del mese corrente
const daysInThisMonth = function () {
    const now = new Date();

    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // Ottiene l'ultimo giorno del mese corrente
    const lastDateOfThisMonth = new Date(currentYear, currentMonth + 1, 0);
    const lastDayOfThisMonth = lastDateOfThisMonth.getDate();

    return lastDayOfThisMonth;
}

console.log(daysInThisMonth());

// Funzione che genera le celle dei giorni nel calendario
const createDays = function (daysToGenerate) {
    const calendar = document.getElementById('calendar');
    const now = new Date();

    for (let i = 1; i <= daysToGenerate; i++) {

        appointments.push([]);

        const dayCell = document.createElement('div');
        dayCell.className = 'day';

        const dayH3 = document.createElement('h3');
        dayH3.innerText = i; // Imposta il numero del giorno

        const today = now.getDate();

        // Evidenzia il giorno corrente
        if (today === i+1) {
            dayH3.classList.add('color-epic');
        }

        dayCell.addEventListener('click', function (e) {
            e.currentTarget.classList.add('selected');
            // Rimuove la classe 'selected' da tutte le altre celle
            const otherCells = document.querySelectorAll('.day');
            otherCells.forEach(cell => {
                if (cell !== e.currentTarget) {
                    cell.classList.remove('selected');
                }
            });
        });


        dayCell.appendChild(dayH3);
        calendar.appendChild(dayCell);
    }
}

const showAppointments = function (index) {
    const appointmentsList = document.getElementById('appointmentsList');
    const ul = document.getElementById('appointmentsList');
    ul.innerHTML = ''; // Pulisce la lista esistente

    const dayAppointments = appointments[index];
    if (dayAppointments && dayAppointments.length > 0) {
        dayAppointments.forEach(appointment => {
            const li = document.createElement('li');
            li.innerText = appointment;
            appointmentsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.innerText = 'Nessun appuntamento per questo giorno.';
        appointmentsList.appendChild(li);
    }
}

const applyDot = function (e) {
    const selectedCell = document.querySelector('.day.selected');
    const dot = document.createElement('span');
    dot.className = 'dot';

    selectedCell.appendChild(dot);
}


const saveMeeting = function (e) {

    const meetingTime = document.getElementById('newMeetingTime'),
    const meetingName = document.getElementById('newMeetingName');

    const meetingText = meetingTime.value + ' - ' + meetingName.value;

    if (dayNumberSpan.innerText !== "Click on a Day") {
        const dayIndex = parseInt(dayNumberSpan.innerText) - 1; // Converti il testo in numero e sottrai 1 per l'indice dell'array
        appointments[dayIndex].push(meetingText); // Aggiungi il meeting all'

        meetingTime.value = ''; // Pulisce il campo di input dell'orario
        meetingName.value = ''; // Pulisce il campo di input del nome del meeting
        
        // Applica il punto solo se è il primo appuntamento del giorno
        if (appointments[dayIndex].length === 1) {
            applyDot(); // Applica il punto alla cella selezionata
        }
        console.log(appointments);
        showAppointments(dayIndex); // Mostra gli appuntamenti per il giorno selezionato
    else
        alert("Seleziona un giorno per aggiungere un meeting.");
    }
}

// Funzione che stampa il nome del mese corrente
const printMonth = function () {
    const months = [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ];

    const now = new Date();
    const monthIndex = now.getMonth(); // numero da 0-11
    const monthName = months[monthIndex];

    console.log(`Mese corrente: ${monthName}`); 
}

printMonth();

//Punto di ingresso dell'applicazione
window.addEventListener("DOMContentLoaded", function() {
    // Entry point for your application logic
    // Example: display the number of days in the current month

    createDays(daysInThisMonth());
    printMonth();

    const form = this.document.getElementById('appointment-form');

    form.onsubmit = function (e) {
        e.preventDefault(); // Previene il comportamento di submit del form
        saveMeeting(e);
    };

    console.log("App loaded. Days in this month:", daysInThisMonth());
});
