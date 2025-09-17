# Afspraken over samenwerking
- Elke lesdag houden we een stand-up (ma, woe, vrij)
- Communiceren via Teams
- Voortgang bijhouden in projectbord
- Houd je aan de afgesproken werkwijze
- Laat weten als je afwezig bent
- Laat weten als je ergens tegenaan loopt

## Teamcanvas
<img width="600" alt="Screenshot 2025-09-01 151242" src="https://github.com/user-attachments/assets/bf4f5541-dc9c-40aa-bdf0-d32b08a24258" />

## Werkwijze
- Je werkt aan de hand van de issues in feature branches
- Merge eerst main naar jouw werk, voordat je commit
- Maak een PR voor je werk
  - Assign alle teamleden
  - Verwerk feedback én tag teamlid
  - Als minimaal 1 teamlid goedkeuring heeft gegeven dan kan je werk naar de `main` gemerged worden (zorg dat je de meest recente versie van de `main` op jouw branch hebt staan)

### PR Template
### Wat is er veranderd? 
- Link naar issues (gebruik een `#`)
- Uitleg wat je gedaan hebt 
- Waar wil je feedback op

### Visuals 
- Afbeeldingen/schermopname 

# FDND conventies
[zie FDND website](https://docs.fdnd.nl/conventies.html)

## Code conventies
### HTML / Liquid
- Gebruik semantische HTML: `<section>`, `<article>`, `<main>`
- kebab-case voor classnamen: `section-title`
- Voeg alt-teksten toe aan afbeeldingen (voor toegankelijkheid)

### CSS
- kebab-case voor classnamen: `.form-field`
- Naamgeving in het engels
- Schrijf mobile-first met zo mogelijk geneste media queries
- Gebruik `--custom-properties` waar mogelijk
- Houd CSS DRY (vermijd dubbele regels)

### JavaScript
- Server side structuur volgens sitemap (routes)
- camelCase voor variabelen/functies: handleSubmit
- Gebruik `const`/`let`
- Voeg comments of JSDoc toe bij functies

### Animaties
- Begin alle animatie classes met 'animation'
- Het tweede deel van de classname hoort bij hoe de animatie zichtbaar/onzichtbaar wordt, e.g fade-in
- Het derde deel van de classname hoort bij de richting van de animatie + wordt onderscheiden door een --, e.g --up of --down

## Oplever todo's:

Wat moet er in de oplevering zitten?

- [`README.md`](#readme)
- [Alles moet getest zijn](#testen)
- [Projectboard](#projectboard)
- Live staan + live link
- Geen open pull requests

### Projectboard
- Moscow is toegepast
- Issues in juiste fase
- Issues sluiten
- Backlog met issues die niet opgepakt worden

### Refactor
- Structuur van je mappen
- Netjes uitlijnen van code
- Ongebruikte code is verwijderd
- Ongebruikte files zijn verwijderd
- Comments in code
- Comments met bronnen
- Conventies uit `CONTRIBUTING.md` zijn gehandhaafd

### README
- Informatie voor installatie
- Omschrijving van het project
- Ontwerpkeuzes uitleggen
- Functionaliteiten uitleg

### Testen
- Performance
- A11y, tab, kleur, screenreader
- User test
- Responsive + Device test
- Html validator
