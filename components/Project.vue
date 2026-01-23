<template>
    <div class="flex w-[90vw] h-[70vh] justify-between p-8 bg-[var(--color-middlePink)]">

        <div class="flex flex-col w-[50%] gap-6">
            <h1>Virtual Reality Learning Dutch</h1>
            <div class="h-[1px] w-[90%] bg-[var(--color-light)]"></div>
            <p>A virtual reality experience designed for children of refugees to learn Dutch in an engaging and
                interactive way. Each scene is modeled on real-life environments, allowing learners to encounter
                vocabulary that reflects their daily lives. In every scene, children could pick up objects, hear the
                word pronounced, and see it spelled out, reinforcing both listening and reading skills. The goal was to
                create an accessible, fun, and immersive way to learn Dutch.</p>
            <p>Techniques</p>
            <ol>
                <li>
                    <p>Blender</p>
                </li>
                <li>
                    <p>Unity</p>
                </li>
            </ol>
        </div>
        <div class="w-[40%] h-[80%] flex justify-center items-center">
            <div class="project-picture"></div>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
p {
    color: var(--color-light);
    font-family: Montserrat;
    font-size: clamp(0.8rem, 1.2vw, 0.9rem)
}

h1 {
    font-family: Montserrat;
    font-size: 1.8rem;
    font-weight: 700;

    color: var(--color-light);

}

.project-picture {
    background-image: url(/public/images/portfoliofoto.jpg);
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>