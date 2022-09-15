<script>
import CardBlind from "./CardBlind.vue";
import { mapWritableState, mapActions } from "pinia";
import { useHangmanStore } from "../stores/hangman";
import CardLetter from "./CardLetter.vue";

export default {
  name: "KeyBoard",
  components: { CardBlind, CardLetter },
  data: () => {
    return {
      quiz: "Indonesia",
      data: [],
    };
  },
  computed: {
    ...mapWritableState(useHangmanStore, ["consonants", "vocals", "words"]),
  },
  methods: {
    // ...mapActions(useHangmanStore, [''])
    changeArray() {
      for (const char of this.quiz) {
        this.data.push(char);
      }
    },
  },

  created() {
    this.changeArray();
  },
};
</script>

<template>
  <div>
    <div class="blind">
      <div v-for="(char, i) of data" :key="i" class="blind__cards">
        <CardBlind :data="char" :length="quiz.length" />
      </div>
    </div>
    <article>
      <div class="letter">
        <div v-for="(vocal, i) of vocals" :key="i" class="letter__vocal">
          <CardLetter :data="vocal" />
        </div>
      </div>

      <div class="letter consonants">
        <div v-for="(consonant, i) of consonants" :key="i" class="letter__consonant">
          <CardLetter :data="consonant" />
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

.blind{
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
