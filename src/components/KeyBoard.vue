<script>
import CardBlind from "./CardBlind.vue";
import { mapWritableState, mapActions } from "pinia";
import { useHangmanStore } from "../stores/hangman";
import CardLetter from "./CardLetter.vue";
import HangmanFigure from "./HangmanFigure.vue";

export default {
  name: "KeyBoard",
  components: { CardBlind, CardLetter, HangmanFigure },
  data: () => {
    return {
      data: [],
      correctWord: [],
      wrongWord: [],
      selectLetter: "",
    };
  },
  computed: {
    ...mapWritableState(useHangmanStore, ["consonants", "vocals", "words", "chosenWord"]),
  },
  methods: {
    changeArray() {
      this.data = [];
      const letter = this.chosenWord.split("");
      const check = letter.includes(this.selectLetter);

      if (check) {
        if (!this.correctWord.includes(this.selectLetter)) {
          this.correctWord.push(this.selectLetter);
          console.log(this.correctWord, "correct");
          this.selectLetter = "";
        }

        const newArr = [];

        letter.forEach((el) => {
          if (this.correctWord.includes(el)) {
            newArr.push(el);
          } else {
            newArr.push("");
          }
        });

        this.data = newArr;
      } else {
        this.wrongWord.push(this.selectLetter);
        this.selectLetter = "";
      }
    },

    checkTrueOrFalse(letter) {
      console.log(letter);
      this.selectLetter = letter;
      this.changeArray();
    },
  },

  created() {
    const letter = this.chosenWord.split("");
    console.log(letter);
    if (this.correctWord.length === 0) {
      const newArr = letter.map((el) => (el = ""));
      this.data = newArr;
    }
  },
};
</script>

<template>
  <div>
    <div class="blind">
      <div v-for="(char, i) of data" :key="i" class="blind__cards">
        <CardBlind :data="char" />
      </div>
    </div>
    <article>
      <div class="letter">
        <div v-for="(vocal, i) of vocals" :key="i" class="letter__vocal">
          <CardLetter @click="checkTrueOrFalse(vocal)" :data="vocal" />
        </div>
      </div>

      <HangmanFigure />

      <div class="letter consonants">
        <div v-for="(consonant, i) of consonants" :key="i" class="letter__consonant">
          <CardLetter @click="checkTrueOrFalse(consonant)" :data="consonant" />
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
}

.blind {
  /* position: absolute; */
  display: flex;
  justify-content: center;
  gap: 5px;
  /* align-items: flex-end; */
}
.letter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* flex */
}
.letter__vocal {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
}

.consonants {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 200px;
  gap: 10px;
}
</style>
