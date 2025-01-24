/** 
 * Fil: js.js
 * Formål: genopfriskning af JavaScriptets byggeklodser
 * Dato: 20250124
 * Version: 1.0
 */
console.log('Hej jeg er dit javascript!')

// variabler

// tal eller numeriske værdier
let a = 23; // anbefales nu - og kan ændres af koden
var b = 123; // gammeldags  - og kan ændres af koden
const c = 117; // konstant og kan ikke ændres
a = 119;
let d = a + c;

// booleans: true/false
let f = true
let g = false

// console.log(d); // Js kan regne.

// strenge ~ "tekst" 
let anden = "Anders And"
let andensAdressse = "Paradisæblevej 123"
console.log("Her bor \n" + anden + " og han bor på: " + andensAdressse) 
// her konkatinerer klister vi strenge sammen med +
// \n laver en ny linje i konsollen)

/** Sådan skriver du til html: "HTML injektion" */
document.getElementById("resultat").innerHTML = "<h2>" + anden + "</h2>"
document.getElementById("resultat").innerHTML += "<p>" + andensAdressse + "</p>"
// += lægger til noget der er der i forvejen

// HTML injektion - flere linjer
let e = `
    <h1> Hej Anders And </h1>
    <p> Vi er </p>
    <p> Kylle, Pylle og Rylle </p>
`
resultat.innerHTML += e // kort notationsform: skriv id'en

/** Lister: arrays ... */
let koeleskab = [
    "Leverpostej",
    "Confit de Canard",
    "Kalkun",
    "Budding"
];

console.log(koeleskab[2]) // enkelte ting fra listen hentes sådan

/** Loop
 * for: definerer et loop
 * i++: i = i+1
 * Nu skal vi se hvad Anders And har i køleskabet
 */
for (let i = 0; i < koeleskab.length; i++){
    //console.log(koeleskab[i])
    seVarer.innerHTML += koeleskab[i] + "<br>"
}

/** funktion = en serie af kommandoer */
function farver( farve, kontrast ) {
    seVarer.style.fontFamily = "'Courier New', Courier, monospace"
    seVarer.style.fontSize = "2rem"
    seVarer.style.backgroundColor = farve
    seVarer.style.color = kontrast

    resultat.style.fontFamily = "fantasy"
}
// farver( "#246d13" )






