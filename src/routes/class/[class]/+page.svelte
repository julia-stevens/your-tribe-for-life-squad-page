<!-- Data inladen -->
<script>
  let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")
  
  let members = $state(data.members);
  let selectedClass = $state(data.selectedClass);
  let sort = $state(data.sort); 
  
  $effect(() => {
    members = data.members;
    selectedClass = data.selectedClass;
    sort = data.sort; 
  });

  import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    function handleChange(event) {
        const value = event.target.value;
        const url = new URL($page.url);
        url.searchParams.set("sort", value);
        goto(url.toString());
    }
</script>

<!-- HTML -->
<main class="vertical-layout">
  <!-- Introductie -->
  <section class="info vertical-layout">
      <div class="title vertical-layout">
          <h1>Squadpage FDND</h1>
          <p class="sub-title">Tweedejaars studenten 2025/2026</p>
      </div>
      <div class="introduction">
          <p> 
            Welkom bij de squadpage van squad {selectedClass}. Voor meer informatie over de student of docent, klik op het link icoon op de card. Neem een kijkje en leer de studenten en docenten beter kennen!
          </p>
      </div>
  </section>

  <!-- Overzicht met filters en lijst studenten -->
  <section class="overview vertical-layout">
      <div class="title">
          <h2>Overzicht studenten {selectedClass}</h2>
          <p>Sorteer de studenten of ga naar een squad pagina</p>
      </div>
      <div class="filters vertical-layout">
          <div class="class">
              <p class="vertical-layout">
                  <span class="span-classes vertical-layout">
                    <a href="/">Terug naar home</a>
                      <a href="/class/2E" class={selectedClass === "2E" ? "active-link" : ""}>Ga naar squad 2E</a>
                      <!-- of -->
                      <a href="/class/2F" class={selectedClass === "2F" ? "active-link" : ""}>Ga naar squad 2F</a>
                  </span>
              </p>
          </div>
          <form>
            <select name="sort" on:change={handleChange}>
              <option value="name" selected={sort === "name"}>Naam</option>
              <option value="age" selected={sort === "age"}>Leeftijd</option>
            </select>
        </form>
      </div>
      <div class="list-students">
          <ul>
              {#each members as member}
                  <li>
                      <article class="vertical-layout">
                          <div class="name vertical-layout">
                              <h3>{member.name}</h3>
                              <a href="/{member.id}">
                                  <img 
                                  src="../link-icon.svg" 
                                  alt="Link icoon"
                                  class="link-icon">
                              </a>
                          </div>
                          <div class="avatar">
                              <img 
                                  src="{member.avatar || "../default-avatar.jpg"}" 
                                  alt="Avatar van {member.name}" 
                                  width="50" 
                                  height="50" 
                                  style="object-fit:cover;">
                          </div>
                      </article>
                  </li>
              {/each}
          </ul>
      </div>
  </section>
</main>

<style>
  * {
      box-sizing: border-box;
      margin: 0; 
      padding: 0; 
  }

  main {
      /* Kleuren */
      --primary-background: #A675F4;
      --secondary-background: #ECECEC;
      --primary-highlight: #67E5BF; 
      --primary-text: #050542; 
      --secondary-text: #01A581; 

      /* Border radius */
      --b-radius-small: 5px; 
      --b-radius-large: 12px; 

      /* Fonts */
      --primary-font: "Open Sans"; 

      /* Padding */
      --padding-small: 1rem .5rem; 
      --padding-medium: 1rem 2rem; 
      --padding-large: 3rem 2rem;

      background-color: var(--secondary-background);
      border-radius: var(--b-radius-large);
      padding: var(--padding-large);

      font-family: var(--primary-font), sans-serif;
      font-size: 16px;
      color: var(--primary-text);

      max-width: 1000px;
      margin: 0 auto;
  }

  /* Reset */
  h1 {
      font-size: clamp(2rem, 1.4252rem + 2.4664vw, 3rem);
  }

  h2 {
      font-size: clamp(1rem, 1.116rem + 1.7937vw, 1.5rem);
  }

  h3 {
      font-size: 16px;
  }

  .sub-title {
      font-size: clamp(1rem, 0.995rem + 1.009vw, 1.5625rem);
  }

  h1, h2, p {
      line-height: 180%;
  }

  ul {
      list-style-type: none;
  }

  p {
      font-weight: 300;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  .vertical-layout {
      display: flex; 
      flex-direction: column; 
      gap: 1rem;
  }

  /* Styling */
  .introduction p {
      max-width: 420px;
  }

  @media (min-width: 940px) {
      .info {
          flex-direction: row; 
          justify-content: space-between;
          align-items: center;
      }

      .title {
          gap: 0 !important;
      }
  }

  .filters {
      @media (min-width: 940px) {
          flex-direction: row;
      }
  }

  select {
      background-color: var(--secondary-background);
      font-family: var(--primary-font), sans-serif;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer; 
  }

  .filters a, select {
      padding: 1rem;
      width: min-content;
      border: 1px solid var(--primary-text);
      border-radius: var(--b-radius-small);
      box-shadow: 
          /* box shadow color */
          -5px 5px 1px var(--secondary-background),
          /* box shadow border */
          -5px 5px 0 1px var(--primary-text)
      ; 
  }

  .active-link {
      border: 1px solid var(--primary-text) !important;
      border-radius: var(--b-radius-small);
      box-shadow: 
          /* box shadow color */
          -5px 5px 1px var(--primary-highlight),
          /* box shadow border */
          -5px 5px 0 1px var(--primary-text) !important
      ;
      background-color: var(--primary-highlight);
  }

  .span-classes {
      gap: 1rem;
       a {
          margin: 0 1rem; 
          width: fit-content;
      }
  }

  .overview {
      gap: 2rem;
  }

  ul, li {
      width: fit-content;
  }

  ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
      gap: 2rem;
  }

  article {
      border: 1px solid var(--primary-text);
      border-radius: var(--b-radius-small);
      box-shadow: 
          /* box shadow color */
          -5px 5px 1px var(--primary-highlight),
          /* box shadow border */
          -5px 5px 0 1px var(--primary-text)
      ;
      padding: 1rem 2rem;
      max-width: 255px;
  }

  article .name {
      order: 1;
      justify-content: space-between;
  }

  article .avatar {
      width: fit-content;
      max-width: 189px;
      height: fit-content;
      max-height: 189px;
      overflow: hidden;
  }

  article .avatar img {
      width: 100%; 
      height: 100%;
      border-radius: var(--b-radius-small);
  }

  @media (min-width: 280px) {
      article .name {
          flex-direction: row;
      }
  }

  /* Animations */
  li:hover {
      cursor: pointer;

      .link-icon { 
          animation: shake .2s ease-in 2;
      }
  }

  @keyframes shake {
  0%, 100% {
      rotate: 0deg;
      scale: 1;
  }    
  25% {
      rotate: 10deg;
      scale: 1.15;
  }
  50% {
      rotate: 0deg;
  }
  75% {
      rotate: -10deg;
  }
}
</style>