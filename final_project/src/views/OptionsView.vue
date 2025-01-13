<template>
  <div v-if="options">
    <h1>{{ options.name }}</h1>
    <img :src="`/images/${options.image}`" :alt="options.name" class="img-fluid rounded mb-3" />
    <p>{{ options.description }}</p>
  </div>
  <div v-else>
    <p class="text-center">Option not found.</p>
  </div>
</template>

<script>
import data from '../../data.json';

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    optionsSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      options: null,
    };
  },
  methods: {
    findOptions() {
      const service = data.services.find(
        (service) => service.slug === this.slug
      );
      if (service) {
        this.options = service.options.find(
          (options) => options.slug === this.optionsSlug
        );
      }
    },
  },
  mounted() {
    this.findOptions();
  },
};
</script>

<style scoped>
.img-fluid {
  max-height: 400px;
  object-fit: cover;
}
</style>