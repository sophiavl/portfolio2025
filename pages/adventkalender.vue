<template>
  <main class="flex flex-col h-screen justify-between items-center">
    <Overlay v-if="overlay"></Overlay>
    <section class="h-[98%] w-screen border-black">
      <div class="flex h-[10%] w-screen">
        <div
          class="w-1/3 h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#A31D1D]"
        >
          1
        </div>
        <div
          class="w-1/3 h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#3B7B61]"
        >
          2
        </div>
        <div
          class="w-1/3 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22]"
        >
          3
        </div>
      </div>
      <div class="flex h-[20%] w-screen">
        <div
          class="w-[20%] h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#1B4D3E] xl:w-[27.5%]"
        >
          4
        </div>
        <header
          v-if="!overlay"
          class="relative flex flex-col h-full bg-[#FEF9E1] w-[60%] pt-6 justify-start items-center md:pl-12 xl:w-[45%]"
        >
          <section class="flex flex-col items-start">
            <h2 class="text-[#120000] self-start">De Internet Blender</h2>
            <h1 class="text-[#120000]">Adventkalender</h1>
            <h3 class="absolute right-2 bottom-2 text-[#120000]">
              december 2025
            </h3>
          </section>
          <img
            class="absolute bottom-0 left-[4%] w-14 h-auto md:w-24 lg:left-[10%]"
            src="../public/boompje.png"
            alt="kerstboompje"
          />
        </header>
        <div
          class="w-[20%] h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#3B7B61] xl:w-[27.5%]"
        >
          5
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div
          class="w-1/2 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22]"
        >
          6
        </div>
        <div
          class="w-1/2 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#1B4D3E]"
        >
          7
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div
          class="w-[15%] h-full flex justify-center items-center text-[#120000] text-xl bg-[#FEF9E1]"
        >
          8
        </div>
        <div class="flex flex-col h-full w-[45%]">
          <div
            class="flex justify-center items-center text-[#FEF9E1] text-xl h-1/2 bg-[#A31D1D]"
          >
            9
          </div>
          <div
            class="flex justify-center items-center text-[#FEF9E1] text-xl h-1/2 bg-[#1B4D3E]"
          >
            10
          </div>
        </div>
        <div
          class="w-[40%] h-full flex justify-center text-[#120000] items-center text-xl bg-[#FEF9E1]"
        >
          11
        </div>
      </div>
      <div class="flex h-[8%] w-screen">
        <div
          class="h-full w-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#A31D1D]"
        >
          12
        </div>
        <div
          class="w-1/4 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#3B7B61]"
        >
          13
        </div>

        <div
          class="w-1/4 h-full flex justify-center text-[#FEF9E1] items-center text-xl bg-[#1B4D3E]"
        >
          14
        </div>
      </div>
      <div class="flex h-[21%] w-screen">
        <div
          class="w-3/5 h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22]"
        >
          15
        </div>
        <div class="flex flex-col w-1/4">
          <div
            class="h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#A31D1D]"
          >
            16
          </div>
          <div
            class="h-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#3B7B61]"
          >
            17
          </div>
        </div>
        <div
          class="w-1/5 h-full flex justify-center items-center text-[#120000] text-xl bg-[#FEF9E1]"
        >
          18
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div class="flex flex-col h-full w-1/3">
          <div
            class="h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#1B4D3E]"
          >
            19
          </div>
          <div
            class="h-full flex justify-center items-center text-[#FEF9E1] text-xl bg-[#551C22]"
          >
            20
          </div>
        </div>
        <div
          class="h-full w-1/3 flex justify-center text-[#120000] items-center text-xl bg-[#FEF9E1]"
        >
          21
        </div>
        <div
          class="h-full w-1/3 flex justify-center items-center text-xl bg-[#551C22]"
        >
          22
        </div>
      </div>
      <div class="flex h-[10%] w-screen">
        <div
          class="h-full w-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#A31D1D]"
        >
          23
        </div>
        <div
          class="h-full w-1/2 flex justify-center items-center text-[#FEF9E1] text-xl bg-[#3B7B61]"
        >
          24
        </div>
      </div>
    </section>
    <footer class="flex h-[2%] items-center">
      <p class="pl-4 text-[#FFF9EB]">Made with ❤️ by Sophia</p>
      <a href="https://www.sophiavanlieshout.nl"
        ><img
          src="../public/bloemetje.svg"
          alt="bloemetje"
          width="20"
          height="20"
      /></a>
    </footer>
  </main>
</template>
<script setup>
import Overlay from "./components/Overlay.vue";
const overlay = true;
</script>

<style scoped>
header {
  line-height: 1.5;
}
</style>
