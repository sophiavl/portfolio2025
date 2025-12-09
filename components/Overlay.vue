<template>
  <section
  
    class="w-screen h-screen absolute bg-black/75 flex flex-col justify-center items-center z-10"
  >
    <section
    ref="overlay"
      class="w-[90%] h-[90%] bg-[#FFF9EB] top-30 rounded-4xl flex flex-col items-center justify-start pt-6 p-[1.4rem] md:w-[80%] xl:w-[40%] xl:pb-24"
    >
      <section class="flex flex-col">
        <section class="w-full">
          <header class="flex w-full justify-between pb-2">
            <h1 class="text-[#00131B]">{{ date }}</h1>
            <button
              @click="onClick"
              class="text-[#120000]"
            >
              <Icon
                icon="material-symbols-light:close"
                width="36"
                height="36"
                style="color: #120000"
              />
            </button>
          </header>
          <div class="w-[95%] h-[0.05rem] bg-[#120000]/20"></div>
        </section>
        <section class="flex flex-col pb-4">
          <p
            v-if="mounted"
            class="text-[#00131B] text-left pt-4"
            v-html="text"
          ></p>
        </section>
      </section>
      <section>
        <section v-if="vakje === 'scratch'">
          <h2
            class="scratch"
            
          >
            Kras en vind!
          </h2>
          <VakjeSnow
            :link="link"
          ></VakjeSnow>
        </section>
        <VakjeDeur
          v-if="vakje === 'deur'"
          :link="link"
          :day="day"
          :height="height"
          ><slot></slot
        ></VakjeDeur>
        <Cadeau v-if="vakje === 'cadeau'" :link="link"></Cadeau>
        
      </section>
    </section>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";
import VakjeDeur from "./VakjeDeur.vue";
import Cadeau from "./Cadeau.vue";
import VakjeSnow from "./VakjeSnow.vue";

const overlay = ref(null);
const emit = defineEmits(["closeOverlay"]);
const props = defineProps({
  day: Number,
  date: String,
  text: String,
  link: String,
  vakje: String,
  height: String,
});

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
  requestAnimationFrame(() => {
    overlay.value.classList.add("bounce-in")
  })
});

function onClick() {
  emit("closeOverlay");
}

if (typeof window !== "undefined") {
  window.addEventListener("touchstart", function onFirstTouch() {
    document.body.classList.add("touch");
    window.removeEventListener("touchstart", onFirstTouch);
  });
}

if (typeof window !== "undefined") {
  window.addEventListener("touchstart", () => {
    document.body.classList.add("touch");
  });

  // Blur direct verwijderen op tap
  document.addEventListener("click", (e) => {
    const link = e.target.closest("#link");
    if (link && document.body.classList.contains("touch")) {
      link.style.filter = "none";
      link.style.transition = "filter 0.3s ease";
    }
  });
}

// onMounted(() => {
//   const link = document.getElementById("link");
//   let unlocked = false;

//   link.addEventListener("click", (e) => {
//     // Eerste klik: blur verwijderen → maar NIET navigeren
//     if (!unlocked) {
//       e.preventDefault(); // voorkomt directe navigate
//       link.style.filter = "none";
//       unlocked = true; // volgende klik = wel navigeren
//     }
//     // Tweede klik: normaal naar de link
//   });
// });
</script>

<style scoped>
a {
  color: #120000 !important;
}
#link {
  filter: blur(5px); /* voorbeeld startwaarde */
  transition: filter 1s ease; /* hier geef je de duur van 1s aan */
}

/* Desktop (hover) */
body:not(.touch) #link:hover {
  filter: none;
}

/* Touch: verwijder blur direct bij click */

header {
  line-height: 1.4;
}

.overlay {
  transform: scale(0.9);
  transition: transform 0.5s ease;
}

.bounce-in {
  animation: bounceIn 0.5s ease forwards;
}

@keyframes bounceIn {
  0% {
    transform: scale(1.15);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

.hidden-text {
  background-color: black; /* zwarte arcering */
  color: black; /* tekst onzichtbaar */
  transition: color 0.3s ease; /* smooth fade-in */
  padding: 2px 4px; /* optioneel: mooiere blokjes */
  border-radius: 3px;
  cursor: pointer;
}

.hidden-text:hover {
  color: white; /* tekst zichtbaar bij hover */
}

h1 {
  font-family: "InstrumentSerif";
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 0.17rem;
}

h2 {
  font-size: 1.1rem;
  font-family: "CothamSans";
  font-weight: normal;
}
h3 {
  font-size: 0.9rem;
  font-weight: normal;
  font-family: "CothamSans";
}

p {
  font-family: "Montserrat" !important;
  font-size: 0.85rem !important;
  font-weight: 300 !important;
  line-height: 1.3;
  color: #00131b;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

@media only screen and (max-height: 750px) {
  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 0.9rem;
  }
  h3 {
    font-size: 0.9rem;
  }
  p {
    font-size: 0.75rem !important;
  }
}

@media only screen and (min-width: 660px) {
  p {
    font-size: 1rem !important;
  }
}

@media only screen and (min-width: 900px) {
}
@media only screen and (min-width: 1250px) {
  p {
    font-size: 0.9rem;
    line-height: 1.4 !important;
  }

  h1 {
    font-size: 3rem !important;
  }
}
</style>
