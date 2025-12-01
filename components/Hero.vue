<template>
  <section class="h-screen flex flex-col">
    <Nav class="sticky top-0 z-50"></Nav>

    <!-- Naam + titels -->
    <section class="flex flex-col h-[60%] w-5/6 pl-8 pt-6 items-start">
      <section class="flex gap-3 lg:gap-6">
        <h1
          ref="sophia"
          class="text-darkPink font-bold"
        >
          Sophia
        </h1>
        <h1
          ref="van"
          class="text-darkPink font-bold"
        >
          van
        </h1>
        <h1
          ref="lieshout"
          class="text-darkPink font-bold"
        >
          Lieshout
        </h1>
      </section>
      <h3
        ref="webdev"
        class="font-light"
      >
        Web Developer
      </h3>
      <h3
        ref="uiux"
        class="font-light"
      >
        UI/UX designer
      </h3>
    </section>

    <!-- Secties -->
    <section class="flex flex-col h-[40%]">
      <!-- About me -->
      <section
        class="accordion-section h-[33.3%] w-full flex flex-col overflow-hidden bg-[#B691A1]"
      >
        <h2 class="text-light z-10 pl-8 pt-4">Coming soon...</h2>
        <div class="content flex absolute top-0 left-0 h-full">
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 1
          </div>
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 2
          </div>
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 3
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section
        class="accordion-section h-[33.3%] w-full flex flex-col overflow-hidden bg-[#824F63]"
      >
        <h2 class="text-light z-10"></h2>
        <div class="content flex absolute top-0 left-0 h-full">
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 1
          </div>
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 2
          </div>
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 3
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section
        class="accordion-section h-[33.3%] w-full flex flex-col overflow-hidden bg-[#30041A]"
      >
        <h2 class="text-light z-10"></h2>
        <div class="content flex absolute top-0 left-0 h-full">
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 1
          </div>
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 2
          </div>
          <div
            class="min-w-screen flex-shrink-0 flex items-center justify-center"
          >
            Over mij deel 3
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sophia = ref(null);
const van = ref(null);
const lieshout = ref(null);
const webdev = ref(null);
const uiux = ref(null);

onMounted(async () => {
  await nextTick();

  // Naam + titels animatie
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
  tl.fromTo(sophia.value, { x: "-100vw" }, { x: "0vw" })
    .fromTo(van.value, { x: "-100vw" }, { x: "0vw" }, "-=0.5")
    .fromTo(lieshout.value, { x: "-100vw" }, { x: "0vw" }, "-=0.5")
    .fromTo(
      [webdev.value, uiux.value],
      { opacity: 0 },
      { opacity: 1 },
      "+=0.5"
    );

  // ScrollTrigger voor alle secties
});
</script>

<style scoped>
.accordion-section {
  position: relative;
  width: 100%;
  height: 33vh; /* initieel klein */
  overflow: hidden;
  transition: height 0.3s ease;
}

.accordion-section h2 {
  position: relative;
  z-index: 10;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  opacity: 0;
}

.min-w-screen {
  min-width: 100vw;
  flex-shrink: 0;
}

.min-w-screen {
  min-width: 100vw;
  flex-shrink: 0;
}
</style>
