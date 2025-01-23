/**
 * Fil: hotel-rengoering.js
 * Formål: din personlige digitale servicemedarbejderassistent.
 * Næste version: serviceassistenten skal kunne klikke ok, når der fx er støvsuget
 */

/** sprøger rengøringsassistenten: er der rent? */
function rent( tjek ){
    if (tjek === true){
        instruks.innerHTML = `
        <h2>Udmærket, du fortsætter bare ...</h2>
        <div class="whitespace"></div>
        <label>Gå til næste rum!</label>
        <div class="whitespace"></div>
        <button  onclick="naesteRum()">OK</button>`
    
        erDetRent.style.visibility = "hidden";
        instruks.style.visibility = "visible";
    }
    else {
        instruks.innerHTML = `
            <h2>Der skal altså gøres rent i værelset</h2>
            <div class="whitespace"></div>
            <p>Gør rummet rent nu!</p>
            <div class="whitespace"></div>
            <ol>
                <li>Støvsug</li>
                <li>Skift sengetøj</li>
                <li>Gør badeværelset rent</li>
            </ol>
            <div class="whitespace"></div>
            <button id="ja" onclick="naesteRum()">Klik her når der er rent.</button>        
        `
        
        
        
        erDetRent.style.visibility = "hidden";
        instruks.style.visibility = "visible";
    }
}

/** rengøringsassistenten går til det næste rum */
function naesteRum(){
    console.log("naesterum ......")
    erDetRent.style.visibility = "visible";
    instruks.style.visibility = "hidden";
}