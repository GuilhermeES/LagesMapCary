import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('map', () => {
  const map = ref(0)
  return { start }
})
