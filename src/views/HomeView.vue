<script>
import KeyBoard from "../components/KeyBoard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",
  components: { KeyBoard, Header, Footer },
};
</script>

<template>
  <main>
    <Header />
    <div class="table">
      <button>
        <fa class="power-off" icon="fa-solid fa-power-off" />
      </button>
      <KeyBoard class="table-game" />
    <Footer />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  /* align-items: center; */
  background-color: black;
}

.table {
  background-color: salmon;
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

button {
  position: relative;
  padding: 10px;
  border-radius: 50%;
  border: none;
  left: 0;
}

.power-off {
  color: red;
  height: 50px;
}
</style>
