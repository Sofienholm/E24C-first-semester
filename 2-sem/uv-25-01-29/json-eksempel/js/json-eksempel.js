getText("js/sushi.json"); // kalder funktionen og senter filnavnet som parameter

// funktionen defineres
async function getText(file) {

    let x = await fetch(file); // filen hentes
    let y = await x.text(); // viser indholdet af filen som tekststeng
    console.log(y) // viser tekststrengen y
    
    // Vi konverterer strengen til et JSON objekt
    let Sushierne = JSON.parse( y )
    console.log( Sushierne ) // læg mærke til objektet og dets egenskaber

    // Til sidst kan vi loope indholdet ud
    Sushierne.forEach(vis => {
        resultat.innerHTML += `
            <article class="menuListe">
                <h3> ${vis.id}: ${vis.navn} </h3>
            </article>
        `
    });
}

/** Læg mærke til metoden med ${vis.navn}
 *  Sådan kan du hente JSON-objektets egenskaber
 */