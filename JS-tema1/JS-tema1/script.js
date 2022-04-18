//Media Aritmetica\\ 07.04
var mathGrade = 10;
var romanianGrade = 9.75;
var biologyGrade = 8.8;

var mediaAritmetica = (mathGrade + romanianGrade + biologyGrade) / 3;
console.log(mediaAritmetica);

var biologyGradeContestatie = 9.2;
var mediaAritmeticaContestatie =
  (mathGrade + romanianGrade + biologyGradeContestatie) / 3;
console.log(mediaAritmeticaContestatie);

if (mathGrade === 10 && mediaAritmetica > 9.5) {
  console.log("Am luat notele pe care mi le-am dorit!");
}

//Operatii Matematice\\
// 1 \\
var a = 2;
var b = 3;
var c = 4;
var d = 5;

var rezultat = a + b * c - d;
console.log(rezultat);

// 2 \\

var valori2 = ["4", "2", "6", "3"];
var rezultat2 = 4 * (2 + 6 / 3);
console.log(rezultat2);

// 3 \\

var valori3 = ["2", "3", "2^5"];
var rezultat3 = 2 * 3 ** 2 + 2 ** 5;
console.log(rezultat3);

// 4 \\

var valori4 = ["5", "3", "2"];
var rezultat4 = [5 * (3 + 2 / 2) + 3];
console.log(rezultat4);

// TEMA 12.04//

// 1.//

let number1 = 3;
let number2 = -10;
let number3 = 2;

//TODO Folosind "if", afiseaza in consola semnul sumei acestor 3 numere.
//Ex: daca suma numerelor este -2 se va afisa "-", daca suma numerelor este 6 se va afisa "+"

let suma = number1 + number2 + number3;
if (suma > 0) {
  console.log("+");
} else {
  console.log("-");
}

// 2.//

let iterateFrom = 0;
let iterateTill = 15;

//TODO Folosind "for" iterati de la "iterateFrom" pana la "iterateTill", pentru fiecare iteratie
//afiseaza numarul si paritatea acestuia
//Ex:
// 1 - impar
// 2 - par
// 3 - impar
// ...

for (let iterateFrom = 0; iterateFrom < 16; iterateFrom++) {
  if (iterateFrom === 0) {
    console.log(iterateFrom + " - par");
  } else if (iterateFrom % 2 === 0) {
    console.log(iterateFrom + " - par");
  } else {
    console.log(iterateFrom + " - impar");
  }
}

// 3. //

const logArray = ["unu", "doi", "trei", "patru"];
logArray[0] = "unu";
logArray[1] = "doi";
logArray[2] = "trei";
logArray[3] = "patru";

//Folosind o structura repetitiva afiseaza elementele acestui array in consola
logArray.forEach((element) => console.log(element));

// 4. //
const sumArray = [152, 235, 325, 945, 25];
//Folosind o structura repetitiva afiseaza in consola suma numerelor din acest array

const initialValue = 0;
const sumInitial = sumArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumInitial);

// 5. -de facut la sedinta urmatoare //
let devSalaryIncreaseProcents = 20;
let qaSalaryIncreaseProcents = 15;

let objectToIterate = {
  name: "John Doe",
  position: "Manager",
  workers: [
    {
      name: "Lisa",
      position: "DEV",
      salary: 500,
    },
    {
      name: "Bryan",
      position: "QA",
      salary: 350,
    },
    {
      name: "Mark",
      position: "DEV",
      salary: 640,
    },
    {
      name: "Rebecca",
      postion: "QA",
      salary: 700,
    },
  ],
};

//Folosind o structura repetitiva mareste salariu fiecarui angajat din obiectul de mai sus cu procentul aferent
//pentru angajatii care au position: "DEV", mareste cu devSalaryIncreaseProcents
//pentru angajatii care au position: "QA", mareste cu qaSalaryIncreaseProcents
//Creaza un obiect nou exact cu acceasi structura insa array-ul workers sa fie modificat conform conditiilor de mai sus
