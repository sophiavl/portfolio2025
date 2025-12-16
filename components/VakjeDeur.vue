<template>
  <div class="wrapper" :style="{ height: height }">
    <div class="content" ref="isOpen">
      <a id="link" :href="link" target="_blank">
        <p class="text-center"><u>Klik!</u></p>
      </a>
    </div>
    <div class="front" :style="{ height: height }" ref="doorRef" @click="openDoor">
      <h1 class="vakje">{{ day }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import gsap from "gsap";
const props = defineProps({
  day: Number,
  link: String,
  height: { String, default: "7rem" }
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
  height: 7rem;
  perspective: 800px;
}

p {
  font-family: "Montserrat" !important;
  font-size: 0.85rem !important;
  font-weight: 300 !important;
  line-height: 1.3;
  color: #00131b;
}

.vakje {
  font-size: 3rem !important;
  color: #fef9e1;
  font-family: "InstrumentSerif";
  font-weight: bold;
}

.front {
  position: absolute;
  inset: 0;
  /* neemt exact alle ruimte in */
  background-color: #a31d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  width: 13rem;
  cursor: grabbing;
  transform-origin: left center;
  transform-style: preserve-3d;
}

/* LINKER ZIJDE (in het element, geen witruimte) */
.front::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
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

  .front {
    width: 12rem;
  }

  p {
    font-size: 0.75rem !important;
  }
}

@media only screen and (min-width: 660px) {
  p {
    font-size: 1rem !important;
  }

  .front {
    left: 13px;
    width: 18rem;
  }

  .wrapper {
    width: 18rem;
    height: 8rem;
  }

  .content {
    left: 1rem;
  }
}

@media only screen and (min-width: 660px) and (max-width: 900px) {}

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
