<template>
  <nav
    class="flex w-full h-[6rem] bg-dark items-center justify-between border-b-2 border-[#414846] bordery pl-6"
  >
    <section class="flex items-center gap-2">
      <img
        src="/images/bloemetje.svg"
        alt="bloemetje"
        class="max-w-[5rem]"
      />
      <h4 class="text-light">sophia van lieshout</h4>
    </section>
    <Icon
      icon="mdi-light:menu"
      width="46"
      height="46"
      style="color: #eaeaea"
    />
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
