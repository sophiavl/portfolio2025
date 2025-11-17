<template>
  <section
    class="w-screen h-screen absolute bg-black/75 flex flex-col justify-center items-center"
  >
    <section
      class="w-[90%] h-[90%] bg-[#FFF9EB] top-30 rounded-4xl flex flex-col justify-between items-center pt-6 p-[2rem]"
    >
      <section class="flex flex-col justify-between">
        <header class="flex flex-col w-full items-start pb-4">
          <section class="flex w-full justify-between">
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
          </section>
          <div class="w-[95%] h-[0.05rem] bg-[#120000]/20"></div>
        </header>
        <section class="flex flex-col gap-4">
          <p
            class="text-[#00131B] text-left"
            v-html="text"
          ></p>
        </section>
      </section>
      <section
        class="bg-[#3B7B61] w-full h-10 mt-6 flex justify-center items-center"
      >
        <a
          class="break-all"
          id="link"
          :href="link"
          rel="noopener noreferrer"
          target="_blank"
          ><p class="text-white-400">{{ link }}</p></a
        >
      </section>
    </section>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";

const emit = defineEmits(["closeOverlay"]);
const props = defineProps({
  date: String,
  text: String,
  link: String,
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

onMounted(() => {
  const link = document.getElementById("link");
  let unlocked = false;

  link.addEventListener("click", (e) => {
    // Eerste klik: blur verwijderen → maar NIET navigeren
    if (!unlocked) {
      e.preventDefault(); // voorkomt directe navigate
      link.style.filter = "none";
      unlocked = true; // volgende klik = wel navigeren
    }
    // Tweede klik: normaal naar de link
  });
});
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
  line-height: 1.5;
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
  font-size: 0.9rem !important;
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
    font-size: 1.8rem;
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
    font-size: 1.1rem;
    line-height: 1.9 !important;
  }
}

@media only screen and (min-width: 1495px) {
  :deep(p) {
    font-size: 1.2rem !important;
  }
}
</style>
