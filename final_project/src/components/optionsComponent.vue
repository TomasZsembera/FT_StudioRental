<template>
    <div class="container">
      <div class="row">
        <div v-for="option in options" :key="option.slug" class="col-md-4 mb-4">
          <div class="card h-100">
            <RouterLink :to="{ name: 'options', params: { slug: destinationSlug, optionId: option.slug } }" class="text-decoration-none text-dark">
              <img :src="`/images/${option.image}`" class="card-img-top" :alt="option.name" />
              <div class="card-body">
                <h5 class="card-title">{{ option.name }}</h5>
                <p class="card-text">{{ option.description }}</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      destinationSlug: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card-img-top {
    max-height: 200px;
    object-fit: cover;
  }
  </style>