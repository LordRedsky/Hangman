<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <fa class="icon" icon="fa-solid fa-quote-left" />
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

h1,
p {
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  color: #7e0101;
}

p {
    margin: 3px;
}

header .icon {
    height: 70px;
    color: #7e0101;
    color: #fed945;
}
</style>
