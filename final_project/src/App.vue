<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import footerComponent from './components/footerComponent.vue'
import headerComponent from './components/headerComponent.vue'
import GoBackComponent from './components/goBackComponent.vue'
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
  <header>
    <headerComponent />
  </header>
  <main class="flex-grow-1">
  <GoBackComponent />
  <RouterView />
</main>
  <footer>
    <footerComponent />
  </footer>
</div>
</template>