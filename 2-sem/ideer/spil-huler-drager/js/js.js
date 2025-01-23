/** 
 * Fil: js.js
 * Projekt: Huler og Drager - spilmesterens bog
 * Kan: vise de aktive monstre i spillet
 */

/** Hent monstre */
function hentMonster(){
    visMonstrene.innerHTML = Monstre[ Math.floor(Math.random()* Monstre.length) ]
}

/** Henter x antal monstre */
function hentMonstre(x) {
    for (let i = 0; i < x; i++){
        visMonstrene.innerHTML += "<br>" + Monstre[ Math.floor(Math.random()* Monstre.length) ] + "<br>"
    }
}

/** Monstre */
const Monstre = [
    "Loke",
    "Orm",
    "Helhest",
    "HalteFanden",
    "HelvedsHunden",
    "Trold",
    "Gnom",
    "Salamander",
    "Undine",
    "Sylfide",
    "Spøgelse",
    "Skelet",
    "Poltergeist",
    "Vinden hyler",
    "Ulv"
].sort()

/** Monsterliste */
function Monsterliste() { 

    for (let i = 0; i < Monstre.length; i++){
        monsterListe.innerHTML += "<li>" + Monstre[i] + "</li>" ;
    }
}

// alle monstre listes
Monsterliste()

// tilfældigt antal monstre
hentMonstre(Math.floor(Math.random()*7)) +1


