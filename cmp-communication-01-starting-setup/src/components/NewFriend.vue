<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="">E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", {
        enteredName: this.enteredName,
        enteredPhone: this.enteredPhone,
        enteredEmail: this.enteredEmail,
      });
    },
  },
};
</script>
