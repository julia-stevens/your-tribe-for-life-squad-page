<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const members = data.members; 
</script>

<h1>Home pagina - dit is voor de test branch "Julia"</h1>

{#each members as member}
    <a href="/{member.id}">{member.name}</a>
{/each}

<style>
    a {
        display: block; 
    }
</style>