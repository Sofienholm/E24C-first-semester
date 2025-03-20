// se: https://www.w3schools.com/js/js_strict.asp

/**
 * Leaflet
 */

// Kortet centreres på en geografisk position
const kortCenter = [51.505, -0.09] // London

// kortet centreres nu på kortCenter
var map = L.map('map').setView( kortCenter , 15)

// VIGTIGT: copyright informationer skal være i orden, så brug altid:
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

// cirkel
/*
var circle = L.circle( kortCenter, {
    color: 'yellow',
    fillColor: 'pink',
    fillOpacity: 0.3,
    radius: 222
}).addTo(map)
*/

// marker
/*
var marker = L.marker( kortCenter ).addTo(map)
*/

// geometrisk poligon
/*
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map)
*/

// popup'ere forbindes med variablen:
/*
marker.bindPopup("<b>Hva' så da!</b><br>Jeg er en popup.").openPopup()
circle.bindPopup("I am a circle.")
polygon.bindPopup("I am a polygon.")
*/

// openPopup() metoden vil åbne et lag oven på kortet
/*
marker.bindPopup("🍦 <b>Hello world!</b><br>I am a popup.").openPopup()
circle.bindPopup("I am a circle.")
polygon.bindPopup("I am a polygon.")
*/

// events kan anvendes sådan:
/*
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng)
}

map.on('click', onMapClick) // viser positionen i en alert
// hvad kan det her bruges til?
// kan andre events end click bruges her?
*/
