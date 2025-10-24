<template>
  <section
    ref="scroller"
    class="snap-y snap-mandatory"
  >
    <!-- <Nav></Nav> -->
    <Hero
      ref="hero"
      class="snap-start h-screen"
    ></Hero>

    <AboutMe
      ref="aboutme"
      class="snap-start h-screen"
    ></AboutMe>
    <Portfolio
      ref="portfolio"
      class="snap-start h-screen"
    ></Portfolio>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scroller = ref(null);
</script>

<style scoped></style>
