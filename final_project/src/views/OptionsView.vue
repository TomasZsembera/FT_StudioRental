<template>
  <div v-if="options" class="container mt-5">
    <div class="card">
      <div class="card-header text-center">
        <h1>{{ options.name }}</h1>
      </div>
      <div class="card-body">
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
            <input type="date" class="form-control" id="date" v-model="reservation.date" :min="minDate" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Reserve</button>
        </form>
      </div>
    </div>
  </div>
  <div v-else class="text-center mt-5">
    <p class="text-center">Option not found.</p>
  </div>
</template>

<script>
import { useReservationsStore } from '../stores/reservations';
import data from '../../data.json';

export default {
  name: 'OptionsView',
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
      minDate: '',
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
    setMinDate() {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.minDate = tomorrow.toISOString().split('T')[0];
    },
  },
  mounted() {
    this.findOptions();
    this.setMinDate();
  },
};
</script>

<style scoped>
.img-fluid {
  max-height: 400px;
  object-fit: cover;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 70px;
}

.card-header {
  background-color: #f8f9fa;
}

.card-body {
  padding: 2rem;
}
</style>