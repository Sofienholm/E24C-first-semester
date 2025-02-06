# Drag and drop Quizz

Her er eksempler på den type kode vi bruger i dagens øvelse.

Script med en del inspiration fra [W3 Schools: "HTML Drag and Drop"](//www.w3schools.com/HTML/html5_draganddrop.asp)

## Funktionerne

Når du laver en quizz kan du give feedback til brugeren, fx ved at sende parametre gennem funktionerne:

~~~~
function drop(ev,besked) {
  
    // billedet overføres  
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  
    // feedback til brugeren
    feedback.innerHTML = besked
  }
~~~~

Feedbacken kan gives via **ondrop** sådan fra HTML elementet:

~~~~
<div 
    id="div4" 
    class="kasse"
    ondrop="drop(event, 'Ja, her har din fugl det rigtig godt.')" 
    ondragover="allowDrop(event)"></div>
~~~~

Husk, at du selv kan tilføje de funktioner, som skal kaldes ved:

* ondrop="minFedeFunktion(en,to,tre){ ... mere logik her ...  }
* ondragover="minHeltAndenFunktion(){ ... mere cool logik her ... }
* etc.


Se mulighederne med drag events [her](https://www.w3schools.com/jsref/obj_dragevent.asp).

