/**
 * fil: repetition-json.js
 * repetition: JSON formatet og web storage
 */

let produkter = {
    name: "Amazing Hops",
    type: "pilsner",
    city: "New York",
    tags: ["Ale", "IPA", "ECO","Weissbier", "Nisseøl"]
  }
  
  //result.innerHTML = person.tags[0]
  
  function testBeer(tag) {

    // sådan virker en switch betinget sætning:
    switch (tag) {
      case "Ale":
        result.innerHTML = "Beskrivelse af pilsneren ..."
        // indsæt evt. billeder mv. herfra med +
        break
      case "IPA":
        result.innerHTML = "Beskrivelse af IPA'en ..."
        // indsæt evt. billeder mv. herfra med +
        break

      case "Pilsner":
         result.innerHTML = "Denne fantastiske pilsner er lavet af drømme ..."
         // indsæt evt. billeder mv. herfra med +
         break
         
      // etc. etc. etc.
    }
  }
  
testBeer( produkter.tags[1] )
  
/** JSON manipulation */

// 1) objektet kan ikke gemmes før det gøres til en streng
let tilStreng = JSON.stringify( produkter )
vis.innerHTML = tilStreng // demo: sådan ser datastrengen ud

// Web storage: localStorage gemmer i browseren
let gemStreng = localStorage.setItem("gemStreng", tilStreng)

 let hentData = localStorage.getItem("gemStreng")
 console.log("--- henter data ---")
 console.log(hentData)

 visGemt.innerHTML = hentData

 // vi laver strengen om til JSON så vi kan bruge det i scriptet
 lavOmTilJSON = JSON.parse(hentData)
 // noget bedre ...
 console.log("--- nu som JSON ---")
 console.log(lavOmTilJSON)

// vi får en funktion til at lave velformatteret HTML til siden
function lavNogetHTML( detGemte ){
  return visObjektet.innerHTML = `
    <article class="visObjekt">
      <h2> ${detGemte.name} </h2>
      <p> 
        Ingredienser: ${detGemte.tags[0]}
      </p>
    </article>
  `
}

lavNogetHTML( lavOmTilJSON ) // funktionen fyres af

/** 
 * Vi sender JSON-objektet ind i funktionen
 * ${  } kan hente data og variabler ind i backticks
 *
 * Nu kan du:
 * - lave JSON data
 * - forvandle JSON til en streng
 * - gemme strengen i hukommelsen
 * - hente strengen frem igen fra hukommelsen
 * - forvandle den hentede streng til JSON igen
 */

// Bonustip: hva så med alle ingredienserne, ligner det ikke et array?
// Jowda:

function nuMedLoop( jsonHer ){
  console.log("nuMedLoop() kører")
  // vi klipper lige <article> i stumper
  let medTags = `
    <article class="visObjekt">
      <h2> ${jsonHer.name} </h2>
      <ul>
  `
  // så looper vi ingredienserne ud i en nydelig liste
  // <ul> begynder ovenover.
  for (i=0; i< jsonHer.tags.length; i++){
    medTags += "<li>" + jsonHer.tags[i] + "</li>"
  }
  // og så lukker vi listen og article på en pæn måde:
  medTags += `
    </ul> <!-- listen lukkes -->
    </article> <!-- containeren lukkes -->
  `
  return tagLst.innerHTML = medTags
}

// vi kalder på funktionen:
nuMedLoop( lavOmTilJSON )

