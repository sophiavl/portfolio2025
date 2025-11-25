<template>
  <main
    class="flex flex-col h-screen justify-between items-center overflow-hidden"
  >
    <Overlay
      v-if="overlay"
      :date="date"
      :text="text"
      :link="link"
      @closeOverlay="overlay = false"
    ></Overlay>
    <section class="h-[97%] w-screen border-black">
      <div class="flex h-[10%] w-screen">
        <button
          :disabled="unlockedDay < 1"
          @click="openOverlay(dayData[0])"
          id="glow-on-hover"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 1
              ? 'bg-[#A31D1D] cursor-pointer'
              : 'bg-[#A31D1D]/35 cursor-not-allowed opacity-70',
          ]"
        >
          1
        </button>
        <button
          :disabled="unlockedDay < 2"
          @click="openOverlay(dayData[1])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 2
              ? 'bg-[#3B7B61]'
              : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
          ]"
        >
          2
        </button>

        <button
          :disabled="unlockedDay < 3"
          @click="openOverlay(dayData[2])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 3
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          3
        </button>
      </div>
      <div class="flex h-[23%] w-screen">
        <button
          :disabled="unlockedDay < 4"
          @click="openOverlay(dayData[3])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 4
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          4
        </button>
        <header
          id="header"
          v-if="!overlay"
          class="relative flex flex-col h-full bg-[#FEF9E1]/35 -z-10 w-[60%] pt-[1rem] pl-[0.5rem] justify-center items-center md:pl-6 xl:w-[45%]"
        >
          <section class="flex flex-col items-start">
            <h2 class="text-[#120000] self-start">De Internet Blender</h2>
            <h1 class="text-[#120000]">Adventkalender</h1>
            <h3 class="absolute right-2 bottom-2 text-[#120000]">
              december 2025
            </h3>
          </section>
          <img
            id="boom"
            class="absolute -bottom-1 left-[1%] w-14 h-auto md:w-28 lg:left-[10%]"
            src="/public/images/boompje.png"
            alt="kerstboompje"
          />
        </header>
        <button
          :disabled="unlockedDay < 5"
          @click="openOverlay(dayData[4])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 5
              ? 'bg-[#3B7B61]'
              : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
          ]"
        >
          5
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button
          :disabled="unlockedDay < 6"
          @click="openOverlay(dayData[5])"
          :class="[
            'w-1/2 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 6
              ? 'bg-[#3B7B61]'
              : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
          ]"
        >
          6
        </button>
        <button
          :disabled="unlockedDay < 7"
          @click="openOverlay(dayData[6])"
          :class="[
            'w-1/2 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 7
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          7
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button
          :disabled="unlockedDay < 8"
          @click="openOverlay(dayData[7])"
          :class="[
            'w-[15%] h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 8
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          8
        </button>
        <div class="flex flex-col h-full w-[45%]">
          <button
            :disabled="unlockedDay < 9"
            @click="openOverlay(dayData[8])"
            :class="[
              'flex justify-center items-center text-xl h-1/2 shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
              unlockedDay >= 9
                ? 'bg-[#1B4D3E]'
                : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
            ]"
          >
            9
          </button>
          <button
            :disabled="unlockedDay < 10"
            @click="openOverlay(dayData[9])"
            :class="[
              'flex justify-center items-center text-xl h-1/2 shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
              unlockedDay >= 10
                ? 'bg-[#3B7B61]'
                : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
            ]"
          >
            10
          </button>
        </div>
        <button
          :disabled="unlockedDay < 11"
          @click="openOverlay(dayData[10])"
          :class="[
            'w-[40%] h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 11
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          11
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button
          :disabled="unlockedDay < 12"
          @click="openOverlay(dayData[11])"
          :class="[
            'w-[30%] h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 12
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          12
        </button>
        <button
          :disabled="unlockedDay < 13"
          @click="openOverlay(dayData[12])"
          :class="[
            'w-[30%] h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 13
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          13
        </button>

        <button
          :disabled="unlockedDay < 14"
          @click="openOverlay(dayData[13])"
          :class="[
            'w-[40%] h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 14
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          14
        </button>
      </div>
      <div class="flex h-[20%] w-screen">
        <button
          :disabled="unlockedDay < 15"
          @click="openOverlay(dayData[14])"
          :class="[
            'w-3/5 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 15
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          15
        </button>
        <div class="flex flex-col w-1/4">
          <button
            :disabled="unlockedDay < 16"
            @click="openOverlay(dayData[15])"
            :class="[
              'h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
              unlockedDay >= 16
                ? 'bg-[#551C22]'
                : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
            ]"
          >
            16
          </button>
          <button
            :disabled="unlockedDay < 17"
            @click="openOverlay(dayData[16])"
            :class="[
              'h-1/2 flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
              unlockedDay >= 17
                ? 'bg-[#3B7B61]'
                : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
            ]"
          >
            17
          </button>
        </div>
        <button
          :disabled="unlockedDay < 18"
          @click="openOverlay(dayData[17])"
          :class="[
            'w-1/5 h-full flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 18
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          18
        </button>
      </div>
      <div class="flex h-[10%] w-screen">
        <div class="flex flex-col h-full w-1/3">
          <button
            :disabled="unlockedDay < 19"
            @click="openOverlay(dayData[18])"
            :class="[
              'h-1/2 flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
              unlockedDay >= 19
                ? 'bg-[#3B7B61]'
                : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
            ]"
          >
            19
          </button>
          <button
            :disabled="unlockedDay < 20"
            @click="openOverlay(dayData[19])"
            :class="[
              'h-1/2 flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
              unlockedDay >= 20
                ? 'bg-[#A31D1D]'
                : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
            ]"
          >
            20
          </button>
        </div>
        <button
          :disabled="unlockedDay < 21"
          @click="openOverlay(dayData[20])"
          :class="[
            'h-full w-1/3 flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 21
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          21
        </button>
        <button
          :disabled="unlockedDay < 22"
          @click="openOverlay(dayData[21])"
          :class="[
            'h-full w-1/3 flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 22
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          22
        </button>
      </div>
      <div class="flex h-[10%] w-screen">
        <button
          :disabled="unlockedDay < 23"
          @click="openOverlay(dayData[22])"
          :class="[
            'h-full w-1/2 flex justify-center items-center text-xl  shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 23
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          23
        </button>
        <button
          :disabled="unlockedDay < 24"
          @click="openOverlay(dayData[23])"
          :class="[
            'h-full w-1/2 flex justify-center items-center text-xl shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]',
            unlockedDay >= 24
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          24
        </button>
      </div>
    </section>
    <footer
      class="flex h-[3%] w-screen justify-center items-center bg-[#FEF9E1]"
    >
      <p class="pl-4 !text-[0.7rem] text-[#FFF9EB]">Made with ❤️ by Sophia</p>
      <a href="https://www.sophiavanlieshout.nl"
        ><img
          src="../public/images/bloemetje.svg"
          alt="bloemetje"
          width="20"
          height="20"
      /></a>
    </footer>
  </main>
</template>
<script setup>
import Overlay from "../components/Overlay.vue";
import { ref } from "vue";
const date = ref(""); // nieuwe reactive variabele
const text = ref(""); // nieuwe reactive variabele
const link = ref(""); // nieuwe reactive variabele

function openOverlay(dayObject) {
  if (unlockedDay.value < dayObject.day) return; // safety: niet klikken

  date.value = dayObject.date;
  text.value = dayObject.text;
  link.value = dayObject.link;
  overlay.value = true;
}
const overlay = ref(false);
const unlockedDay = ref(1);

const dayData = [
  {
    day: 1,
    date: "1 december",
    text: "Welkom bij de eerste dag van mijn `Internet Blender Adventkalender`!<br> <br> Zelf word ik altijd erg enthousiast van het openmaken van kleine hokjes van adventkalenders, dit maakt december nóg beter dan dat december op zichzelf al is. Dit gun ik natuurlijk iedereen! Daarom wil ik samen met jullie aftellen tot kerst door jullie elke dag een leuk stukje internet mee te geven. <br> <br> Deze stukjes internet zullen in allerlei vormen komen. In ieder geval zullen het dingen zijn waarvan je op zijn minst denkt: ‘ah, das leuk’. Misschien denk je wel: ‘wow dit is echt geweldig, mijn dag is echt zoveel beter gemaakt nu!’ Maar dat zullen jullie vanzelf wel merken, als je elke dag terugkomt natuurlijk :) <br> <br>De eerste dag beginnen we met deze geweldige website, sorry voor de mensen met thalassofobie (oeps, spoiler).",
    link: "https://neal.fun/deep-sea/",
  },
  {
    day: 2,
    date: "2 december",
    text: "Tekst dag 2...",
    link: "https://example.com",
  },
  {
    day: 3,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 4,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 5,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 6,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 7,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 8,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 9,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 10,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 11,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 12,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 13,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 14,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 15,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 16,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 17,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 18,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 19,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 20,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 21,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 22,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 23,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 24,
    date: "3 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
];
</script>

<style scoped>
#glow-on-hover {
  cursor: pointer;
  position: relative;
  background-color: #551c22;
  z-index: 0;
}

#glow-on-hover:before {
  content: "";
  background: repeating-linear-gradient(
    45deg,
    #3b7b61,
    #ff0000,
    #3b7b61,
    #ff0000,
    #3b7b61
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(20px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 10s linear infinite alternate;
  opacity: 1;
  transition: opacity 0.5s;
}

#glow-on-hover:active:after {
  background: transparent;
}

#glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #551c22;
  left: 0;
  top: 0;
}

@keyframes glowing {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 400% 50%;
  }
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
  font-family: "CothamSans";
  font-size: 0.9rem;
  color: #00131b;
  text-align: center;
}

div {
  color: #fef9e1;
}
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}
@media only screen and (max-height: 750px) {
  #boom {
    max-height: 3rem;
    width: auto;
  }

  #header {
    justify-content: start;
  }
}

@media only screen and (min-width: 490px) {
  :deep(h1) {
    font-size: 2.3rem;
  }

  :deep(h2) {
    font-size: 1.4rem;
  }
  :deep(h3) {
    font-size: 1.1rem;
  }

  :deep(p) {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 768px) {
  :deep(h1) {
    font-size: 2.8rem;
  }

  :deep(h2) {
    font-size: 1.4rem;
  }
  :deep(h3) {
    font-size: 1.1rem;
  }

  :deep(p) {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 1024px) {
  :deep(h1) {
    font-size: 4rem;
  }

  :deep(h2) {
    font-size: 1.5rem;
  }
  :deep(h3) {
    font-size: 1.3rem;
  }

  :deep(p) {
    font-size: 0.8rem;
  }
}
</style>
