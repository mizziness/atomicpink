<script setup lang="ts"></script>

<template>
  <div id="home">
    <div class="title-wrapper">
      <span class="top-title"><span>Need a website?</span></span>
      <h1 class="three-dee-header"><span>Let me help!</span></h1>
      <span class="bottom-title">
        My name is
        <a class="link" href="/about" aria-label="About Me">Tammy</a> and I
        specialize in handcrafting unique, efficient, and beautiful designs for
        both web and print.
      </span>
    </div>

    <section id="card-grid">
      <div
        v-bind:key="index"
        v-for="(card, index) in cards"
        :id="`para${index}`"
        :class="`card card-${getColorClass()}`"
      >
        <div class="top">
          <img :src="card.url" :alt="card.alt" />
        </div>
        <div class="bottom">
          <h2>{{ card.title }}</h2>
          <!-- <p class="text-left">{{ card.blurb }}</p> -->
          <p v-html="card.blurb" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      cardColors: ["indigo", "rose", "peach", "plum", "pink"],
      cards: [
        {
          url: "/rock-concert.jpg",
          alt: "Image of a rock concert from the viewpoint of the audience",
          title: "Digital Rock Star for Hire",
          blurb:
            "I'm not just your run-of-the-mill code monkey; I have over 20 years of experience and I've worked for some big companies you've probably heard of, including <strong>L.L.Bean</strong>, <strong>Monster.com</strong>, and <strong>Hasbro</strong>. I've got Photoshop down pat, and I can write JavaScript / HTML / CSS in my sleep. To me, there's no such thing as an API that's too big or a landing page that's too small.",
        },
        {
          url: "/baked-round-traditional-apple-pie.jpg",
          alt: "Photo of an old-fashioned apple and cherry pie from above",
          title: "Fresh Pi Served Daily",
          blurb:
            "I am a professional nerd and I have dedicated my entire adult life to my craft. Areas of particular interest to me are <strong>DevOps</strong>, <strong>Cyber Security</strong>, and <strong>UX/UI</strong>.  I excel in helping folks who aren't very tech-savvy, or just don't have the spare time, to achieve their online business goals, whatever they may be.",
        },
        {
          url: "/studio-shot-of-ancient-legionary-armoring.jpg",
          alt: "Photograph of ancient legionary armor and sword",
          title: "Choose Your Weapon",
          blurb:
            "No matter what kind of website you want, we can make it happen together. E-commerce? No problem. Need a <strong>WordPress</strong> blog? Got you covered. Something bigger, like a custom application in <strong>Ruby on Rails</strong>? Can do! Have a hankering for a <strong>Vue.js</strong> or <strong>React.js</strong> single-page-app?  Just say the word!",
        },
      ],
    };
  },
  methods: {
    getColorClass: function () {
      var index = Math.floor(Math.random() * this.cardColors.length);
      var color = this.cardColors[index];
      return color;
    },
  },
};
</script>
