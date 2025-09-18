# Squadpage Sprint 13

- Hier komt de introductie/inleiding. (Wie hebben er aan gewerkt en wat hebben we gemaakt)
- Mockup van onze squadpage

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

### Link en sorteer functie
Het overzicht van de studenten en docenten van leerjaar 2 kan gesorteerd worden op leeftijd en op naam (a-z). Daarnaast kan een gebruiker de specfieke squads bekijken en dit overzicht wederom sorteren op leeftijd of naam. 

#### Functional & reliable
- De functie is geschreven met semantische HTML, zodat het iedere gebruiker over deze functie kan beschikken (zie [hier de testresultaten](https://github.com/julia-stevens/your-tribe-for-life-squad-page/issues/83)).

#### Usable 
- Het overzicht is altijd te bekijken en in verschillende browsers ook te sorteren. Hiermee blijft de core functionaliteit intact.

#### Pleasurable
- Bij moderne browsers wordt het sorteer element gestyled volgens de huisstijl. Hiermee vormt het meer een geheel met de rest van de pagina.
- Wanneer deze (moderne code) niet ondersteund wordt, wordt het sorteert element gestyled naar de standaarden van de browser.

<img width="600" alt="image" src="https://github.com/user-attachments/assets/f296fa0f-f9c3-46b4-8a96-395a6680bf5c" />

#### Visual
- Visual squad 2F, met de juiste squad ge-highlight en lijst gesorteerd op a-z.

<img width="600" height="753" alt="image" src="https://github.com/user-attachments/assets/ff6fb01b-727c-48e5-bc73-f215e0bd072a" />
  
### Scroll driven animation
- Het overzicht van de studenten en docenten op de home pagina bevat een scroll animatie. Bij het naar beneden scrollen bewegen de cards zich naar rechts en verlagen in helderheid. Dit draagt bij aan de gebruikerservaring, omdat het voor meer interactie zorgt.

 #### Functional & reliable 
 - De cards zijn gebouwd met semantische HTML, waardoor het toegankelijk is voor gebruikers.
 - Door te werken met componenten is de code beperkt gebleven en efficiënt.

#### Usable
- De scroll animatie is gebouwd met nieuwe CSS. Daarom is de code zo gebouwd, dat de scroll animatie vervangen wordt door een grid, wanneer de nieuwe CSS niet ondersteund wordt.

<img width="600" height="625" alt="image" src="https://github.com/user-attachments/assets/6cd9dae4-21f2-4ded-9891-8f89d3502ab3" />

#### Pleasurable
- Wanneer de scroll animatie ondersteund wordt, blijft de tekst, links en sorteer knop hangen in beeld en daar onder bewegen de cards heen en weer. Dit gebeurt op basis van de scroll richting van de gebruiker.
- De cards bewegen naar rechts van de stapel af en verlagen in helderheid, om specifieke aandacht te trekken naar de student/docent die bovenop de stapel ligt.

#### Visual


https://github.com/user-attachments/assets/6f12d38d-d6b3-4760-a609-1384625ee650




### Text animation

De tekst animatie is een pleaserable toevoeging. Het doel van de tekst animatie is de gebruiker een prettigere ervaring te geven op onze squadpage pagina.

#### Functional & reliable
- Semantische HTML structuur behouden door in het element de juiste element mee te geven `tag={"h1"}`.
- Core functionaliteit (tekst blijft leesbaar) blijft behouden in oude browsers.

https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/b69312c93dc5db1f6c77d453a3b60d5f3aef0ee5/src/routes/%2Bpage.svelte#L33-L34

#### Usable
- Geïmplementeerd als herbruikbaar component. Je kunt in het component het tekst element meegeven. Hierdoor blijft het component dynamisch werken.

https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/b69312c93dc5db1f6c77d453a3b60d5f3aef0ee5/src/lib/components/AnimationText.svelte#L33-L35

#### Pleaserable
- Tekst geanimeerd met GSAP. Hiervoor wordt er met GSAP ervoor gezorgd dat de tekst animeert.
- De animaties bevatten een `delay` waardoor de gebruiker bij het laden de animatie duidelijk te zien krijgt.

https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/b69312c93dc5db1f6c77d453a3b60d5f3aef0ee5/src/lib/components/AnimationText.svelte#L10-L28

#### Visual

https://github.com/user-attachments/assets/a5308cc7-7359-481e-a315-c917921f2240
  
### Multi page view transitions
- Beschrijving feature
- 1 & 2 Functional & Reliable
- 3 Usable
- 4 Pleasurable
- Visua

## Kenmerken
In dit project gebruiken wij SvelteKit om een dynamische squadpage te bouwen met herbruikbare componenten en routes. Data wordt opgehaald via de Directus API. 

### Routes
- [`/`](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/routes/%2Bpage.svelte): Op de home pagina wordt de de data van alle tweedejaars studenten en docenten opgehaald en gerenderd naar een overzicht.
- [`/[id]`](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/routes/%5Bid%5D/%2Bpage.svelte): In deze route wordt de data van de specifieke student opgehaald en gerenderd naar een detail pagina van de student/docent. 
- [`/squad/[squad]`](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/routes/squad/%5Bclass%5D/%2Bpage.svelte): In deze route wordt de data van de specifieke squad opgehaald en gerenderd naar de squad pagina.

### Componenten 
- [`StudentCard`](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/lib/components/StudentCard.svelte): In dit component staat de student card die op alle pagina's gebruikt wordt.
- [`AnimationSection`](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/lib/components/AnimationSection.svelte): Dit component animeert de sectie die wordt meegegeven met GSAP. 
- [`AnimationText`](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/lib/components/AnimationText.svelte): Dit component animeert de tekst die wordt meegegeven met GSAP.
- [`OverviewTitle`](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/lib/components/OverviewTitle.svelte): Dit component bevat titel en ondertitel informatie die op meerdere pagina's gebruikt wordt.

### Data
Data wordt opgehaald in `+page.server.js` per betreffende route. Hierin wordt een fetch gedaan naar de Directus API, wordt de data verwerkt en gerenderd naar de betreffende `+page.svelte` pagina. 
- Zie bijvoorbeeld de [`+page.server.js` van de home pagina](https://github.com/julia-stevens/your-tribe-for-life-squad-page/blob/main/src/routes/%2Bpage.server.js). Op basis van de sorteer waarde in de URL wordt een fetch naar Directus uitgevoerd en data op een bepaalde volgorde opgehaald. 

### Gebruikte tools

- Alle tools die we gebruikt hebben zoals SvelteKit & Directus API en hoe we die ingezet hebben binnen ons project.

## Installatie
Om dit project te bouwen moeten onderstaande stappen uitgevoerd worden. `Node.js` en `npm` (of alternatieven, zoals `pnpm` of `yarn`) zijn een vereiste package manager om te kunnen beginnen.  

### Project aanmaken 
- Als je een nieuwe SvelteKit project wil starten, voer volgende commando's uit in de terminal:

```
npx sv create
```

- Volg vervolgens de stappen die in de terminal verschijnen.

### Installeren 
- Nadat het project is uitgevoerd, voer onderstaand command uit om alle dependencies te installeren

```
npm install
```

### Ontwikkelen
-  Als alle dependencies zijn geïnstalleerd, kan de ontwikkelserver gestart worden. Doe dit met onderstaand commando, en krijg automatisch veranderingen te zien:

```
npm run dev -- --open
```

### Builden 
- Op een productversie van je app te maken:

```
npm run build
```

- En op de productieversie te bekijken:

```
npm run preview
```

## Bronnen
- [Ontwerp Squadpage in Figma](https://www.figma.com/design/OKW6E3n84IyLq76bXJBhB7/Sprint-13?node-id=16-2&t=s6vBqLf3tv9Oeb9o-1)
- [FDND.nl](https://fdnd.nl/) (Voor het huisstijl)
- [Programma FDND](https://programma.fdnd.nl/) (Voor het huisstijl)
- [Huisstijl document van de HvA](https://icthva.sharepoint.com/sites/communicatieplatform/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fcommunicatieplatform%2FShared%20Documents%2F230927%2DHvA%2DHuisstijlhandboek%2Dv10%20incl%20online%2Epdf&parent=%2Fsites%2Fcommunicatieplatform%2FShared%20Documents)

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
