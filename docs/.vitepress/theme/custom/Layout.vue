<script setup>
import NavBar from "./NavBar.vue";
import Background from "../components/Background.vue";

import { useData } from "vitepress";
import NotFound from "./NotFound.vue";
import Home from "./Home.vue";
import Page from "./Page.vue";

const { page, frontmatter } = useData();
</script>

<template>
  <div class="layout-container">
    <NavBar />
    <NotFound v-if="page.isNotFound" />
    <Home v-if="frontmatter.layout === 'home'" />
    <Page v-else />
    <Background />
  </div>
</template>
