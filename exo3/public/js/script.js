// Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des n premiers nombres naturels.
// Par exemple, si on appelle la fonction avec 5 en entrée, elle devra renvoyer 15 (1 + 2 + 3 + 4 + 5).


// function nbrNat(nombre) {
//     let somme = 0;
//     for (let i = 0; i <= nombre; i++) {
//         somme += i;
        
//     }
//     return somme;
// }
// console.log(nbrNat(5));



// Écrivez une fonction qui prend un nombre en entrée et qui renvoie vrai si ce nombre est un nombre premier, et faux sinon.
// Un nombre premier est un nombre qui n'est divisible que par 1 et par lui-même.
// Par exemple, 2 est un nombre premier, alors que 4 ne l'est pas (il est divisible par 2).


// function nbrPrem(nbr1) {
//     nbr1 = prompt(`entrez un nbr`)                    MAUVAIS!!!
//     if (nbr1%nbr1 == 0 && nbr1 / 1 == 1) {
//         console.log(`LOURD!`);
//     } else {
//         console.log(`Pas entier`);
//     }
// };

// nbrPrem();



// function nbPremier(nb) {
//     for (let i = 2; i < nb; i++)
//         if (nb % i === 0){
//             return false;
//         }; 
//     return nb > 1;
// };
// let nb = parseInt(prompt(`entrez un nb`));
// let res = nbPremier(nb);
// console.log(`${nb} est ${res}`);




// Écrivez une fonction qui prend un tableau de chaînes de caractères en entrée et qui renvoie une nouvelle liste contenant les chaînes de caractères triées par ordre alphabétique.
// Par exemple, si on appelle la fonction avec ["girafe", "chien", "chat", "oiseau"] en entrée, elle devra renvoyer ["chat", "chien", "girafe", "oiseau"].



// let array = []
// function sortAlpha() {
//     for (let index = 0; index < 5; index++) {
//         let askMot = prompt(`Entrez un mot :`)
//         array.push(askMot)
//     }
//     array.sort()
//     console.log(array);
// }
// sortAlpha();




// Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des chiffres de ce nombre.
// Par exemple, si on appelle la fonction avec 123 en entrée, elle devra renvoyer 6 (1 + 2 + 3).


// function number(a) {
//     let somme = 0
//     let resultat = ``
//     a = a.toString()
//     for (let index = 0; index < a.length; index++) {
//         resultat += `${a[index]} +`
//         somme += parseInt(a[index])
//     }console.log(resultat);
//     return somme;
// }
// console.log(number(245));



// Écrivez une fonction qui prend un tableau de nombres en entrée et qui renvoie vrai si le tableau est un palindrome (c'est-à-dire si le tableau est le même lorsqu'on le lit de droite à gauche ou de gauche à droite), et faux sinon.
// Par exemple, si on appelle la fonction avec [1, 2, 3, 2, 1] en entrée, elle devra renvoyer vrai. Si on l'appelle avec [1, 2, 3, 4, 5] en entrée, elle devra renvoyer faux


// function palindrome(tab) {  
    
//     // on boucle de i jusque à la moitié du tableau si le tab est de taille 4 on ne va
//     // que jusque à 2
//     for (let i = 0; i < tab.length / 2; i++) {  
//         // on valide si l'élément à la position i est identique à celui de la position
//         //opposé    
//         if (tab[i] !== tab[tab.length - 1 - i]) {  //si len = 5 et i = 1 alors ça vaut 3
//             alert( `ceci n'est pas un palindrome`);
//             //si ce n'est pas le cas on quitte la fonction avec le return 
//             return false ;
//         }  
//     }  
//     alert( `c'est un palindrome`);  
//     return true;
// }

// palindrome([2,4,4,2])  //retourn vrai
// palindrome([2,4,2])    //retourn vrai
// palindrome([2,4,5,2])  //retourn faux