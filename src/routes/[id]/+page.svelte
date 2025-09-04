<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const member = data.member; 
</script>

<a href="/">Terug naar home</a>
<h1>Detailpagina van {member.name}</h1>
<p>FDND jaar 2025/2026</p>
<p>{member.squads[1].squad_id.name}</p>
<p>{member.bio}</p>
<img src="https://fdnd.directus.app/assets/{member.mugshot}" alt="Mugshot van {member.name}" style="width:200px; height:200px; object-fit: cover;">