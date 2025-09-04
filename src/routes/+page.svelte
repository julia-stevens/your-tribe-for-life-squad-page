<!-- Data inladen -->
<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const members = data.members; 
    const defaultAvatar = "default-avatar.jpg"
</script>

<!-- HTML -->
<main>
<main class="vertical-layout">
    <!-- Introductie -->
    <section class="info">
        <div class="title">
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
    <section class="overview">
    <section class="overview vertical-layout">
        <div class="title">
            <h2>Overzicht studenten</h2>
        </div>
        <div class="filters">
            <p>Hier komen de filters</p>
        </div>
        <div class="list-students">
            <ul>
                {#each members as member}
                    <li>
                        <article>
                            <h3>{member.name}</h3>
                            <a href="/{member.id}">
                                <img 
                                src="link-icon.svg" 
                                alt="Link icoon">
                            </a>
                            <img 
                                src="{member.avatar || defaultAvatar}" 
                                alt="Avatar van {member.name}" 
                                width="50" 
                                height="50" 
                                style="object-fit:cover;">
                        </article>
                    </li>
                {/each}
            </ul>
        </div>
    </section>
</main>

<style>
    a {
        display: block; 
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
    }
</style>