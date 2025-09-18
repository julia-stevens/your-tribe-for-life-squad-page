<script>
    export let selectedClass;
</script>

<div class="title">
    <h2>Overzicht studenten {selectedClass}</h2>
    <p>Sorteer de studenten of ga naar een squad pagina</p>
</div>

<style>
        p {
            font-weight: 300; 
        }

        @media (min-width: 940px) {
        .title {
            gap: 0;
        }
    }
</style>