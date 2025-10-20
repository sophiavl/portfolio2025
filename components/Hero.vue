<template>
  <section class="h-screen bg-dark pt-10">
    <Nav></Nav>
    <h2>Front-end Developer</h2>
    <h2>UI/UX designer</h2>
    <section class="overflow-x-hidden flex flex-col w-5/6 m-auto">
      <section class="flex justify-between items center gap-12">
        <h1
          ref="sophia"
          class="text-[12rem] text-light font-bold"
        >
          Sophia
        </h1>
        <h1
          ref="van"
          class="text-[12rem] text-light font-bold"
        >
          van
        </h1>
        <h1
          ref="lieshout"
          class="text-[12rem] text-light font-bold"
        >
          Lieshout
        </h1>
      </section>

      <h2
        ref="webdev"
        class="text-[3rem] font-light text-light"
      >
        Web Developer
      </h2>
      <h2
        ref="uiux"
        class="text-[3rem] font-light text-light"
      >
        UI/UX designer
      </h2>
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

onMounted(async () => {
  await nextTick(); // zeker weten dat refs gevuld zijn

  // const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

  // tl.fromTo(sophia.value, { x: "-100vw" }, { x: "10vw" })
  //   .fromTo(van.value, { x: "-100vw" }, { x: "40vw" }, "-=0.50")
  //   .fromTo(lieshout.value, { x: "-100vw" }, { x: "58vw" }, "-=0.50")
  //   .to(van.value, { y: -290 })
  //   .to(lieshout.value, { y: -575 }, "-=1");

  gsap.from([sophia.value, van.value, lieshout.value], {
    x: "-100vw",
    opacity: 1,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
  });

  gsap.fromTo(
    [webdev.value, uiux.value],
    {
      opacity: 0,
    },
    { opacity: 1, duration: 1, delay: 2.5 }
  );
});
</script>
