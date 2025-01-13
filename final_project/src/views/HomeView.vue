<template>
  <div class="container mt-5">
    <div class="text-center mb-5">
      <h1>Welcome to Our Services</h1>
      <p class="lead">Explore our wide range of professional services designed to meet your needs.</p>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="service in services" :key="service.slug">
        <div class="card h-100">
          <img :src="`/images/${service.image}`" class="card-img-top" :alt="service.name" />
          <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description }}</p>
            <RouterLink :to="{ name: 'service', params: { slug: service.slug } }" class="btn btn-primary">Learn More</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import data from '../../data.json';

const services = ref(data.services);
</script>

<style scoped>
.card-img-top {
  max-height: 200px;
  object-fit: cover;
}
</style>