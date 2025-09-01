# Afspraken over samenwerking

## Teamcanvas
<img width="600" alt="Screenshot 2025-09-01 151242" src="https://github.com/user-attachments/assets/bf4f5541-dc9c-40aa-bdf0-d32b08a24258" />
^ Team Canvas van sprint 13

## Werkwijze

### PR Template
### Wat is er veranderd? 
- Link naar issues (gebruik een `#`)
- Uitleg wat je gedaan hebt 
- Hoe heb je rekening gehouden met een RAPPE website? 
  - Responsive
  - Accessible 
  - Performance
  - Progressively enhanced
- Waar wil je feedback op

### Visuals 
- Afbeeldingen/schermopname 

# Code conventies
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
