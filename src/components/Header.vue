<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <img src="../assets/hangman.png" alt="" />
    <h1>HANGMAN</h1>
    <p>Find the hidden word - Enter a letter</p>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0px;
}

h1 {
    margin: 5px;
    font-family: Arial, Helvetica, sans-serif
}

p {
margin: 3px;
}

img {
  height: 50px;
}
</style>
