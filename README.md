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

### Filter en sorteer functie
- Beschrijving feature
- 1 & 2 Functional & Reliable
- 3 Usable
4 Pleasurable
  
### Scroll driven animation
- Beschrijving feature
- 1 & 2 Functional & Reliable
- 3 Usable
4 Pleasurable
  
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
4 Pleasurable

## Kenmerken

### Routes en data

- Welke routes en pagina's we hebben in onze squadpage.

### Gebruikte tools

- Alle tools die we gebruikt hebben zoals SvelteKit & Directus API en hoe we die ingezet hebben binnen ons project.

## Installatie

- Hoe project installeren en gebruiken (dit onderstaande stond al in de ReadME misschien kunnen we hier bepaalde punten uithalen).

### sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```
### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Bronnen
- [Ontwerp Squadpage in Figma](https://www.figma.com/design/OKW6E3n84IyLq76bXJBhB7/Sprint-13?node-id=16-2&t=s6vBqLf3tv9Oeb9o-1)
- [FDND.nl](https://fdnd.nl/) (Voor het huisstijl)
- [Programma FDND](https://programma.fdnd.nl/) (Voor het huisstijl)
- Huisstijl document van de HvA

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
