<script>
	import favicon from '$lib/assets/favicon.svg';
	import Title from '$lib/+title.svelte';
	import '../styles/stylesheet.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<main>
	<header> 
	<img class="header-logo" src="../assets/hva-blank.svg" alt="naar de homepagina">
	<img class="header-logo" src="../assets/fdnd.png" alt="FDND">
	<a href="https://programma.fdnd.nl/" class="home">Bekijk het programma</a>
    </header>

{@render children?.()}
</main>


<footer>
	<p>Amber, Stella & Julia | FDND 2025/2026</p>
</footer>