<template>
  <div>
    <section class="intro">

      <h1 ref="sophia" class="text-center w-full h-[25%]">
        Sophia van Lieshout
      </h1>
      <div class="flex flex-col items-center justify-between w-full h-[75%] md:flex-row">
        <div class="flex flex-col w-[80%] h-[50%] justify-between pb-12 md:px-24">
          <div class="h-[1px] w-full bg-[#30041a]/30"></div>
          <h2>Hi, welcome to my portfolio!</h2>
          <h3 ref="titleDescription">
            Frontend Development | UI / UX design
          </h3>
          <div class="h-[1px] w-full bg-[#30041a]/30"></div>
        </div>
        <div class="hero-picture"></div>
      </div>
    </section>

    <section class="section about">
      <h2 class="header">ABOUT ME</h2>
      <div class="about-wrapper">
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project class="project last-project"></Project>
      </div>
    </section>

    <section class="section projects">

      <h2 class="project-header">PROJECTS</h2>
      <div class="project-wrapper">
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>

    </section>

    <section class="section contact">
      <h2 class="header">CONTACT</h2>
      <div class="contact-wrapper">
        <h3>Email: vanlieshoutsophia@gmail.com</h3>
        <h3>LinkedIn: Sophia van Lieshout</h3>
      </div>
    </section>


    <!-- <Footer bgColor="#30041a" textColor="#b691a1" /> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Project from "./Project.vue";

gsap.registerPlugin(ScrollTrigger);

const sophia = ref(null);
const titleDescription = ref(null);

onMounted(() => {
  const navTitle = document.getElementById("nav-title")

  ScrollTrigger.create({
    trigger: sophia.value,
    start: "bottom-=50 top+=80",
    onEnter: () => {
      navTitle.textContent = "Sophia van Lieshout"
      const navSplit = new SplitText(navTitle)

      gsap.from(navSplit.chars, {
        xPercent: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 0.3,
        ease: "power3.out"
      })
    },
    onEnterBack: () => {
      navTitle.textContent = "SVL"
      const navSplit = new SplitText(navTitle)
      gsap.from(navSplit.chars, {
        xPercent: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 0.4,
        ease: "power3.out"
      })
    },
    markers: true
  })


  function getScrollAmount(wrapper) {
    return -(wrapper.scrollWidth - window.innerWidth);
  }

  //about section
  const aboutSection = document.querySelector('.section.about')
  const aboutWrapper = document.querySelector(".about-wrapper")



  const aboutTween = gsap.to(aboutWrapper, {
    x: getScrollAmount(aboutWrapper),
    duration: 3,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: aboutSection,
    start: "top 6%",
    end: () => `+=${getScrollAmount(aboutWrapper) * -1}`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    animation: gsap.to(aboutWrapper, {
      x: () => -(aboutWrapper.scrollWidth - window.innerWidth),
      ease: "none",
    }), markers: false,
  });


  //projects section
  const projectsWrapper = document.querySelector(".project-wrapper");
  const projectSection = document.querySelector('.section.projects')
  const lastProject = document.querySelector(".project.last-project")

  const projectTween = gsap.to(projectsWrapper, {
    x: getScrollAmount(projectsWrapper),
    duration: 3,
    ease: 'none'
  });

  ScrollTrigger.create({
    trigger: projectSection,
    start: "top 6%",
    end: () => `+=${getScrollAmount(projectsWrapper) * -1}`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    invalidateOnRefresh: true,
    animation: projectTween,
    markers: false,
  });

  //contact 
  const contactWrapper = document.querySelector(".contact-wrapper");
  const contactSection = document.querySelector('.section.contact')

  const contactTween = gsap.to(contactWrapper, {
    x: getScrollAmount(contactWrapper),
    duration: 3,
    ease: 'none'
  });

  ScrollTrigger.create({
    trigger: contactSection,
    start: "top 6%",
    end: () => `+=${getScrollAmount(contactWrapper) * -1}`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    invalidateOnRefresh: true,
    animation: contactTween,
    markers: false,
  });

  const nameSplit = new SplitText(sophia.value);
  const descriptionSplit = new SplitText(titleDescription.value);

  gsap.from(nameSplit.chars, {
    xPercent: 100,
    duration: 1,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.05,
    delay: 1
  });

  gsap.from(descriptionSplit.lines, {
    opacity: 0,
    duration: 1,
    yPercent: 50,
    ease: "expo.out",
    stagger: 0.02,
    delay: 2.2
  });
});
</script>

<style scoped>
.header {
  padding-left: 2rem;
  color: var(--color-darkPink);
}

.intro {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
}

.hero-picture {
  background: linear-gradient(180deg, #FFF6F2 14.95%, rgba(255, 246, 242, 0.50) 28.26%, rgba(255, 246, 242, 0.00) 41.62%), url(/public/images/portfoliofoto.jpg) lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70%;
  box-shadow: inset 0 10px 0 #fff6f2;
}

@media only screen and (min-width: 660px) {
  .hero-picture {
    height: 100%;
  }

}

/*
.project-header {
  background-color: var(--color-middlePink);

}
*/

.contact-header {
  background-color: var(--color-darkPink);

}


.project-wrapper {
  width: fit-content;
  display: flex;
  gap: 5rem;
}

.about-wrapper {
  width: fit-content;
  display: flex;
  gap: 5rem;
}

.projects {
  padding-left: 4rem;

}

.pin-spacer {
  height: 0;
}

.section {
  height: 90vh;
  margin-top: 2rem;
  padding: 4rem;
  position: relative;
  color: var(--color-darkPink);
  overflow: hidden;
  background-color: #FFF6F2;
}

/*
.about {
  background-color: var(--color-lightPink);
}

.contact {
  background-color: var(--color-darkPink);
} */
</style>
