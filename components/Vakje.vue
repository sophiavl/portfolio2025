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

  gsap.to(doorRef.value, {
    rotateY: -110,
    duration: 2,
    ease: "power3.inOut",
    transformOrigin: "left-center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
    z: -30,
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
  cursor: grabbing;
  transform-origin: left center;
  transform-style: preserve-3d;
}

/* LINKER ZIJDE (in het element, geen witruimte) */
.front::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 0; /* NIET NEGATIEF */
  width: 10px;
  height: 98%;
  background-color: #a31d1d;
  transform-origin: right center;
  transform: rotateY(90deg);
}

/* RECHTER ZIJDE */
.front::after {
  content: "";
  position: absolute;
  top: 2;
  right: -10px; /* NIET NEGATIEF */
  width: 8px;
  height: 99%;
  background-color: #8a1616;
  transform-origin: left center;
  transform: rotateY(90deg);
}

.content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2eee7;
  border: 4px inset;
  width: 100%;
  height: 100%;
}

@media only screen and (max-height: 750px) {
  .wrapper {
    width: 13rem;
    height: 8rem;
  }
  p {
    font-size: 0.8rem !important;
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
}

@media only screen and (min-width: 900px) {
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
