<script>
	import favicon from '$lib/assets/favicon.svg';
	import Title from '$lib/+title.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<main>
	<header> 
	<img class="header-logo" src="hva-blank.svg" alt="naar de homepagina" width="100" height="50">
	<img class="header-logo" src="fdnd.png" alt="FDND" width="100" height="50" style="object-fit: contain;">
	<a href="https://programma.fdnd.nl/" class="home">Bekijk het programma</a>
    </header>

{@render children?.()}
</main>


<footer>
	<p>Amber, Stella & Julia | FDND 2025/2026</p>
</footer>

<style>
	* {
    box-sizing: border-box;
    margin: 0; 
    padding: 0; 
}

main {
    --primary-color: #A675F4;
    --secondary-color:  #ececec;
	--primary-highlight: #66e5bf;
    --primary-text: #050542;
	--secondary-text: #01A581;
    --section-radius: .5rem;
    --section-padding: .5em 1em;

    font-family: "Open Sans", serif;
    font-size: 16px; 
	background-color: var(--primary-color);
    

}

main {

    background-color: var(--secondary-color);
    border: #A675F4 20px solid;
}

header {
    background-color: var(--primary-color);
    color: var(--primary-text);
    border-radius: 0 0 var(--section-radius) var(--section-radius);
    padding: var(--section-padding);
    margin-left: 15%;
    position: sticky; 
    width: 70%;
    top: 0;
    z-index: 99;

    /* Flex */
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

    .header-logo {
        width: 30%;
    }

     .home {
        text-decoration: none;
        background-color: var(--primary-text);
        color: var(--secondary-color);
        padding: .4em .8em;
        border: 1px solid var(--primary-text);
        border-radius: .5em;
        font-weight: 600;
        transition: .2s ease-in-out;
        margin: 0 0 1em 0;

        box-shadow:
            -5px 5px 1px var(--primary-highlight),
            -5px 5px 0 1px var(--primary-text)
        ;

        &:hover {
            background-color: var(--primary-highlight);
            border: 1px solid var(--primary-text);
            box-shadow: -5px 5px 1px var(--primary-text) ;
            color: var(--primary-text);
            transition: .3s ease-in-out;
        }

        &:focus {
            border: 1px solid var(--primary-text);
        }
    }

    footer {
         display: flex; 
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-direction: column;
    }
</style>