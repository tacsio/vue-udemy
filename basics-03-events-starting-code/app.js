const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: '',
    };
  },
  methods: {
    add(amount) {
      this.counter += amount;
    },
    reduce(amount) {
      this.counter -= amount;
    },
    setName(p, e) {
      this.name = `${p}. ${e.target.value}`;
    },
    submitForm() {
      alert("submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
