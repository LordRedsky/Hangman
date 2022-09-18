import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router'

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
      vocals: ['a', 'e', 'i', 'o', 'u'],
      consonants: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
      wrongCount: 0,
      successCount: 0,
      chosenWord: '',
      username: '',
      isHangmanShow: false,
      data: [],
      wrongCount: 0,
      correctWord: []
    }
  ),

  actions: {
    generateWord() {
      const index = Math.floor(Math.random() * this.words.length)
      this.chosenWord = this.words[index].name
      localStorage.setItem('chosenWord', this.chosenWord)
    },

    playAgain() {
      this.wrongCount = 0;
      this.correctWord = [];
      this.data = [];
      this.generateWord()
      const newWord = localStorage.getItem("chosenWord").split("");
      const newArr = newWord.map((el) => (el = ""));
      this.data = newArr;
    },


  }
})
