<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  export let tag = "section"; // wrapper element
  export let className = "";

  onMount(() => {
    const section = document.querySelector(".wrapper");

    // animatie: van 100px naar beneden naar originele positie
    gsap.fromTo(
      section,
      { y: 1000, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  });
</script>

<svelte:element class={`bounce-section ${className}`} this={tag}>
    <div class="wrapper">
        <slot/>
    </div>
</svelte:element>

<style>
  .bounce-section {
    overflow: hidden;
    position: relative; 
  }

  .wrapper {
    overflow: hidden;
    display: inline-block;
  }
</style>