<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="/images/logo.png" alt="Your Company Logo" style="width: 40px; height: 40px; border-radius: 50%;" />
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ active: isActive('/') }" to="/">Home</RouterLink>
          </li>
          <li class="nav-item" v-for="service in services" :key="service.slug">
            <RouterLink class="nav-link" :class="{ active: isActive(`/service/${service.slug}`) }" :to="{ name: 'service', params: { slug: service.slug } }">{{ service.name }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ active: isActive('/reservations') }" to="/reservations">Reservations</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import data from '../../data.json';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      services: data.services,
    };
  },
  computed: {
    route() {
      return useRoute();
    },
  },
  methods: {
    isActive(path) {
      return this.route.path === path;
    },
  },
};
</script>

<style scoped>
.nav-link.active {
  color: #40e0d0 !important;
}
</style>