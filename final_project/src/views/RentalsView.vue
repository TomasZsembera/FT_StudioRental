<template>
  <div class="container mt-5">
    <h1>Pending Reservations</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Actions</th>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.email + reservation.date">
          <td>
            <button class="btn btn-success me-2" @click="acceptReservation(reservation)">Accept</button>
            <button class="btn btn-danger" @click="cancelReservation(reservation)">Cancel</button>
          </td>
          <td>{{ reservation.name }}</td>
          <td>{{ reservation.email }}</td>
          <td>{{ reservation.date }}</td>
          <td>{{ reservation.option }}</td>
        </tr>
      </tbody>
    </table>
<br>
<br>
<br>
<hr>
    <h2>Accepted Reservations</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in acceptedReservations" :key="reservation.email + reservation.date">
          <td>{{ reservation.name }}</td>
          <td>{{ reservation.email }}</td>
          <td>{{ reservation.date }}</td>
          <td>{{ reservation.option }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useReservationsStore } from '../stores/reservations';

export default {
  name: 'RentalsView',
  data() {
    return {
      reservations: [],
      acceptedReservations: [],
    };
  },
  created() {
    const store = useReservationsStore();
    this.reservations = store.reservations;
    this.acceptedReservations = store.acceptedReservations;
  },
  methods: {
    cancelReservation(reservation) {
      const store = useReservationsStore();
      store.removeReservation(reservation);
    },
    acceptReservation(reservation) {
      const store = useReservationsStore();
      store.acceptReservation(reservation);
    },
  },
};
</script>