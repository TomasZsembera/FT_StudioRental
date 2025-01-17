import { defineStore } from 'pinia';

export const useReservationsStore = defineStore('reservations', {
  state: () => ({
    reservations: [],
  }),
  actions: {
    addReservation(reservation) {
      this.reservations.push(reservation);
    },
  },
});