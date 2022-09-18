<script>
import CardBlind from "./CardBlind.vue";
import { mapWritableState, mapActions } from "pinia";
import { useHangmanStore } from "../stores/hangman";
import CardLetter from "./CardLetter.vue";
import HangmanFigure from "./HangmanFigure.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  name: "KeyBoard",
  components: { CardBlind, CardLetter, HangmanFigure },
  data: () => {
    return {
      data: [],
      correctWord: [],
      wrongWord: [],
      selectLetter: "",
      isPlayAgain: false,
      // count: 1,
    };
  },
  computed: {
    ...mapWritableState(useHangmanStore, [
      "consonants",
      "vocals",
      "words",
      "chosenWord",
      "wrongCount",
      "isHangmanShow",
    ]),
  },
  methods: {
    ...mapActions(useHangmanStore, ["generateWord"]),
    changeArray() {
      let count = 0;

      console.log(this.wrongCount);

      const letter = localStorage.getItem("chosenWord").split("");

      if (this.wrongCount !== 4) {
        const letter = localStorage.getItem("chosenWord").split("");
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
          this.data = [];
          this.data = newArr;

          if (this.data.join("") === letter.join("")) {
            Swal.fire({
              title: "Congratulation!",
              text: "You win this game",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Play Again",
            }).then((result) => {
              if (result.isConfirmed) {
                this.generateWord();
                this.playAgain();
              }
            });
          }
        } else {
          console.log("salah");
          this.wrongWord.push(this.selectLetter);
          this.selectLetter = "";
          this.wrongCount++;
          this.isHangmanShow = true;
        }
      } else if (this.wrongCount === 4) {
        console.log("kalaaahh");
        this.wrongCount++;
        Swal.fire({
          title: "You Lose",
          icon: "error",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Try again?",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("masuk");
            this.wrongCount = 0;
            this.correctWord = [];
            this.changeArray();
            const newArr = letter.map((el) => (el = ""));
            this.data = newArr;
          }
        });
      }
    },

    playAgain() {
      this.wrongCount = 0;
      this.correctWord = [];
      this.data = [];
      this.$router.push({ path: "/play" });
      const newWord = localStorage.getItem("chosenWord").split("");
      const newArr = newWord.map((el) => (el = ""));
      this.data = newArr;
    },

    checkTrueOrFalse(input) {
      console.log(input);
      this.selectLetter = input;
      this.changeArray();

      const letter = localStorage.getItem("chosenWord").split("");

      if (this.correctWord.length === 0) {
        const newArr = letter.map((el) => (el = ""));
        this.data = newArr;
      }
    },
  },

  created() {
    this.correctWord = [];
    const letter = localStorage.getItem("chosenWord").split("");
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
