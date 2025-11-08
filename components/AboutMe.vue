<template>
  <section class="h-screen bg-light items-center text-dark p-2 flex flex-col">
    <section
      ref="intro1"
      class="p-2 rounded-lg border-2 border-dark w-3/4 h-auto m-4 opacity-0"
    >
      <p class="text-dark">Hi!</p>
      <p class="text-dark">Welcome to my website</p>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const intro1 = ref(null);

onMounted(() => {
  // 1️⃣ Fade-in animatie voor eerste blok
  gsap.fromTo(
    intro1.value,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: intro1.value,
        start: "top 80%", // fade-in als hij bijna in beeld komt
        end: "top 50%",
        scrub: true,
      },
    }
  );
});
</script>

<style scoped></style>
