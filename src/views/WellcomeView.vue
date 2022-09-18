<script>
import { mapActions, mapWritableState } from "pinia";
import { useHangmanStore } from "../stores/hangman";
import Header from "../components/Header.vue";

export default {
  name: "WellcomePage",
  data: () => {
    return { inputValue: "" };
  },
  components: { Header },
  computed: {
    ...mapWritableState(useHangmanStore, ["username"]),
  },
  methods: {
    ...mapActions(useHangmanStore, ["generateWord"]),
    loginButtonHandler() {
      //   console.log(inputValue);
      localStorage.setItem("username", this.inputValue);
      this.generateWord();
      this.username = this.inputValue;
      this.inputValue = "";
      this.$router.push({ path: "/play" });
    },
  },
};
</script>

<template>
  <div class="wellcome-container">
    <div class="input">
      <Header />
      <form @submit.prevent="loginButtonHandler" class="input">
        <input v-model="inputValue" type="text" placeholder="Input your username" />
        <button>Play</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wellcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  height: 100vh;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: radial-gradient(#156f99, #0a2e50);
}

input {
  padding: 1rem;
  border-radius: 20px;
  color: red;
  border: 1px solid #7e0101;;

  font-size: 20px;
  text-align: center;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

input::placeholder {
  color: #7e0101;
  text-align: center;

  font-weight: 500;
}

button {
  padding: 0.8em;
  border-radius: 10px;
  border: none;
  background-color: #fed945;
  color: #7e0101;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);

  font-size: 20px;
  font-weight: 900;
}

/* @media (min-width: 1024px) {
  .wellcome-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    background-color: radial-gradient(#156f99, #0a2e50);
  }

  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  input {
    padding: 1rem;
    border-radius: 20px;
    color: red;

    font-size: 20px;
    text-align: center;
  }

  input::placeholder {
    color: red;
    text-align: center;
  }

  button {
    padding: 0.5em;
    border-radius: 10px;
    border: 1px solid salmon;

    font-size: 20px;
  }
} */
</style>
