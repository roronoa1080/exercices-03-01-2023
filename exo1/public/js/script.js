// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

// function add(a, b){
//     let resultat = a + b;

//     console.log(`${a} + ${b} = ${resultat}`);
// };

// add(5, 2);


// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

// function soustraction(num, num2){
//     let resultat = num - num2;

//     console.log(`${num} - ${num2} = ${resultat}`);
// };

// soustraction(5, 2);



// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)


// function multiplication(number, number2){
//     let resultat = number * number2;

//     console.log(`${number} x ${number2} = ${resultat}`);
// };

// multiplication(5, 2);



// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

// function div(n1, n2){
//     let resultat = n1 / n2;

//     console.log(`${n1} : ${n2} = ${resultat}`);
// };

// div(15, 3);



// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

// function modulo(num1, num2){
//     let resultat = num1 % num2;

//     console.log(`${num1} % ${num2} = ${resultat}`);
// };

// modulo(14, 3);



// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

// function carre(num1){
//     let resultat = Math.sqrt(num1)

//     console.log(`V²${num1}= ${resultat}`);
// };

// carre(25);



// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

// function pow(number, number2){
//     let resultat = Math.pow(number, number2);

//     console.log(`${number} ² ${number2} = ${resultat}`);
// };

// pow(5, 2);



// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

// function capitalize(mot) {
//     console.log(mot.charAt(0).toUpperCase() + mot.substring(1).toLowerCase());
// };

// capitalize(`bonjouR`);

// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

// function calcul(nbr1, operator, nbr2) {
//     switch (operator) {
//         case "+":
//             console.log(nbr1 + nbr2);
//             break
//         case "-":
//             console.log(nbr1 - nbr2);
//             break
//         case "*":
//             console.log(nbr1 * nbr2);
//             break
//         case "/":
//             console.log(nbr1 / nbr2);
//             break
//     }
// }
// calcul(parseFloat(prompt("entrez un nb")), prompt('+ - / x'), parseFloat(prompt("entrez un nb")));