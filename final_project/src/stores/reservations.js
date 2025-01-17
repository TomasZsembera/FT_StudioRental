import { defineStore } from 'pinia';

export const useReservationsStore = defineStore('reservations', {
  state: () => ({
    reservations: JSON.parse(localStorage.getItem('reservations') || '[]'),
  }),
  actions: {
    addReservation(reservation) {
      this.reservations.push(reservation);
      this.saveToLocalStorage();
    },
    removeReservation(reservation) {
      const index = this.reservations.indexOf(reservation);
      if (index > -1) {
        this.reservations.splice(index, 1);
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    },
  },
});