<template>
  <div>
    <div class="kraskaart" src="/public/images/kraskaart.png">
      <div class="canvas absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[180px] overflow-hidden md:w-[260px] md:h-[220px]
      lg:w-[300px] lg:h-[250px]">
        <!-- Achtergrond content -->
        <a v-if="revealed" :href="link" target="_blank"
          class="absolute inset-0 flex items-center w-[100%] h-[100%]  justify-center bg-[#ececec] text-[#120000] font-bold z-[1]">
          <button class="scratch-button">
            <p>Ga!</p>
          </button>
        </a>
        <div v-else
          class="absolute inset-0 flex items-center justify-center bg-[#ececec] text-[#120000] font-bold z-[1] pointer-events-none">
          <p>{{ text }}</p>
        </div>
        <!-- Scratch laag -->
        <canvas ref="canvasRef" class="absolute inset-0 z-[2] cursor-pointer"
          :class="{ 'pointer-events-none': revealed }" @mousedown="startErasing" @mousemove="erase"
          @mouseup="stopErasing" @mouseleave="stopErasing" @touchstart.prevent="startErasing" @touchmove.prevent="erase"
          @touchend.prevent="stopErasing" />
      </div>
    </div>

  </div>
</template>

<script setup>
function getRandomNumber() {
  return Math.floor(Math.random() * 430);
}

import { ref, onMounted } from "vue";

const props = defineProps({
  text: { type: String, default: "Blijf krassen..." },
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
// onMounted(() => {
//   const canvas = canvasRef.value;
//   // width.value = canvas.width = 210;
//   // height.value = canvas.height = 180;

//   ctx.value = canvas.getContext("2d");


//   // Grijze scratchlaag tekenen
//   ctx.value.fillStyle = "#cdcdcd";
//   ctx.value.fillRect(0, 0, width.value, height.value);
// });
onMounted(() => {
  const canvas = canvasRef.value;
  ctx.value = canvas.getContext("2d");

  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();

    // werkelijke pixelresolution van canvas updaten
    canvas.width = rect.width;
    canvas.height = rect.height;

    width.value = rect.width;
    height.value = rect.height;

    // opnieuw achtergrond tekenen
    ctx.value.fillStyle = "#cdcdcd";
    ctx.value.fillRect(0, 0, rect.width, rect.height);
  };

  // observe size changes
  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement);

  resize(); // initial
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

  if (progress > 0.6) {
    revealed.value = true;
  }
};
</script>

<style scoped>
.canvas {
  box-shadow: 0 1px 2px 0 rgba(70, 70, 70, 0.25) inset;
}

.kraskaart {
  background-image: url(/public/images/kraskaart.png);
  background-size: cover;
  height: 312px;
  width: 254px;
  position: relative;
}


.scratch-button {
  width: 6.5rem;
  height: 2.3rem;
  border-radius: 5px;
  background: white;
  box-shadow: 0 4px 0 0 #4d7687;
}


@media only screen and (max-height: 700px) {
  .kraskaart {
    height: 332px;
    width: 274px;
  }
}

@media only screen and (min-width: 1024px) {
  .kraskaart {
    height: 392px;
    width: 334px;
  }
}

@media only screen and (min-width: 1440px) {
  .kraskaart {
    height: 492px;
    width: 444px;
  }
}
</style>
