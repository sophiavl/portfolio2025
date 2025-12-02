<template>
  <section
    ref="scroller"
    class="snap-y snap-mandatory justify-center"
  >
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
import { Analytics } from "@vercel/analytics/nuxt";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scroller = ref(null);
</script>

<style scoped></style>
