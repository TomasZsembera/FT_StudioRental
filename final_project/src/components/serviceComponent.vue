<script>
export default {
  props: {
    dataServices: {
      type: Array,
      required: true,
    },
  },
  methods: {
    findBySlug(slug) {
      return this.dataServices.find(service => service.slug === slug);
    },
  },
  mounted() {
    const service = this.findBySlug(this.$route.params.slug);
    if (!service) {
      console.error(`No match for slug: ${this.$route.params.slug}`);
    }
  }
}
</script>

<template>
  <div>

  </div>
</template>