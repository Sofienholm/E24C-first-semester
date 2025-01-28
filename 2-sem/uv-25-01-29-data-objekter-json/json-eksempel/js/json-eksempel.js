getText("js/sushi.json"); // kalder funktionen og senter filnavnet som parameter

// funktionen kan hente en tekstfil som en tekst-streng.
async function getText(file) {

    let x = await fetch(file); // filen hentes
    let y = await x.text(); // viser indholdet af filen som tekststeng
    console.log(y) // viser tekststrengen y
    
    let Sushierne = JSON.parse( y ) // Vi konverterer strengen y til et JSON objekt
    console.log( Sushierne ) // læg mærke til objektet og dets egenskaber

    // Til sidst kan vi loope indholdet ud
    Sushierne.forEach(vis => {

        // ${vis.EGENSKAB} - sådan kan du hente objektets egenskaber 
        resultat.innerHTML += `
            <article class="menuListe">
                <h3> ${vis.id}: ${vis.navn} </h3>
            </article>
        `
    });
}
