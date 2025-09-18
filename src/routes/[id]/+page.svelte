<script>
    import AnimationText from "$lib/components/AnimationText.svelte";
    import StudentCard from "$lib/components/StudentCard.svelte";

    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const member = data.member; 
</script>

<svelte:head>
  <title>Squadpage | {member.name}</title>
</svelte:head>

<main id="main">
    <section>
        <a class="back" href="/">Terug</a> 
        <p class="breadcrumb-mobile"><a href="/">Squads</a> / <a href="/">2F</a>/ <a href="/{member.id}">{member.name}</a></p>
        <AnimationText tag={"h1"} text={member.name}/>
        <AnimationText className="year" tag={"p"} text="FDND jaar 2025/2026"/>
        <AnimationText tag={"p"} text="Squad: {member.squads[1].squad_id.name}"/>
        <AnimationText tag={"p"} text={member.bio}/>
    </section>

    <div class="wrapper-detail">
        <p><a href="/">Squads</a> / <a href="/">2F</a>/ <a href="/{member.id}">{member.name}</a></p>
        <StudentCard {member} />
        <!-- <figure>
            <img  src={member.avatar || '/no-userprofile.jpg'}  alt="Avatar van {member.name}" height="100" width="100">
            <figcaption>{member.name}</figcaption>
        </figure> -->
    </div>
</main>

<style>
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
        --section-radius: .5rem;
        --section-padding: .5em 1em;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        color: var(--primary-text);

        &:focus {
            outline: 3px dashed var(--primary-color);
            outline-offset: 4px;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: left;
        padding: 6em 2em 3em 2em;
        background-color: var(--secondary-color);
        position: relative;
        border-radius: 1em;

        @media screen and (min-width: 800px) {
            height: 100vh;
            flex-direction: row;
            padding: 2em 10em;
            justify-content: center;
            gap: 2em;
            align-items: center;
        }

        @media screen and (min-width: 1000px) {
            gap: 3em;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        gap: .8em;
        position: relative;
        z-index: 1;
        align-items: flex-start;

        @media screen and (min-width: 800px) {
            width: 50%;
            gap: 1.4em;
        }
    }

    section .back {
        text-decoration: none;
        padding: 1em;
        margin: 0 0 2em 0;
        border: 1px solid var(--primary-text) !important;
        border-radius: .3em;
        box-shadow: 
            /* box shadow color */
            -5px 5px 1px var(--primary-highlight),
            /* box shadow border */
            -5px 5px 0 1px var(--primary-text) !important
        ;
        background-color: var(--primary-highlight);
    }

    section a {
        text-decoration: none;
    }

    .breadcrumb-mobile {
        @media screen and (min-width: 800px) {
            display: none;
        }
    }

    :global(p) {
        max-width: 32em;
        line-height: 2em;
    }

    :global(.year) {
        font-size: 26px;
        margin: -.8em 0 0 0;
    }


    h1 {
        font-size: 35px;

        @media screen and (min-width: 800px) {
            font-size: 45px;
        }
    }

    .wrapper-detail p {
        margin: 0 0 1em 0;
        display: none;

        @media screen and (min-width: 800px) {
            display: block;
        }
    }

    .wrapper-detail p a{
        text-decoration: none;
    }

    /* figure {
        width: 100%;
        max-width: 20em;
        padding: 3em 2.5em 1.5em;
        border: 1px solid #050542;
        background-color: #D9D9D9;
        border-radius: .7em;
        position: relative;
        z-index: 1;
        box-shadow:  
            -5px 5px 1px var(--primary-highlight), 
            -5px 5px 0 1px var(--primary-text) 
         ; 

        @media screen and (min-width: 800px) {
            width: 25em;
            max-width: 15em;
        }

        @media screen and (min-width: 1000px) {
            width: 25em;
            min-width: 20em;
            max-width: 15em;
        }
    } */

    /* figcaption {
        font-size: 18px;
        font-weight: bold;
        padding: 1em 0 0 0;
    }

    img {
        width: 100%;
        height: 15em;
        object-fit: cover;
        border-radius: 0.4em;

        @media screen and (min-width: 800px) {
            height: 15.5em;
            width: 100%;
        }

        @media screen and (min-width: 1-00px) {
            height: 18.5em;
            width: 100%;
        }
    } */

</style>