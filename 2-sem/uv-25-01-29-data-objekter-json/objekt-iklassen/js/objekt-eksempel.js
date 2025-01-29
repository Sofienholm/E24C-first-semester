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
  billede: "brian.jpeg"
}

let person2 = {
  id: 24,
  forNavn: "Anne",
  efterNavn: "Pedersen",
  fra: "Vendsyssel",
  billede: "anne.jpeg",
  hilsen: function(){
    alert(this.forNavn + " siger hej med dig.")
  }
}

// skriv til DOM
resultat.innerHTML = `
    <article>
    <h2> Navn: ${person2.forNavn} ${person2.efterNavn} </h2>
    <figure>
        <!-- event bygges ind i billedet -->
        <img onclick="person2.hilsen()" src="billeder/${person2.billede}" alt="Foto: ${person2.forNavn} ${person2.efterNavn}">
        <figcaption> Foto: ${person2.forNavn} ${person2.efterNavn} </figcaption>
    </figure>
    </article>
`
//person2.hilsen()
