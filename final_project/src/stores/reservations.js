import { defineStore } from 'pinia';

export const useReservationsStore = defineStore('reservations', {
  state: () => ({
    reservations: JSON.parse(localStorage.getItem('reservations') || '[]'),
    acceptedReservations: JSON.parse(localStorage.getItem('acceptedReservations') || '[]'),
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
    acceptReservation(reservation) {
      this.removeReservation(reservation);
      this.acceptedReservations.push(reservation);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
      localStorage.setItem('acceptedReservations', JSON.stringify(this.acceptedReservations));
    },
  },
});