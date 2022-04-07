//Media Aritmetica\\
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
