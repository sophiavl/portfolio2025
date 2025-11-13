<template>
  <section
    class="w-screen h-screen absolute bg-black/75 flex flex-col justify-center items-center"
  >
    <section
      class="relative w-[80%] h-[80%] bg-[#FFF9EB] top-30 rounded-4xl flex flex-col justify-start items-center pt-12 p-[3rem] md:p-14"
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
        <h1 class="text-[#00131B]">1 december</h1>
        <div class="w-[80%] h-[0.1rem] bg-[#c3c3c3]"></div>
      </section>
      <section class="flex flex-col gap-4">
        <p class="text-[#00131B] text-center">
          {{ p1 }}
        </p>
        <p class="text-[#00131B]">
          {{ p2 }}
        </p>
        <p class="text-[#00131B]">
          {{ p3 }}
        </p>
        <p class="text-[#00131B]">
          {{ p4 }}
        </p>
      </section>
      <section class="border border-[#120000] rounded-md">
        <a
          class="text-[#120000]"
          href="https://www.neil.fun/deep-sea"
          >https://neal.fun/deep-sea/</a
        >
      </section>
    </section>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";
import { Icon } from "@iconify/vue";
const emit = defineEmits(["closeOverlay"]);

function onClick() {
  emit("closeOverlay");
}
const p1 =
  "Welkom bij de eerste dag van mijn `Internet Blender Adventkalender`!";
const p2 =
  "Zelf word ik altijd erg enthousiast van het openmaken van kleine hokjes van adventkalenders, dit maakt december nóg beter dan dat december op zichzelf al is. Dit gun ik natuurlijk iedereen! Daarom wil ik samen met jullie aftellen tot kerst door jullie elke dag een leuk stukje internet mee te geven.";
const p3 =
  "Deze stukjes internet zullen in allerlei vormen komen. In ieder geval zullen het dingen zijn waarvan je op zijn minst denkt: ‘ah, das leuk’. Misschien denk je wel: ‘wow dit is echt geweldig, mijn dag is echt zoveel beter gemaakt nu!’";
const p4 =
  "Maar dat zullen jullie vanzelf wel merken, als je elke dag terugkomt natuurlijk :) De eerste dag beginnen we met deze geweldige website, sorry voor de mensen met thalassofobie (oeps, spoiler).";
</script>

<style scoped>
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
  font-family: "CothamSans";
  font-size: 0.9rem;
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

@media only screen and (min-width: 490px) {
  :deep(p) {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 768px) {
  :deep(p) {
    font-size: 0.8rem;
  }
}
@media only screen and (min-width: 900px) {
  :deep(p) {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 1024px) {
  :deep(p) {
    font-size: 1.2rem !important;
  }
}
</style>
