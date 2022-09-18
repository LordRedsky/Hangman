<script>
import KeyBoard from "../components/KeyBoard.vue";
import Swal from "sweetalert2/dist/sweetalert2";
import { mapWritableState } from "pinia";
import { useHangmanStore } from "../stores/hangman";

export default {
  name: "HomePage",
  components: { KeyBoard},
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
    <div class="table">
      <button @click.prevent="logoutButtonHandler">
        <fa class="power-off" icon="fa-solid fa-right-from-bracket" />
      </button>
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
  height: 90%;
  border-radius: 10px;
  background-color: white;
}

.table {
  margin: 80px auto;
  background: radial-gradient(#156f99, #0a2e50);
  width: 70%;
  height: 70vh;
  padding: 2em;
  border-radius: 40px;
}

button {
  margin-top: -10px;
  margin-left: -15px;
  margin-bottom: 10px;
  background-color: #fed945;
  padding: 0.5em;
  border-radius: 30%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

.power-off {
  color: #7e0101;
  height: 25px;
  border-radius: 30%;
}

@media (min-width: 1024px) {
  button {
    all: unset;
    position: absolute;
  }
  .table {
    height: 75vh;
  }

  .power-off {
    position: absolute;
    height: 55px;
    background-color: #fed945;
    padding: 0.5em;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
