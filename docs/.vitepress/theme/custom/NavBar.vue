<script setup>
import { useData } from "vitepress";
import { withBase, useRouter } from "vitepress";
import avatar from "../assets/images/avatar.png";

const router = useRouter();
const { site } = useData();
const { title, description } = site.value;
</script>
<template>
  <div fixed top-0 left-0 w-full h-16 z-99999 backdrop-blur-sm backdrop-saturate-150>
    <div max-w-300 h-15 mx-auto flex justify-between items-center>
      <div flex justify-between items-center @click="router.go(withBase('/'))">
        <!-- <el-avatar shape="square" :src="avatar" mr-2 /> -->
        <span cursor-pointer>{{ title }}</span>
      </div>
      <div @click="router.go(withBase('/tools/answer'))">工具</div>
    </div>
  </div>
</template>
