<template>
  <section
    ref="scroller"
    class="h-screen overflow-y-scroll snap-y snap-mandatory"
  >
    <Nav></Nav>
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
import Hero from "~/components/Hero.vue";
import AboutMe from "~/components/AboutMe.vue";
import Portfolio from "~/components/Portfolio.vue";
import Nav from "~/components/Nav.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";

const hero = ref(null);
const aboutme = ref(null);
const portfolio = ref(null);

onMounted(async () => {
  await nextTick();

  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

  gsap.to(aboutme.value, {
    scrollTrigger: aboutme.value,
    x: 500,
  });
});
</script>

<style scoped></style>
