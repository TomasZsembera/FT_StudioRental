<template>
  <div id="servicesCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" :class="{ active: index === 0 }" v-for="(service, index) in services" :key="service.slug">
        <img :src="`/images/${service.image}`" class="d-block w-100" :alt="service.name">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ service.name }}</h5>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import data from '../../data.json';

export default {
  data() {
    return {
      services: data.services,
    };
  },
};
</script>

<style scoped>
.carousel-item img {
  max-height: 500px;
  object-fit: cover;
}
</style>