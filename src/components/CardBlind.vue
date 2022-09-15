<script>
export default {
  name: "CardBlind",
  props: ["data"]
};
</script>

<template>
  <!-- Set Card -->
  <!-- <article> -->
    <div class="card-wrapper">
      <div class="card">
        <span>{{data.toUpperCase()}}</span>
      </div>
    </div>
  <!-- </article> -->
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
.card-wrapper {
  /* margin-left: 200px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  /* padding: 20px; */
  border-radius: 10px;
  background-color: #fed945;
}
.card {
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  color: #7e0101;

  font-family: "Acme", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
}
</style>
