/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log("Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().");


// Dividendo i passaggi

function concatStrings(str1, str2) {
    const result = str1.slice(0, 2) + str2.slice(-3);
    console.log(result.toUpperCase());
    return result.toUpperCase();
}

// Unendo i passaggi in un'unica funzione

function concatSt (st1, st2) {
  console.log((st1.slice(0,2)+st2.slice(-3)).toUpperCase());
  return (st1.slice(0,2)+st2.slice(-3)).toUpperCase();

}

// Usando arrow function

const concatString = (str1, str2) => {
  console.log((str1.slice(0, 2) + str2.slice(-3)).toUpperCase());
  return (str1.slice(0, 2) + str2.slice(-3)).toUpperCase();
}

concatString("Ciao", "Mondo"); // Output: CINDO
concatSt("Ciao", "Mondo"); // Output: CINDO
concatString("Ciao", "Mondo"); // Output: CINDO

console.log("---------------------------------------------------");


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).");

function generateRandomArray() {
  let randArray = [];
  for (let i = 0; i < 10; i++) {
    randArray.push(Math.floor(Math.random() * 101));
  }
  return randArray;
}

console.log(generateRandomArray()); // Output: Un array di 10 numeri casuali tra 0 e 100

console.log("---------------------------------------------------");


/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

console.log("Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici");

arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = arrayNumeri =>  arrayNumeri.filter(num => num % 2 === 0);

console.log(evenNumbers(arrayNumeri)); // Output: [2, 4, 6, 8, 10]

console.log("----------------------------------------------------");

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("Scrivi una funzione per sommare i numeri contenuti in un array");

arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arraySumFor = 0;
const arraySumForEach = () => arrayNumeri.forEach(num => arraySumFor += num);
arraySumForEach();
console.log(arraySumFor); // Output: 55

console.log("-----------------------------------------------------");

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("Scrivi una funzione per sommare i numeri contenuti in un array");

const arraySum = arrayNumeri => arrayNumeri.reduce((accumulator,elem) => accumulator+elem,0 );
 console.log(arraySum(arrayNumeri)); //Output 55

console.log("-----------------------------------------------------");

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log("Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n");

n=10

const arrayPiuN = (array, n) => array.map(num => num + n)

console.log(arrayPiuN(arrayNumeri, n)); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log("------------------------------------------------------");

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza");

ArrayStr =  ["EPICODE", "is", "great"];

const arrayLen = arr => arr.map(st => st.length);

console.log(arrayLen(ArrayStr));


console.log("-------------------------------------------------------");


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log("Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.");

disparies = [];
function array100() {
  for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
      disparies.push(i);
    }
  }
  return disparies;
}

console.log(array100());

console.log("-------------------------------------------------------");

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("Scrivi una funzione per trovare il film più vecchio nell'array fornito.");

function findOldestMovie(movies) {
  let OldestMovie = movies[0];
  movies.forEach(movie => {
    if (parseInt(movie.Year) < parseInt(OldestMovie.Year)) {
      OldestMovie = movie;
    }
  });
  return OldestMovie;
}

const OldestMovie = findOldestMovie(movies);

console.log(OldestMovie);

console.log("-------------------------------------------------------");

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.");

arrayNumFilm = () => movies.reduce((count) => count + 1, 0);

console.log(arrayNumFilm()); // Output: 14

console.log("--------------------------------------------------------");


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.");

const movieTitles = movies => movies.map(movies => movies.Title);

console.log(movieTitles(movies)); // Output: Un array con i titoli dei film

console.log("---------------------------------------------------------");

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log("Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.");
movieRecent = movies => movies.filter(movie => parseInt(movie.Year) > 2000);

console.log(movieRecent(movies));

console.log("---------------------------------------------------------");


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log("Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.");

movieYearSum = movies => movies.reduce((accumulator, movie) => accumulator + parseInt(movie.Year), 0);

console.log(movieYearSum(movies)); // Output: La somma degli anni dei film

console.log("---------------------------------------------------------");

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

console.log("Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).");

function findMovieById(imdbID) {
  return movies.find(movie => movie.imdbID === imdbID);
}
console.log(findMovieById('tt0120737')); // Output: Il film con l'imdbID specificato

console.log("---------------------------------------------------------");

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

console.log("Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.");

function findFirstMovieIndexByYear(year) {
  return movies.findIndex(movie => movie.Year === year);
}
console.log(findFirstMovieIndexByYear('1963')); // Output: L'indice del primo film uscito nel 1963

console.log("---------------------------------------------------------");