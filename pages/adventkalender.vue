<template>
  <main
    class="flex flex-col h-screen justify-between items-center overflow-hidden bg-[#FFFDF4]"
  >
    <div
      id="loader"
      class="loader-screen"
    >
      <img
        src="/images/boompje.png"
        alt="kerstboom"
        class="loader-tree"
      />
      <p class="loader-text">Kerstsfeer wordt geladen…</p>
    </div>

    <Overlay
      v-if="overlay"
      :date="date"
      :text="text"
      :link="link"
      @closeOverlay="overlay = false"
    ></Overlay>
    <section class="h-[96.5%] w-screen border-black">
      <div class="flex h-[10%] w-screen">
        <button
          :disabled="unlockedDay < 1"
          @click="openOverlay(dayData[0])"
          id="glow-on-hover"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 1
              ? 'bg-[#A31D1D] cursor-pointer'
              : 'bg-[#A31D1D]/35 cursor-not-allowed',
          ]"
        >
          <p>1</p>
        </button>
        <button
          :disabled="unlockedDay < 2"
          @click="openOverlay(dayData[1])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 2
              ? 'bg-[#3B7B61]'
              : 'bg-[#3B7B61]/35 cursor-not-allowed',
          ]"
        >
          <p>2</p>
        </button>

        <button
          :disabled="unlockedDay < 3"
          @click="openOverlay(dayData[2])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 3
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>3</p>
        </button>
      </div>
      <div class="flex h-[23%] w-screen">
        <button
          :disabled="unlockedDay < 4"
          @click="openOverlay(dayData[3])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 4
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>4</p>
        </button>
        <header
          id="header"
          v-if="!overlay"
          class="relative flex flex-col items-center h-full bg-[#FFFDF4] z-20 w-[60%] pt-[1rem] px-2 md:pl-6 xl:w-[45%]"
        >
          <section
            class="flex flex-col items-center text-center max-w-full z-20"
          >
            <h2 class="text-[#120000]">De Internet Blender</h2>
            <h1 class="text-[#120000]">Adventkalender</h1>
            <h3 class="absolute right-2 bottom-2 text-[#120000]">
              december 2025
            </h3>
          </section>

          <img
            id="boom"
            class="absolute bottom-0 left-[1%] w-14 h-auto md:w-20 lg:w-24 pointer-events-none z-10"
            src="/public/images/boompje.png"
            alt="kerstboompje"
          />
        </header>

        <button
          :disabled="unlockedDay < 5"
          @click="openOverlay(dayData[4])"
          :class="[
            'w-1/3 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 5
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>5</p>
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button
          :disabled="unlockedDay < 6"
          @click="openOverlay(dayData[5])"
          :class="[
            'w-1/2 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 6
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>6</p>
        </button>
        <button
          :disabled="unlockedDay < 7"
          @click="openOverlay(dayData[6])"
          :class="[
            'w-1/2 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 7
              ? 'bg-[#3B7B61]'
              : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>7</p>
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button
          :disabled="unlockedDay < 8"
          @click="openOverlay(dayData[7])"
          :class="[
            'w-[15%] h-full flex justify-center items-center text-xl border-[#120000]',
            unlockedDay >= 8
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>8</p>
        </button>
        <div class="flex flex-col h-full w-[45%]">
          <button
            :disabled="unlockedDay < 9"
            @click="openOverlay(dayData[8])"
            :class="[
              'flex justify-center items-center text-xl h-1/2 ',
              unlockedDay >= 9
                ? 'bg-[#1B4D3E]'
                : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
            ]"
          >
            <p>9</p>
          </button>
          <button
            :disabled="unlockedDay < 10"
            @click="openOverlay(dayData[9])"
            :class="[
              'flex justify-center items-center text-xl h-1/2 ',
              unlockedDay >= 10
                ? 'bg-[#3B7B61]'
                : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
            ]"
          >
            <p>10</p>
          </button>
        </div>
        <button
          :disabled="unlockedDay < 11"
          @click="openOverlay(dayData[10])"
          :class="[
            'w-[40%] h-full flex justify-center items-center text-xl ',
            unlockedDay >= 11
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>11</p>
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button
          :disabled="unlockedDay < 12"
          @click="openOverlay(dayData[11])"
          :class="[
            'w-[30%] h-full flex justify-center items-center text-xl ',
            unlockedDay >= 12
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>12</p>
        </button>
        <button
          :disabled="unlockedDay < 13"
          @click="openOverlay(dayData[12])"
          :class="[
            'w-[30%] h-full flex justify-center items-center text-xl ',
            unlockedDay >= 13
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>13</p>
        </button>

        <button
          :disabled="unlockedDay < 14"
          @click="openOverlay(dayData[13])"
          :class="[
            'w-[40%] h-full flex justify-center items-center text-xl ',
            unlockedDay >= 14
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>14</p>
        </button>
      </div>
      <div class="flex h-[20%] w-screen">
        <button
          :disabled="unlockedDay < 15"
          @click="openOverlay(dayData[14])"
          :class="[
            'w-3/5 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 15
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>15</p>
        </button>
        <div class="flex flex-col w-1/4">
          <button
            :disabled="unlockedDay < 16"
            @click="openOverlay(dayData[15])"
            :class="[
              'h-full flex justify-center items-center text-xl ',
              unlockedDay >= 16
                ? 'bg-[#551C22]'
                : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
            ]"
          >
            <p>16</p>
          </button>
          <button
            :disabled="unlockedDay < 17"
            @click="openOverlay(dayData[16])"
            :class="[
              'h-1/2 flex justify-center items-center text-xl ',
              unlockedDay >= 17
                ? 'bg-[#3B7B61]'
                : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
            ]"
          >
            <p>17</p>
          </button>
        </div>
        <button
          :disabled="unlockedDay < 18"
          @click="openOverlay(dayData[17])"
          :class="[
            'w-1/5 h-full flex justify-center items-center text-xl ',
            unlockedDay >= 18
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>18</p>
        </button>
      </div>
      <div class="flex h-[10%] w-screen">
        <div class="flex flex-col h-full w-1/3">
          <button
            :disabled="unlockedDay < 19"
            @click="openOverlay(dayData[18])"
            :class="[
              'h-1/2 flex justify-center items-center text-xl ',
              unlockedDay >= 19
                ? 'bg-[#3B7B61]'
                : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
            ]"
          >
            <p>19</p>
          </button>
          <button
            :disabled="unlockedDay < 20"
            @click="openOverlay(dayData[19])"
            :class="[
              'h-1/2 flex justify-center items-center text-xl ',
              unlockedDay >= 20
                ? 'bg-[#A31D1D]'
                : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
            ]"
          >
            <p>20</p>
          </button>
        </div>
        <button
          :disabled="unlockedDay < 21"
          @click="openOverlay(dayData[20])"
          :class="[
            'h-full w-1/3 flex justify-center items-center text-xl ',
            unlockedDay >= 21
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>21</p>
        </button>
        <button
          :disabled="unlockedDay < 22"
          @click="openOverlay(dayData[21])"
          :class="[
            'h-full w-1/3 flex justify-center items-center text-xl ',
            unlockedDay >= 22
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>22</p>
        </button>
      </div>
      <div class="flex h-[10%] w-screen">
        <button
          :disabled="unlockedDay < 23"
          @click="openOverlay(dayData[22])"
          :class="[
            'h-full w-1/2 flex justify-center items-center text-xl  ',
            unlockedDay >= 23
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>23</p>
        </button>
        <button
          :disabled="unlockedDay < 24"
          @click="openOverlay(dayData[23])"
          :class="[
            'h-full w-1/2 flex justify-center items-center text-xl ',
            unlockedDay >= 24
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]"
        >
          <p>24</p>
        </button>
      </div>
    </section>
    <Footer></Footer>
  </main>
</template>
<script setup>
import Overlay from "../components/Overlay.vue";
import { ref } from "vue";
import Footer from "~/components/Footer.vue";
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
onMounted(() => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none"; // volledig weg
    }, 700);
  }, 1000); // minimale duur zodat animatie zichtbaar is
});

const dayData = [
  {
    day: 1,
    date: "1 december",
    text: "Welkom bij de eerste dag van mijn <strong>Internet Blender Adventkalender</strong>!<br> <br> Zelf word ik altijd erg enthousiast van adventkalenders. Elke dag een vakje open maken maakt december nóg beter dan dat december op zichzelf al is. Deze blijdschap wil ik graag met jullie delen en samen met jullie aftellen tot kerst. Dit ga ik doen door jullie elke dag een leuk stukje internet mee te geven! <br> <br> Deze stukjes internet zullen in allerlei vormen komen. In ieder geval zullen het dingen zijn waarvan je op zijn minst denkt: ‘ah, das leuk’. Misschien denk je wel: ‘wow dit is echt geweldig, mijn dag is echt zoveel beter gemaakt nu!’ Maar dat zullen jullie vanzelf wel merken, als je elke dag terugkomt natuurlijk :) <br> <br>De eerste dag beginnen we met deze geweldige website, sorry alvast als je thalassofobie hebt xx.",
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
  position: relative;
  z-index: 0; /* tekst boven pseudo-element */
  overflow: hidden; /* optioneel: voorkomt overflow van blur */
}

/* Glow layer */
#glow-on-hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    -45deg,
    #a31d1d,
    #b65d66,
    #a31d1d,
    #b65d66,
    #a31d1d,
    #b65d66
  );
  background-size: 400% 400%;
  animation: gradient 5s ease infinite reverse;
  filter: blur(4px);
  z-index: -1; /* glow onder de content */
  opacity: 1;
  transition: opacity 0.5s ease-in;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

header {
  line-height: 1.5;
  z-index: 10;
  margin-left: 1rem;
  margin-right: 1rem;
}

h1 {
  font-family: "InstrumentSerif";
  font-size: 1.8rem;
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
  font-size: 0.75rem;
  font-weight: 500;
  color: #fffdf4;
  text-align: center;
}
.loader-screen {
  position: fixed;
  inset: 0;
  background: #000; /* zwart scherm */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* boven alles */
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.loader-tree {
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
  animation: treePulse 1.5s infinite ease-in-out;
}

.loader-text {
  color: white;
  font-family: "InstrumentSerif", serif;
  font-size: 1.8rem !important;
  letter-spacing: 0.05rem;
  padding-top: 1rem;
  text-align: center;
}

/* Klein pulse effect voor fun */
@keyframes treePulse {
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.06);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
  }
}

/* Fade-out class (wordt toegevoegd in JS/Vue) */
.loader-screen.fade-out {
  opacity: 0;
  pointer-events: none;
}

div {
  color: #fffdf4;
}
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}
@media only screen and (max-height: 750px) {
  #header {
    justify-content: start;
  }

  #boom {
    width: 2.5rem;
  }

  p {
    font-size: 1.1rem !important;
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
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.1rem !important;
  }

  p {
    font-size: 1rem !important;
  }
}

@media only screen and (min-width: 1024px) {
  :deep(h1) {
    font-size: 3rem;
  }

  :deep(h2) {
    font-size: 1.5rem;
  }
  :deep(h3) {
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem !important;
  }
}
</style>
