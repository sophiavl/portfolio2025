<template>
  <section
    class="w-screen h-screen absolute bg-black/75 flex flex-col justify-center items-center"
  >
    <section
      class="relative w-[90%] h-[90%] bg-[#FFF9EB] top-30 rounded-4xl flex flex-col justify-start items-center pt-8 p-[1.5rem]"
    >
      <button
        @click="onClick"
        class="absolute right-5 top-5 text-[#120000]"
      >
        <Icon
          icon="material-symbols-light:close"
          width="36"
          height="36"
          style="color: #120000"
        />
      </button>

      <section class="flex flex-col w-full items-center pb-4">
        <h1 class="text-[#00131B]">{{ date }}</h1>
        <div class="w-[80%] h-[0.1rem] bg-[#c3c3c3]"></div>
      </section>
      <section class="flex flex-col gap-4 sm:px-[3rem] xl:px-[4rem]">
        <p
          class="text-[#00131B] text-center"
          v-html="text"
        ></p>
      </section>
      <section
        class="border-2 border-[#120000] bg-[#3B7B61] rounded-xl w-[20rem] h-12 mt-6 flex justify-center items-center"
      >
        <a
          class="text-[#120000] break-all"
          id="link"
          :href="link"
          rel="noopener noreferrer"
          target="_blank"
          >{{ link }}</a
        >
      </section>
    </section>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";
import { Icon } from "@iconify/vue";
const emit = defineEmits(["closeOverlay"]);
const props = defineProps({
  date: String,
  text: String,
  link: String,
});

function onClick() {
  emit("closeOverlay");
}
</script>

<style scoped>
a {
  color: #120000 !important;
}
#link {
  filter: blur(5px); /* voorbeeld startwaarde */
  transition: filter 1s ease; /* hier geef je de duur van 1s aan */
}

#link:hover {
  filter: none;
}

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
  text-align: center;
}
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
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
