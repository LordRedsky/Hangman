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
      // chosenWord: "Indonesia",
      data: [],
      correctWord: [],
      selectLetter: "",
    };
  },
  computed: {
    ...mapWritableState(useHangmanStore, ["consonants", "vocals", "words", "chosenWord"]),
  },
  methods: {
    changeArray() {
      const letter = this.chosenWord.split("");
      console.log(letter, "1");

      if (this.correctWord.length === 0) {
        letter.map((e) => {
          e = "";
        });

        console.log(letter, "2");
        this.data = letter;
      } else {
        const check = this.chosenWord.includes(this.selectLetter);
        console.log(check, "<<<<Check");
      }
    },

    checkTrueOrFalse(letter) {
      this.selectLetter = letter;
    },
  },

  created() {
    this.changeArray();
  },
};
</script>

<template>
  <div>
    <!-- <h2>{{ data }}</h2> -->
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
