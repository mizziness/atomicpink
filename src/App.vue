<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="sidebar">
    <a href="/" alt="Back to the Home Page">
      <img id="logo" src="/AtomicPink-logo.png" alt="AtomicPink Logo" />
    </a>
    <nav class="" aria-label="Sidebar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <RouterView />
  <div id="footer">
    <div class="">Copyright &copy; {{ year() }} Tammy Shipps.</div>
  </div>
</template>

<script lang="ts">
export default {
  data: function () {},
  methods: {
    year: function () {
      let d = new Date();
      let year = d.getFullYear();
      return year;
    },
  },
};
</script>

<style lang="scss"></style>
