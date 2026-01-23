<template>
  <footer class="h-[3.5%] fixed bottom-0 w-screen text-center gap-2" :style="{ backgroundColor: bgColor }">
    <div class="flex h-[100%] justify-center items-center gap-2 p-2">
      <p :style="{ color: textColor }">Made with ‪‪❤︎‬ by Sophia</p>
      <a href="https://www.sophiavanlieshout.nl"><img src="../public/images/bloemetje.svg" alt="bloemetje" width="17"
          height="17" /></a>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  bgColor: String,
  textColor: String,
});
</script>

<style scoped>
p {
  color: #00131b;
  font-family: "CothamSans";
  font-size: 0.75rem !important;
  font-weight: 200 !important;

}

@media only screen and (min-width: 660px) {
  p {
    font-size: 0.8rem !important;
  }
}

@media only screen and (min-width: 900px) {
  p {
    font-size: 0.8rem !important;
  }
}

@media only screen and (min-width: 1250px) {
  p {
    font-size: 0.8rem !important;
  }
}
</style>
