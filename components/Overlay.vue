<template>
  <section
    class="w-screen h-screen absolute bg-black/75 flex flex-col justify-center items-center"
  >
    <section
      class="w-[80%] h-[80%] bg-[#FFF9EB] top-30 m-auto rounded-4xl flex flex-col justify-start items-center p-6"
    >
      <section class="flex flex-col w-full items-center pb-4">
        <h1 class="text-[#00131B]">1 december</h1>
        <div class="w-[80%] h-[0.1rem] bg-[#c3c3c3]"></div>
      </section>
      <section class="flex flex-col gap-4">
        <p class="text-[#00131B] text-center">
          {{ p1 }}
        </p>
        <p class="text-[#00131B]">
          {{ p2 }}
        </p>
        <p class="text-[#00131B]">
          {{ p3 }}
        </p>
        <p class="text-[#00131B]">
          {{ p4 }}
        </p>
      </section>
      <section class="border border-[#120000] rounded-md">
        <a
          class="text-[#120000]"
          href="https://www.neil.fun/deep-sea"
          >https://neal.fun/deep-sea/</a
        >
      </section>
    </section>
  </section>
</template>

<script setup>
const p1 =
  "Welkom bij de eerste dag van mijn `Internet Blender Adventkalender`!";
const p2 =
  "Zelf word ik altijd erg enthousiast van het openmaken van kleine hokjes van adventkalenders, dit maakt december nóg beter dan dat december op zichzelf al is. Dit gun ik natuurlijk iedereen! Daarom wil ik samen met jullie aftellen tot kerst door jullie elke dag een leuk stukje internet mee te geven.";
const p3 =
  "Deze stukjes internet zullen in allerlei vormen komen. In ieder geval zullen het dingen zijn waarvan je op zijn minst denkt: ‘ah, das leuk’. Misschien denk je wel: ‘wow dit is echt geweldig, mijn dag is echt zoveel beter gemaakt nu!’";
const p4 =
  "Maar dat zullen jullie vanzelf wel merken, als je elke dag terugkomt natuurlijk :) De eerste dag beginnen we met deze geweldige website, sorry voor de mensen met thalassofobie (oeps, spoiler).";
</script>
