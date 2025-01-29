/**
 * Fil: objekt-eksempel.js
 * Formål: demo af objekt
 */

// objekter
let person = {
	id: 23,
    forNavn: "Brian",
    efterNavn: "Jensen",
    fra: "Sønderjylland",
    billede: "brian.png",
    hilsen: function(){
        alert("Hej")
    }
}

let person2 = {
    id: 24,
    forNavn: "Anne",
    efterNavn: "Pedersen",
    fra: "Vendsyssel",
    billede: "anne.jpeg",
    hilsen: function(){
        alert("Hej")
    }
}

// skriv til DOM via funktion
function skrivTilDOM( hvem ){
    resultat.innerHTML += `
    <article>
       <h2> Navn: ${hvem.forNavn} ${hvem.efterNavn} </h2>
       <figure>
           <!-- event bygges ind i billedet -->
           <img onclick="" src="billeder/${hvem.billede}" alt="Foto: ${hvem.forNavn} ${hvem.efterNavn}">
           <figcaption> 
              Foto: ${hvem.forNavn} ${hvem.efterNavn} 
           </figcaption>
        </figure>
    </article>
`
}

// funktionen kaldes (kræver ensartede objekter)
skrivTilDOM(person)
skrivTilDOM(person2)
