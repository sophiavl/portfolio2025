<template>
    <div>

        <img class="cadeau" v-if="!presentOpened" :class="{ bounce: animate }" @click="playAnimation"
            src="/public/images/cadeautje_dicht.png" alt="cadeautje" />
        <div v-else class="relative">
            <img class="cadeau-open" :src="props.src" alt="cadeautje open" @click="openLink" />
        </div>


    </div>

</template>

<script setup>
import { ref } from 'vue';
const animate = ref(false);
const presentOpened = ref(false);
const clicked = ref(0);


const props = defineProps({
    link: { type: String, default: "https://example.com" },
    src: { type: String }

});

function playAnimation() {
    animate.value = false
    if (clicked.value > 1) {
        openPresent();
        return
    }
    else {
        requestAnimationFrame(() => { // wacht 1 frame
            animate.value = true;
            clicked.value += 1;
        })
    }
}        // reset animatie


function openPresent() {
    presentOpened.value = true;
}

function openLink() {
    window.open(props.link, "_blank");
}
</script>

<style>
.cadeau {
    cursor: pointer;
    width: 10rem;
    height: auto;
}

.cadeau-open {
    width: 14rem;
    height: auto;
    transform: translateX(-10px);
    cursor: pointer;
}

.bounce {
    animation: bounce 0.5s ease;
}

@keyframes bounce {
    0% {
        transform: translateY(-10px)
    }

    50% {
        transform: translateY(-30px)
    }

    100% {
        transform: translateY(0px)
    }
}
</style>