<template>
  <div class="card relative w-[280px] h-[350px] overflow-hidden">
    <!-- Achtergrond content -->
    <a
      v-if="revealed"
      :href="link"
      target="_blank"
      class="absolute inset-0 flex items-center justify-center bg-[#E1F6FF] text-[#120000] font-bold z-[1]"
    >
      <p>Explore!</p>
    </a>

    <div
      v-else
      class="absolute inset-0 flex items-center justify-center bg-[#E1F6FF] text-[#120000] font-bold z-[1] pointer-events-none"
    >
      <p>{{ text }}</p>
    </div>
    <!-- Scratch laag -->
    <canvas
      ref="canvasRef"
      class="absolute inset-0 z-[2] cursor-pointer"
      :class="{ 'pointer-events-none': revealed }"
      @mousedown="startErasing"
      @mousemove="erase"
      @mouseup="stopErasing"
      @mouseleave="stopErasing"
      @touchstart.prevent="startErasing"
      @touchmove.prevent="erase"
      @touchend.prevent="stopErasing"
    />
  </div>
</template>

<script setup>
function getRandomNumber() {
  return Math.floor(Math.random() * 430);
}

import { ref, onMounted } from "vue";

const props = defineProps({
  text: { type: String, default: "Bijna klaar..." },
  link: { type: String, default: "https://google.com" },
});

// Refs
const canvasRef = ref(null);
const ctx = ref(null);
const revealed = ref(false);
const isErasing = ref(false);
const width = ref(0);
const height = ref(0);

// Wanneer component mounted is
onMounted(() => {
  const canvas = canvasRef.value;
  width.value = canvas.width = 280;
  height.value = canvas.height = 350;

  ctx.value = canvas.getContext("2d");

  // Grijze scratchlaag tekenen
  ctx.value.fillStyle = "#599FBD";
  ctx.value.fillRect(0, 0, width.value, height.value);
});

// Functies
const startErasing = (e) => {
  isErasing.value = true;
  erase(e);
};

const erase = (e) => {
  if (!isErasing.value || revealed.value) return;

  const rect = canvasRef.value.getBoundingClientRect();
  const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
  const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;

  ctx.value.globalCompositeOperation = "destination-out";
  ctx.value.beginPath();
  ctx.value.arc(x, y, 22, 0, Math.PI * 2);
  ctx.value.fill();

  checkReveal();
};

const stopErasing = () => {
  isErasing.value = false;
};

// Check of 60% is weggekrast
const checkReveal = () => {
  const img = ctx.value.getImageData(0, 0, width.value, height.value);
  let cleared = 0;

  for (let i = 3; i < img.data.length; i += 4) {
    if (img.data[i] === 0) cleared++;
  }

  const progress = cleared / (width.value * height.value);

  if (progress > 0.4) {
    revealed.value = true;
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
