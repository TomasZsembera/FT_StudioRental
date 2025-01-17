<template>
  <div class="container mt-5">
    <h1>Reservations</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Option</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.email + reservation.date">
          <td>{{ reservation.name }}</td>
          <td>{{ reservation.email }}</td>
          <td>{{ reservation.date }}</td>
          <td>{{ reservation.option }}</td>
          <td>
            <button class="btn btn-danger" @click="cancelReservation(reservation)">Cancel</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useReservationsStore } from '../stores/reservations';

export default {
  setup() {
    const store = useReservationsStore();
    
    const cancelReservation = (reservation) => {
      store.removeReservation(reservation);
    };

    return {
      reservations: store.reservations,
      cancelReservation,
    };
  },
};
</script>