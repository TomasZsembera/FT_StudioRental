<template>
  <div class="go-back-container">
    <button class="btn btn-primary go-back-button" @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  name: 'GoBackComponent',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.go-back-container {
  position: fixed;
  top: 100px; /* Adjust based on your header height */
  left: 10px;
  z-index: 1000; /* Ensure it stays above other content */
}

.go-back-button {
  padding: 10px 15px;
  font-size: 1rem;
  background-color: #529e96ad;
  color: #fff;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.go-back-button:hover {
  background-color: #529e96;
}

@media (max-width: 768px) {
  .go-back-container {
    top: 320px; /* Adjust based on your header height */
    left: 5px;
  }
  .go-back-button {
  padding: 5px 5px;
  font-size: 0.8rem;
  background-color: #529e96ad;
  color: #fff;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
}

@media (max-width: 576px) {
  .go-back-container {
    top: 320px; /* Adjust based on your header height */
    left: 5px;
  }
  .go-back-button {
  padding: 5px 5px;
  font-size: 0.8rem;
  background-color: #529e96ad;
  color: #fff;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
}
</style>