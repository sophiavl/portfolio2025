<template>
  <section class="h-screen bg-light items-center text-dark p-2 flex flex-col">
    <section class="flex flex-col">
      <h2>About me</h2>
      <section
        ref="intro1"
        class="w-9/10 h-auto bg-section p-8"
      >
        <p>
          Hello! I’m Sophia, a front‑end developer and UI/UX designer from
          Leiden in the Netherlands. You’ll often find me breaking a
          sweat—whether it’s hitting the gym, going for a run, bouldering,
          crossfitting or trying out a new sport. My favorite vacations are
          spent hiking the mountain trails with breathtaking views.
        </p>
      </section>
      <section
        ref="intro2"
        class="w-9/10 h-auto bg-color-section bg-section p-8 mt-4"
      >
        <p>
          I’m inspired by the process that comes before programming interfaces.
          Reaching out to users, observing how they interact, and defining the
          core of their needs. I believe this is the most essential and often
          the most overlooked part of creating a great app or website. By truly
          understanding the problem, you can design something that’s not only
          functional and visually appealing, but also genuinely meaningful and
          enjoyable for the people who use it.
        </p>
      </section>
    </section>
    <div class="w-full h-[20rem] overflow-hidden mt-4">
      <img
        src="/public/images/Afbeelding van WhatsApp op 2025-08-25 om 13.10.18_be0c58be.jpg"
        alt="Picture of me"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const intro1 = ref(null);
const intro2 = ref(null);

onMounted(() => {
  // 1️⃣ Fade-in animatie voor eerste blok
  gsap.fromTo(
    intro1.value,
    {
      x: "-40rem",
    },
    {
      x: "0rem",
      duration: 1,
      scrollTrigger: {
        trigger: intro1.value,
        end: "top 100px",
        scrub: true,
        toggleActions: "play pause reverse reset",
      },
    }
  );

  // 2️⃣ Fade-in animatie voor tweede blok
  gsap.fromTo(
    intro2.value,
    {
      x: "-40rem",
    },
    {
      x: "0rem",
      duration: 1,
      scrollTrigger: {
        trigger: intro2.value,
        end: "top 100px",
        scrub: true,
        toggleActions: "play pause reverse reset",
      },
    }
  );
});
</script>

<style scoped></style>
