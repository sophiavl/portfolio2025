<template>
  <section class="min-h-screen flex flex-col bg-dark pt-10">
    <section class="flex flex-col w-5/6 m-auto pt-6 items-center">
      <!-- <img
        src="/public/images/bergen.jpg"
        alt="bergen"
      /> -->
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

    <!-- <section class="wave-section">
      <svg
        ref="projectsMountain"
        viewBox="0 0 2029 2687"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        class="wave-svg"
      >
        <path
          d="M0 3439V498.492C0 498.492 384.914 -5.44825 685.76 0.0445789C979.257 5.40326 1057.28 474.289 1350.31 498.492C1632.26 521.781 2029 143.892 2029 143.892V3439H0Z"
          fill="currentcolor"
        />
      </svg>
      <svg
        ref="aboutmeMountain"
        viewBox="0 0 2029 2758"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        class="wave-svg"
      >
        <path
          d="M0 0C0 0 372.755 585.448 664.591 670.61C1020.99 774.611 1204.23 57.2049 1556.98 203.072C1758.25 286.301 2029 670.61 2029 670.61V2715.5L0 2758V0Z"
          fill="currentcolor"
        />
      </svg>
      <svg
        ref="contactMountain"
        viewBox="0 0 2029 1527"
        preserveAspectRatio="YMid meet"
        xmlns="http://www.w3.org/2000/svg"
        class="wave-svg"
      >
        <path
          d="M0 267.016C0 267.016 448.795 0 772.284 0C1095.77 0 1221.79 286.18 1544.57 267.016C1724.25 256.348 2029 156.455 2029 156.455V1527H0V267.016Z"
          fill="currentcolor"
        />
      </svg>
    </section> -->

    <section class="layer-container pt-48">
      <section class="relative w-[100%] h-auto">
        <!-- <svg
          ref="projects-layer"
          class="layer"
          viewBox="0 0 2029 1527"
        >
          <path
            d="M0 3439V498.492C0 498.492 384.914 -5.44825 685.76 0.0445789C979.257 5.40326 1057.28 474.289 1350.31 498.492C1632.26 521.781 2029 143.892 2029 143.892V3439H0Z"
            fill="#CCBCC3"
          />
        </svg> -->
        <h2 class="absolute right-[60rem] top-[8rem] text-red-400 z-10">
          projects
        </h2>
      </section>

      <!-- <section class="relative w-[100%] h-auto">
        <svg
          ref="aboutme-layer"
          class="layer"
          viewBox="0 0 2029 1527"
        >
          <path
            d="M0 0C0 0 372.755 585.448 664.591 670.61C1020.99 774.611 1204.23 57.2049 1556.98 203.072C1758.25 286.301 2029 670.61 2029 670.61V2715.5L0 2758V0Z"
            fill="#6B6165"
          />
        </svg>
        <h2 class="absolute right-[60rem] top-[8rem] text-red-400 z-10">
          About me
        </h2>
      </section>

      <section class="w-[100%] h-auto">
        <svg
          ref="contact-layer"
          class="layer"
          viewBox="0 0 2029 1527"
        >
          <path
            d="M0 267.016C0 267.016 448.795 0 772.284 0C1095.77 0 1221.79 286.18 1544.57 267.016C1724.25 256.348 2029 156.455 2029 156.455V1527H0V267.016Z"
            fill="#1D1B1C"
          />
        </svg>
        <h2 class="absolute right-[60rem] top-[8rem] text-red-400 z-10">
          Contact
        </h2>
      </section> -->
    </section>
    <section class="bg-[#1D1B1C] h-[10rem] w-full"></section>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projectSVG = ref(null);

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
        start: "top 80%", // wanneer flower3 midden in beeld komt
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
        start: "top 90%", // wanneer flower3 midden in beeld komt
        end: "bottom top", // einde iets verder op scroll
        scrub: 2, // vertraagde, vloeiende overgang (vergelijkbaar met 2 seconden)
      },
    }
  );
});
</script>

<style scoped>
.wave-section {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

/* SVG positioneren zodat de golf de bovenkant vormt */
.wave-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: auto; /* kan later via GSAP geschaald worden */
  height: 100%; /* vult de container */
}

.wave-svg:nth-child(1) {
  z-index: 1;
  color: yellow;
}
.wave-svg:nth-child(2) {
  z-index: 2;
  color: blueviolet;
}
.wave-svg:nth-child(3) {
  z-index: 3;
  color: aquamarine;
}

.content {
  position: relative;
  z-index: 2;
  padding: 3rem 1.5rem 4rem;
  background: transparent;
}

.layer-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.layer {
  position: absolute;
  display: flex;
  top: 50;
  left: 0;
  width: 100%; /* initieel, kan je later via GSAP schalen */
  height: auto; /* initieel, ongeveer 1/3 van het scherm */
  cursor: pointer;
  transition: all 0.5s ease; /* fallback */
}

.layer:nth-child(1) {
  z-index: 1;
  color: aquamarine;
}
.layer:nth-child(2) {
  z-index: 2;
  color: rgb(43, 46, 152);
  transform: translateY(5%);
}
.layer:nth-child(3) {
  z-index: 3;
  color: rgb(165, 31, 91);
  transform: translateY(40%);
}
</style>
