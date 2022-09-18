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
  <Header />
  <div class="wellcome-container input">
    <form @submit.prevent="loginButtonHandler" class="input">
      <input v-model="inputValue" type="text" placeholder="Input your user name" />
      <button>Mulai</button>
    </form>
  </div>
</template>

<style scoped>
.wellcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
