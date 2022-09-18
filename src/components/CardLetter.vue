<script>
export default {
  name: "CardLetter",
  props: ["data"],
};
</script>

<template>
  <!-- Set Card -->
  <div class="card-wrapper" id="card-wrapper">
    <div class="card">
      <span>{{ data.toUpperCase() }}</span>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background-color: #cccccc;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  align-items: center;
  color: #7e0101;

  font-family: "Acme", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

@media (min-width: 1024px) {
  .card-wrapper {
    width: 75px;
    height: 75px;
    border-radius: 30px;
  }

  .card {
    width: 65px;
    height: 65px;
    border-radius: 25px;

    font-size: 3rem;
    font-weight: 900;
  }
}
</style>
