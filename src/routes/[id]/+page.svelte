<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const member = data.member; 
</script>

<a href="/">Terug naar home</a>
<h1>Detailpagina van {member.name}</h1>
<p>test</p>