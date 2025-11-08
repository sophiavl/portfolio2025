<template>
  <section class="min-h-screen bg-dark pt-10">
    <section class="flex flex-col w-5/6 m-auto pt-6 items-center">
      <section class="flex items-start justify-center gap-3">
        <h1
          ref="sophia"
          class="text-light font-bold"
        >
          Sophia
        </h1>
        <h1
          ref="van"
          class="text-light font-bold"
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

    <section
      ref="flowerSection"
      class="flex gap-6 justify-center mt-40"
    >
      <img
        src="/images/bloemetje.svg"
        alt="bloemetje"
        class="max-w-[5rem]"
        ref="flower1"
      />
      <img
        src="/images/bloemetje.svg"
        alt="bloemetje"
        class="max-w-[5rem]"
        ref="flower2"
      />
      <img
        src="/images/bloemetje.svg"
        alt="bloemetje"
        class="max-w-[5rem]"
        ref="flower3"
      />
    </section>
    <section
      ref="intro1"
      class="p-2 rounded-lg border-2 border-light w-3/4 h-auto m-auto mt-12"
    >
      <p class="text-light">Hi!</p>
      <p class="text-light">Welcome to my website...</p>
    </section>

    <section
      ref="intro2"
      class="p-2 rounded-lg border-2 border-light w-3/4 h-auto m-auto mt-12"
    >
      <p class="text-light">
        I'm Sophia van Lieshout and I am a UI/UX designer and front-end
        developer
      </p>
    </section>

    <img
      src="/public/images/sophia.jpg"
      alt="sophia"
      class="w-full h-auto object-contain mt-48"
    />
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
const intro1 = ref(null);
const intro2 = ref(null);

const flowerSection = ref(null);
const flower1 = ref(null);
const flower2 = ref(null);
const flower3 = ref(null);

onMounted(async () => {
  await nextTick();

  // Naam + titels animatie
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

  tl.fromTo(sophia.value, { x: "-100vw" }, { x: "0vw" })
    .fromTo(van.value, { x: "-100vw" }, { x: "0vw" }, "-=0.5")
    .fromTo(lieshout.value, { x: "-100vw" }, { x: "0vw" }, "-=0.5")
    .fromTo([webdev.value, uiux.value], { opacity: 0 }, { opacity: 1 }, "+=0.5")
    .fromTo(
      flower1.value,
      { rotation: 0 },
      {
        rotation: 360,
        scrollTrigger: {
          trigger: flower1.value,
          start: "top 20%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    )
    .fromTo(
      flower2.value,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 3,
        scrollTrigger: {
          trigger: flower2.value,
          start: "top 20%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    )
    .fromTo(
      flower3.value,
      { rotation: 0 },
      {
        rotation: 360,
        scrollTrigger: {
          trigger: flower3.value,
          start: "top 20%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

  gsap.fromTo(
    intro1.value,
    { filter: "blur(8px)" },
    {
      filter: "blur(0px)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: flower3.value, // start na de bloemen
        start: "top center", // wanneer flower3 midden in beeld komt
        end: "bottom top", // einde iets verder op scroll
        scrub: 2, // vertraagde, vloeiende overgang (vergelijkbaar met 2 seconden)
      },
    }
  );

  gsap.fromTo(
    intro2.value,
    { filter: "blur(8px)" },
    {
      filter: "blur(0px)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: intro1.value, // start na de bloemen
        start: "top center", // wanneer flower3 midden in beeld komt
        end: "bottom top", // einde iets verder op scroll
        scrub: 2, // vertraagde, vloeiende overgang (vergelijkbaar met 2 seconden)
      },
    }
  );
});
</script>
