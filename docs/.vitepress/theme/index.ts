// https://vitepress.dev/guide/custom-theme

import type { Theme } from "vitepress/client";
import DefaultTheme from "vitepress/theme";
import "./assets/styles/index.css";
import "./assets/styles/fonts.css";

// import "@unocss/reset/tailwind-compat.css";
import "uno.css";

// 引入组件库及样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

// 使用自定义主题
import Layout from "./custom/Layout.vue";

// 引入自定义页面展示组件
import Test from "./components/Test.vue";
import ToolsAnswer from "./components/Tools/Answer.vue";

// 使用持久化存储
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

const pinia = createPinia();
pinia.use(piniaPersist);

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(pinia);
    app.use(ElementPlus); // 注册组件库

    // 注册自定义组件
    app.component("YTest", Test);
    app.component("ToolsAnswer", ToolsAnswer);
  },
} satisfies Theme;
