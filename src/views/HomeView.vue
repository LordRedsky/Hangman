<script>
import KeyBoard from "../components/KeyBoard.vue";
import Header from "../components/Header.vue";

export default {
  name: "HomePage",
  components: { KeyBoard, Header },
};
</script>

<template>
  <main>
    <Header />
    <div class="table">
      <KeyBoard class="table-game" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* align-items: center; */
  /* background-color: red; */
}

.table {
  background-color: red;
  /* display: flex; */
  width: 70%;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 40px;
}

.table-game {
  /* background-color: red; */
}
</style>
