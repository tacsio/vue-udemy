<template>
  <section>
    <input type="text" placeholder="Your name" v-model="inputName" />
    <input type="number" placeholder="Your age" v-model="inputAge" />

    <button @click="update">Set user data</button>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      inputName: "",
      inputAge: "",
    };
  },
  methods: {
    update() {
      this.$emit("set-data", {
        name: this.inputName,
        age: this.inputAge,
      });
    },
  },
};
</script>
