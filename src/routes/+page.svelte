<!-- Data inladen -->
<script>
    import AnimationText from "$lib/components/AnimationText.svelte";
    import AnimationSection from "$lib/components/AnimationSection.svelte";
    import StudentCard from "$lib/components/StudentCard.svelte";

    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const members = data.members; 
    const sort = data.sort; 
    const triggers = members.map((_, i) => `--trigger${i}`).join(", ");

    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    function handleChange(event) {
        const value = event.target.value;
        const url = new URL($page.url);
        url.searchParams.set("sort", value); // update sort met value uit het formulier
        goto(url.toString()); // ga naar nieuwe url
    }
</script>

<!-- HTML -->
<main class="vertical-layout" id="main">
    <!-- Introductie -->
    <section class="info vertical-layout">
        <div class="title vertical-layout">
            <AnimationText tag={"h1"} text="Squadpage FDND"/>
            <AnimationText tag={"p"} className="sub-title" text="Tweedejaars studenten 2025/2026"/>
        </div>
        <div class="introduction">
            <AnimationText tag={"p"} text="Welkom op de homepagina van FDND Jaar 2. Hier vind je een overzicht van alle squads met hun studenten en docenten. Klik op een squad of student/docent om meer te ontdekken en leer FDND Jaar 2 kennen!"/>
        </div>
    </section>

    <!-- Overzicht met filters en lijst studenten -->
    <section class="overview vertical-layout">
        <div class="sort-and-links">
            <div class="title vertical-layout">
            <AnimationText tag={"h2"} text="Overzicht studenten"/>
            <AnimationText tag={"p"} text="Sorteer de studenten of ga naar een squad pagina"/>
            </div>
            <div class="filters vertical-layout">
                <div class="class">
                    <p class="vertical-layout">
                        <span class="span-classes vertical-layout">
                            <a href="/squad/2E">Ga naar squad 2E</a>
                            <!-- of -->
                            <a href="/squad/2F">Ga naar squad 2F</a>
                        </span>
                    </p>
                </div>
                <label for="sort"><span>Sorteer</span></label>
                <form id="sort">
                    <select name="sort" onchange={handleChange}>
                        <option value="name" selected={sort === "name"}>Sorteer A-Z</option>
                        <option value="age" selected={sort === "age"}>Sorteer op leeftijd</option>
                    </select>
                </form>
            </div>
        </div>
        <div 
            class="list-students" 
            style={`timeline-scope: ${triggers}`}>
            <div class="scroll-triggers">
                {#each members as member, i}
                    <div class="trigger" style={`view-timeline: --trigger${i}`}>
                        Trigger {i}
                    </div>
                {/each}
            </div>
            <ul>
                {#each members as member, i}
                <li
                    style={`
                        --z-index: ${members.length - i}; 
                        --animation-timeline: --trigger${i}`}
                >
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
    :global(h1, h2, p) {
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
    :global(.introduction p) {
        max-width: 420px;
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

    .filters a, select{
        width: fit-content;
        padding: 1rem;
        border: 1px solid var(--primary-text);
        border-radius: var(--b-radius-small);
        box-shadow: 
            /* box shadow color */
            -5px 5px 1px var(--secondary-color),
            /* box shadow border */
            -5px 5px 0 1px var(--primary-text); 
    }

    .filters p {
        margin: 1.5em 0;
    }

    .overview {
        gap: 2rem;
    }

    .list-students {
        gap: 1rem;
        position: relative;

        @media (min-width: 1216px) {
            @supports (animation-timeline: view()) {
                @media (prefers-reduced-motion: no-preference) {
                    height: 1000vh;
                }
            }
        }
    }

    ul, li {
        width: fit-content;
    }

    ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
        gap: 2rem;
        justify-items: center;
    }

    /* Scroll triggers */
    .scroll-triggers {
        position: absolute;
        top: 0%;
        display: flex;
        flex-direction: column;
        opacity: 0;
    }

    .scroll-triggers div {
        width: 100%;
        flex-grow: 1;
        writing-mode: vertical-rl;
        padding: 0.2em;
        text-align: center;
        min-height: 15vh;
    }

    /* Media queries */
    @media (min-width: 940px) {
        .info {
            flex-direction: row; 
            justify-content: space-between;
            align-items: center;
        }

        .title {
            gap: 0;
        }

        .filters {
            flex-direction: row; 
            align-items: center;
        }

        .span-classes {
            flex-direction: row;
        }
    }

    @media (min-width: 1216px) {
        .info {
            @supports (animation-timeline: view()) {
                position: sticky;
                top: 10%;
            }
        }

        .sort-and-links {
            @supports (animation-timeline: view()) {
                position: sticky;
                top: 30%;
            }    
        }

        ul {
            @supports (animation-timeline: view()) {
                position: sticky;
                top: 55%;
                justify-items: start;
            }
        }

        li {
            @supports (animation-timeline: view()) {
                position: absolute;
                z-index: var(--z-index);
                background-color: var(--secondary-color);
                
                @media (prefers-reduced-motion: no-preference) {
                    animation-timeline: var(--animation-timeline);
                    animation-name: move-right;
                    animation-range: entry 50vh exit;
                    animation-fill-mode: both;
                }
            }
        }
    }

    /* Keyframes */
    @keyframes move-right {
        0% {
            transform: translate(0%, 0%);
            opacity: 1;
        }
        100% {
            transform: translate(300%, 00%);
            opacity: 0;
        }
    }
</style>