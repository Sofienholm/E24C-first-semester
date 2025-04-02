/**
 * Fil: HTML Canvas noter
 * Formål: forberedelse af introduktion til canvas og js.
 * Version: 1.0
 */

// Globale variabler

// lærredet
let canvas = document.querySelector("#firkant") // selector
let c = canvas.getContext("2d") // vi tegner i 2D
let ctx = c // så passer det med W3 eksempler

// farver (CoPilot forsøger at vælge farver i stil med Goethes farvelære)
let tomat = "#FF6347" // Tomat (Tomato)
let guld = "rgba(255, 99, 71, 0.4)" // Guld (Gold)
let groenGul = "#ADFF2F" // Grøn gul (Green Yellow)
let turkis = "#00CED1" // Mørk turkis (Dark Turquoise)
let blaa = "#8A2BE2" // Blå violet (Blue Violet)

// tegn en firkant
let tegnEnFirkant = () => {    
    c.fillStyle = turkis // farve fra globale var
    c.strokeStyle 
    c.fillRect(30,20,100,100) // definerer hjørnernes position
}

// Forbedring af koden: 
// lav en funktion som, laver en firkant med en tilfældig bredde og højde.
// Hvordan kan du skrive sådan en funktion?

// Når det virker, så prøv at fyre funtionen af 32 gange med et loop!

// du får ofte brug for at slette for at kunne tegne igen
let sletLaerred = (navn) => {
    c.clearRect(0, 0, canvas.width, canvas.height) // renser lærredet
}

/**
 * GEOMETRI
 * Stier og polygoner, Flanagan: 485.
 **/

// STI - og lidt geometrisk sjov
let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

let enSti = () => {

    ctx.beginPath() // begynder stien
    ctx.moveTo(0, 0) // flytter "blyanten"
    ctx.lineTo(b, 100) // tegner
    ctx.lineTo(b, 435) // tegner videre
    ctx.strokeStyle = tomat // "blyanten er rød"

    // fill
    ctx.fillStyle = guld
    ctx.fill()

    ctx.lineWidth = 4
    
    ctx.stroke() // stregen sættes ind, der tegnes ...
   
    a += 25
    b += 33

    if (a > 500){
        Math.floor(Math.random()*200)
    }
    if (b > 500){
        Math.floor(Math.random()*20)
    }
}

/** 
 * BILLEDER
 * Husk at billeder pixeleerer når der skaleres heftigt.
 * Brug evt. SVG billeder i stedet.
 * Billeder skal være *loaded* før de kan bruges.
 */
let visRidder = () => {
    let image = document.getElementById("ridder")

    // syntax skaler: drawImage(image, dx, dy, dwidth, dheight)
    ctx.drawImage(image, 0,0, 100,100)

    // syntax klip: drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
    
    //ctx.drawImage(image, 300,200, 768,768, 10,10, 300, 300)
    /*
        ctx.drawImage(
        image, src  
        sx, 0
        sy, 0
        swidth, 768 
        sheight, 768
        dx, 10
        dy, 10
        dwidth, 300 
        dheight) 300
    */

    // drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight)
    ctx.drawImage(image,350,350, 350, 350, 20, 200, 100,100)
    }

/** Ideer til OPGAVER 
 * 1. Lav en funktion, der tegner en kurve
 * 2. Lav et søjlediagram - med forklarende tekst. Data fra JSON eller array.
 *   - brug en funktion til at tegne søjlerne
 *   - brug samme funktion til at tegne teksten
 * 3. Lav et cirkeldiagram
*/

// Tegn en CIRKEL på canvaset
let tegnEnCirkel = () => {
    ctx.beginPath() // begynder stien
    ctx.arc(100, 100, 50, 0, Math.PI * 2) // cirkel
    ctx.fillStyle = tomat // "blyanten er rød"
    ctx.fill() // fylder cirklen med farve
    ctx.stroke() // stregen sættes ind, der tegnes ...
}

/** ANIMATIONER og canvas - næste gang */
let minAnimation = () => {

}



