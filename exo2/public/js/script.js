// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)


// function reverseNumber() {
    
//     console.log(+prompt("Enter a value").split("").reverse().join(""));
// };

// reverseNumber();


// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"


// function divPar2(num) {
//     switch (num %2 == 0) {
//         case  true:
//             console.log(`Le num ${num} est divisible par 2 x:2 = z`);
//             break;
    
//         default:
//             console.log("Ce nombre n'est pas divisible par 2");
//             break;
//     }
// }

// divPar2(6);




// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

function login() {
    while (true) {
        let motDePass = prompt(`Entrez votre mot de passe`);
        if (motDePass === `mdp`) {
            alert(`C'est exactement ça`)
        }else{
            prompt(`Entrez votre mot de passe  SSSVVVPPP`)
        }
    }
};

login();