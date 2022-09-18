<script>
import KeyBoard from "../components/KeyBoard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Swal from "sweetalert2/dist/sweetalert2";
import { mapWritableState } from "pinia";
import { useHangmanStore } from "../stores/hangman";

export default {
  name: "HomePage",
  components: { KeyBoard, Header, Footer },
  computed: {
    ...mapWritableState(useHangmanStore, ["wrongCount"]),
  },
  methods: {
    logoutButtonHandler() {
      this.wrongCount = 0;
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
  },

  created() {
    const username = localStorage.getItem("username");
    Swal.fire({
      icon: "success",
      title: `Enjoy the game ${username}`,
      showConfirmButton: false,
      timer: 1500,
    });
  },
};
</script>

<template>
  <main>
    <Header />
    <div class="table">
      <button @click.prevent="logoutButtonHandler">
        <fa class="power-off" icon="fa-solid fa-right-from-bracket" />
      </button>
      <KeyBoard class="table-game" />
    </div>
    <!-- <Footer /> -->
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 1.5rem; */
  height: 90%;
  border-radius: 10px;

  /* align-items: center; */
  background-color: white;
}

.table {
  background-color: salmon;
  /* display: flex; */
  width: 70%;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 2em;
  border-radius: 40px;
}

.table-game {
  /* background-color: red; */
}



button {
  position: relative;
  padding: 10px;
  border-radius: 30%;
  border: none;
}

.power-off {
  position: relative;
  color: red;
  height: 30px;
}
</style>
