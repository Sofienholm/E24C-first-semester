# Responsive Web Design

## Kode fra dagens undervisning

Her er koden fra dagens undervisning.

## Opskrift

På Canvas har jeg lagt denne "opskrift" til RWD, for det er vigtigt, at du får begyndt med en korrekt markup i HTML'en.

## Sådan gør du

Når du arbejder med responsive sider, så er det vigtigt at du begynder på den rigtige måde. Du skal udvikle en CSS, der på forhånd tager stilling til, hvordan de forskellige elementer skalerer. Dette gøres lettest ved hjælp af et generelt CSS. Denne side giver en "opskrift" er ment som en begyndelse.

Når du designer RWD, så er det en flydende verden, hvor elementernes størrelse forvandles, når browser-vinduerne bliver mindre.

### Generelt Layout

Start med en simpel HTML-struktur. Vi bruger en container til indholdet, som vi senere kan style med CSS.

### Basal HTML

Vi får brug for den grundlæggende struktur i markup'en, begynd så enkelt som muligt:

~~~~
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsivt Webdesign</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Velkommen til min hjemmeside</h1>
    </header>

    <main>
        <section>
            <h2>Om os</h2>
            <p>Dette er en tekst, der beskriver os.</p>
        </section>

        <section>
            <h2>Kontakt os</h2>
            <p>Du kan kontakte os via denne formular.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Min Hjemmeside</p>
    </footer>
</body>
</html>
~~~~

### Basal CSS

Når din HTML er klar skal din CSS forberedes. Igen begynder vi med at definere nogen classes, der er nyttige i RWD - og som kan genbruges. Ud over det viste vil jeg anbefale, at du definerer:

Fonte - fx Google FontsLinks to an external site., 1001 Free FontsLinks to an external site. &c.
Variabler: farver, fontfamilier og måske genbrugelig whitespace.

~~~~
/* CSS reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
}

main {
    padding: 1rem;
}

section {
    margin-bottom: 2rem;
}

Responsivt layout med flexbox
/* Flexbox layout */
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
~~~~

### Media Queries

Nu kan du tilføje en række media queries. 

~~~~
/* Mobile-first styling */
body {
    font-size: 16px;
}

section {
    width: 100%;
}

/* Tablets (min. bredde: 600px) */
@media (min-width: 600px) {
    main {
        flex-direction: row;
        justify-content: space-between;
    }

    section {
        width: 45%;
    }
}

/* Laptops og større skærme (min. bredde: 1024px) */
@media (min-width: 1024px) {
    body {
        font-size: 18px;
    }

    header, footer {
        padding: 2rem;
    }

    main {
        max-width: 1200px;
        margin: 0 auto;
    }

    section {
        width: 40%;
    }
}
~~~~

### Forklaring af viewport meta-tag

Dette tag i `<head>` er vigtigt for at sikre, at layoutet skalerer korrekt på mobile enheder:

~~~~
<meta name="viewport" content="width=device-width, initial-scale=1.0">
~~~~

### Billeder og Video

De fleste websider integrerer en flere medier, som billede og lyd. Billeder kan vi slet ikke undvære - og i RWD skal de bare tilpasse sig den plads, som bliver tildelt til dem. Billeder kan være i vektor eller pixelformat. Genrelt fylder vektor-billeder mindst. Koden fra en SVG kan lægges direkte i din HTML. Videoer skal i stil med billeder tilpasse sig den plads de har. 

Derfor skaleres generelt med procent frem for absolutte værdier som px, pt, &c.

### Forklaring:

`max-width: 100%` sørger for, at billedet aldrig overstiger bredden af den container, det er i, hvilket gør det responsivt.

height: auto bevarer billedets oprindelige 

højde-bredde forhold, mens det skaleres.

display: block og margin: 0 auto bruges til at centrere billedet.
 
~~~~
img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto; /* Centrerer billedet */
}
~~~~

### Videoer
Videoer skal også skalere, så de passer ind på din webside. Her er et par opskrifter:

How to: 

* [Responsive YouTube Videos](https://techstacker.com/how-to-responsive-youtube-videos)
* [W3 Schools Video](https://www.w3schools.com/html/html5_video.aspLinks)
* [W3 Responsive videos](https://www.w3schools.com/Css/css_rwd_videos.asp)

Hvis du ønsker, at en video skal køre automatisk, så kræver de fleste browsere brugerens tilladelse; men hvis lyden er slået fra kan du loope videoerne.

### Audio

Lyd integreres også ved at linke til lyden, se:

[W3 Audio](https://www.w3schools.com/html/html5_audio.asp)

Eksempel, hvor flere formater anvendes som fallback, hvis et format ikke skulle understøttes af browseren:

~~~~
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
     Your browser does not support the audio element.
</audio>
~~~~
 


### Avanceret kontrol af audio / video

Lyd og video kan styres via JavaScript; men det er uden for dette semesters pensum.

 

### Finjusteringer: Breakpoints til videoer & billeder

Nogen gange kan det være nødvendigt at finjustere elementer, her er nogen breakpoints til videoer og billeder:

~~~~
/* Mindre skærme (f.eks. mobil) */
@media (max-width: 600px) {
    img {
        width: 100%; /* Billedet fylder hele bredden af skærmen */
    }

    .video-container {
        padding-bottom: 75%; /* Ændrer aspektforholdet til 4:3 på mindre skærme */
    }
}
~~~~

### Flexbox

Du har i det foregående projekt anvendt flexbox - her er en opskrift:

Typisk Flexbox HTML:

~~~~
<main>
    <div class="container">
        <div class="item">Kolonne 1</div>
        <div class="item">Kolonne 2</div>
        <div class="item">Kolonne 3</div>
    </div>
</main>
~~~~

### Kolonner med flex i CSS

For at oprette kolonner bruger vi flex-direction: column. Dette sørger for, at elementerne placeres i lodret retning, som en række af kolonner.

~~~~
.container {
    display: flex;
    flex-direction: column; /* Kolonner */
    gap: 10px; /* Afstand mellem kolonner */
}

.item {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
}
~~~~

### Rækker med Flexbox

For at placere elementerne i en vandret række skal vi ændre flex-direction til row (standardretningen for Flexbox).

~~~~
.container {
    display: flex;
    flex-direction: row; /* Rækker */
    gap: 10px; /* Afstand mellem rækker */
}

.item {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
}
~~~~

### Kolonner og rækker

Responsivt layout med både kolonner og rækker
Du kan også kombinere kolonner og rækker, så layoutet ændrer sig afhængigt af skærmstørrelsen. Brug media queries til at skifte mellem kolonne- og rækkelayout. Her bruges breakpoints til at styre, hvornår indholdet vises som rækker, og hvornår du vil vise det som blokke.

~~~~
/* Kolonner på mindre skærme (mobil) */
.container {
    display: flex;
    flex-direction: column; /* Kolonner som standard */
    gap: 10px;
}

/* Rækker på større skærme (tablets og desktops) */
@media (min-width: 600px) {
    .container {
        flex-direction: row; /* Skift til rækker på bredere skærme */
    }
}

.item {
    background-color: #f4f4f4;
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
    flex: 1; /* Sørger for at kolonner/rækker har samme bredde */
}
~~~~
 

### Flexbox: Samlet eksempel

Her er koden samlet i én fil for eksemplets skyld; men det var mere elegant, hvis CSS og HTML blev styret af separate filer. CSS'en er velegnet til at fungere som fælles CSS for flere HTML-filer.

~~~~
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Layout</title>
    <style>
        .container {
            display: flex;
            flex-direction: column; /* Kolonner på mindre skærme */
            gap: 20px;
        }

        @media (min-width: 600px) {
            .container {
                flex-direction: row; /* Rækker på større skærme */
            }
        }

        .item {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            border: 1px solid #ddd;
            flex: 1; /* Sørger for at kolonnerne/rækkerne fylder lige meget */
        }
    </style>
</head>
<body>
    <main>
        <div class="container">
            <div class="item">Kolonne 1</div>
            <div class="item">Kolonne 2</div>
            <div class="item">Kolonne 3</div>
        </div>
    </main>
</body>
</html>
~~~~
 

### En responsiv menu

Dit design fuldendes, hvis du har en responsiv dropdownmenu. Murats eksempel fra workshoppen anbefales, se:

* Murat Kilic: https://github.com/muratkilic1978/build-responsive-navbar-with-dropdown-completedLinks to an external site. 

Nu kan du:

Indsætte en menu på passende steder.

### Navigation er mere end en menu i toppen

Navigation kan ske på utallige måder:

* Klikbare billeder
* Knapper
* Links
* &c.

### Den tekniske test

Test websiden på mange forskellige enheder eller brug browserens "undersøg" (inspect) værktøj (Ctrl+Shift+I i Chrome) for at simulere mobile og tablet skærmstørrelser, men husk, at simulationen i din browser ikke er helt det samme, som at opleve siden på din enhed.

Upload webløsningen til en server (fx Simply)
Prøv først løsningen på flere devices i browserens "undersøg" værktøj.
Prøv derefter løsningen på mange forskellige devices, som du / din gruppe har adgang til.
Få andre til at afprøve din løsning på deres devices.
For hver test noteres eventuelle udfordringer, som bør rettes.

 ### Fem testpersoner er dækkende
 
 Husk, at Nielsen Norman Group anbefaler at fem testpersoner er tilstrækkeligt: https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/

 ### Browserspecifikke problemer

 Af og til kan du rende ind i problemer med at browsere ikke læser CSS ens. Denne artikel er en god introduktion til emnet:

 https://medium.com/@lelianto.eko/how-to-solve-cross-browser-compatibility-issues-with-css-73a4f5083b9e 