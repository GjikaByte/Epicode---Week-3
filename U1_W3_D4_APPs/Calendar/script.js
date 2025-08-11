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


// script.js

// Storage for meetings: array of arrays (one per day)
const appointments = [];

// Elements
const calendarEl = () => document.getElementById('calendar');
const monthTitleEl = () => document.getElementById('monthTitle');
const dayNumberSpan = () => document.getElementById('dayNumberSpan');
const appointmentsList = () => document.getElementById('appointmentsList');

// Helpers
const monthNames = [
  'Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
  'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'
];

function daysInThisMonth(date = new Date()){
  const y = date.getFullYear();
  const m = date.getMonth();
  return new Date(y, m + 1, 0).getDate();
}

function firstWeekdayIndex(date = new Date()){
  // Return 0..6 where 0 = Monday, to align with grid headings
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const jsDay = first.getDay(); // 0=Sun..6=Sat
  return (jsDay + 6) % 7;
}

function printMonth(){
  const now = new Date();
  monthTitleEl().textContent = monthNames[now.getMonth()];
}

// Create the grid of days
function createDays(){
  const grid = calendarEl();
  grid.innerHTML = '';

  const now = new Date();
  const total = daysInThisMonth(now);
  const offset = firstWeekdayIndex(now);

  // Fill offset cells (previous-month blanks)
  for(let b=0; b<offset; b++){
    const blank = document.createElement('div');
    blank.className = 'day';
    blank.style.visibility = 'hidden';
    grid.appendChild(blank);
  }

  for(let i = 1; i <= total; i++){
    appointments.push([]); // init storage

    const cell = document.createElement('div');
    cell.className = 'day';
    cell.dataset.day = String(i);

    const h3 = document.createElement('h3');
    h3.textContent = i;

    // highlight today
    if(i === now.getDate()){
      h3.classList.add('color-epic');
    }

    // click handler
    cell.addEventListener('click', () => {
      // unique selection
      document.querySelectorAll('.day.selected').forEach(d => d.classList.remove('selected'));
      cell.classList.add('selected');

      // update selected day label
      dayNumberSpan().textContent = i;

      // show today's appointments
      showAppointments(i - 1);
    });

    cell.appendChild(h3);
    grid.appendChild(cell);
  }
}

// Show appointment list for a given day index
function showAppointments(index){
  const ul = appointmentsList();
  ul.innerHTML = '';

  const items = appointments[index] || [];
  if(items.length === 0){
    const li = document.createElement('li');
    li.textContent = 'Nessun appuntamento per questo giorno.';
    ul.appendChild(li);
    return;
  }

  items.forEach(txt => {
    const li = document.createElement('li');
    li.textContent = txt;
    ul.appendChild(li);
  });
}

// Apply a dot to the selected cell (only one dot)
function applyDot(){
  const selected = document.querySelector('.day.selected');
  if(!selected) return;

  // remove older dot if any
  const existing = selected.querySelector('.dot');
  if(!existing){
    const dot = document.createElement('span');
    dot.className = 'dot';
    selected.appendChild(dot);
  }
}

function saveMeeting(){
  const timeInput = document.getElementById('newMeetingTime');
  const nameInput = document.getElementById('newMeetingName');

  const selectedText = dayNumberSpan().textContent;
  if(selectedText === 'Click on a Day'){
    alert('Seleziona un giorno per aggiungere un meeting.');
    return;
  }

  const dayIndex = parseInt(selectedText, 10) - 1;
  const meetingText = `${timeInput.value} - ${nameInput.value}`.trim();

  if(!timeInput.value || !nameInput.value) return;

  appointments[dayIndex].push(meetingText);

  // Visual feedback
  applyDot();
  showAppointments(dayIndex);

  // reset form
  timeInput.value = '';
  nameInput.value = '';
}

// Entry point
window.addEventListener('DOMContentLoaded', () => {
  printMonth();
  createDays();

  // form submit
  const form = document.getElementById('appointment-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveMeeting();
  });

  // optional: select today by default
  const todayCell = [...document.querySelectorAll('.day')].find(
    d => d.style.visibility !== 'hidden' && Number(d.dataset.day) === new Date().getDate()
  );
  if(todayCell){
    todayCell.click();
  }
});