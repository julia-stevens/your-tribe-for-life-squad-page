<!-- Data inladen -->
<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const members = data.members; 
    const defaultAvatar = "default-avatar.jpg"
</script>

<!-- HTML -->
<main class="vertical-layout">
    <!-- Introductie -->
    <section class="info vertical-layout">
        <div class="title vertical-layout">
            <h1>Squadpage FDND</h1>
            <p>Tweedejaars studenten 2025/2026</p>
        </div>
        <div class="introduction">
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
        </div>
    </section>

    <!-- Overzicht met filters en lijst studenten -->
    <section class="overview vertical-layout">
        <div class="title">
            <h2>Overzicht studenten</h2>
        </div>
        <div class="filters">
            <p>Hier komen de filters</p>
            <div class="class">
                <p>
                    Kies je klas: 
                    <a href="/">2E</a>
                    of
                    <a href="/" class="active-link">2F</a>
                </p>
            </div>
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
                                    src="link-icon.svg" 
                                    alt="Link icoon"
                                    class="link-icon">
                                </a>
                            </div>
                            <div class="avatar">
                                <img 
                                    src="{member.avatar || defaultAvatar}" 
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
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

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

    .title p {
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

    .filters a {
        margin: 1rem;
        padding: 1rem;
    }

    .filters a:hover {
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
        border: 1px solid var(--primary-text);
        border-radius: var(--b-radius-small);
        box-shadow: 
            /* box shadow color */
            -5px 5px 1px var(--primary-highlight),
            /* box shadow border */
            -5px 5px 0 1px var(--primary-text)
        ;
        background-color: var(--primary-highlight);
    }
    }
</style>