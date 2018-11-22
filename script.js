// choix du joueur
// choix de l'ia
// affichage du joueur
// affichage de l'ia
// comparaison des  choix
// affichage du résultat
// reset

// variables

var reset;



function shifumi() {

    var player;
    var random;
    var resultat;


// choix du joueur

// pierre = 1


    document.getElementById("pierre").addEventListener("click",
        function () {
            player = 1;
            hasard();
            compare();
            document.getElementById("perso").src = "img/pierre1.png"
            
        }
    );

    // feuille = 2

    document.getElementById("feuille").addEventListener("click",
        function () {
            player = 2;
            hasard();
            compare();
            document.getElementById("perso").src = "img/feuille2.png";
           
        }
    );

    // ciseaux = 3

    document.getElementById("ciseaux").addEventListener("click",
        function () {
            player = 3;
            hasard();
            compare();
            document.getElementById("perso").src = "img/ciseaux3.png";
            
        }
    );

    // choix de l'ia

    function hasard() {
        random = Math.floor(Math.random()*3);
        if (random == 1){
            ia = 0;
            document.getElementById("machine").src = "img/pierre1.png";
            } else if (random == 2) {
                ia = 1;
                document.getElementById("machine").src = "img/feuille2.png";
                } else {
                    ia = 2;
                    document.getElementById("machine").src = "img/ciseaux3.png";
                    }
    }

    // comparaison

    function compare() {
        if ( player == 1 && ia == 1){
            resultat = "perdu";
            myFunction ();
            changecolorred ();
            } else if (player == 1 && ia == 2 ){
                resultat = "gagner";
                myFunction ();
                changecolorgreen();
                } else if (player == 2 && ia == 0){
                    resultat = "gagner";
                    myFunction ();
                    changecolorgreen();
                    } else if (player == 2 && ia == 2 ){
                        resultat = "perdu";
                        myFunction ();
                        changecolorred ();
                        } else if (player == 3 && ia == 0){
                            resultat = "perdu";
                            myFunction ();
                            changecolorred();
                            } else if (player == 3 && ia == 1) {
                                resultat = "gagner";
                                myFunction ();
                                changecolorgreen();
                                } else {
                                    resultat = "égalité";
                                    myFunction ();
                                    document.getElementById("resultat").style.backgroundColor = "gray";
                                    }
    }

    // affichage du resultat

    function myFunction() {
        document.getElementById("resultat").innerHTML = resultat;
    }

    function changecolorred() {
        document.getElementById("resultat").style.backgroundColor = "red";
    }

    function changecolorgreen() {
        document.getElementById("resultat").style.backgroundColor = "green";
    }
}


shifumi()
