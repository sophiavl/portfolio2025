<template>
  <section
    ref="scroller"
    class="snap-y snap-mandatory justify-center"
  >
    <Nav class="sticky top-0 z-50"></Nav>
    <!-- <Nav></Nav> -->
    <Hero
      ref="hero"
      class="snap-start h-lvh z-0"
    ></Hero>
    <!-- 
    <Portfolio
      ref="portfolio"
      class="snap-start h-lvh"
    ></Portfolio> -->
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scroller = ref(null);
</script>

<style scoped></style>
