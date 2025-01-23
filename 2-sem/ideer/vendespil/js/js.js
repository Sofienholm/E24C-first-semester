"use strict";

/** REGNESPILLET */

/* test */
console.log("JavaScriptet er aktivt.");

/* skriv */
document.getElementById("resultat");

/* vis tallene fra 1 .. 9 */
for (let i = 0; i < 9; i++){
    /* skriv kortene ind i DOM'en */
    resultat.innerHTML += `
        <div class="talKort">
            ${i + 1}
        </div>
    `;
}

/* selector alle .talkort */
let buttonClose = document.querySelectorAll('.talKort')

/* looper gennem talkortene og sletter "denne" dvs. "this" */
for(let btns of buttonClose){
  btns.addEventListener('click', function () {
    this.style.display = 'none';
  })
}

/** Kast terningerne, selvkørende funktion */
(function alea(){
    console.log("terningerne er kastede ...");
    document.getElementById("terninger").innerHTML += Math.floor((Math.random() * 5)) + 1;
    document.getElementById("terninger").innerHTML += Math.floor((Math.random() * 5)) + 1;
    // se @uri: https://www.w3schools.com/jsref/jsref_random.asp
})();

// lav en knap der kaster én terning

// lav en knap der kaster 

// lav en funktion der tjekker om valg af tal er korrekt