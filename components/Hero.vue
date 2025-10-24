<template>
  <section class="h-screen bg-dark pt-10">
    <section class="overflow-x-hidden flex flex-col w-5/6 m-auto pt-16">
      <section class="flex items-start flex-col pb-12">
        <h1
          ref="sophia"
          class="text-light font-bold"
        >
          Sophia
        </h1>

        <section class="flex flex-col lg:flex-row">
          <h1
            ref="van"
            class="text-light font-bold lg: pr-12"
          >
            van
          </h1>
          <h1
            ref="lieshout"
            class="text-light font-bold"
          >
            Lieshout
          </h1>
        </section>
      </section>

      <h3
        ref="webdev"
        class="font-light text-light pl-4"
      >
        Web Developer
      </h3>
      <h3
        ref="uiux"
        class="font-light text-light pl-4"
      >
        UI/UX designer
      </h3>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import Nav from "./Nav.vue";

const sophia = ref(null);
const van = ref(null);
const lieshout = ref(null);
const webdev = ref(null);
const uiux = ref(null);

onMounted(async () => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

  tl.fromTo(sophia.value, { x: "-100vw" }, { x: "1vw" })
    .fromTo(van.value, { x: "-100vw" }, { x: "1vw" }, "-=0.5")
    .fromTo(lieshout.value, { x: "-100vw" }, { x: "1vw" }, "-=0.5")

    .fromTo(
      [webdev.value, uiux.value],
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "+=0.5"
    );
});
</script>

<style></style>
