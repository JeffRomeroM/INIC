// stores/dato.js
import { defineStore } from 'pinia'

export const useDatoStore = defineStore('dato', {
  state: () => ({
    gastosCompartido: 0
  }),
  actions: {
    setGastos(valor) {
      this.gastosCompartido = valor
    }
  }
})
