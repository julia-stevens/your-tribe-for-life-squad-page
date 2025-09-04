<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const member = data.member; 
</script>


<main>
    <section>
        <a href="/">Terug naar de squad</a>
        <h1>{member.name}</h1>
        <p class="year">FDND jaar 2025/2026</p>
        <p>Squad: {member.squads[1].squad_id.name}</p>
        <p>{member.bio}</p>
    </section>

    <figure>
        <img src="https://fdnd.directus.app/assets/{member.mugshot}" alt="Mugshot van {member.name}" height="100" width="100">
        <figcaption>{member.name}</figcaption>
    </figure>
</main>
