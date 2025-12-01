<template>
  <div class="wrapper">
    <div
      class="content"
      ref="isOpen"
    >
      <a
        id="link"
        :href="link"
        target="_blank"
        ><p>{{ link }}</p></a
      >
    </div>
    <div
      class="front"
      ref="doorRef"
      @click="openDoor"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import gsap from "gsap";
const props = defineProps({
  link: String,
});

const isOpen = ref(false);
const doorRef = ref(null);

function openDoor() {
  isOpen.value = true;

  // Deur draait
  gsap.to(doorRef.value, {
    rotateY: -105,
    duration: 2,
    ease: "power3.inOut",
    transformOrigin: "left-center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
    z: -30,
  });

  // Pseudo-element roteren en meteen zichtbaar maken
  gsap.to(doorRef.value, {
    "--after-rotate": "90deg",
    duration: 1,
    ease: "power3.inOut",
  });

  // Snelle opacity fade-in
  gsap.to(doorRef.value, {
    "--after-opacity": 1,
    duration: 2, // sneller dan deur animatie
    ease: "power3.inOut",
  });
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 13rem;
  height: 8rem;
  perspective: 800px;
}

p {
  font-family: "Montserrat" !important;
  font-size: 0.85rem !important;
  font-weight: 300 !important;
  line-height: 1.3;
  color: #00131b;
}
.front {
  position: absolute;
  inset: 0; /* neemt exact alle ruimte in */
  background-color: #a31d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  width: 19rem;
  cursor: grabbing;
  transform-origin: left center;
  transform-style: preserve-3d;
}

/* LINKER ZIJDE (in het element, geen witruimte) */
.front::before {
  content: "";
  position: absolute;
  top: 0;
  right: 1px;
  width: 8px;
  height: 100%;
  background-color: #8a1616;
  transform-origin: right center;
  transform: rotateY(90deg);
}

.content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2eee7;
  border: 4px inset #f2eee7;
  width: 100%;
  height: 100%;
}

@media only screen and (max-height: 750px) {
  .wrapper {
    width: 12rem;
    height: 8rem;
  }
  p {
    font-size: 0.75rem !important;
  }
}

@media only screen and (min-width: 660px) {
  p {
    font-size: 1rem !important;
  }
  .wrapper {
    width: 18rem;
    height: 8rem;
  }
  .content {
    left: 1rem;
  }
}
@media only screen and (min-width: 660px) and (max-width: 900px) {
  .content {
    left: 0.25rem;
  }
}

@media only screen and (min-width: 900px) {
  content {
    left: 0;
  }
}
@media only screen and (min-width: 1250px) {
  p {
    font-size: 1.1rem;
    line-height: 1.9 !important;
  }

  h1 {
    font-size: 3rem !important;
  }
}
</style>
