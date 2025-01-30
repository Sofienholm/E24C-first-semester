"use strict"
/**
 * Fil: video-interaktiv.js
 * Formål: interaktiv video eksempel
 * Se også @URI: https://www.w3schools.com/jsref/dom_obj_video.asp
 */
console.log("Interaktivt video script er aktivt :-)")

// video link
let vid = document.getElementById("minVideo")

// interaktiv video playser i form af et objekt
let videoPlayer = {
    "test" : function (){ alert("Hvis du ser mig, så virker metoden") },
    "playPause" : function (){ 
        console.log("der klikkes på play/pause") // test
        if (vid.paused) 
            vid.play(); 
          else 
            vid.pause(); 
        },
    "hopTil": function( m, s ){
        console.log("Hopper til: " )
        vid.currentTime = ( m * 60) + s // m: minut, s: sekund
        vid.play()
    }
}

