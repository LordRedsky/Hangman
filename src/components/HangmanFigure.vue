<script>
import { mapActions, mapWritableState } from "pinia";
import { useHangmanStore } from "../stores/hangman";

export default {
  name: "HangmanFigure",
  computed: {
    ...mapWritableState(useHangmanStore, ["isHangmanShow", "wrongCount"]),
  },

  methods: {
    showLine(input) {
      if (this.wrongCount >= input) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <svg height="250" width="200" class="figure-container">
      <!-- Gallows -->
      <line x1="60" y1="20" x2="170" y2="20" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      <!-- Rope -->
      <line v-if="showLine(1)" x1="150" y1="20" x2="150" y2="50" />

      <!-- Head -->
      <circle v-if="showLine(2)" cx="150" cy="70" r="20" />

      <!-- Body -->
      <line v-if="showLine(3)" x1="150" y1="90" x2="150" y2="150" />

      <!-- Arms -->
      <line v-if="showLine(4)" x1="150" y1="120" x2="130" y2="100" />
      <line v-if="showLine(4)" x1="150" y1="120" x2="170" y2="100" />

      <!-- Legs -->
      <line v-if="showLine(5)" x1="150" y1="150" x2="130" y2="180" />
      <line v-if="showLine(5)" x1="150" y1="150" x2="170" y2="180" />
    </svg>
  </div>
</template>

<style scoped>
.figure-container {
  fill: transparent;
  stroke: whitesmoke;
  stroke-width: 7px;
  stroke-linecap: round;
  border-radius: 20%;
  padding: 1em;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

@media (min-width: 1024px) {
  .figure-container {
    stroke-width: 10px;
    padding: 7em;
  }
}
</style>
