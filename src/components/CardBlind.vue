<script>
export default {
  name: "CardBlind",
  props: ["data"],
};
</script>

<template>
  <div class="card-wrapper">
    <div class="card">
      <span>{{ data.toUpperCase() }}</span>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
.card-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 10px;
  background-color: #fed945;
  cursor: pointer;
  margin-bottom: 30px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fed945;
  width: 15px;
  height: 15px;
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
    width: 60px;
    height: 80px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  .card {
    width: 50px;
    height: 70px;
    border-radius: 15px;
    align-items: center;
    color: #0a2e50;

    font-size: 4rem;
    font-weight: 900;
  }
}
</style>
