<template>
  <div v-if="options">
    <h1>{{ options.name }}</h1>
    <img :src="`/images/${options.image}`" :alt="options.name" class="img-fluid rounded mb-3" />
    <p>{{ options.description }}</p>
    <form @submit.prevent="submitReservation">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="reservation.name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="reservation.email" required>
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="date" class="form-control" id="date" v-model="reservation.date" required>
      </div>
      <button type="submit" class="btn btn-primary">Reserve</button>
    </form>
  </div>
  <div v-else>
    <p class="text-center">Option not found.</p>
  </div>
</template>

<script>
import { useReservationsStore } from '../stores/reservations';
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
      reservation: {
        name: '',
        email: '',
        date: '',
        option: '',
      },
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
        this.reservation.option = this.options.name;
      }
    },
    submitReservation() {
      const store = useReservationsStore();
      store.addReservation({ ...this.reservation });
      alert('Reservation submitted!');
      this.reservation.name = '';
      this.reservation.email = '';
      this.reservation.date = '';
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