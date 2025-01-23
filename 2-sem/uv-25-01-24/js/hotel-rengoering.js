/**
 * Fil: hotel-rengoering.js
 * Formål: din personlige digitale servicemedarbejderassistent.
 */

/** sprøger rengøringsassistenten: er der rent? */
function rent( tjek ){
    if (tjek === true){
        instruks.innerHTML = `
        <h2>Udmærket, du fortsætter bare ...</h2>
        <label>Gå til næste rum</label>
        <br>
        <button  onclick="naesteRum()">OK</button>`
    
        erDetRent.style.visibility = "hidden";
        instruks.style.visibility = "visible";
    }
    else {
        instruks.innerHTML = `
            <h2>Der skal altså gøres rent her</h2>
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