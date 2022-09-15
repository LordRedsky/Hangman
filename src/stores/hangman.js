import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHangmanStore = defineStore({
  id: 'HangmanStore',
  state: () => (
    {
      words: [
        {
          id: 1,
          name: 'airforesee'
        },
        {
          id: 2,
          name: 'indonesia'
        },
        {
          id: 3,
          name: 'jakarta'
        },
        {
          id: 4,
          name: 'credit'
        },
        {
          id: 5,
          name: 'scoring'
        },
      ],
      vocals: ['a','e','i','o','u'],
      consonants: ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    }
  ),

  actions: {

  }
})
