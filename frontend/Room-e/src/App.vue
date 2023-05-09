<script setup>
import { RouterView } from 'vue-router'
import navbarComponent from './components/navbarComponent.vue';
import footerComponent from "./components/footerComponent.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <navbarComponent class="h-30" />
    <RouterView class="bg-gray-100 text-gray-900 dark:text-gray-400 dark:bg-gray-900 body-font flex-1"/>
    <footerComponent class="h-30"/>
  </div>
</template>

<style scoped>
</style>
