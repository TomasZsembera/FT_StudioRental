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
  top: 100px; 
  left: 10px;
  z-index: 1000; 
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
</style>