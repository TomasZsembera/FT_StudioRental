import { defineStore } from 'pinia';

export const useReservationsStore = defineStore('reservations', {
  state: () => ({
    reservations: [],
  }),
  actions: {
    addReservation(reservation) {
      this.reservations.push(reservation);
    },

    removeReservation(reservation) {
      const index = this.reservations.indexOf(reservation);
      this.reservations.splice(index, 1);
    },
  },


});