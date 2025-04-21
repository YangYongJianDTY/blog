import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from "vue";
import { ThemeType } from "../constant";
import type { ScrollDataType } from "../types";

export const useConfigStore = defineStore("config", () => {
  const themeType = ref<ThemeType>(ThemeType.AUTO);
  const loadingStatus = ref(true);
  const scrollData = ref<ScrollDataType>({
    scrollY: 0,
    lastScrollY: 0,
    percent: 0,
    direction: "down",
  });

  function setTheme(type: ThemeType) {
    themeType.value = type;
  }

  function setLoadingStatus(status: boolean) {
    loadingStatus.value = status;
  }

  function setScrollData(data: ScrollDataType) {
    scrollData.value = { ...scrollData.value, ...data };
  }

  return {
    themeType,
    loadingStatus,
    scrollData,
    setTheme,
    setLoadingStatus,
    setScrollData,
  };
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useConfigStore as any, import.meta.hot));
