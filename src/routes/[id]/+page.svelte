<script>
    import AnimationText from "$lib/components/AnimationText.svelte";

    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const member = data.member; 
</script>

<main>
    <section>
        
        <a href="/">Terug naar de squad</a>
        <AnimationText tag={"h1"} text={member.name}/>
        <AnimationText className="year" tag={"p"} text="FDND jaar 2025/2026"/>
        <AnimationText tag={"p"} text="Squad: {member.squads[1].squad_id.name}"/>
        <AnimationText tag={"p"} text={member.bio}/>
    </section>

    <figure>
        <img src={member.avatar || '/no-userprofile.jpg'}  alt="Avatar van {member.name}" height="100" width="100">
        <figcaption>{member.name}</figcaption>
    </figure>
</main>

<style>
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
        --primary-color: #A675F4;
        --secondary-color: #ececec;
        --primary-highlight: #66e5bf;
        --primary-text: #050542;
        --secondary-text: #01A581;
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
        height: 100vh;
        gap: 2em;
        align-items: left;
        padding: 2em 1em;
        background-color: var(--secondary-color);
        position: relative;
        border-radius: 1em;

        @media screen and (min-width: 800px) {
            flex-direction: row;
            padding: 2em 9em;
            justify-content: center;
             gap: 10em;
              align-items: center;
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
            gap: 1.8em;
        }
    }

    a {
        text-decoration: none;
        padding: .4em .8em;
        border: 1px solid var(--primary-text);
        border-radius: 2em;
        font-weight: 600;
        transition: .2s ease-in-out;
        margin: 0 0 1em 0;

        &:hover {
            background-color: var(--primary-highlight);
            border: 1px solid var(--primary-highlight);
            transition: .2s ease-in-out;
        }

        &:focus {
            border: 1px solid var(--primary-text);
        }
    }

    p {
        max-width: 32em;
        line-height: 2em;
    }

    p.year {
        font-size: 26px;
        margin: -.8em 0 0 0;
    }


    h1 {
        font-size: 35px;

         @media screen and (min-width: 800px) {
             font-size: 45px;
        }
    }

    figure {
        width: 100%;
        max-width: 20em;
        padding: 3em 2.5em 1.5em;
        border: 1px solid #050542;
        background-color: #D9D9D9;
        border-radius: .7em;
        position: relative;
        z-index: 1;
        box-shadow:  
             /* box shadow color */ 
             -5px 5px 1px var(--primary-highlight), 
             /* box shadow border */ 
             -5px 5px 0 1px var(--primary-text) 
         ; 

        @media screen and (min-width: 800px) {
            width: 25em;
            min-width: 22em;
        }
    }

    figcaption {
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
            height: 18.5em;
            width: 100%;
        }
    }

</style>