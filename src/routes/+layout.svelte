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
	<Title title="FDND" />
    </header>

<h1> Squadpage FDND</h1>
<h2>Tweedejaars Studenten 2025/2026</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam,
 quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

<h3>Overzicht Studenten</h3>

{@render children?.()}
</main>


<footer>
	<p>Amber, Stella & Julia | FDND 2025/2026</p>
</footer>