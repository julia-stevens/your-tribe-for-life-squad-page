<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const members = data.members; 
</script>

{#each members as member}
    <a href="/{member.id}">{member.name}</a>
{/each}

<style>
    a {
        display: block; 
    }
</style>