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
      wrongWord: [],
      selectLetter: "",
      isPlayAgain: false,
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
      "data",
      "wrongCount",
      "correctWord",
    ]),
  },
  methods: {
    ...mapActions(useHangmanStore, ["generateWord", "playAgain"]),
    changeArray() {
      const letter = localStorage.getItem("chosenWord").split("");
      const username = localStorage.getItem("username");

      if (this.wrongCount !== 4) {
        const letter = localStorage.getItem("chosenWord").split("");
        const check = letter.includes(this.selectLetter);
        if (check) {
          if (!this.correctWord.includes(this.selectLetter)) {
            this.correctWord.push(this.selectLetter);
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
              title: `Congratulation ${username}!`,
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
          this.wrongWord.push(this.selectLetter);
          this.selectLetter = "";
          this.wrongCount++;
          this.isHangmanShow = true;
        }
      } else if (this.wrongCount === 4) {
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
            this.wrongCount = 0;
            this.correctWord = [];
            this.changeArray();
            const newArr = letter.map((el) => (el = ""));
            this.data = newArr;
          }
        });
      }
    },

    checkTrueOrFalse(input) {
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

    if (this.correctWord.length === 0) {
      const newArr = letter.map((el) => (el = ""));
      this.data = newArr;
    }
  },
};
</script>

<template>
  <div class="container">
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

      <HangmanFigure class="figure" />

      <div class="letter consonants">
        <CardLetter
          v-for="(consonant, i) of consonants"
          :key="i"
          @click="checkTrueOrFalse(consonant)"
          :data="consonant"
        />
      </div>
    </article>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

article {
  display: grid;
  box-sizing: border-box;
  grid-template-areas: "blindCard" "hangmanFigure" "vocal" "consonant";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.blind {
  grid-area: blindCard;
  display: flex;
  justify-content: center;
  gap: 3px;
  width: 300px;
}
.letter {
  grid-area: vocal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
}

.consonants {
  grid-area: consonant;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
}

.figure {
  grid-area: hangmanFigure;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 20px;
}

@media (min-width: 1024px) {
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .blind {
    margin-top: -50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .letter {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .consonants {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 600px;
    gap: 10px;
    margin-right: -25px;
  }

  .figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
}
</style>
