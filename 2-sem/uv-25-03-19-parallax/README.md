# Parallax

Her er nogen eksempler på parallax til dagens workshop. Dagens øvelse er tilgængelig på Canvas.

Wagerfiels kode kræver, at alle billeder har ensartet bredde og højde. Når du laver din egen grafik, så sørg for at billedernes transparente lærredstørrelse er ens.

./wagerfield-compiled: wagerfield parrallax
./filter-burgere: JSON med filtrering af data
./node_modules/rellax: rellax parallax library (installeret med yarn).

## Node.js

Med node.js kan du på en enkel måde installere JavaScript libraries. Før du begynder får du brug for at installere nodejs:

[Klik her for at installere node.js](https://nodejs.org/en)

Følg instruktionerne på siden.

Så snart node.js er installeret kan du installere libraries. Typisk sådan:


~~~~
npm install PAKKENAVN
~~~~

Pakkerne vil derefter blive lagt ind i mappen:

~~~~
./node_modules/PAKKENAVN
~~~~

## Nodejs tutorial

[Se denne tutorial på W3](https://www.w3schools.com/nodejs/).

### Problem: Nodejs Windows

Når nodejs er installeret, så kan du køre pakke-administratoren i den indbyggede terminal.

På Windows kan det være lidt bøvlet første gang, fordi en sikkerhedsindstilling skal justeres. Hvis du får en fejl om at scriptet ikke vil køre, når du skriver npm -v så prøv:

Set-ExecutionPolicy -Scope CurrentUser

I inputfeltet skal du tilføje:

bypass

Nu kan du køre npm-kommandoer. Test det med:

npm -v

Terminalen burde returnere noget a la 10.9.2, der er den aktuelle version af npm.

Prøv fx at finde font awesome sådan:

npm search awesome

----

## Kilder

Mappen med kompileret parallax-kode fra Wagerfield stammer fra:

Wagerfield et al. [Parallax](https://github.com/wagerfield/parallax/releases) (Som besøgt 2025.03.17)