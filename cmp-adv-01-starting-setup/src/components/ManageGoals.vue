<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>

    <teleport to="body">
      <error-alert v-if="inputsIsInvalid">
        <h2>Invalid inputs</h2>
        <p>{{ error }}</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputsIsInvalid: false,
      error: "",
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputsIsInvalid = true;
        this.error = "Input must not be empty!";
      }
    },
    confirmError() {
      this.inputsIsInvalid = false;
    },
  },
};
</script>
