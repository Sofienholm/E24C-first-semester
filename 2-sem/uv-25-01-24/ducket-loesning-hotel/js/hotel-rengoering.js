/**
 * Fil: hotel-rengoering.js
 * Formål: din personlige digitale servicemedarbejderassistent.
 * Næste version: serviceassistenten skal kunne klikke ok, når der fx er støvsuget
 */

/** spørger rengøringsassistenten: er der rent? */
function rent( tjek ){
    if (tjek === true){
        /** HTML "injektion" */
        instruks.innerHTML = `
        <h2>Udmærket, du fortsætter bare ...</h2>
        <div class="whitespace"></div>
        <label>Gå til næste rum!</label>
        <div class="whitespace"></div>
        <button  onclick="naesteRum()">OK</button>`
    
        /** CSS: Vise/skjule */
        erDetRent.style.visibility = "hidden"
        instruks.style.visibility = "visible"
    }
    else {
        /** HTML "injektion" */
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
            <button id="ja" onclick="rent(true)">Klik her når der er rent.</button>
            <button id="hmm" onclick="xxx()">Næste "step".</button>        
        `
        
        /** CSS: Vise/skjule */
        erDetRent.style.visibility = "hidden"
        instruks.style.visibility = "visible"
    }
}

/** rengøringsassistenten går til det næste rum */
function naesteRum(){
    /** CSS: Vise/skjule */
    erDetRent.style.visibility = "visible"
    instruks.style.visibility = "hidden"
}

function xxx(){
    //alert("ok, jeg virker lissom ...")

    // styler element i markup (her med CSS var)
    document.body.style.backgroundColor = "var(--tegl)"
    
    
    instruks.innerHTML = `
        <article>
            <h2> Nu har vi tilføjet et "step" </h2>
            <p>Step 19:<br> I hvilket vor helt standser op foran et slot ...</p>
            <p>Her falder vi lidt ud af rengørings-metaforen; men denne type kode egner sig fortrinligt til storytelling. Så her er lidt stemning a la rollespil, som "Huler og Drager".</p>

            <div class="whitespace"></div>
            <button onclick="alert('En valkyrie flyver forbi')"> Gå til højre </button>
            <button onclick="alert('Du ser en lindorm')"> Gå til venstre </button>
            <button onclick="alert('En heks flaksr forbi på sin kost')"> Åbn døren foran dig </button>
        </article>
    `
    erDetRent.style.visibility = "visible"
    erDetRent.innerHTML = "<img src='billeder/heks.webp'>"
}
