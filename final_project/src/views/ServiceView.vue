<template>
  <div class="container mt-5" v-if="service">
    <div class="text-center mb-4">
      <h1>{{ service.name }}</h1>
      <img :src="`/images/${service.image}`" :alt="service.name" class="img-fluid rounded mb-3" />
      <p>{{ service.description }}</p>
    </div>
    <div class="options-container">
      <h2 class="mb-4">Top options in {{ service.name }}</h2>
      <div class="row">
        <optionsComponent :options="service.options" :destinationSlug="service.slug" @select="selectOptions" />
      </div>
    </div>
  </div>
  <div class="container mt-5" v-else>
    <p class="text-center">Service not found.</p>
  </div>
</template>

<script>
import data from '../../data.json';
import optionsComponent from '../components/optionsComponent.vue';

export default {
  components: { optionsComponent },
  data() {
    return {
      service: null,
      services: data.services,
      selectedOptions: null,
    };
  },
  mounted() {
    this.findBySlug();
  },
  watch: {
    '$route.params.slug': 'findBySlug',
  },
  methods: {
    findBySlug() {
      const slug = this.$route.params.slug;
      this.service = this.services.find(service => service.slug === slug);
      if (!this.service) {
        console.error(`No match for slug: ${slug}`);
      }
      this.selectedOptions = null;
    },
    selectOptions(options) {
      this.selectedOptions = options;
    },
  },
};
</script>

<style scoped>
.img-fluid {
  max-height: 400px;
  object-fit: cover;
}
</style>