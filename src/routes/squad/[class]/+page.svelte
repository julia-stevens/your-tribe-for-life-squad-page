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
    import StudentCard from "$lib/components/StudentCard.svelte";
    import OverviewTitle from "$lib/components/OverviewTitle.svelte";

    function handleChange(event) {
        const value = event.target.value;
        const url = new URL($page.url);
        url.searchParams.set("sort", value);
        goto(url.toString());
    }
</script>

<!-- HTML -->
<main class="vertical-layout" id="main">
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
        <OverviewTitle {selectedClass}/>
        <div class="filters vertical-layout">
            <div class="class">
                <p class="vertical-layout">
                    <span class="span-classes vertical-layout">
                        <a href="/" class="to-home">Terug naar home</a>
                        <!-- als selectedClass 2E is, dan active-link class, anders leeg -->
                        <a href="/squad/2E" class={selectedClass === "2E" ? "active-link" : ""}>Ga naar squad 2E</a>
                        <!-- of -->
                        <a href="/squad/2F" class={selectedClass === "2F" ? "active-link" : ""}>Ga naar squad 2F</a>
                    </span>
                </p>
            </div>
            <label for="sort"><span>Sorteer</span></label>
            <form id="sort">
                <select id="sort" name="sort" onchange={handleChange}>
                    <option value="name" selected={sort === "name"}>Sorteer A-Z</option>
                    <option value="age" selected={sort === "age"}>Sorteer op leeftijd</option>
                </select>
            </form>
        </div>
        <div class="list-students">
            <ul>
                {#each members as member}
                    <li>
                        <StudentCard {member} />
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

    *:focus-visible {
            outline: 3px dashed var(--primary-color);
            outline-offset: 4px;
    }

    main {
        /* Border radius */
        --b-radius-small: 5px; 
        --b-radius-large: 12px; 

        /* Fonts */
        --primary-font: "Open Sans"; 

        /* Padding */
        --padding-small: 1rem .5rem; 
        --padding-medium: 1rem 2rem; 
        --padding-large: 7rem 10rem;

        background-color: var(--secondary-color);
        border-radius: var(--b-radius-large);
        padding: var(--padding-large);

        font-family: var(--primary-font), sans-serif;
        font-size: 16px;
        color: var(--primary-text);

        margin: 0 auto;
        padding: 5em 2em;
    }


    @media (min-width: 800px) {
        main {
            padding: var(--padding-large);
        }
    }


    /* Reset */
    h1 {
        font-size: clamp(2rem, 1.4252rem + 2.4664vw, 3rem);
    }

    h1, p {
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

        .filters {
            flex-direction: row; 
        }


    }

    label > span {
        position: absolute; 
        left: -999999px;
        opacity: 0;
    }

    select {
        background-color: var(--secondary-color);
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
            -5px 5px 1px var(--secondary-color),
            /* box shadow border */
            -5px 5px 0 1px var(--primary-text); 
    }

    .filters .active-link {
        border: 1px solid var(--primary-text);
        border-radius: var(--b-radius-small);
        box-shadow: 
            /* box shadow color */
            -5px 5px 1px var(--primary-highlight),
            /* box shadow border */
            -5px 5px 0 1px var(--primary-text);
        background-color: var(--primary-highlight);
    }

    .span-classes {
        gap: 1rem;
        a {
            margin: 0 1rem; 
            width: fit-content;
        }
    }

    .filters .to-home {
        border: transparent;
        box-shadow: none;
        text-decoration: underline;
        transition: .2s ease-in; 
    }

    .to-home:hover {
        color: var(--primary-color);
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
</style>