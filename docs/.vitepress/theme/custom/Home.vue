<script setup>
import { useData } from "vitepress";

const { frontmatter, site } = useData();

console.log(frontmatter, site);

const { customTitle, customText } = frontmatter.value;

const { base } = site.value;
console.log(base);

import HomeContent from "../components/HomeContent.vue";
</script>

<template>
  <div class="home-container">
    <HomeContent />
  </div>
</template>
