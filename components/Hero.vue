<template>
  <section class="h-screen bg-dark pt-10">
    <section class="overflow-x-hidden flex flex-col w-5/6 m-auto pt-16">
      <section class="flex flex-wrap items center pb-16">
        <h1
          ref="sophia"
          class="text-light font-bold mr-64"
        >
          Sophia
        </h1>
        <section class="flex">
          <h1
            ref="van"
            class="text-light font-bold"
          >
            van
          </h1>
          <h1
            ref="lieshout"
            class="text-light font-bold pl-4 lg:pl-12"
          >
            Lieshout
          </h1>
        </section>
      </section>

      <h3
        ref="webdev"
        class="font-light text-light"
      >
        Web Developer
      </h3>
      <h3
        ref="uiux"
        class="font-light text-light"
      >
        UI/UX designer
      </h3>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import Nav from "./Nav.vue";

const sophia = ref(null);
const van = ref(null);
const lieshout = ref(null);
const webdev = ref(null);
const uiux = ref(null);

// onMounted(async () => {
//   await nextTick(); // zeker weten dat refs gevuld zijn

// const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

// tl.fromTo(sophia.value, { x: "-100vw" }, { x: "10vw" })
//   .fromTo(van.value, { x: "-100vw" }, { x: "40vw" }, "-=0.50")
//   .fromTo(lieshout.value, { x: "-100vw" }, { x: "58vw" }, "-=0.50")
//   .to(van.value, { y: -290 })
//   .to(lieshout.value, { y: -575 }, "-=1");

//   gsap.from([sophia.value, van.value, lieshout.value], {
//     x: "-100vw",
//     opacity: 1,
//     duration: 1,
//     stagger: 0.5,
//     ease: "power3.out",
//   });

//   gsap.fromTo(
//     [webdev.value, uiux.value],
//     {
//       opacity: 0,
//     },
//     { opacity: 1, duration: 1, delay: 2.5 }
//   );
// });
</script>

<style></style>
