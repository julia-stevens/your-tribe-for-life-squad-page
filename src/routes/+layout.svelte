<script>
	import favicon from '$lib/assets/fav-icon-fdnd.svg';
	import Title from '$lib/+title.svelte';
    
	let { children } = $props();

    import { onNavigate } from '$app/navigation';

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<svelte:head>
	<link rel="icon" href={favicon}>
    <title>Squadpage Jaar 2</title>
</svelte:head>

<a href="#main" class="skip-link">Ga naar content</a>

<header> 
	    <a class="header-logo-hva" href="/"><img src="../hva-blank.svg" alt="naar de homepagina" height="50"></a>
	    <a href="/"><img class="header-logo" src="../fdnd.png" alt="FDND" width="100" height="50" style="object-fit: contain;"></a>
	    <a href="https://programma.fdnd.nl/" class="home">Bekijk programma</a>
</header>

{@render children?.()}

<footer>
    <img class="header-logo" src="../hva-blank.svg" alt="naar de homepagina" height="50">
    <h2>Creating Tomorrow</h2>
	<p>Amber, Stella & Julia | FDND 2025/2026</p>
</footer>

<style>
* {
    box-sizing: border-box;
    margin: 0; 
    padding: 0; 
}

*:focus {
            outline: 3px dashed var(--primary-color);
            outline-offset: 4px;
}

:global(body) {
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
    padding: 1em;
    margin: 0;
}

.skip-link {
    text-decoration: none;
    color: inherit;
    background-color: var(--primary-highlight);
    border: 1px solid var(--primary-text);
    padding: .5em 1em;
    border-radius: 5px;
    transition: .3s ease-in;
    position: absolute;
    top: 3rem;
    left: -10rem;
}

.skip-link:focus-visible {
    left: 5rem;   
    z-index: 9999; 
}

header {
    background-color: var(--primary-color);
    color: var(--primary-text);
    border-radius: 0 0 var(--section-radius) var(--section-radius);
    padding: var(--section-padding);
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%); 
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    gap: 2rem;
    width: 93%;

    @media screen and (min-width: 800px) {
        width: 75%;
        margin: auto;
    }
}

    .header-logo {
        width: 5em;
    }

    .header-logo-hva {
        display: none;

        @media screen and (min-width: 800px) {
            display: block;
        }
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
        margin: -.5em 0 0 0;

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
        background-color: var(--primary-color);
        color: var(--primary-text);
        border-radius: var(--section-radius) var(--section-radius) 0 0;
        padding: 3em 0 1em 0em;

        /* Flex */
        display: flex; 
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        flex-direction: column;
        margin: auto;

        width: 93%;

        @media screen and (min-width: 800px) {
            width: 75%;
            margin: auto;
        }

        p {
            text-align: center;
        }

        @media screen and (min-width: 800px) {
            flex-direction: row;
        }
    }

    @view-transition {
        navigation: auto; 
    }
    
    /* Oude pagina schuift omhoog */
    @keyframes slide-old-up-stack {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }

    /* Nieuwe pagina schuift omhoog samen met de oude pagina */
    @keyframes slide-new-up-stack {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }

    /* Animatie toepassen */
    :root::view-transition-old(root) {
        animation: 700ms cubic-bezier(0.4, 0, 0.2, 1) both slide-old-up-stack;
        
    }

    :root::view-transition-new(root) {
        animation: 700ms cubic-bezier(0.4, 0, 0.2, 1) both slide-new-up-stack;
    }
</style>