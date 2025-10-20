<template>
  <section ref="scroller">
    <Hero class="snap-start h-screen"></Hero>
    <AboutMe class="snap-start h-screen"></AboutMe>
    <Portfolio class="snap-start h-screen"></Portfolio>
  </section>
</template>

<script setup>
import Hero from "~/components/Hero.vue";
import AboutMe from "~/components/AboutMe.vue";
import Portfolio from "~/components/Portfolio.vue";
import Nav from "~/components/Nav.vue";
</script>

<style scoped></style>
