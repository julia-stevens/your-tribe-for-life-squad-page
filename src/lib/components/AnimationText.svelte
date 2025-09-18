<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import SplitText from "gsap/SplitText";

  export let tag = 'h1';
  export let text = "";

  // onMount voerd de onderstaande code pas uit als een element in de browser zichtbaar is
  onMount(() => {
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        // Eerst de tekst splitsen in letters
        const bounceText = new SplitText(".bounce-text", { 
          type: "chars,words",
          aria: "hidden"
        });

        // Array met alle losse letters
        const chars = bounceText.chars;

        // Animatie
        gsap.fromTo(chars, 
            { 
                y: 115 // zin start 115px naar beneden
            }, 
            { 
                y: 0, // zin gaat naar 0px (wordt dus weer zichtbaar)
                stagger: 0.4 / chars.length, // berekening om de animatie lengte zinnen
                duration: 0.5, // animatie duurt 0.5s
                delay: .5,
            }
        );
    });
  });
</script>

<!-- <span class="bounce-text">{text}</span> -->

<svelte:element class="bounce-text" this={tag}>
	{text}
</svelte:element>

<!-- <h1>{text}</h1> -->

<style>
  .bounce-text {
    display: inline-block;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .char {
    display: inline-block;
    will-change: transform;
  }
  h1 {
        font-size: clamp(2rem, 1.4252rem + 2.4664vw, 3rem);
        margin: 0;
    }

  h2 {
    font-size: clamp(1rem, 1.116rem + 1.7937vw, 1.5rem);
    margin: 0;
  }

  h2 {
    font-size: clamp(1rem, 1.116rem + 1.7937vw, 1.5rem);
    margin: 0;
  }

  h3 {
    font-size: clamp(1rem, 1.116rem + 1.7937vw, 1.5rem);
    margin: 0;
  }

  h4 {
    font-size: clamp(1rem, 1.116rem + 1.7937vw, 1.5rem);
    margin: 0;
  }

  h5 {
    font-size: clamp(1rem, 1.116rem + 1.7937vw, 1.5rem);
    margin: 0;
  }

  h6 {
    font-size: clamp(1rem, 1.116rem + 1.7937vw, 1.5rem);
    margin: 0;
  }

  p {
    font-weight: 300;
    margin: 0;
  }
</style>