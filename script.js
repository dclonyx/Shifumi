
// choix de l'image par clic
var player;
var ia;
var pierre ;
var feuille  ;
var ciseaux  ;


document.getElementById("pierre").addEventListener("click",
    function () {
        player = 1;
        console.log(player);
});
document.getElementById("feuille").addEventListener("click", 
    function () {
        player = 2;
        console.log(player);
});
document.getElementById("ciseaux").addEventListener("click",
    function  () {
        player = 3;
        console.log(player);
});


console.log(player);

// choix random de l'image pour l'IA

random = Math.floor(Math.random()*3);

if (random == 1){
    ia = 0;
} else if (random == 2) {
    ia = 1;
} else {
    ia = 2;
}
 console.log(ia);

// comparaison des 2 choix

function compare() {
    if ( player == 1 && ia == 1){
        resultat = "perdu";
        console.log(resultat);
        } else if (player == 1 && ia == 2 ){
            resultat = "gagné";
            console.log(resultat);
            } else if (player == 2 && ia == 0){
                resultat = "gagné";
                console.log(resultat);
                } else if (player == 2 && ia == 2 ){
                    resultat = "perdu";
                    console.log(resultat);
                    } else if (player == 3 && ia == 0){
                        resultat = "perdu";
                        console.log(resultat);
                        } else {
                        resultat = "égalité";
                        console.log(resultat);
                        }
}
// affichage du resultat

compare()

// reset

// function compare (choixjoueur, choixia) {

    
// }
