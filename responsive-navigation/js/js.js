/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!')

/* JavaScriptet fra W3 Herunder */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {

    console.log('Der klikkes på burgeren nu. \n\n');

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* 
    NB: Når du kopierer JavaScript fra W3 så vil funktionen ofte hedde myFunction(). Og det er ok når der kun er en funktion. Hvis der er flere, så vil kun den sidste virke. Så husk at omdøbe funktionens navn til noget mere passende.
 */
