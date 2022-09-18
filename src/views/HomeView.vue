<script>
import KeyBoard from "../components/KeyBoard.vue";
import Swal from "sweetalert2/dist/sweetalert2";
import { mapActions, mapWritableState } from "pinia";
import { useHangmanStore } from "../stores/hangman";

export default {
  name: "HomePage",
  components: { KeyBoard },
  computed: {
    ...mapWritableState(useHangmanStore, ["wrongCount"]),
  },
  methods: {
    ...mapActions(useHangmanStore, ["playAgain"]),
    logoutButtonHandler() {
      const name = localStorage.getItem("username");
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          let timerInterval;
          Swal.fire({
            title: `See you ${name}`,
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
              this.wrongCount = 0;
              localStorage.clear();
              this.$router.push({ path: "/" });
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        }
      });
    },

    refreshButtonHandler() {
      this.playAgain();
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
      <div class="buttons">
        <button @click.prevent="logoutButtonHandler" class="button-power">
          <fa class="power-off" icon="fa-solid fa-right-from-bracket" />
        </button>

        <button @click.prevent="refreshButtonHandler" class="button-refresh">
          <fa class="refresh" icon="fa-solid fa-rotate-right" />
        </button>
      </div>

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
  /* height: 90%; */
  border-radius: 10px;

}

.table {
  margin: 50px auto;
  background: radial-gradient(#156f99, #0a2e50);
  width: 80%;
  height: 100%;
  padding: 2em;
  border-radius: 40px;
}

button {
  border: none;
  background-color: #fed945;
  padding: 0.5em;
  border-radius: 30%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

.buttons {
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.power-off {
  color: #7e0101;
  height: 20px;
  border-radius: 30%;
}

.refresh {
  color: #7e0101;
  border-radius: 30%;
  height: 20px;
  background-color: #fed945;
}

@media (min-width: 1024px) {
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }

  button {
    border: none;
    background-color: #fed945;
    padding: 0.5em;
    border-radius: 30%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  .table {
    height: 85vh;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .power-off,
  .refresh {
    height: 55px;
    padding: 0.5em;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
