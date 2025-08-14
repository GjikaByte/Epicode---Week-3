//Arrow Functions

function myfunc() {
    console.log("myFunc1");
};

const myfunc2 = function() {
    console.log("myFunc2");
}

myfunc();


const myfuncArrow = () => {
    console.log("myfuncArrow");
}

// il vantaggio e`una sola riga

const myfuncArrow2 = () => console.log("myfuncArrow");

// che differenza avere le graffe o meno?
// nel return (implicito) non serve il return

const sumArrow = (a, b) => {
    return a + b;
}

console.log(sumArrow(2, 3));

const sumArrow2 = (a, b) => a + b;

// per wuanto riguarda la sintassi per i paramentri
// se non sono nessuno serve le parentesi
// se sono uno solo non serve le parentesi
// se sono due o piu` serve le parentesi

// Spread operator

const pet1 = {
    name: "Fido",
    type: "dog",
    age: 5
}

const pet2 = {
    name: "Whiskers",
    type: "cat",
    age: 3
}

const petsy = Object.assign({}, pet1, { name: "Whiskers", type: "cat", age: 3 });

console.log(petsy);

// Spread operator in ES6
const pets = [pet1, pet2];
console.log(pets);

const pets2 = [...pets, { name: "Goldie", type: "fish", age: 1 }];
console.log(pets2);

const pet3 = { 
    ...structuredClone(pet1), // stesse referenze di animal, copia profondamente
    color: "brown" };
console.log(pet3);

const arrOfNames = ["Fido", "Whiskers", "Goldie"];
const arrOfNamesCopy = [...arrOfNames];
console.log(arrOfNamesCopy);

const dynamicSum = function(num1, num2, ...rest) {
   let sum = 0
   for (let i = 0; i < rest.length; i++) {
       sum += rest[i];
   }
   console.log(sum);
   return sum;
}

//Destructuring - objects

const professor = {
    name: "John",
    age: 40,
    subject: "Mathematics",
    locationRef: {
        city: "Boston",
        country: "USA"
    }
};

const { name: firstName, age, subject, locationRef: { city, country } } = professor;

console.log(firstName); // John
console.log(age); // 40
console.log(subject); // Mathematics
console.log(city); // New York
console.log(country); // USA

// Destructuring - arrays

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
const [firstNum, secondNum, ...remaining] = numbers;

//ForEach loop
const numbersArray = [1, 2, 3, 4, 5];
numbersArray.forEach((num, index) => { console.log(`Index: ${index}, Value: ${num}`);});

numbersArray.forEach(num => { console.log(num * 2); });

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});

// Map method
// Funzione che ritorna un nuovo array basato su una funzione
const numbersMap = [1, 2, 3, 4, 5];
const doubledMap = numbersMap.map(num => num * 2);
console.log(doubledMap);

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const namesMap = people.map(person => person.name);
console.log(namesMap);

// Filter method
// Funzione che ritorna True o False
const numbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log(evenNumbers);

const adults = people.filter(person => person.age >= 30);
console.log(adults);

const numbersFilter2 = [1, 2, 3, 4, 5];
const oddNumbers = numbersFilter2.filter(num => num % 2 !== 0);

// Reduce method
// Funzione che ritorna un singolo valore, ciclare array e ridurre a un singolo valore
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
const product = numbersReduce.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product);

const reducedPeople = people.reduce((accumulator, person) => {
    console.log(`accumulator ${person.name}`);
    accumulator[person.name] = person.age;
    return accumulator;
}, {});
console.log(reducedPeople);

//currentObject currentValue
const totalAge = people.reduce((accumulator, person) => accumulator + person.age, 0);
console.log(totalAge);