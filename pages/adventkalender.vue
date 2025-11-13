<template>
  <main
    class="flex flex-col h-screen justify-between items-center overflow-hidden"
  >
    <Overlay
      v-if="overlay"
      @closeOverlay="overlay = false"
    ></Overlay>
    <section class="h-[97%] w-screen border-black">
      <div class="flex h-[10%] w-screen">
        <button
          @click="overlay = !overlay"
          class="w-1/3 h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#A31D1D] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          1
        </button>
        <div
          class="w-1/3 h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#3B7B61] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          2
        </div>
        <div
          class="w-1/3 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          3
        </div>
      </div>
      <div class="flex h-[20%] w-screen">
        <div
          class="w-[20%] h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#1B4D3E] xl:w-[27.5%] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          4
        </div>
        <header
          v-if="!overlay"
          class="relative flex flex-col h-full bg-[#FEF9E1] w-[60%] pl-6 pt-6 justify-start items-center md:pl-12 xl:w-[45%]"
        >
          <section class="flex flex-col items-start">
            <h2 class="text-[#120000] self-start">De Internet Blender</h2>
            <h1 class="text-[#120000]">Adventkalender</h1>
            <h3 class="absolute right-2 bottom-2 text-[#120000]">
              december 2025
            </h3>
          </section>
          <img
            class="absolute bottom-0 left-[1%] w-12 h-auto md:w-28 lg:left-[10%]"
            src="/public/images/boompje.png"
            alt="kerstboompje"
          />
        </header>
        <div
          class="w-[20%] h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#3B7B61] xl:w-[27.5%] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          5
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div
          class="w-1/2 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          6
        </div>
        <div
          class="w-1/2 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#1B4D3E] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          7
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div
          class="w-[15%] h-full flex justify-center items-center text-[#120000] text-xl bg-[#FEF9E1] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          8
        </div>
        <div class="flex flex-col h-full w-[45%]">
          <div
            class="flex justify-center items-center text-[#FEF9E1] text-xl h-1/2 bg-[#A31D1D] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
          >
            9
          </div>
          <div
            class="flex justify-center items-center text-[#FEF9E1] text-xl h-1/2 bg-[#1B4D3E] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
          >
            10
          </div>
        </div>
        <div
          class="w-[40%] h-full flex justify-center text-[#120000] items-center text-xl bg-[#FEF9E1] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          11
        </div>
      </div>
      <div class="flex h-[9%] w-screen">
        <div
          class="h-full w-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#A31D1D] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          12
        </div>
        <div
          class="w-1/4 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#3B7B61] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          13
        </div>

        <div
          class="w-1/4 h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#1B4D3E] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          14
        </div>
      </div>
      <div class="flex h-[21%] w-screen">
        <div
          class="w-3/5 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          15
        </div>
        <div class="flex flex-col w-1/4">
          <div
            class="h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#A31D1D] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
          >
            16
          </div>
          <div
            class="h-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#3B7B61] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
          >
            17
          </div>
        </div>
        <div
          class="w-1/5 h-full flex justify-center items-center text-[#120000] text-xl bg-[#FEF9E1] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          18
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div class="flex flex-col h-full w-1/3">
          <div
            class="h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#1B4D3E] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
          >
            19
          </div>
          <div
            class="h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
          >
            20
          </div>
        </div>
        <div
          class="h-full w-1/3 flex justify-center text-[#120000] items-center text-xl bg-[#FEF9E1] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          21
        </div>
        <div
          class="h-full w-1/3 flex justify-center items-center text-xl bg-[#551C22] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          22
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div
          class="h-full w-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#A31D1D] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          23
        </div>
        <div
          class="h-full w-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#3B7B61] shadow-[inset_0_0_7px_1px_rgba(0,0,0,0.25)]"
        >
          24
        </div>
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

const overlay = ref(false);
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
    font-size: 3rem;
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
</style>
