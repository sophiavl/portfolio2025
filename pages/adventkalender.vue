<template>
  <main class="flex flex-col h-screen justify-between items-center overflow-hidden bg-[#fffdf5]">
    <div id="loader" class="loader-screen">
      <img src="/images/boompje.png" alt="kerstboom" class="loader-tree" />
      <p class="loader-text">Kerstsfeer wordt geladen…</p>
    </div>

    <Overlay v-if="overlay" :date="date" :text="text" :link="link" :day="day" :vakje="vakje" :height="height" :src="src"
      @closeOverlay="overlay = false"></Overlay>
    <section v-if="mounted" class="h-[96.5%] w-screen border-black">
      <div class="flex h-[10%] w-screen">
        <button :disabled="unlockedDay < 1" @click="openOverlay(dayData[0])" :class="[
          'w-1/3 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 1
            ? 'bg-[#A31D1D] cursor-pointer'
            : 'bg-[#A31D1D]/35 cursor-not-allowed',
        ]">
          <p>1</p>
        </button>
        <button :disabled="unlockedDay < 2" @click="openOverlay(dayData[1])" :class="[
          'w-1/3 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 2
            ? 'bg-[#3B7B61] cursor-pointer'
            : 'bg-[#3B7B61]/35 cursor-not-allowed',
        ]">
          <p>2</p>
        </button>

        <button :disabled="unlockedDay < 3" @click="openOverlay(dayData[2])" :class="[
          'w-1/3 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 3
            ? 'bg-[#551C22]'
            : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
        ]">
          <p>3</p>
        </button>
      </div>
      <div class="flex h-[23%] w-screen justify-between">
        <button :disabled="unlockedDay < 4" @click="openOverlay(dayData[3])" :class="[
          'w-1/3 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 4
            ? 'bg-[#1B4D3E]'
            : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
        ]">
          <p>4</p>
        </button>
        <header id="header" v-show="!overlay"
          class="relative flex flex-col items-center h-full bg-[#FFFDF4] z-20 w-[60%] pt-[1rem] px-2 md:pl-6 xl:w-[45%]">
          <section class="flex flex-col items-center text-center max-w-full z-20">
            <h2 class="text-[#120000]">De Internet Blender</h2>
            <h1 class="text-[#120000]">Adventkalender</h1>
            <h3 class="absolute right-2 bottom-2 text-[#120000]">
              december 2025
            </h3>
          </section>

          <img id="boom" class="absolute bottom-0 left-[1%] w-14 h-auto md:w-20 lg:w-24 pointer-events-none z-10"
            src="/public/images/boompje.png" alt="kerstboompje" />
        </header>

        <button :disabled="unlockedDay < 5" @click="openOverlay(dayData[4])" :class="[
          'w-1/3 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 5
            ? 'bg-[#1B4D3E]'
            : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
        ]">
          <p>5</p>
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button :disabled="unlockedDay < 6" @click="openOverlay(dayData[5])" :class="[
          'w-1/2 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 6
            ? 'bg-[#551C22]'
            : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
        ]">
          <p>6</p>
        </button>
        <button :disabled="unlockedDay < 7" @click="openOverlay(dayData[6])" :class="[
          'w-1/2 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 7
            ? 'bg-[#3B7B61]'
            : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
        ]">
          <p>7</p>
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button :disabled="unlockedDay < 8" @click="openOverlay(dayData[7])" :class="[
          'w-[15%] h-full flex justify-center items-center text-xl border-[#120000]',
          unlockedDay >= 8
            ? 'bg-[#A31D1D]'
            : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
        ]">
          <p>8</p>
        </button>
        <div class="flex flex-col h-full w-[45%]">
          <button :disabled="unlockedDay < 9" @click="openOverlay(dayData[8])" :class="[
            'flex justify-center items-center text-xl h-1/2 ',
            unlockedDay >= 9
              ? 'bg-[#1B4D3E]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]">
            <p>9</p>
          </button>
          <button :disabled="unlockedDay < 10" @click="openOverlay(dayData[9])" :class="[
            'flex justify-center items-center text-xl h-1/2 ',
            unlockedDay >= 10
              ? 'bg-[#3B7B61]'
              : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
          ]">
            <p>10</p>
          </button>
        </div>
        <button :disabled="unlockedDay < 11" @click="openOverlay(dayData[10])" :class="[
          'w-[40%] h-full flex justify-center items-center text-xl ',
          unlockedDay >= 11
            ? 'bg-[#A31D1D]'
            : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
        ]">
          <p>11</p>
        </button>
      </div>
      <div class="flex h-[9%] w-screen">
        <button :disabled="unlockedDay < 12" @click="openOverlay(dayData[11])" :class="[
          'w-[30%] h-full flex justify-center items-center text-xl ',
          unlockedDay >= 12
            ? 'bg-[#551C22]'
            : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
        ]">
          <p>12</p>
        </button>
        <button :disabled="unlockedDay < 13" @click="openOverlay(dayData[12])" :class="[
          'w-[30%] h-full flex justify-center items-center text-xl ',
          unlockedDay >= 13
            ? 'bg-[#A31D1D]'
            : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
        ]">
          <p>13</p>
        </button>

        <button :disabled="unlockedDay < 14" @click="openOverlay(dayData[13])" :class="[
          'w-[40%] h-full flex justify-center items-center text-xl ',
          unlockedDay >= 14
            ? 'bg-[#1B4D3E]'
            : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
        ]">
          <p>14</p>
        </button>
      </div>
      <div class="flex h-[20%] w-screen">
        <button :disabled="unlockedDay < 15" @click="openOverlay(dayData[14])" :class="[
          'w-3/5 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 15
            ? 'bg-[#1B4D3E]'
            : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
        ]">
          <p class="verjaardagstext">15</p>
        </button>
        <div class="flex flex-col w-1/4">
          <button :disabled="unlockedDay < 16" @click="openOverlay(dayData[15])" :class="[
            'h-full flex justify-center items-center text-xl ',
            unlockedDay >= 16
              ? 'bg-[#551C22]'
              : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
          ]">
            <p>16</p>
          </button>
          <button :disabled="unlockedDay < 17" @click="openOverlay(dayData[16])" :class="[
            'h-1/2 flex justify-center items-center text-xl ',
            unlockedDay >= 17
              ? 'bg-[#3B7B61]'
              : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
          ]">
            <p>17</p>
          </button>
        </div>
        <button :disabled="unlockedDay < 18" id="glow-on-hover" @click="openOverlay(dayData[17])" :class="[
          'w-1/5 h-full flex justify-center items-center text-xl ',
          unlockedDay >= 18
            ? 'bg-[#A31D1D]'
            : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
        ]">
          <p>18</p>
        </button>
      </div>
      <div class="flex h-[10%] w-screen">
        <div class="flex flex-col h-full w-1/3">
          <button :disabled="unlockedDay < 19" @click="openOverlay(dayData[18])" :class="[
            'h-1/2 flex justify-center items-center text-xl ',
            unlockedDay >= 19
              ? 'bg-[#3B7B61]'
              : 'bg-[#3B7B61]/40 cursor-not-allowed opacity-70',
          ]">
            <p>19</p>
          </button>
          <button :disabled="unlockedDay < 20" @click="openOverlay(dayData[19])" :class="[
            'h-1/2 flex justify-center items-center text-xl ',
            unlockedDay >= 20
              ? 'bg-[#A31D1D]'
              : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
          ]">
            <p>20</p>
          </button>
        </div>
        <button :disabled="unlockedDay < 21" @click="openOverlay(dayData[20])" :class="[
          'h-full w-1/3 flex justify-center items-center text-xl ',
          unlockedDay >= 21
            ? 'bg-[#551C22]'
            : 'bg-[#551C22]/40 cursor-not-allowed opacity-70',
        ]">
          <p>21</p>
        </button>
        <button :disabled="unlockedDay < 22" @click="openOverlay(dayData[21])" :class="[
          'h-full w-1/3 flex justify-center items-center text-xl ',
          unlockedDay >= 22
            ? 'bg-[#1B4D3E]'
            : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
        ]">
          <p>22</p>
        </button>
      </div>
      <div class="flex h-[10%] w-screen">
        <button :disabled="unlockedDay < 23" @click="openOverlay(dayData[22])" :class="[
          'h-full w-1/2 flex justify-center items-center text-xl  ',
          unlockedDay >= 23
            ? 'bg-[#1B4D3E]'
            : 'bg-[#1B4D3E]/40 cursor-not-allowed opacity-70',
        ]">
          <p>23</p>
        </button>
        <button :disabled="unlockedDay < 24" @click="openOverlay(dayData[23])" :class="[
          'h-full w-1/2 flex justify-center items-center text-xl ',
          unlockedDay >= 24
            ? 'bg-[#A31D1D]'
            : 'bg-[#A31D1D]/40 cursor-not-allowed opacity-70',
        ]">
          <p>24</p>
        </button>
      </div>
    </section>
    <Footer bgColor="#FFFDF4" textColor="#1b2422"></Footer>
  </main>
</template>
<script setup>
import Overlay from "../components/Overlay.vue";
import { ref } from "vue";
import Footer from "~/components/Footer.vue";
const date = ref(""); // nieuwe reactive variabele
const text = ref(""); // nieuwe reactive variabele
const link = ref(""); // nieuwe reactive variabele
const day = ref(null);
const height = ref("");
const vakje = ref("");
const src = ref("")

function openOverlay(dayObject) {
  if (unlockedDay.value < dayObject.day) return; // safety: niet klikken
  day.value = dayObject.day;
  date.value = dayObject.date;
  text.value = dayObject.text;
  link.value = dayObject.link;
  vakje.value = dayObject.vakje;
  height.value = dayObject.height;
  overlay.value = true;
  src.value = dayObject.src
}
const overlay = ref(false);
const unlockedDay = ref(18);
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none"; // volledig weg
    }, 700);
  }, 2500); // minimale duur zodat animatie zichtbaar is
});

const dayData = [
  {
    day: 1,
    date: "1 december",
    text: "Welkom bij de eerste dag van mijn <strong>Internet Blender Adventkalender</strong>!<br> <br> Zelf word ik altijd erg enthousiast van adventkalenders. Elke dag een vakje open maken maakt december nóg beter dan dat december op zichzelf al is. Deze blijdschap wil ik graag met jullie delen en samen met jullie aftellen tot kerst. Dit ga ik doen door jullie elke dag een leuk stukje internet mee te geven! <br> <br> Deze stukjes internet zullen in allerlei vormen komen. In ieder geval zullen het dingen zijn waarvan je op zijn minst denkt: ‘ah, das leuk’. Misschien denk je wel: ‘wow dit is echt geweldig, mijn dag is echt zoveel beter gemaakt nu!’ Maar dat zullen jullie vanzelf wel merken, als je elke dag terugkomt natuurlijk :) <br> <br>De eerste dag beginnen we met deze geweldige website, sorry alvast als je thalassofobie hebt xx.",
    link: "https://neal.fun/deep-sea/",
    vakje: "deur",
  },
  {
    day: 2,
    date: "2 december",
    text: `Welkom terug! Ik vond de reacties die ik gister kreeg echt heel leuk, en ik hoop dat jullie dit vandaag ook weer lezen.<br> <br> Ik kreeg gister meteen een reactie van Mijs met een suggestie voor een van de vakjes! Dat vond ik heel erg leuk, ookal heb ik natuurlijk alle content al helemaal klaarliggen voor deze adventkalender <span class="hidden-text">(grapje, suggesties zijn zeer welkom).</span> <br><br> Voor de website van vandaag moet je even gaan zitten, want het is niet zomaar opgelost... Veel succes! En laat het even weten als het gelukt is :) <br> <br> <strong>Update:</strong>  <br> Je kunt op deze website allerlei dingen verzamelen door op de bruine woorden te klikken. Deze kun je gebruiken bij andere pagina's en zo steeds verder komen. Het is dus een beetje zoeken en dingen bij elkaar vinden om het uit te spelen.`,
    link: "https://play.textadventures.co.uk/textadventures/dgq2uwpxcu6iuqi-72jzcw",
    vakje: "deur",
  },
  {
    day: 3,
    date: "3 december",
    text: "Heb jij ook zo'n zin om op vakantie te gaan? Of om gewoon heel even ergens anders te zijn? Al is het maar voor even... <br><br> Dan is vandaag jouw dag!",
    link: "https://www.window-swap.com/Window",
    vakje: "scratch",
  },
  {
    day: 4,
    date: "4 december",
    text: "Het afgelopen jaar ben ik na een lange tijd weer veel gaan lezen. Dit begon toen ik de boeken van The Hunger Games in handen kreeg en opnieuw verliefd werd op deze serie. Net zoals toen ik vroeger de films keek. <br> <br> ( De boeken zijn beter dan de films ) ;) <br><br>Ik heb mijn liefde voor lezen sindsdien weer helemaal gevonden en wil de website van vandaag daar aan wijden. Deze website komt perfect uit als je alle boeken van je favoriete auteur al hebt uitgelezen en je snakt naar meer. Vul de naam van deze auteur in en <i>watch the magic happen…<i>",
    link: "https://www.literature-map.com",
    vakje: "deur",
  },
  {
    day: 5,
    date: "5 december",
    text: "Eergister is Spotify wrapped weer uitgekomen. Hierbij vermeldt Spotify ook altijd welk genre jouw favoriet is. Nu heb ik al 3 jaar op rij ‘indie rock’ als favoriete genre en ik denk daarom dat het tijd is om mijn horizon te verbreden. Heb jij nou ook al drie jaar achter elkaar hetzelfde genre? Deze website biedt de ultieme kaart van álle muziekgenres die je maar kunt bedenken. Van bekende stijlen tot verborgen pareltjes waar je nog nooit van hebt gehoord….<br><br> *Scroll op je telefoon naar rechts om de kaart te kunnen zien*",
    link: "https://everynoise.com/engenremap.html",
    vakje: "cadeau",
    src: "/images/cadeautje_open.png"
  },
  {
    day: 6,
    date: "6 december",
    text: "Deze website is voor alle vaders (en Lindy) die ondertussen door hun repertoire aan flauwe grappen heen zijn en niks meer te vertellen hebben aan de eettafel.<br><br><br><br>",
    link: "https://icanhazdadjoke.com/ ",
    vakje: "deur",
    height: "17rem"
  },
  {
    day: 7,
    date: "7 december",
    text: "Over deze website heb ik eigenlijk niet zoveel te zeggen. Dus kijk maar gewoon.<br><br><br><br>",
    link: "https://pointerpointer.com/ ",
    vakje: "deur",
    height: "21rem"
  },
  {
    day: 8,
    date: "8 december",
    text: "Met een adventkalender tel je af tot kerst, en kerst draait natuurlijk om lief zijn voor de mensen om je heen. Ook voor mensen die je niet kent. Daarom kun je op deze website een berichtje achterlaten voor de volgende bezoeker. In ruil daarvoor krijg jij natuurlijk ook een berichtje!",
    link: "https://www.dearnextvisitor.com/ ",
    vakje: 'scratch'
  },
  {
    day: 9,
    date: "9 december",
    text: "Vandaag is het internationale technodag! Op deze mooie dag is het druilerig en bewolkt. Daarom begeef ik me in gedachten aan het zwembad, op een warme zomerdag, cocktail in de hand en de zon op mijn gezicht. Ik mis alleen nog iets.. Ah ja tuurlijk: Hierbij horen natuurlijk ook zomerse muziekjes! Daar past deze website met een old-school design perfect bij. Alhoewel de muziek op deze website niet perse techno is, en ik eigenlijk de website ook niet helemaal begrijp, hoop ik dat jullie hem leuk vinden.",
    link: "https://poolsuite.net",
    vakje: "cadeau",
    src: "/images/cadeautje_open.png"
  },
  {
    day: 10,
    date: "10 december",
    text: "",
    link: "https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html",
    vakje: "deur",
    height: "24rem"
  },
  {
    day: 11,
    date: "11 december",
    text: "De link van vandaag is een erg bijzondere en is niet zoals die van de afgelopen dagen. Hij heeft best wel iets los heeft gemaakt in mij. Ik kan het je vertellen, maar je kunt ook gewoon zelf even kijken. Kras de vernieuwde kraskaart en je zult het ondervinden!",
    link: "https://rickroll.it/rickroll.mp4",
    vakje: "scratch"
  },
  {
    day: 12,
    date: "12 december",
    text: "Vandaag heb ik wat voor iedereen die gestopt is met social media en nu maar scrollt door de nos app, voor iedereen die van al dit nieuws zeer moedeloos wordt, en voor iedereen die verdrietig wordt van de korte dagen. We kunnen allemaal soms wel een beetje goed nieuws gebruiken. ",
    link: "https://www.goodnewsnetwork.org/",
    vakje: "cadeau",
    src: "/images/krant.png"
  },
  {
    day: 13,
    date: "13 december",
    text: "Er zitten helaas maar 24 uur in de dag, en zelf heb ik altijd moeite met het verdelen van de tijd over alles wat ik wil doen. Hierbij is mijn telefoon mijn grootste vijand. Ik probeer hier toch wel wat minder tijd aan te besteden, deze website heeft me daar weer een beetje bij geholpen",
    link: "https://neal.fun/where-does-the-day-go/",
    vakje: 'deur',
    height: "19rem"
  },
  {
    day: 14,
    date: "14 december",
    text: "Hier wat vermaak voor jullie zondag, ik ben benieuwd of er iemand is die dit weet uit te spelen(en of het uberhaupt uit te spelen is). Veel plezier!",
    link: "https://neal.fun/infinite-craft/",
    vakje: "scratch"
  },
  {
    day: 15,
    date: "15 december",
    text: "Het is mijn verjaardag vandaag! Deze dag roept natuurlijk om een écht goede link voor de adventkalender. Bij deze daarom een van de beste youtubekanalen die er bestaat. Ookal is elk filmpje rond de 8 minuten, ben je zo uren verder met kijken. Kijk en geniet!",
    link: "https://youtu.be/RVBfsbeTBac?si=tmLMQEl9BIvxnOf3",
    vakje: "cadeau",
    src: "/images/youtube.png"
  },
  {
    day: 16,
    date: "16 december",
    text: "Nu ik weer een jaartje ouder bent is het goed om even stil te staan bij alles wat ik heb gedaan in mijn leven. Weet jij bijvoorbeeld hoevaak je hebt geknipperd in je leven? Ik nu wel.",
    link: "https://neal.fun/life-stats/",
    vakje: "scratch"
  },
  {
    day: 17,
    date: "17 december",
    text: "Wait, how did we get here?",
    link: "https://www.youtube.com/watch?v=n9xQTEHebpA",
    vakje: 'deur',
    height: "22rem"
  },
  {
    day: 18,
    date: "18 december",
    text: "Mijn afstudeerproject doe ik in samenwerking met het Literatuurmuseum. Zij hebben een online museum gemaakt met allerlei online exposities en artikelen. Of je nu specifieke informatie over je favoriete schrijver of schrijfster wil vinden of wil dwalen tussen de literaire meesterwerken, er is altijd wel iets te vinden wat je interessant vindt.<br><br>",
    link: "https://literatuurmuseum.nl/nl/ontdek-online/literatuurlab",
    vakje: "scratch"
  },
  {
    day: 19,
    date: "19 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 20,
    date: "20 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 21,
    date: "21 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 22,
    date: "22 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 23,
    date: "23 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
  {
    day: 24,
    date: "24 december",
    text: "Tekst dag 3...",
    link: "https://example.com",
  },
];
</script>

<style scoped>
#glow-on-hover {
  position: relative;
  z-index: 0;
  /* tekst boven pseudo-element */
  overflow: hidden;
  /* optioneel: voorkomt overflow van blur */
}

/* Glow layer */
#glow-on-hover::before {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(-45deg,
      #A31D1D,
      #ec3939,
      #A31D1D,
      #ec3939,
      #A31D1D,
      #ec3939);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite reverse;
  filter: blur(4px);
  z-index: -1;
  /* glow onder de content */
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
  background: #000;
  /* zwart scherm */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* boven alles */
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

.verjaardagstext {
  font-size: 1.8rem;
  font-weight: bold;
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
