<script>
export default {
  name: "HangmanFigure",
};
</script>

<template>
  <div>
    <svg height="250" width="200" class="figure-container">
      <!-- Gallows -->
      <line x1="60" y1="20" x2="170" y2="20" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      <!-- Rope -->
      <line x1="150" y1="20" x2="150" y2="50" />

      <!-- Head -->
      <circle cx="150" cy="70" r="20" />

      <!-- Body -->
      <line x1="150" y1="90" x2="150" y2="150" />
      
      <!-- Arms -->
      <line x1="150" y1="120" x2="130" y2="100" />
      <line x1="150" y1="120" x2="170" y2="100" />
      
      <!-- Legs -->
      <line x1="150" y1="150" x2="130" y2="180" />
      <line x1="150" y1="150" x2="170" y2="180" />
    </svg>
  </div>
</template>

<style scoped>
.figure-container {
  fill: transparent;
  stroke: #fff;
  stroke-width: 5px;
  stroke-linecap: round;
}
</style>
