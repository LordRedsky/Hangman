<script>
export default {
  name: "CardLetter",
  props: ["data"],
};
</script>

<template>
  <!-- Set Card -->
  <div class="card-wrapper">
    <div class="card">
      <span>{{data.toUpperCase()}}</span>
      <!-- <span >{{ data.toUpperCase() }}</span> -->
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
.card-wrapper {
  /* margin-left: 200px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  /* padding: 20px; */
  border-radius: 10px;
  background-color: #cccccc;
  cursor: pointer;
}
.card {
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  color: #7e0101;

  font-family: "Acme", sans-serif;
  font-size: 2rem;
  font-weight: 900;
}
</style>
