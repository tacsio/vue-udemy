const app = Vue.createApp({
  data() {
    return {
      userText: "",
      waitText: "",
      confirmedText: ""
    }
  },
  methods: {
    alertClick() {
      alert("Button is clicked!");
    },
    handleKeydown(event) {
      this.userText = event.target.value;
    },
    handleInput(event) {
      this.waitText = event.target.value;
    },
    confirm() {
      this.confirmedText = this.waitText;
    }
  }
});

app.mount("#assignment");