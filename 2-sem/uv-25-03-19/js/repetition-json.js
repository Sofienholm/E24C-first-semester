/**
 * fil: repetition-json.js
 * repetition: JSON formatet og web storage
 */

produkter = {
    name: "Amazing Hops",
    type: "pilsner",
    city: "New York",
    tags: ["Ale", "IPA", "ECO","Weissbier"]
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

// kan nu hentes frem og gemmes igen ...
console.log("--- test ---")
console.log( localStorage.getItem("gemStreng") )
  